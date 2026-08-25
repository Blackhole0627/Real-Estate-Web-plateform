/**
 * One-off content migration: file-based mock data -> Supabase.
 *
 * Uploads every listing/article photo to Storage and inserts the rows.
 * Idempotent per slug (skips listings/articles that already exist), so it
 * can be re-run safely if it is interrupted.
 *
 * Usage (service key never leaves the shell session):
 *   SUPABASE_URL=https://xxxx.supabase.co \
 *   SUPABASE_SERVICE_ROLE_KEY=... \
 *   npx tsx scripts/migrate-content.ts
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { listings, listingPhotos, listingCover } from "../src/data/listings";
import { getArticles } from "../src/lib/news";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}
const db = createClient(url, key);
const PUB = path.join(process.cwd(), "public");

async function uploadPublicFile(
  bucket: string,
  storagePath: string,
  localPublicPath: string,
): Promise<string> {
  const file = fs.readFileSync(path.join(PUB, localPublicPath));
  const { error } = await db.storage
    .from(bucket)
    .upload(storagePath, file, { contentType: "image/jpeg", upsert: true });
  if (error) throw new Error(`upload ${storagePath}: ${error.message}`);
  return db.storage.from(bucket).getPublicUrl(storagePath).data.publicUrl;
}

async function migrateListings() {
  for (let i = 0; i < listings.length; i++) {
    const l = listings[i];
    const { data: existing } = await db
      .from("listings")
      .select("slug")
      .eq("slug", l.slug)
      .maybeSingle();
    if (existing) {
      console.log(`= listing ${l.slug} (exists, skipped)`);
      continue;
    }

    const photoUrls: string[] = [];
    for (const [n, local] of listingPhotos(l).entries()) {
      photoUrls.push(
        await uploadPublicFile("listings", `${l.slug}/${n + 1}.jpg`, local),
      );
    }
    // A curated cover that is not photo #1 gets uploaded under its own name.
    const localCover = listingCover(l);
    let cover: string | null = null;
    if (l.cover) {
      cover = await uploadPublicFile(
        "listings",
        `${l.slug}/cover.jpg`,
        localCover,
      );
    }

    const { error } = await db.from("listings").insert({
      slug: l.slug,
      name: l.name,
      status: l.status,
      price: l.price,
      price_prefix: l.pricePrefix ?? null,
      price_suffix: l.priceSuffix ?? null,
      specs: l.specs,
      location: l.location,
      body: l.body,
      photos: photoUrls,
      cover,
      listed_at: l.listedAt ?? null,
      sort: (i + 1) * 10,
    });
    if (error) throw new Error(`insert ${l.slug}: ${error.message}`);
    console.log(`+ listing ${l.slug} (${photoUrls.length} photos)`);
  }
}

async function migrateArticles() {
  const articles = getArticles();
  for (const [idx, a] of articles.entries()) {
    const { data: existing } = await db
      .from("articles")
      .select("slug")
      .eq("slug", a.slug)
      .maybeSingle();
    if (existing) {
      console.log(`= article ${a.slug} (exists, skipped)`);
      continue;
    }

    const image = await uploadPublicFile("news", `${a.slug}.jpg`, a.image);
    const body = [
      a.lede,
      "",
      ...a.blocks.map((b) =>
        b.type === "h" ? `\n${b.text}\n` : b.type === "li" ? `* ${b.text}` : b.text,
      ),
    ].join("\n");

    // Registry order becomes descending publish dates so the newest-first
    // sort in the database matches today's site exactly.
    const publishedAt = new Date(Date.now() - idx * 86_400_000)
      .toISOString()
      .slice(0, 10);
    const { error } = await db.from("articles").insert({
      slug: a.slug,
      title: a.title,
      category: a.category,
      body,
      image,
      published_at: publishedAt,
    });
    if (error) throw new Error(`insert ${a.slug}: ${error.message}`);
    console.log(`+ article ${a.slug}`);
  }
}

(async () => {
  await migrateListings();
  await migrateArticles();
  console.log("Migration complete.");
})();
