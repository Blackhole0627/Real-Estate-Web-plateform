"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/data/site";
import {
  Phone,
  Pin,
  Mail,
  Facebook,
  XTwitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsAppOutline,
} from "./icons";

const links = [
  { href: "/#split", label: "Comprar" },
  { href: "/#valorar", label: "Vender" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/actualidad", label: "Actualidad" },
  { href: "/#footer", label: "Contacto" },
];

const menuLinks = [
  { href: "/propiedades?f=venta", label: "Comprar" },
  { href: "/propiedades?f=alquiler", label: "Alquilar" },
  { href: "/propiedades?f=obra", label: "Proyectos en construcción" },
  { href: "/#valorar", label: "Vender mi propiedad" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/actualidad", label: "Noticias" },
  { href: "/#footer", label: "Contacto" },
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const on = stuck || solid;

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
      <header className={`hd${on ? " stuck" : ""}`}>
        <div className="wrap hd-in">
          <Link href="/#top" className="brand" aria-label={site.name}>
            <Image
              src={on ? "/assets/logo-black.png" : "/assets/logo-white.png"}
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
            src="/assets/logo-white.png"
            alt={site.name}
            width={93}
            height={40}
          />
          <button className="x" aria-label="Cerrar" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <div className="wrap mob-body">
          <nav className="mob-list" aria-label="Menú">
            {menuLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <hr className="mob-rule" />
          <div className="mob-contact">
            <div className="mc-li">
              <Pin />
              <a href={site.address.mapUrl} target="_blank" rel="noopener">
                {site.address.line1}
                <br />
                {site.address.line2}
              </a>
            </div>
            <div className="mc-li">
              <Phone />
              <a href={`tel:${site.phoneTel}`}>{site.phoneIntl}</a>
            </div>
            <div className="mc-li">
              <Mail />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="mob-soc">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href={waLink("Hola Onker Home, quisiera más información.")}
              target="_blank"
              rel="noopener"
              aria-label="X"
            >
              <XTwitter />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={waLink("Hola Onker Home, quisiera más información.")}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              href={waLink("Hola Onker Home, quisiera más información.")}
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <YouTube />
            </a>
            <a
              href={waLink("Hola Onker Home, quisiera más información.")}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <WhatsAppOutline />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
