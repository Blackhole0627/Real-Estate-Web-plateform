import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Onker Home: qué información recopilamos, cómo la utilizamos, con quién puede compartirse y qué derechos pueden ejercer sus titulares.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

interface Block {
  type: "h" | "p" | "li";
  text: string;
}

/**
 * The policy is the client's legal text, kept verbatim in
 * src/data/legal/politica-de-privacidad.txt. A line reads as a heading when
 * it is short, has no closing punctuation, and contains no "label: value"
 * colon (which marks contact lines).
 */
function parsePolicy(): { title: string; tagline: string; date: string; blocks: Block[] } {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "src", "data", "legal", "politica-de-privacidad.txt"),
    "utf8",
  );
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const [title, tagline, date] = lines;
  const blocks: Block[] = [];
  for (const line of lines.slice(3)) {
    if (/^[*•-]\s+/.test(line)) {
      blocks.push({ type: "li", text: line.replace(/^[*•-]\s+/, "") });
    } else if (
      line.length <= 90 &&
      !/[.;,:!”"»)\]…]$/.test(line) &&
      !line.includes(": ")
    ) {
      blocks.push({ type: "h", text: line });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return { title, tagline, date, blocks };
}

export default function PoliticaPrivacidadPage() {
  const policy = parsePolicy();
  return (
    <>
      <Header solid />
      <main id="top" className="page">
        <section className="art-head">
          <div className="wrap">
            <span className="eyebrow">Legal</span>
            <h1 className="art-title">{policy.title}</h1>
            <p className="art-lede">{policy.tagline}</p>
            <p className="legal-date">{policy.date}</p>
          </div>
        </section>
        <div className="wrap">
          <div className="art-body legal-body">
            {policy.blocks.map((b, i) =>
              b.type === "h" ? (
                <h2 key={i}>{b.text}</h2>
              ) : b.type === "li" ? (
                <p className="art-li" key={i}>
                  · {b.text}
                </p>
              ) : (
                <p key={i}>{b.text}</p>
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
