"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/data/content";
import { ArrowLeft, ArrowRight } from "./icons";

const PAGE_SIZE = 6;

export default function TestimonialsList() {
  const [page, setPage] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);
  const pages = Math.ceil(testimonials.length / PAGE_SIZE);
  const shown = testimonials.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const go = (p: number) => {
    setPage(Math.min(pages - 1, Math.max(0, p)));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="wrap" ref={topRef} style={{ scrollMarginTop: 100 }}>
      {shown.map((t) => (
        <article className="tst-item" key={t.name}>
          <div className="tst-mark" aria-hidden="true">
            &ldquo;
          </div>
          <p className="tst-quote">{t.quote}</p>
          <h3 className="tst-name">{t.name}</h3>
          <div className="tst-tag">{t.tag}</div>
        </article>
      ))}
      <nav className="tst-pag" aria-label="Páginas de testimonios">
        <button
          className="arr"
          aria-label="Página anterior"
          onClick={() => go(page - 1)}
          disabled={page === 0}
        >
          <ArrowLeft />
        </button>
        {Array.from({ length: pages }, (_, p) => (
          <button
            key={p}
            className={`tst-pg${p === page ? " on" : ""}`}
            aria-label={`Página ${p + 1}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => go(p)}
          >
            {p + 1}
          </button>
        ))}
        <button
          className="arr"
          aria-label="Página siguiente"
          onClick={() => go(page + 1)}
          disabled={page === pages - 1}
        >
          <ArrowRight />
        </button>
      </nav>
    </div>
  );
}
