import Image from "next/image";

export default function SplitCta() {
  return (
    <section className="split" id="split">
      <div className="half">
        <Image
          src="/assets/props/dest-puntacana.jpg"
          alt=""
          fill
          sizes="(max-width:640px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <div className="in">
          <h3>¿Comprando una propiedad?</h3>
          <p>
            Te acompañamos desde la búsqueda hasta la firma: selección curada,
            visitas y asesoría legal en cada paso.
          </p>
          <a className="btn light" href="#props">
            Explorar propiedades
          </a>
        </div>
      </div>
      <div className="half">
        <Image
          src="/assets/props/dest-santodomingo.jpg"
          alt=""
          fill
          sizes="(max-width:640px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <div className="in">
          <h3>¿Vendiendo tu inmueble?</h3>
          <p>
            Marketing digital profesional, compradores calificados y un acuerdo
            de captación que firmas desde tu teléfono.
          </p>
          <a className="btn light" href="#valorar">
            Valorar mi propiedad
          </a>
        </div>
      </div>
    </section>
  );
}
