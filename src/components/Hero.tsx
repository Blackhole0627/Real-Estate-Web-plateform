import Link from "next/link";
import HeroVideo from "./HeroVideo";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";

/**
 * Photo-first hero: the image is the LCP and always paints immediately.
 * The video (HeroVideo) is a progressive enhancement layered on top for
 * capable desktop connections only.
 */
export default function Hero({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  const p = langPrefix(lang);
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-width:900px)" srcSet="/assets/hero-m.jpg" />
        <img
          className="bg"
          src="/assets/hero.jpg"
          alt="Costa dominicana"
          fetchPriority="high"
        />
      </picture>
      <HeroVideo src="/hero.mp4" poster="/assets/hero.jpg" />
      <div className="hero-in">
        <span className="eyebrow">{t.heroEyebrow}</span>
        <h1>
          {t.heroTitle1} <br />
          {t.heroTitle2}
        </h1>
        <p>{t.heroSub}</p>
        <form className="hsearch" action={`${p}/propiedades`}>
          <input
            type="text"
            name="q"
            placeholder={t.searchPlaceholder}
            aria-label={t.searchAria}
          />
          <button type="submit" aria-label={t.searchButton}>
            <span className="bt">{t.searchButton}</span>{" "}
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m20 20-3.2-3.2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>
        <div className="row">
          <a className="btn light" href="#props">
            {t.heroBuy}
          </a>
          <a className="btn light" href="#valorar">
            {t.heroSell}
          </a>
        </div>
      </div>
      <nav className="qlinks" aria-label={t.quickAria}>
        <Link className="ql" href={`${p}/propiedades?f=venta`}>
          <span className="t">{t.qlProps}</span>
          <span className="d">{t.qlPropsD}</span>
        </Link>
        <a className="ql" href="#testi">
          <span className="t">{t.qlTesti}</span>
          <span className="d">{t.qlTestiD}</span>
        </a>
        <a className="ql" href="#valorar">
          <span className="t">{t.qlSell}</span>
          <span className="d">{t.qlSellD}</span>
        </a>
        <a className="ql" href="#footer">
          <span className="t">{t.qlContact}</span>
          <span className="d">{t.qlContactD}</span>
        </a>
      </nav>
    </section>
  );
}
