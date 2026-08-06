import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ListingsIndex from "@/components/ListingsIndex";

export const metadata: Metadata = {
  title: "Propiedades · Onker Home",
  description:
    "Residencias de excepción en venta y alquiler en Santo Domingo, Cap Cana, Casa de Campo, Las Terrenas y las mejores zonas de República Dominicana.",
};

export default function PropiedadesPage() {
  return (
    <>
      <Header solid />
      <main id="top" className="page">
        <section className="page-head">
          <div className="wrap">
            <span className="eyebrow">Propiedades</span>
            <h2 style={{ marginTop: 16 }}>Residencias de excepción</h2>
            <p className="sub" style={{ marginTop: 16 }}>
              Compra, alquila e invierte en las mejores zonas de Santo Domingo y
              el Caribe dominicano.
            </p>
          </div>
        </section>
        <section className="band tight">
          <ListingsIndex />
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
