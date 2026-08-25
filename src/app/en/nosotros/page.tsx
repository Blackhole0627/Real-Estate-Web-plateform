import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatBand from "@/components/StatBand";
import VideoPlayer from "@/components/VideoPlayer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/data/site";
import { getDict } from "@/lib/i18n";
import { getTeam } from "@/lib/repo";

export const metadata: Metadata = {
  title: "About us",
  description:
    "The story of Onker Home: a boutique real estate agency of the Dominican Republic born from a family legacy of honesty, passion and trust. Meet our team.",
  alternates: {
    canonical: "/en/nosotros",
    languages: { es: "/nosotros", en: "/en/nosotros" },
  },
};

const ROLES_EN: Record<string, string> = {
  "Asesor y Fundador": "Advisor & Founder",
  "Consultora Inmobiliaria": "Real Estate Consultant",
  "Consultor Inmobiliario": "Real Estate Consultant",
};

export default async function AboutPageEn() {
  const team = await getTeam();
  const t = getDict("en");
  return (
    <>
      <Header lang="en" altHref="/nosotros" />
      <main id="top">
        <section className="n-hero">
          <Image
            src="/assets/nosotros-hero.jpg"
            alt="Onker Home Real Estate office"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="n-hero-in">
            <span className="eyebrow">{t.aboutEyebrow}</span>
            <h1>Why Onker Home exists</h1>
            <div className="n-hero-rule" aria-hidden="true" />
            <p>
              The first boutique real estate agency of the Dominican Republic
              specialized in digital marketing. {site.tagline}
            </p>
          </div>
        </section>

        <section className="band tight">
          <div className="wrap">
            <div className="n-story reveal">
              <p>Onker Home was never simply a business idea.</p>
              <p>
                Its story began long before the company existed, during my
                childhood, when my father took me along to show properties and
                share real estate opportunities with friends and family. Real
                estate was not his main occupation, but it was one of his great
                passions. He had an extraordinary ability to connect with
                people, earn their trust and help them see opportunities where
                others only saw uncertainty.
              </p>
              <p>
                At first, those visits were simply the perfect excuse for a boy
                who wanted to spend time with his father. I enjoyed every tour,
                every conversation and every chance to go with him. What I did
                not know at the time was that I was learning lessons that would
                shape the rest of my life.
              </p>
              <p>
                Over the years, my father began to introduce me to the business
                more deliberately. There were no formal classes or training
                manuals. There was only his example, his experience and my
                growing curiosity to learn. Little by little, real estate
                stopped being a mere interest and became a true passion.
              </p>
              <p>
                Then life changed. My father was diagnosed with
                Alzheimer&rsquo;s.
              </p>
              <p>
                As his health declined, I took refuge more and more in work. At
                the time I thought I was simply using real estate as a way to
                distract myself and face the pain of watching someone I deeply
                admired slowly fade away. What I did not understand was that,
                through that process, I was carrying with me everything he had
                taught me.
              </p>
              <div className="n-pull">
                <p>His passion became my passion.</p>
                <p>His dedication became my discipline.</p>
                <p>His honesty became the foundation of my professional character.</p>
              </div>
              <figure className="n-photo-mid">
                <Image
                  src="/assets/nosotros-padre.jpg"
                  alt="Franciel Ortega as a child with his father"
                  width={1600}
                  height={800}
                  sizes="(max-width: 1000px) 100vw, 900px"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
              <p>
                For the last ten years, those values have guided every step of
                my career. Every client who trusts me, every negotiation I
                handle and every family I help find an opportunity is a way of
                honoring the legacy my father left in my life.
              </p>
              <p>
                Onker Home exists because I believe real estate is about much
                more than properties. It is about people. It is about trust. It
                is about relationships built with integrity. And it is about
                helping others build a better future with security and peace of
                mind.
              </p>
              <p>
                My father taught me that honesty, passion and genuine interest
                in others are not only the qualities that make a great
                professional; they are the qualities that make a great person.
                That conviction lives in every decision we make, every client we
                serve and every project we represent.
              </p>
              <p>And it is, precisely, the reason Onker Home exists today.</p>
              <p className="n-sign">— Franciel Ortega · Advisor &amp; Founder</p>
            </div>
          </div>
        </section>

        <section className="band tight destino">
          <div className="wrap">
            <div className="t2-head reveal">
              <span className="eyebrow">{t.aboutDestinoEyebrow}</span>
              <h3>{t.aboutDestinoTitle}</h3>
            </div>
            <div className="dst-grid reveal">
              <div className="dst-ph">
                <Image
                  src="/assets/destino.jpg"
                  alt="Aerial view of the Cap Cana marina"
                  fill
                  sizes="(max-width:1000px) 100vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <VideoPlayer src="/sky-video.mp4" label={t.aboutVideoLabel} portrait />
            </div>
          </div>
        </section>

        <StatBand lang="en" />

        <section className="band" id="equipo">
          <div className="wrap">
            <div className="t2-head reveal">
              <span className="eyebrow">{t.aboutTeamEyebrow}</span>
              <h3>{t.aboutTeamTitle}</h3>
            </div>
            <div className="team-grid">
              {team.map((m) => (
                <div className="tm-card reveal" key={m.name}>
                  <div className="tm-ph">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width:640px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="tm-name">{m.name}</div>
                  <div className="tm-role">{ROLES_EN[m.role] ?? m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band tight n-cta">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h3 className="reveal">{t.aboutCtaTitle}</h3>
            <p className="sub2 reveal">{t.aboutCtaSub}</p>
            <div className="n-cta-row reveal">
              <a
                className="btn light"
                href={waLink("Hello Onker Home, I'd like to speak with an advisor.")}
                target="_blank"
                rel="noopener"
              >
                {t.aboutWa}
              </a>
              <a className="btn light" href={`tel:${site.phoneTel}`}>
                {t.callCta} · {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
      <WhatsAppFloat />
      <Reveal />
    </>
  );
}
