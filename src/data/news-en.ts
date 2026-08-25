import fs from "fs";
import path from "path";
import { blocksFromText, type Article } from "@/lib/news";

/**
 * English articles (file mode). Only articles with a translation in
 * src/data/news-en/<slug>.txt appear on the English site; the slugs and
 * cover images are shared with the Spanish originals. Newest first.
 */
export const NEWS_EN: { slug: string; category: string }[] = [
  {
    slug: "marriott-executive-apartments-santo-domingo",
    category: "Market",
  },
  { slug: "alba-bay-montecristi-ciudad-bienestar", category: "Market" },
  {
    slug: "record-turistico-republica-dominicana-inversion",
    category: "Market",
  },
  { slug: "cabo-rojo-pedernales-polo-turistico", category: "Market" },
  {
    slug: "seguridad-juridica-republica-dominicana",
    category: "Legal",
  },
  {
    slug: "impuestos-inmobiliarios-republica-dominicana",
    category: "Legal",
  },
];

export function readArticleEn(slug: string, category: string): Article | null {
  const file = path.join(process.cwd(), "src", "data", "news-en", `${slug}.txt`);
  if (!fs.existsSync(file)) return null;
  const lines = fs
    .readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  return {
    slug,
    category,
    title: lines[0],
    lede: lines[1] ?? "",
    image: `/assets/news/${slug}.jpg`,
    blocks: blocksFromText(lines.slice(2).join("\n")),
  };
}
