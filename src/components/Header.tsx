"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/data/site";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";
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

interface Props {
  solid?: boolean;
  lang?: Lang;
  /** Same page in the other language (defaults to the other home). */
  altHref?: string;
}

export default function Header({ solid = false, lang = "es", altHref }: Props) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const on = stuck || solid;
  const t = getDict(lang);
  const p = langPrefix(lang);
  const switchHref = altHref ?? (lang === "es" ? "/en" : "/");

  const links = [
    { href: `${p}/#split`, label: t.navBuy },
    { href: `${p}/#valorar`, label: t.navSell },
    { href: `${p}/propiedades`, label: t.navProperties },
    { href: `${p}/nosotros`, label: t.navAbout },
    { href: `${p}/actualidad`, label: t.navNews },
    { href: `${p}/#footer`, label: t.navContact },
  ];

  const menuLinks = [
    { href: `${p}/propiedades?f=venta`, label: t.menuBuy },
    { href: `${p}/propiedades?f=alquiler`, label: t.menuRent },
    { href: `${p}/propiedades?f=obra`, label: t.menuProjects },
    { href: `${p}/#valorar`, label: t.menuSellMine },
    { href: `${p}/nosotros`, label: t.menuAbout },
    { href: `${p}/actualidad`, label: t.menuNews },
    { href: `${p}/#footer`, label: t.menuContact },
  ];

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
          <Link href={`${p}/#top`} className="brand" aria-label={site.name}>
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
            <Link
              className="hd-lang"
              href={switchHref}
              aria-label={t.langSwitchAria}
            >
              {t.langSwitch}
            </Link>
            <button
              className="burger"
              aria-label={t.menuAria}
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
          <button
            className="x"
            aria-label={t.closeAria}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="wrap mob-body">
          <nav className="mob-list" aria-label={t.menuAria}>
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
