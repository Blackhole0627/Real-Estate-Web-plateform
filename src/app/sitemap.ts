import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getArticles, getListings } from "@/lib/repo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [listings, articles] = await Promise.all([
    getListings(),
    getArticles(),
  ]);
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/propiedades`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/nosotros`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${site.url}/testimonios`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${site.url}/politica-de-privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...listings.map((l) => ({
      url: `${site.url}/propiedades/${l.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/actualidad`, changeFrequency: "weekly", priority: 0.8 },
    ...articles.map((a) => ({
      url: `${site.url}/actualidad/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
