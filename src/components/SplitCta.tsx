import Image from "next/image";
import { getDict, langPrefix, type Lang } from "@/lib/i18n";

export default function SplitCta({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  const p = langPrefix(lang);
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
          <h3>{t.splitBuyTitle}</h3>
          <p>{t.splitBuyText}</p>
          <a className="btn light" href={`${p}/propiedades?f=venta`}>
            {t.splitBuyBtn}
          </a>
        </div>
      </div>
      <div className="half">
        <Image
          src="/assets/sell-banner.jpg"
          alt=""
          fill
          sizes="(max-width:640px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
        <div className="in">
          <h3>{t.splitSellTitle}</h3>
          <p>{t.splitSellText}</p>
          <a className="btn light" href="#valorar">
            {t.splitSellBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
