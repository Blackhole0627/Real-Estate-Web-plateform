"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { listings, listingCover, type Listing } from "@/data/listings";
import type { PropertyStatus } from "@/data/properties";

const FILTERS: { key: PropertyStatus | "Todas"; label: string }[] = [
  { key: "Todas", label: "Todas" },
  { key: "En venta", label: "En venta" },
  { key: "En alquiler", label: "En alquiler" },
  { key: "Obra nueva", label: "Obra nueva" },
];

/** Case- and accent-insensitive match ("cacícazgos" finds "Cacicazgos"). */
function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function Card({ l }: { l: Listing }) {
  return (
    <Link className="p-card reveal in" href={`/propiedades/${l.slug}`}>
      <div className="p-ph">
        <span className="p-st">{l.status}</span>
        <Image
          src={listingCover(l)}
          alt={`${l.name}, ${l.location}`}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-price">
        {l.pricePrefix ? `${l.pricePrefix} ` : ""}
        {l.price}
        {l.priceSuffix ? <span className="mo"> {l.priceSuffix}</span> : null}
      </div>
      <div className="p-specs">{l.specs}</div>
      <div className="p-name">{l.name}</div>
      <div className="p-loc">{l.location}</div>
      <div className="p-foot">
        <span className="p-more">Ver más</span>
      </div>
    </Link>
  );
}

export default function ListingsIndex() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<PropertyStatus | "Todas">("Todas");
  const [q, setQ] = useState(searchParams.get("q") ?? "");

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
        <div className="l-filters" role="group" aria-label="Filtrar propiedades">
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
          placeholder="Busca por ciudad, sector o propiedad"
          aria-label="Buscar propiedades"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <p className="l-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? "propiedad" : "propiedades"}
        {q.trim() ? ` para “${q.trim()}”` : ""}
      </p>
      {shown.length > 0 ? (
        <div className="lgrid">
          {shown.map((l) => (
            <Card l={l} key={l.slug} />
          ))}
        </div>
      ) : (
        <div className="l-empty">
          <p>
            No encontramos propiedades para esa búsqueda. Cuéntanos qué buscas y
            un asesor te enviará opciones a tu medida.
          </p>
          <a
            className="btn solid"
            href={`https://wa.me/18493426066?text=${encodeURIComponent(
              `Hola Onker Home, busco: ${q.trim() || "una propiedad"}. ¿Qué opciones tienen?`,
            )}`}
            target="_blank"
            rel="noopener"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
