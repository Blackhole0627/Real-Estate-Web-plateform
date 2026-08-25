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

function rowToListing(r: ListingRow): Listing {
  return {
    slug: r.slug,
    name: r.name,
    status: r.status as Listing["status"],
    price: r.price,
    pricePrefix: r.price_prefix ?? undefined,
    priceSuffix: r.price_suffix ?? undefined,
    specs: r.specs,
    location: r.location,
    body: r.body,
    photos: r.photos.length,
    photoUrls: r.photos,
    cover: r.cover ?? undefined,
    listedAt: r.listed_at ?? undefined,
  };
}

function rowToArticle(r: ArticleRow): Article {
  // The body's first paragraph is the lede; the page renders it separately,
  // so the blocks start after it.
  const lines = r.body.split(/\r?\n/);
  const ledeIdx = lines.findIndex((l) => l.trim());
  return {
    slug: r.slug,
    category: r.category,
    title: r.title,
    lede: ledeFromText(r.body),
    image: r.image ?? "",
    blocks: blocksFromText(lines.slice(ledeIdx + 1).join("\n")),
  };
}

export async function getListings(): Promise<Listing[]> {
  const db = getDb();
  if (!db) return fileListings;
  const { data, error } = await db
    .from("listings")
    .select("*")
    .order("sort", { ascending: true });
  if (error) throw new Error(`listings query failed: ${error.message}`);
  return (data as ListingRow[]).map(rowToListing);
}

export async function getFeaturedListings(limit = 6): Promise<Listing[]> {
  const db = getDb();
  if (!db) return fileListingsByNewest().slice(0, limit);
  const all = await getListings();
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

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const db = getDb();
  if (!db) return getFileListing(slug) ?? null;
  const { data, error } = await db
    .from("listings")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`listing query failed: ${error.message}`);
  return data ? rowToListing(data as ListingRow) : null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTeam(): Promise<TeamMember[]> {
  return team;
}

export async function getArticles(): Promise<Article[]> {
  const db = getDb();
  if (!db) return readFileArticles();
  const { data, error } = await db
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) throw new Error(`articles query failed: ${error.message}`);
  return (data as ArticleRow[]).map(rowToArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const db = getDb();
  if (!db) return readFileArticle(slug) ?? null;
  const { data, error } = await db
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw new Error(`article query failed: ${error.message}`);
  return data ? rowToArticle(data as ArticleRow) : null;
}
