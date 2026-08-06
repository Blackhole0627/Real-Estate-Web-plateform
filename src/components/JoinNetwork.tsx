"use client";

import { useState } from "react";
import { waLink } from "@/data/site";
import { Heart, House, Key } from "./icons";

const icons = [
  { k: "heart", label: "Corazón", Icon: Heart },
  { k: "house", label: "Casa", Icon: House },
  { k: "key", label: "Llave", Icon: Key },
] as const;

export default function JoinNetwork() {
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
    const msg = `Hola Onker Home, quiero unirme a su red y recibir oportunidades.\nNombre: ${nombre.trim()}${apellido.trim() ? " " + apellido.trim() : ""}\nCorreo: ${email.trim()}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="join" id="join">
      <div className="wrap reveal">
        <h3>Únete a nuestra red</h3>
        <p className="sub2">
          Recibe antes que nadie las nuevas propiedades y oportunidades del
          mercado inmobiliario dominicano.
        </p>
        <form className="jform" onSubmit={submit} noValidate>
          <input
            type="text"
            placeholder="Nombre"
            aria-label="Nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            aria-label="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            type="email"
            className="full"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
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
                Confirma que eres humano seleccionando la <b>casa</b>.
              </p>
              <div className="hicons" role="group" aria-label="Verificación">
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
              Enviar
            </button>
            <p className="jnote">
              Al enviar aceptas recibir comunicaciones de Onker Home. Puedes
              darte de baja cuando quieras.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
