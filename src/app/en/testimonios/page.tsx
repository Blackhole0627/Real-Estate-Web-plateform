import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import TestimonialsList from "@/components/TestimonialsList";
import { site, waLink } from "@/data/site";
import { getDict } from "@/lib/i18n";
import { getTestimonials } from "@/lib/repo";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Onker Home clients say: purchases, sales, rentals and investments guided from start to finish in the Dominican Republic.",
  alternates: {
    canonical: "/en/testimonios",
    languages: { es: "/testimonios", en: "/en/testimonios" },
  },
};

export default async function TestimonialsPageEn() {
  const items = await getTestimonials();
  const t = getDict("en");
  return (
    <>
      <Header lang="en" altHref="/testimonios" />
      <main id="top">
        <section className="n-hero">
          <Image
            src="/assets/sell-banner.jpg"
            alt="Onker Home Real Estate sign"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="n-hero-in">
            <span className="eyebrow">{t.testiEyebrow}</span>
            <h1>{t.testiTitle}</h1>
            <div className="n-hero-rule" aria-hidden="true" />
            <p>{t.testiPageSub}</p>
          </div>
        </section>

        <section className="band tight">
          <TestimonialsList items={items} lang="en" />
        </section>

        <section className="band tight n-cta">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h3 className="reveal">{t.testiCta}</h3>
            <p className="sub2 reveal">{t.testiCtaSub}</p>
            <div className="n-cta-row reveal">
              <a
                className="btn light"
                href={waLink("Hello Onker Home, I'd like to speak with an advisor.")}
                target="_blank"
                rel="noopener"
              >
                {t.aboutWa}
              </a>
              <a className="btn light" href={`tel:${site.phoneTel}`}>
                {t.callCta} · {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
      <WhatsAppFloat />
      <Reveal />
    </>
  );
}
