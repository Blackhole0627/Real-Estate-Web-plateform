import fs from "fs";
import path from "path";

/**
 * Blog articles live as plain .txt files in src/data/news/<slug>.txt
 * (first line = title, second paragraph = lede) with the cover image at
 * public/assets/news/<slug>.jpg. To publish a new article: drop both
 * files in and add one entry here (newest first).
 */
export const NEWS: { slug: string; category: string }[] = [
  {
    slug: "record-turistico-republica-dominicana-inversion",
    category: "Mercado",
  },
  { slug: "coworking-republica-dominicana-oficinas", category: "Mercado" },
  { slug: "pagos-instantaneos-247-republica-dominicana", category: "Finanzas" },
  { slug: "seguridad-juridica-republica-dominicana", category: "Legal" },
  { slug: "inflacion-republica-dominicana-julio-2026", category: "Economía" },
  { slug: "inteligencia-artificial-motor-productividad", category: "Economía" },
  {
    slug: "impuestos-inmobiliarios-republica-dominicana",
    category: "Legal",
  },
  {
    slug: "como-vender-una-propiedad-en-republica-dominicana",
    category: "Guías",
  },
  { slug: "catalina-sugar-beach-la-romana", category: "Inversión" },
  { slug: "cuenta-de-ahorro-vs-cuenta-corriente", category: "Finanzas" },
  { slug: "tesla-solar-roof-republica-dominicana", category: "Tendencias" },
  { slug: "bienes-raices-nuevas-fuentes-de-capital", category: "Mercado" },
];

export interface ArticleBlock {
  type: "h" | "p" | "li";
  text: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  /** First paragraph — used as excerpt and meta description. */
  lede: string;
  image: string;
  blocks: ArticleBlock[];
}

/** A line reads as a section heading when it is short and has no closing punctuation. */
function isHeading(line: string): boolean {
  if (line.length > 110) return false;
  if (/[.;:,”"»)\]…]$/.test(line)) return false;
  if (line.endsWith("?")) return line.length <= 90 && !line.startsWith("“");
  return true;
}

function parse(slug: string, category: string): Article {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "src", "data", "news", `${slug}.txt`),
    "utf8",
  );
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const title = lines[0];
  const lede = lines[1] ?? "";
  const blocks: ArticleBlock[] = [];
  for (const line of lines.slice(2)) {
    if (/^[*✓•-]\s+/.test(line)) {
      blocks.push({ type: "li", text: line.replace(/^[*✓•-]\s+/, "") });
    } else if (isHeading(line)) {
      blocks.push({ type: "h", text: line });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return {
    slug,
    category,
    title,
    lede,
    image: `/assets/news/${slug}.jpg`,
    blocks,
  };
}

export function getArticles(): Article[] {
  return NEWS.map((n) => parse(n.slug, n.category));
}

export function getArticle(slug: string): Article | undefined {
  const meta = NEWS.find((n) => n.slug === slug);
  return meta ? parse(meta.slug, meta.category) : undefined;
}
