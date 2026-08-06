"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/data/site";
import { Phone } from "./icons";

const links = [
  { href: "#props", label: "Comprar" },
  { href: "#valorar", label: "Vender" },
  { href: "#props", label: "Propiedades" },
  { href: "#split", label: "Servicios" },
  { href: "#blog", label: "Actualidad" },
  { href: "#footer", label: "Contacto" },
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`hd${stuck ? " stuck" : ""}`}>
        <div className="wrap hd-in">
          <Link href="#top" className="brand" aria-label={site.name}>
            <Image
              src={stuck ? "/assets/logo-black.png" : "/assets/logo-white.png"}
              alt={site.name}
              width={103}
              height={44}
              priority
            />
          </Link>
          <nav className="nav">
            {links.map((l, i) => (
              <a key={i} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hd-right">
            <a className="hd-tel" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a
              className="hd-call"
              href={waLink("Hola Onker Home, quisiera hablar con un asesor.")}
              target="_blank"
              rel="noopener"
              aria-label="Llámanos por WhatsApp"
            >
              <Phone />
            </a>
            <span className="hd-sep" aria-hidden="true" />
            <button
              className="burger"
              aria-label="Menú"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mob${open ? " open" : ""}`}>
        <div className="wrap top">
          <Image
            src="/assets/logo-black.png"
            alt={site.name}
            width={93}
            height={40}
          />
          <button className="x" aria-label="Cerrar" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <nav className="wrap">
          {links.map((l, i) => (
            <a key={i} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
