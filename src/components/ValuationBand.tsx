"use client";

import { useState } from "react";
import { waLink } from "@/data/site";

export default function ValuationBand() {
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [sector, setSector] = useState("");
  const [tipo, setTipo] = useState("Apartamento");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !tel.trim() || !sector.trim()) return;
    const msg = `Hola Onker Home, quiero una valoración de mi propiedad.\nNombre: ${nombre.trim()}\nTeléfono: ${tel.trim()}\nInmueble: ${tipo} en ${sector.trim()}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="band val" id="valorar">
      <div className="wrap val-grid">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "#8f8f8f" }}>
            Propietarios
          </span>
          <h2 style={{ marginTop: 16 }}>¿Cuánto vale tu propiedad?</h2>
          <p className="sub" style={{ marginTop: 16 }}>
            Solicita una valoración sin compromiso. Un asesor de Onker Home te
            contactará con un análisis del mercado en tu zona.
          </p>
        </div>
        <form className="reveal" onSubmit={submit}>
          <input
            type="text"
            placeholder="Nombre"
            aria-label="Nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Teléfono / WhatsApp"
            aria-label="Teléfono"
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="text"
            className="full"
            placeholder="Sector y ciudad del inmueble"
            aria-label="Sector"
            required
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
          <select
            className="full"
            aria-label="Tipo de inmueble"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option>Apartamento</option>
            <option>Casa / Villa</option>
            <option>Penthouse</option>
            <option>Solar / Terreno</option>
            <option>Local comercial</option>
          </select>
          <button type="submit">Solicitar valoración</button>
          <small>
            Al enviar, un asesor te contactará por WhatsApp o llamada. Sin costo
            ni compromiso.
          </small>
        </form>
      </div>
    </section>
  );
}
