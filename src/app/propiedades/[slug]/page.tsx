import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site, waLink } from "@/data/site";
import {
  getListing,
  listingCover,
  listingPhotos,
  listings,
} from "@/data/listings";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  props: PageProps<"/propiedades/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const l = getListing(slug);
  if (!l) return { title: "Propiedad · Onker Home" };
  return {
    title: `${l.name} · ${l.location} · Onker Home`,
    description: `${l.name} — ${l.specs} — ${l.location}. ${l.status} por Onker Home.`,
  };
}

/** Renders the listing body: "## " heading · "- " bullet · paragraphs. */
function Body({ text }: { text: string }) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  let key = 0;
  const flush = () => {
    if (list.length) {
      blocks.push(
        <ul key={key++}>
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("## ")) {
      flush();
      blocks.push(<h3 key={key++}>{line.slice(3)}</h3>);
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flush();
      blocks.push(<p key={key++}>{line}</p>);
    }
  }
  flush();
  return <div className="l-body">{blocks}</div>;
}

export default async function ListingPage(
  props: PageProps<"/propiedades/[slug]">,
) {
  const { slug } = await props.params;
  const l = getListing(slug);
  if (!l) notFound();

  const cover = listingCover(l);
  const photos = listingPhotos(l).filter((p) => p !== cover);
  const price = `${l.pricePrefix ? `${l.pricePrefix} ` : ""}${l.price}${
    l.priceSuffix ? ` ${l.priceSuffix}` : ""
  }`;
  const wa = waLink(
    `Hola Onker Home, me interesa la propiedad "${l.name}" (${l.location}). ¿Podemos coordinar más detalles?`,
  );

  return (
    <>
      <Header solid />
      <main id="top" className="page">
        <section className="l-hero">
          <Image
            src={cover}
            alt={`${l.name}, ${l.location}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </section>
        <section className="band tight">
          <div className="wrap l-layout">
            <article>
              <Link className="l-back" href="/propiedades">
                ← Todas las propiedades
              </Link>
              <span className="p-st l-st">{l.status}</span>
              <h1 className="l-title">{l.name}</h1>
              <p className="l-loc">{l.location}</p>
              <Body text={l.body} />
            </article>
            <aside className="l-aside">
              <div className="l-card">
                <div className="l-price">{price}</div>
                <div className="l-specs">{l.specs}</div>
                <a className="btn solid full" href={wa} target="_blank" rel="noopener">
                  Consultar por WhatsApp
                </a>
                <a className="btn full" href={`tel:${site.phoneTel}`}>
                  Llamar · {site.phoneDisplay}
                </a>
                <p className="l-note">
                  Un asesor de Onker Home te responderá a la brevedad. Sin costo
                  ni compromiso.
                </p>
              </div>
            </aside>
          </div>
        </section>
        {photos.length > 0 && (
          <section className="band tight">
            <div className="wrap">
              <span className="eyebrow">Galería</span>
              <div className="l-gallery">
                {photos.map((src, i) => (
                  <div className="l-gph" key={src}>
                    <Image
                      src={src}
                      alt={`${l.name} — foto ${i + 2}`}
                      fill
                      loading="lazy"
                      sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
