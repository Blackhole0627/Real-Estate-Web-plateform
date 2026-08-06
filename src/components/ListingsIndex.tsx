"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { listings, listingCover, type Listing } from "@/data/listings";
import type { PropertyStatus } from "@/data/properties";

const FILTERS: { key: PropertyStatus | "Todas"; label: string }[] = [
  { key: "Todas", label: "Todas" },
  { key: "En venta", label: "En venta" },
  { key: "En alquiler", label: "En alquiler" },
  { key: "Obra nueva", label: "Obra nueva" },
];

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
  const [filter, setFilter] = useState<PropertyStatus | "Todas">("Todas");
  const shown =
    filter === "Todas" ? listings : listings.filter((l) => l.status === filter);

  return (
    <div className="wrap">
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
      <p className="l-count">
        {shown.length} {shown.length === 1 ? "propiedad" : "propiedades"}
      </p>
      <div className="lgrid">
        {shown.map((l) => (
          <Card l={l} key={l.slug} />
        ))}
      </div>
    </div>
  );
}
