import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/news";

export default function Articles() {
  const latest = getArticles().slice(0, 3);
  return (
    <section className="band" id="blog">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">Actualidad</span>
            <h3 style={{ marginTop: 14 }}>Últimos artículos</h3>
          </div>
          <Link className="p-more" href="/actualidad">
            Ver todos
          </Link>
        </div>
        <div className="art-grid">
          {latest.map((a) => (
            <Link
              className="a-card reveal"
              href={`/actualidad/${a.slug}`}
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
