import { site } from "@/data/site";

export default function StatBand() {
  return (
    <section className="band tight stats">
      <div className="wrap">
        <div className="stats-grid reveal">
          {site.stats.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
