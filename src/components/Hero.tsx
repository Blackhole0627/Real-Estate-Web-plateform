import HeroVideo from "./HeroVideo";

/**
 * Photo-first hero: the image is the LCP and always paints immediately.
 * The video (HeroVideo) is a progressive enhancement layered on top for
 * capable desktop connections only.
 */
export default function Hero() {
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
        <span className="eyebrow">
          Inmobiliaria boutique · República Dominicana
        </span>
        <h1>
          Encuentra tu <br />
          próxima propiedad
        </h1>
        <p>
          Compra, alquila o invierte en propiedades seleccionadas en República
          Dominicana.
        </p>
        <form className="hsearch" action="/propiedades">
          <input
            type="text"
            name="q"
            placeholder="Busca por ciudad, sector o propiedad"
            aria-label="Buscar propiedades"
          />
          <button type="submit" aria-label="Buscar">
            <span className="bt">Buscar</span>{" "}
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
            Comprar
          </a>
          <a className="btn light" href="#valorar">
            Vender
          </a>
        </div>
      </div>
      <nav className="qlinks" aria-label="Accesos rápidos">
        <a className="ql" href="#props">
          <span className="t">Propiedades</span>
          <span className="d">Residencias curadas en venta y alquiler</span>
        </a>
        <a className="ql" href="#testi">
          <span className="t">Testimonios</span>
          <span className="d">Lo que dicen nuestros clientes</span>
        </a>
        <a className="ql" href="#valorar">
          <span className="t">Vender</span>
          <span className="d">Valora tu propiedad sin compromiso</span>
        </a>
        <a className="ql" href="#footer">
          <span className="t">Contacto</span>
          <span className="d">Habla con un asesor hoy</span>
        </a>
      </nav>
    </section>
  );
}
