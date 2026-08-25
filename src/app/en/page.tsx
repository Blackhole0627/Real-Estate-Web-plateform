import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import Testimonials from "@/components/Testimonials";
import PropertySlider from "@/components/PropertySlider";
import SplitCta from "@/components/SplitCta";
import ValuationBand from "@/components/ValuationBand";
import Articles from "@/components/Articles";
import JoinNetwork from "@/components/JoinNetwork";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { getArticles, getFeaturedListings, getTestimonials } from "@/lib/repo";

export const metadata: Metadata = {
  title: "Onker Home · Luxury real estate in the Dominican Republic",
  description:
    "Buy, rent and invest in the best areas of the Dominican Republic. Onker Home — boutique real estate agency specialized in digital marketing, Santo Domingo.",
  alternates: { canonical: "/en", languages: { es: "/", en: "/en" } },
  openGraph: {
    title: "Onker Home · Luxury real estate in the Dominican Republic",
    description:
      "Boutique real estate agency of the Dominican Republic. Where luxury is lived.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  telephone: site.phoneDisplay,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressCountry: "DO",
  },
};

export default async function HomeEn() {
  const [featured, testimonials, articles] = await Promise.all([
    getFeaturedListings(6, "en"),
    getTestimonials(),
    getArticles("en"),
  ]);
  return (
    <>
      <Header lang="en" altHref="/" />
      <main>
        <Hero lang="en" />
        <StatBand lang="en" />
        <Testimonials items={testimonials} lang="en" />
        <PropertySlider featured={featured} lang="en" />
        <SplitCta lang="en" />
        <ValuationBand lang="en" />
        <Articles articles={articles} lang="en" />
        <JoinNetwork lang="en" />
      </main>
      <Footer lang="en" />
      <WhatsAppFloat />
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
