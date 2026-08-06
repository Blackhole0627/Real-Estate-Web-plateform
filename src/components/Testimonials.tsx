"use client";

import { testimonials } from "@/data/content";
import { useCarousel } from "./useCarousel";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Testimonials() {
  const { next, prev, trackStyle } = useCarousel(testimonials.length);

  return (
    <section className="band testi" id="testi">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">Testimonios</span>
            <h3 style={{ marginTop: 14 }}>Lo que dicen nuestros clientes</h3>
          </div>
          <div className="arrows">
            <button className="arr" aria-label="Anterior" onClick={prev}>
              <ArrowLeft />
            </button>
            <button className="arr" aria-label="Siguiente" onClick={next}>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="t-view reveal">
          <div className="t-track" style={trackStyle}>
            {testimonials.map((t) => (
              <div className="t-card" key={t.name}>
                <div className="t-inner">
                  <p className="t-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="t-who">
                    <span className="t-av">{t.initials}</span>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-tag">{t.tag}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
