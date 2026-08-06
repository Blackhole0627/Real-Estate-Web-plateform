import Image from "next/image";
import { articles } from "@/data/content";

export default function Articles() {
  return (
    <section className="band" id="blog">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">Actualidad</span>
            <h3 style={{ marginTop: 14 }}>Últimos artículos</h3>
          </div>
          <a className="p-more" href="#blog">
            Ver todos
          </a>
        </div>
        <div className="art-grid">
          {articles.map((a) => (
            <a className="a-card reveal" href="#blog" key={a.title}>
              <div className="a-ph">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="a-tag">{a.tag}</div>
              <div className="a-title">{a.title}</div>
              <p className="a-ex">{a.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
