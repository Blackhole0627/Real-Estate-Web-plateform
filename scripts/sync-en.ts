/**
 * Syncs the file-based English translations into the database columns
 * (listings.name_en/specs_en/body_en, articles.title_en/body_en).
 * Idempotent — safe to re-run.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/sync-en.ts
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { listingsEn } from "../src/data/listings-en";
import { NEWS_EN } from "../src/data/news-en";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}
const db = createClient(url, key);

(async () => {
  for (const [slug, en] of Object.entries(listingsEn)) {
    const { error, count } = await db
      .from("listings")
      .update(
        {
          name_en: en.name ?? null,
          specs_en: en.specs ?? null,
          body_en: en.body ?? null,
        },
        { count: "exact" },
      )
      .eq("slug", slug);
    if (error) throw new Error(`${slug}: ${error.message}`);
    console.log(`${count ? "+" : "?"} listing ${slug}`);
  }

  for (const n of NEWS_EN) {
    const file = path.join(process.cwd(), "src", "data", "news-en", `${n.slug}.txt`);
    if (!fs.existsSync(file)) continue;
    const lines = fs
      .readFileSync(file, "utf8")
      .split(/\r?\n/)
      .map((l) => l.trim());
    const nonEmpty = lines.filter(Boolean);
    const title_en = nonEmpty[0];
    // body_en = everything after the title line, preserving blank-line breaks
    const titleIdx = lines.findIndex((l) => l === title_en);
    const body_en = lines
      .slice(titleIdx + 1)
      .join("\n")
      .trim();
    const { error, count } = await db
      .from("articles")
      .update({ title_en, body_en }, { count: "exact" })
      .eq("slug", n.slug);
    if (error) throw new Error(`${n.slug}: ${error.message}`);
    console.log(`${count ? "+" : "?"} article ${n.slug}`);
  }
  console.log("EN sync complete.");
})();
