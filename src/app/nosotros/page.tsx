import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatBand from "@/components/StatBand";
import VideoPlayer from "@/components/VideoPlayer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "La historia de Onker Home: una inmobiliaria boutique de República Dominicana nacida de un legado familiar de honestidad, pasión y confianza. Conoce a nuestro equipo.",
  alternates: { canonical: "/nosotros" },
};

const team = [
  {
    name: "Franciel Ortega",
    role: "Asesor y Fundador",
    photo: "/assets/franciel-ortega.jpg",
  },
  {
    name: "Jadielis Alcántara",
    role: "Consultora Inmobiliaria",
    photo: "/assets/jadielis-alcantara.png",
  },
  {
    name: "Sergio Javier",
    role: "Consultor Inmobiliario",
    photo: "/assets/sergio-javier.jpg",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="n-hero">
          <Image
            src="/assets/nosotros-hero.jpg"
            alt="Oficina de Onker Home Real Estate"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="n-hero-in">
            <span className="eyebrow">Nosotros</span>
            <h1>Por qué existe Onker Home</h1>
            <div className="n-hero-rule" aria-hidden="true" />
            <p>
              La primera inmobiliaria boutique de República Dominicana
              especializada en marketing digital. {site.tagline}
            </p>
          </div>
        </section>

        <section className="band tight">
          <div className="wrap">
            <div className="n-story reveal">
              <p>Onker Home nunca fue simplemente una idea de negocio.</p>
              <p>
                Su historia comenzó mucho antes de que la empresa existiera,
                durante mi infancia, cuando mi padre me llevaba con él a mostrar
                propiedades y compartir oportunidades inmobiliarias con amigos y
                familiares. Los bienes raíces no eran su ocupación principal,
                pero eran una de sus grandes pasiones. Tenía una habilidad
                extraordinaria para conectar con las personas, ganarse su
                confianza y ayudarles a ver oportunidades donde otros solo veían
                incertidumbre.
              </p>
              <p>
                Al principio, aquellas visitas eran simplemente una excusa
                perfecta para un niño que quería pasar tiempo con su padre.
                Disfrutaba cada recorrido, cada conversación y cada oportunidad
                de acompañarlo. Lo que no sabía en ese momento era que estaba
                aprendiendo lecciones que marcarían el resto de mi vida.
              </p>
              <p>
                Con el paso de los años, mi padre comenzó a introducirme al
                negocio de una manera más consciente. No hubo clases formales ni
                manuales de enseñanza. Solo estaba su ejemplo, su experiencia y
                mi creciente curiosidad por aprender. Poco a poco, los bienes
                raíces dejaron de ser un simple interés y se convirtieron en una
                verdadera pasión.
              </p>
              <p>
                Entonces la vida cambió. Mi padre fue diagnosticado con
                Alzheimer.
              </p>
              <p>
                Mientras su salud se deterioraba, me refugié cada vez más en el
                trabajo. En aquel momento pensaba que simplemente estaba
                utilizando los bienes raíces como una forma de distraerme y
                enfrentar el dolor de ver cómo alguien a quien admiraba
                profundamente comenzaba a desvanecerse poco a poco. Lo que no
                comprendía era que, en medio de ese proceso, estaba llevando
                conmigo todo aquello que él me había enseñado.
              </p>
              <div className="n-pull">
                <p>Su pasión se convirtió en mi pasión.</p>
                <p>Su dedicación se convirtió en mi disciplina.</p>
                <p>
                  Su honestidad se convirtió en el fundamento de mi carácter
                  profesional.
                </p>
              </div>
              <figure className="n-photo-mid">
                <Image
                  src="/assets/nosotros-padre.jpg"
                  alt="Franciel Ortega de niño junto a su padre"
                  width={1600}
                  height={800}
                  sizes="(max-width: 1000px) 100vw, 900px"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
              <p>
                Durante los últimos diez años, esos valores han guiado cada paso
                de mi trayectoria. Cada cliente que confía en mí, cada
                negociación que realizo y cada familia que ayudo a encontrar una
                oportunidad representa una forma de honrar el legado que mi
                padre dejó en mi vida.
              </p>
              <p>
                Onker Home existe porque creo que los bienes raíces son mucho
                más que propiedades. Se trata de personas. Se trata de
                confianza. Se trata de relaciones construidas con integridad. Y
                se trata de ayudar a otros a construir un mejor futuro con
                seguridad y tranquilidad.
              </p>
              <p>
                Mi padre me enseñó que la honestidad, la pasión y el genuino
                interés por los demás no solo son las cualidades que forman a un
                gran profesional; son las cualidades que forman a una gran
                persona. Esa convicción vive en cada decisión que tomamos, en
                cada cliente que servimos y en cada proyecto que representamos.
              </p>
              <p>Y es, precisamente, la razón por la que Onker Home existe hoy.</p>
              <p className="n-sign">
                — Franciel Ortega · Asesor y Fundador
              </p>
            </div>
          </div>
        </section>

        <section className="band tight destino">
          <div className="wrap">
            <div className="t2-head reveal">
              <span className="eyebrow">Nuestro destino</span>
              <h3>República Dominicana, donde el lujo se vive</h3>
            </div>
            <div className="dst-grid reveal">
              <div className="dst-ph">
                <Image
                  src="/assets/destino.jpg"
                  alt="Vista aérea de la marina de Cap Cana"
                  fill
                  sizes="(max-width:1000px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <VideoPlayer
                src="/sky-video.mp4"
                label="Ver desde el aire"
                portrait
              />
            </div>
          </div>
        </section>

        <StatBand />

        <section className="band" id="equipo">
          <div className="wrap">
            <div className="t2-head reveal">
              <span className="eyebrow">Nuestro equipo</span>
              <h3>Personas que dan la cara por ti</h3>
            </div>
            <div className="team-grid">
              {team.map((m) => (
                <div className="tm-card reveal" key={m.name}>
                  <div className="tm-ph">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width:640px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="tm-name">{m.name}</div>
                  <div className="tm-role">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band tight n-cta">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h3 className="reveal">Hablemos de tu próxima propiedad</h3>
            <p className="sub2 reveal">
              Escríbenos por WhatsApp o llámanos — un asesor te atiende sin
              costo ni compromiso.
            </p>
            <div className="n-cta-row reveal">
              <a
                className="btn light"
                href={waLink(
                  "Hola Onker Home, quisiera hablar con un asesor.",
                )}
                target="_blank"
                rel="noopener"
              >
                Escribir por WhatsApp
              </a>
              <a className="btn light" href={`tel:${site.phoneTel}`}>
                Llamar · {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <Reveal />
    </>
  );
}
