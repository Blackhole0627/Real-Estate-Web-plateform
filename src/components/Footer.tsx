import Image from "next/image";
import { site } from "@/data/site";
import {
  Pin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  WhatsAppOutline,
} from "./icons";

const waFallback = `https://wa.me/${site.whatsapp}`;

export default function Footer() {
  return (
    <footer className="site" id="footer">
      <div className="wrap">
        <Image
          className="f-logo"
          src="/assets/logo-white.png"
          alt={site.name}
          width={131}
          height={56}
        />
        <div className="f-list">
          <div className="f-li">
            <Pin />
            <a href={site.address.mapUrl} target="_blank" rel="noopener">
              {site.address.line1}
              <br />
              {site.address.line2}
            </a>
          </div>
          <div className="f-li">
            <Phone />
            <a href={`tel:${site.phoneTel}`}>{site.phoneIntl}</a>
          </div>
          <div className="f-li">
            <Mail />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="f-li">
            <Clock />
            <span>{site.hours}</span>
          </div>
        </div>
        <div className="f-soc">
          <a href={waFallback} target="_blank" rel="noopener" aria-label="Facebook">
            <Facebook />
          </a>
          <a href={waFallback} target="_blank" rel="noopener" aria-label="Instagram">
            <Instagram />
          </a>
          <a href={waFallback} target="_blank" rel="noopener" aria-label="WhatsApp">
            <WhatsAppOutline />
          </a>
        </div>
        <p className="f-tag">
          {site.name} | Inmobiliaria boutique de República Dominicana,
          especializada en marketing digital.
        </p>
        <hr className="f-rule" />
        <nav className="f-nav" aria-label="Enlaces">
          <a href="#props">Comprar</a>
          <a href="#valorar">Vender</a>
          <a href="#props">Propiedades</a>
          <a href="#testi">Testimonios</a>
          <a href="#blog">Actualidad</a>
          <a href="#join">Newsletter</a>
        </nav>
        <p className="f-copy">
          © 2026 {site.legal} · Todos los derechos reservados
        </p>
        <p className="f-cred">
          Santo Domingo, República Dominicana · {site.tagline}
        </p>
      </div>
      <a className="f-top" href="#top" aria-label="Volver arriba">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="m6 14 6-6 6 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Subir
      </a>
    </footer>
  );
}
