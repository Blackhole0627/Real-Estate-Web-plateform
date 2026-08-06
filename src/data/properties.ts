export type PropertyStatus = "En venta" | "En alquiler" | "Obra nueva";

export interface Property {
  slug: string;
  name: string;
  status: PropertyStatus;
  /** Display price, already formatted (e.g. "US$ 15,000,000"). */
  price: string;
  /** Optional suffix like "/mes" for rentals. */
  priceSuffix?: string;
  /** Optional prefix like "Desde". */
  pricePrefix?: string;
  specs: string;
  location: string;
  image: string;
}

/**
 * Flagship listings (seeded from the client's real inventory).
 * Milestone 3: this module is replaced by a database query (Supabase)
 * so the client can manage listings from an admin panel — the UI
 * imports stay identical.
 */
export const properties: Property[] = [
  {
    slug: "rio-arriba-12-casa-de-campo",
    name: "Río Arriba 12",
    status: "En venta",
    price: "US$ 15,000,000",
    specs: "6 hab · 6.5 baños · 1,516 m²",
    location: "Casa de Campo, La Romana",
    image: "/assets/props/prop1.jpg",
  },
  {
    slug: "villa-las-palmas-cap-cana",
    name: "Villa Las Palmas",
    status: "En venta",
    price: "US$ 4,200,000",
    specs: "6 hab · 6.5 baños · 831 m²",
    location: "Cap Cana, Punta Cana",
    image: "/assets/props/prop2.jpg",
  },
  {
    slug: "casa-la-nouba-las-terrenas",
    name: "Casa La Nouba",
    status: "En venta",
    price: "US$ 3,950,000",
    specs: "6 hab · 6 baños · 750 m²",
    location: "Playa Bonita, Las Terrenas",
    image: "/assets/props/prop3.jpg",
  },
  {
    slug: "torre-ocean-view-cacicazgos",
    name: "Torre Ocean View",
    status: "Obra nueva",
    pricePrefix: "Desde",
    price: "US$ 2,125,000",
    specs: "4 hab · 4.5 baños · 560 m²",
    location: "Cacicazgos, Santo Domingo",
    image: "/assets/props/prop4.jpg",
  },
  {
    slug: "twin-towers-anacaona",
    name: "Twin Towers · Anacaona",
    status: "En venta",
    pricePrefix: "Desde",
    price: "US$ 1,195,000",
    specs: "3 hab · 3.5 baños · 358 m²",
    location: "Bella Vista, Santo Domingo",
    image: "/assets/props/prop5.jpg",
  },
  {
    slug: "apartamento-bella-vista",
    name: "Apartamento Bella Vista",
    status: "En alquiler",
    price: "US$ 4,300",
    priceSuffix: "/mes",
    specs: "3 hab · 3.5 baños · 300 m²",
    location: "Bella Vista, Santo Domingo",
    image: "/assets/props/prop6.jpg",
  },
];
