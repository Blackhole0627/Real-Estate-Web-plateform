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
import { getFeaturedListings, getTestimonials } from "@/lib/repo";

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

export default async function Home() {
  const [featured, testimonials] = await Promise.all([
    getFeaturedListings(6),
    getTestimonials(),
  ]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatBand />
        <Testimonials items={testimonials} />
        <PropertySlider featured={featured} />
        <SplitCta />
        <ValuationBand />
        <Articles />
        <JoinNetwork />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
