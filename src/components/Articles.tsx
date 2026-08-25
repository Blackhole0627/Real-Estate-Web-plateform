import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/news";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";

export default function Articles({
  articles,
  lang = "es",
}: {
  articles: Article[];
  lang?: Lang;
}) {
  const t = getDict(lang);
  const p = langPrefix(lang);
  const latest = articles.slice(0, 3);
  return (
    <section className="band" id="blog">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">{t.artEyebrow}</span>
            <h3 style={{ marginTop: 14 }}>{t.artTitle}</h3>
          </div>
          <Link className="p-more" href={`${p}/actualidad`}>
            {t.artAll}
          </Link>
        </div>
        <div className="art-grid">
          {latest.map((a) => (
            <Link
              className="a-card reveal"
              href={`${p}/actualidad/${a.slug}`}
              key={a.slug}
            >
              <div className="a-ph">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="a-tag">{a.category}</div>
              <div className="a-title">{a.title}</div>
              <p className="a-ex">{a.lede}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
