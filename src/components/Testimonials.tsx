"use client";

import { useState } from "react";
import Link from "next/link";
import { testimonials } from "@/data/content";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const next = () => setI((v) => (v + 1) % n);
  const prev = () => setI((v) => (v - 1 + n) % n);

  return (
    <section className="band testi" id="testi">
      <div className="wrap">
        <div className="t2-head reveal">
          <span className="eyebrow">Testimonios</span>
          <h3>Lo que dicen nuestros clientes</h3>
        </div>

        <div className="t2-stage reveal" aria-live="polite">
          {testimonials.map((t, k) => {
            const off = (((k - i) % n) + n) % n;
            const pos =
              off === 0
                ? "center"
                : off === 1
                  ? "right"
                  : off === n - 1
                    ? "left"
                    : "off";
            return (
              <article
                className={`t2-card ${pos}`}
                key={t.name}
                aria-hidden={pos !== "center"}
              >
                <span className="t2-av">{t.initials}</span>
                <div className="t2-name">{t.name}</div>
                <div className="t2-tag">{t.tag}</div>
                <p className="t2-quote">&ldquo;{t.quote}&rdquo;</p>
              </article>
            );
          })}
        </div>
        <div className="t2-arrows">
          <button className="arr" aria-label="Anterior" onClick={prev}>
            <ArrowLeft />
          </button>
          <button className="arr" aria-label="Siguiente" onClick={next}>
            <ArrowRight />
          </button>
        </div>
        <div className="t2-all">
          <Link className="btn solid" href="/testimonios">
            Ver todos los testimonios
          </Link>
        </div>
      </div>
    </section>
  );
}
