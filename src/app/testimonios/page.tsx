import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import TestimonialsList from "@/components/TestimonialsList";
import { site, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Lo que dicen los clientes de Onker Home: compras, ventas, alquileres e inversiones acompañadas de principio a fin en República Dominicana.",
  alternates: { canonical: "/testimonios" },
};

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="n-hero">
          <Image
            src="/assets/sell-banner.jpg"
            alt="Letrero de Onker Home Real Estate"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="n-hero-in">
            <span className="eyebrow">Testimonios</span>
            <h1>Lo que dicen nuestros clientes</h1>
            <div className="n-hero-rule" aria-hidden="true" />
            <p>
              Historias reales de compras, ventas, alquileres e inversiones
              acompañadas de principio a fin.
            </p>
          </div>
        </section>

        <section className="band tight">
          <TestimonialsList />
        </section>

        <section className="band tight n-cta">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h3 className="reveal">Tu historia puede ser la próxima</h3>
            <p className="sub2 reveal">
              Escríbenos y descubre por qué nuestros clientes nos recomiendan.
            </p>
            <div className="n-cta-row reveal">
              <a
                className="btn light"
                href={waLink("Hola Onker Home, quisiera hablar con un asesor.")}
                target="_blank"
                rel="noopener"
              >
                Escribir por WhatsApp
              </a>
              <a className="btn light" href={`tel:${site.phoneTel}`}>
                Llamar · {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <Reveal />
    </>
  );
}
