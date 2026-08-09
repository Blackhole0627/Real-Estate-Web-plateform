/**
 * Data-access layer — the single door to all content.
 *
 * Pages and layouts call these async functions and pass the results down to
 * components as props; no component imports a data file directly. Today the
 * functions read typed mock data (src/data/*) and text files (src/data/news);
 * at the database milestone (Supabase) only the bodies of these functions
 * change — every signature, page and component stays identical.
 *
 * Server-side only: the news source reads from the filesystem.
 */
import {
  listings,
  listingsByNewest,
  getListing,
  type Listing,
} from "@/data/listings";
import { testimonials, type Testimonial } from "@/data/content";
import { team, type TeamMember } from "@/data/team";
import {
  getArticles as readArticles,
  getArticle as readArticle,
  type Article,
} from "@/lib/news";

export async function getListings(): Promise<Listing[]> {
  return listings;
}

export async function getFeaturedListings(limit = 6): Promise<Listing[]> {
  return listingsByNewest().slice(0, limit);
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  return getListing(slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTeam(): Promise<TeamMember[]> {
  return team;
}

export async function getArticles(): Promise<Article[]> {
  return readArticles();
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return readArticle(slug) ?? null;
}
