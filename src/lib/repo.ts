/**
 * Data-access layer — the single door to all content.
 *
 * Dual mode: when the Supabase env vars are present, everything reads from
 * the database (the admin panel's source of truth). Without them, the typed
 * mock data in src/data/* serves identical content — so the site runs the
 * same on any machine and the database can be adopted without a big-bang
 * cutover. Pages pass results down as props; no component imports data
 * files directly.
 *
 * Server-side only: the file fallback reads from the filesystem.
 */
import {
  listings as fileListings,
  listingsByNewest as fileListingsByNewest,
  getListing as getFileListing,
  type Listing,
} from "@/data/listings";
import { testimonials, type Testimonial } from "@/data/content";
import { team, type TeamMember } from "@/data/team";
import {
  getArticles as readFileArticles,
  getArticle as readFileArticle,
  blocksFromText,
  ledeFromText,
  type Article,
} from "@/lib/news";
import { getDb, type ArticleRow, type ListingRow } from "@/lib/db";
import { listingsEn } from "@/data/listings-en";
import { NEWS_EN, readArticleEn } from "@/data/news-en";
import type { Lang } from "@/lib/i18n";

/** Applies the English overlay to a file-based listing (graceful fallback). */
function withEn(l: Listing): Listing {
  const en = listingsEn[l.slug];
  if (!en) return l;
  return {
    ...l,
    name: en.name ?? l.name,
    specs: en.specs ?? l.specs,
    body: en.body ?? l.body,
  };
}

function rowToListing(r: ListingRow, lang: Lang = "es"): Listing {
  return {
    slug: r.slug,
    name: (lang === "en" && r.name_en) || r.name,
    status: r.status as Listing["status"],
    price: r.price,
    pricePrefix: r.price_prefix ?? undefined,
    priceSuffix: r.price_suffix ?? undefined,
    specs: (lang === "en" && r.specs_en) || r.specs,
    location: r.location,
    body: (lang === "en" && r.body_en) || r.body,
    photos: r.photos.length,
    photoUrls: r.photos,
    cover: r.cover ?? undefined,
    listedAt: r.listed_at ?? undefined,
  };
}

function rowToArticle(r: ArticleRow, lang: Lang = "es"): Article {
  const body = (lang === "en" && r.body_en) || r.body;
  // The body's first paragraph is the lede; the page renders it separately,
  // so the blocks start after it.
  const lines = body.split(/\r?\n/);
  const ledeIdx = lines.findIndex((l) => l.trim());
  return {
    slug: r.slug,
    category: r.category,
    title: (lang === "en" && r.title_en) || r.title,
    lede: ledeFromText(body),
    image: r.image ?? "",
    blocks: blocksFromText(lines.slice(ledeIdx + 1).join("\n")),
  };
}

export async function getListings(lang: Lang = "es"): Promise<Listing[]> {
  const db = getDb();
  if (!db) return lang === "en" ? fileListings.map(withEn) : fileListings;
  const { data, error } = await db
    .from("listings")
    .select("*")
    .order("sort", { ascending: true });
  if (error) throw new Error(`listings query failed: ${error.message}`);
  return (data as ListingRow[]).map((r) => rowToListing(r, lang));
}

export async function getFeaturedListings(
  limit = 6,
  lang: Lang = "es",
): Promise<Listing[]> {
  const db = getDb();
  if (!db) {
    const base = fileListingsByNewest().slice(0, limit);
    return lang === "en" ? base.map(withEn) : base;
  }
  const all = await getListings(lang);
  return all
    .map((l, i) => ({ l, i }))
    .sort((a, b) => {
      const da = a.l.listedAt ? +new Date(a.l.listedAt) : -1;
      const db_ = b.l.listedAt ? +new Date(b.l.listedAt) : -1;
      return db_ - da || a.i - b.i;
    })
    .map((x) => x.l)
    .slice(0, limit);
}

export async function getListingBySlug(
  slug: string,
  lang: Lang = "es",
): Promise<Listing | null> {
  const db = getDb();
  if (!db) {
    const l = getFileListing(slug) ?? null;
    return l && lang === "en" ? withEn(l) : l;
  }
  const { data, error } = await db
    .from("listings")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`listing query failed: ${error.message}`);
  return data ? rowToListing(data as ListingRow, lang) : null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTeam(): Promise<TeamMember[]> {
  return team;
}

export async function getArticles(lang: Lang = "es"): Promise<Article[]> {
  const db = getDb();
  if (!db) {
    if (lang === "en")
      return NEWS_EN.map((n) => readArticleEn(n.slug, n.category)).filter(
        (a): a is Article => a !== null,
      );
    return readFileArticles();
  }
  let q = db
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false })
    .order("created_at", { ascending: false });
  // The English site only lists articles that have an English version.
  if (lang === "en") q = q.not("body_en", "is", null);
  const { data, error } = await q;
  if (error) throw new Error(`articles query failed: ${error.message}`);
  return (data as ArticleRow[]).map((r) => rowToArticle(r, lang));
}

export async function getArticleBySlug(
  slug: string,
  lang: Lang = "es",
): Promise<Article | null> {
  const db = getDb();
  if (!db) {
    if (lang === "en") {
      const meta = NEWS_EN.find((n) => n.slug === slug);
      return meta ? readArticleEn(meta.slug, meta.category) : null;
    }
    return readFileArticle(slug) ?? null;
  }
  const { data, error } = await db
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`article query failed: ${error.message}`);
  if (!data) return null;
  if (lang === "en" && !(data as ArticleRow).body_en) return null;
  return rowToArticle(data as ArticleRow, lang);
}
