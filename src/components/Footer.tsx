import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";
import {
  Pin,
  Phone,
  Mail,
  Clock,
  Facebook,
  XTwitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsAppOutline,
} from "./icons";

const waFallback = `https://wa.me/${site.whatsapp}`;

export default function Footer({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  const p = langPrefix(lang);
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
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a href={waFallback} target="_blank" rel="noopener" aria-label="X">
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
          <a href={waFallback} target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedIn />
          </a>
          <a href={waFallback} target="_blank" rel="noopener" aria-label="YouTube">
            <YouTube />
          </a>
          <a href={waFallback} target="_blank" rel="noopener" aria-label="WhatsApp">
            <WhatsAppOutline />
          </a>
        </div>
        <p className="f-tag">{t.fTagline}</p>
        <hr className="f-rule" />
        <nav className="f-nav" aria-label={t.fLinksAria}>
          <Link href={`${p}/#split`}>{t.fBuy}</Link>
          <Link href={`${p}/#valorar`}>{t.fSell}</Link>
          <Link href={`${p}/propiedades`}>{t.fProps}</Link>
          <Link href={`${p}/nosotros`}>{t.fAbout}</Link>
          <Link href={`${p}/testimonios`}>{t.fTesti}</Link>
          <Link href={`${p}/actualidad`}>{t.fNews}</Link>
          <Link href={`${p}/#join`}>{t.fNewsletter}</Link>
          <Link href="/politica-de-privacidad">{t.fPrivacy}</Link>
        </nav>
        <p className="f-copy">© 2026 {site.legal} · {t.fRights}</p>
        <p className="f-cred">
          Santo Domingo, República Dominicana · {site.tagline}
        </p>
      </div>
      <a className="f-top" href="#top" aria-label={t.fTopAria}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="m6 14 6-6 6 6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {t.fTop}
      </a>
    </footer>
  );
}
