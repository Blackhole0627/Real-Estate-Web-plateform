"use client";

import { useState } from "react";
import { waLink } from "@/data/site";
import { getDict, type Lang } from "@/lib/i18n";
import { metaTrack } from "@/lib/track";
import { Heart, House, Key } from "./icons";

const icons = [
  { k: "heart", label: "Corazón", Icon: Heart },
  { k: "house", label: "Casa", Icon: House },
  { k: "key", label: "Llave", Icon: Key },
] as const;

export default function JoinNetwork({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [picked, setPicked] = useState<string | null>(null);
  const [err, setErr] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot filled the honeypot
    if (!nombre.trim() || !email.trim()) return;
    if (picked !== "house") {
      setErr(true);
      return;
    }
    setErr(false);
    const full = `${nombre.trim()}${apellido.trim() ? " " + apellido.trim() : ""}`;
    const msg =
      lang === "en"
        ? `Hello Onker Home, I want to join your network and receive opportunities.\nName: ${full}\nEmail: ${email.trim()}`
        : `Hola Onker Home, quiero unirme a su red y recibir oportunidades.\nNombre: ${full}\nCorreo: ${email.trim()}`;
    metaTrack("Lead", { form: "red" });
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="join" id="join">
      <div className="wrap reveal">
        <h3>{t.joinTitle}</h3>
        <p className="sub2">{t.joinSub}</p>
        <form className="jform" onSubmit={submit} noValidate>
          <input
            type="text"
            placeholder={t.joinFirst}
            aria-label={t.joinFirst}
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder={t.joinLast}
            aria-label={t.joinLast}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            className="full"
            placeholder={t.joinEmail}
            aria-label={t.joinEmail}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="hp"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <div className="full" style={{ textAlign: "center" }}>
            <div className={`human${err ? " err" : ""}`}>
              <p>
                {t.joinHuman} <b>{t.joinHumanWord}</b>.
              </p>
              <div className="hicons" role="group" aria-label={t.joinVerifyAria}>
                {icons.map(({ k, label, Icon }) => (
                  <button
                    key={k}
                    type="button"
                    className={`hic${picked === k ? " sel" : ""}`}
                    aria-label={label}
                    onClick={() => {
                      setPicked(k);
                      setErr(false);
                    }}
                  >
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="full" style={{ textAlign: "center" }}>
            <button className="sbt" type="submit">
              {t.joinSend}
            </button>
            <p className="jnote">{t.joinNote}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
