"use client";

import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import { useCarousel } from "./useCarousel";
import { ArrowLeft, ArrowRight } from "./icons";

export default function PropertySlider() {
  const { next, prev, trackStyle } = useCarousel(properties.length);

  return (
    <section className="band" id="props">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">Propiedades destacadas</span>
            <h3 style={{ marginTop: 14 }}>Residencias de excepción</h3>
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
        <div className="p-view reveal">
          <div className="p-track" style={trackStyle}>
            {properties.map((p) => (
              <Link className="p-card" href={`/propiedades/${p.slug}`} key={p.slug}>
                <div className="p-ph">
                  <span className="p-st">{p.status}</span>
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.location}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-price">
                  {p.pricePrefix ? `${p.pricePrefix} ` : ""}
                  {p.price}
                  {p.priceSuffix ? (
                    <span className="mo"> {p.priceSuffix}</span>
                  ) : null}
                </div>
                <div className="p-specs">{p.specs}</div>
                <div className="p-name">{p.name}</div>
                <div className="p-loc">{p.location}</div>
                <div className="p-foot">
                  <span className="p-more">Ver más</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
