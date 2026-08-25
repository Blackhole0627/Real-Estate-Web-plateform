"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { listingCover, type Listing } from "@/data/listings";
import type { PropertyStatus } from "@/data/properties";
import {
  getDict,
  langPrefix,
  pricePart,
  statusLabel,
  type Lang,
} from "@/lib/i18n";
import NewBadge from "./NewBadge";

/** Case- and accent-insensitive match ("cacícazgos" finds "Cacicazgos"). */
function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const FILTER_PARAM: Record<string, PropertyStatus> = {
  venta: "En venta",
  alquiler: "En alquiler",
  obra: "Obra nueva",
};

export default function ListingsIndex({
  listings,
  lang = "es",
}: {
  listings: Listing[];
  lang?: Lang;
}) {
  const searchParams = useSearchParams();
  const t = getDict(lang);
  const p = langPrefix(lang);
  const [filter, setFilter] = useState<PropertyStatus | "Todas">(
    FILTER_PARAM[searchParams.get("f") ?? ""] ?? "Todas",
  );
  const [q, setQ] = useState(searchParams.get("q") ?? "");

  const FILTERS: { key: PropertyStatus | "Todas"; label: string }[] = [
    { key: "Todas", label: t.filterAll },
    { key: "En venta", label: t.filterSale },
    { key: "En alquiler", label: t.filterRent },
    { key: "Obra nueva", label: t.filterNew },
  ];

  const needle = norm(q.trim());
  const shown = listings.filter((l) => {
    if (filter !== "Todas" && l.status !== filter) return false;
    if (!needle) return true;
    return norm(
      `${l.name} ${l.location} ${l.specs} ${l.status} ${l.body}`,
    ).includes(needle);
  });

  return (
    <div className="wrap">
      <div className="l-controls">
        <div className="l-filters" role="group" aria-label={t.filterAria}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`l-tab${filter === f.key ? " on" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          type="search"
          className="l-search"
          placeholder={t.searchPlaceholder}
          aria-label={t.searchAria}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <p className="l-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? t.property : t.properties}
        {q.trim() ? ` ${t.searchFor} “${q.trim()}”` : ""}
      </p>
      {shown.length > 0 ? (
        <div className="lgrid">
          {shown.map((l) => (
            <Link
              className="p-card reveal in"
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
      ) : (
        <div className="l-empty">
          <p>{t.emptyText}</p>
          <a
            className="btn solid"
            href={`https://wa.me/18493426066?text=${encodeURIComponent(
              lang === "en"
                ? `Hello Onker Home, I'm looking for: ${q.trim() || "a property"}. What options do you have?`
                : `Hola Onker Home, busco: ${q.trim() || "una propiedad"}. ¿Qué opciones tienen?`,
            )}`}
            target="_blank"
            rel="noopener"
          >
            {t.emptyCta}
          </a>
        </div>
      )}
    </div>
  );
}
