import { site } from "@/data/site";
import { getDict, type Lang } from "@/lib/i18n";

export default function StatBand({ lang = "es" }: { lang?: Lang }) {
  const t = getDict(lang);
  return (
    <section className="band tight stats">
      <div className="wrap">
        <div className="stats-grid reveal">
          {site.stats.map((s, i) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{t.stats[i] ?? s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
