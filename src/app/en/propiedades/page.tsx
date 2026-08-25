import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ListingsIndex from "@/components/ListingsIndex";
import { getDict } from "@/lib/i18n";
import { getListings } from "@/lib/repo";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Exceptional residences for sale and rent in Santo Domingo, Cap Cana, Casa de Campo, Las Terrenas, Cabarete and the best areas of the Dominican Republic.",
  alternates: {
    canonical: "/en/propiedades",
    languages: { es: "/propiedades", en: "/en/propiedades" },
  },
};

export default async function PropertiesPageEn() {
  const listings = await getListings("en");
  const t = getDict("en");
  return (
    <>
      <Header solid lang="en" altHref="/propiedades" />
      <main id="top" className="page">
        <section className="page-head">
          <div className="wrap">
            <span className="eyebrow">{t.navProperties}</span>
            <h2 style={{ marginTop: 16 }}>{t.propsPageTitle}</h2>
            <p className="sub" style={{ marginTop: 16 }}>
              {t.propsPageSub}
            </p>
          </div>
        </section>
        <section className="band tight">
          <Suspense fallback={null}>
            <ListingsIndex listings={listings} lang="en" />
          </Suspense>
        </section>
      </main>
      <Footer lang="en" />
      <WhatsAppFloat />
    </>
  );
}
