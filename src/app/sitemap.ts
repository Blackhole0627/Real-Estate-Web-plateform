import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { listings } from "@/data/listings";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/propiedades`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/nosotros`, changeFrequency: "monthly", priority: 0.7 },
    ...listings.map((l) => ({
      url: `${site.url}/propiedades/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
