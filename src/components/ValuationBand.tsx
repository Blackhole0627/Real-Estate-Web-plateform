"use client";

import { useState } from "react";
import { waLink } from "@/data/site";
import { getDict, type Lang } from "@/lib/i18n";
import { metaTrack } from "@/lib/track";

export default function ValuationBand({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [sector, setSector] = useState("");
  const [tipo, setTipo] = useState(t.valTypes[0]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !tel.trim() || !sector.trim()) return;
    const msg =
      lang === "en"
        ? `Hello Onker Home, I want to sell my property.\nName: ${nombre.trim()}\nPhone: ${tel.trim()}\nProperty: ${tipo} in ${sector.trim()}`
        : `Hola Onker Home, quiero vender mi propiedad.\nNombre: ${nombre.trim()}\nTeléfono: ${tel.trim()}\nInmueble: ${tipo} en ${sector.trim()}`;
    metaTrack("Lead", { form: "vender" });
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="band val" id="valorar">
      <div className="wrap val-grid">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "#8f8f8f" }}>
            {t.valEyebrow}
          </span>
          <h2 style={{ marginTop: 16 }}>{t.valTitle}</h2>
          <p className="sub" style={{ marginTop: 16 }}>
            {t.valSub}
          </p>
        </div>
        <form className="reveal" onSubmit={submit}>
          <input
            type="text"
            placeholder={t.valName}
            aria-label={t.valName}
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="tel"
            placeholder={t.valPhone}
            aria-label={t.valPhone}
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            type="text"
            className="full"
            placeholder={t.valSector}
            aria-label={t.valSector}
            required
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
          <select
            className="full"
            aria-label={t.valTypeAria}
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            {t.valTypes.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
          <button type="submit">{t.valButton}</button>
          <small>{t.valNote}</small>
        </form>
      </div>
    </section>
  );
}
