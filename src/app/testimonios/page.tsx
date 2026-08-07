import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/content";
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
      <Header solid />
      <main id="top" className="page">
        <section className="page-head">
          <div className="wrap" style={{ textAlign: "center" }}>
            <span className="eyebrow">Testimonios</span>
            <h2 style={{ marginTop: 16 }}>Lo que dicen nuestros clientes</h2>
            <p className="sub" style={{ margin: "16px auto 0" }}>
              Historias reales de compras, ventas, alquileres e inversiones
              acompañadas de principio a fin.
            </p>
          </div>
        </section>

        <section className="band tight">
          <div className="wrap">
            {testimonials.map((t) => (
              <article className="tst-item reveal" key={t.name}>
                <div className="tst-mark" aria-hidden="true">
                  &ldquo;
                </div>
                <p className="tst-quote">{t.quote}</p>
                <h3 className="tst-name">{t.name}</h3>
                <div className="tst-tag">{t.tag}</div>
              </article>
            ))}
          </div>
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
