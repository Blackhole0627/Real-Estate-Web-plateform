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
        <div className="f-main">
          <div className="f-id">
            <Image
              src="/assets/logo-white.png"
              alt={site.name}
              width={131}
              height={56}
            />
            <p className="legal">
              © 2026 {site.legal}
              <br />
              Todos los derechos reservados · Santo Domingo, RD
            </p>
            <p className="tag">
              {site.name} | Inmobiliaria boutique de República Dominicana,
              especializada en marketing digital.
            </p>
          </div>
          <div className="f-contact">
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
          </div>
        </div>
        <div className="f-bottom">
          <nav className="f-nav" aria-label="Enlaces">
            <a href="#props">Comprar</a>
            <a href="#valorar">Vender</a>
            <a href="#props">Propiedades</a>
            <a href="#testi">Testimonios</a>
            <a href="#blog">Actualidad</a>
            <a href="#join">Newsletter</a>
          </nav>
          <div className="f-cred">
            © 2026 {site.name} · {site.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
