import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for public reads (anon key, RLS-guarded).
 * Returns null while the env vars are absent — the repo layer then serves
 * the file-based mock data, so the site runs identically with or without
 * a database behind it.
 */
let client: SupabaseClient | null | undefined;

export function getDb(): SupabaseClient | null {
  if (client !== undefined) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  client = url && key ? createClient(url, key) : null;
  return client;
}

export interface ListingRow {
  slug: string;
  name: string;
  status: string;
  price: string;
  price_prefix: string | null;
  price_suffix: string | null;
  specs: string;
  location: string;
  body: string;
  name_en: string | null;
  specs_en: string | null;
  body_en: string | null;
  photos: string[];
  cover: string | null;
  listed_at: string | null;
  sort: number;
}

export interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  body: string;
  title_en: string | null;
  body_en: string | null;
  image: string | null;
  published_at: string;
}
