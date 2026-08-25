"use client";

import { useState } from "react";
import Link from "next/link";
import type { Testimonial } from "@/data/content";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Testimonials({
  items,
  lang = "es",
}: {
  items: Testimonial[];
  lang?: Lang;
}) {
  const [i, setI] = useState(0);
  const n = items.length;
  const next = () => setI((v) => (v + 1) % n);
  const prev = () => setI((v) => (v - 1 + n) % n);
  const t = getDict(lang);

  return (
    <section className="band testi" id="testi">
      <div className="wrap">
        <div className="t2-head reveal">
          <span className="eyebrow">{t.testiEyebrow}</span>
          <h3>{t.testiTitle}</h3>
        </div>

        <div className="t2-stage reveal" aria-live="polite">
          {items.map((t, k) => {
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
          <button className="arr" aria-label={t.prevAria} onClick={prev}>
            <ArrowLeft />
          </button>
          <button className="arr" aria-label={t.nextAria} onClick={next}>
            <ArrowRight />
          </button>
        </div>
        <div className="t2-all">
          <Link className="btn solid" href={`${langPrefix(lang)}/testimonios`}>
            {t.testiAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
