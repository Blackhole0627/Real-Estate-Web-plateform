"use client";

import Image from "next/image";
import Link from "next/link";
import { listingCover, type Listing } from "@/data/listings";
import { getDict, langPrefix, pricePart, statusLabel, type Lang } from "@/lib/i18n";
import NewBadge from "./NewBadge";
import { useCarousel } from "./useCarousel";
import { ArrowLeft, ArrowRight } from "./icons";

interface Props {
  featured: Listing[];
  lang?: Lang;
}

export default function PropertySlider({ featured, lang = "es" }: Props) {
  const { next, prev, trackStyle } = useCarousel(featured.length);
  const t = getDict(lang);
  const p = langPrefix(lang);

  return (
    <section className="band" id="props">
      <div className="wrap">
        <div className="t-head reveal">
          <div>
            <span className="eyebrow">{t.propsEyebrow}</span>
            <h3 style={{ marginTop: 14 }}>{t.propsTitle}</h3>
          </div>
          <div className="arrows">
            <button className="arr" aria-label={t.prevAria} onClick={prev}>
              <ArrowLeft />
            </button>
            <button className="arr" aria-label={t.nextAria} onClick={next}>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="p-view reveal">
          <div className="p-track" style={trackStyle}>
            {featured.map((l) => (
              <Link
                className="p-card"
                href={`${p}/propiedades/${l.slug}`}
                key={l.slug}
              >
                <div className="p-ph">
                  <span className="p-st">{statusLabel(l.status, lang)}</span>
                  <NewBadge listedAt={l.listedAt} lang={lang} />
                  <Image
                    src={listingCover(l)}
                    alt={`${l.name}, ${l.location}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-price">
                  {l.pricePrefix ? `${pricePart(l.pricePrefix, lang)} ` : ""}
                  {l.price}
                  {l.priceSuffix ? (
                    <span className="mo"> {pricePart(l.priceSuffix, lang)}</span>
                  ) : null}
                </div>
                <div className="p-specs">{l.specs}</div>
                <div className="p-name">{l.name}</div>
                <div className="p-loc">{l.location}</div>
                <div className="p-foot">
                  <span className="p-more">{t.seeMore}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
