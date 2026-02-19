import Link from "next/link";
import { competitors } from "@/data/competitors";

export const metadata = {
  title: "Konkurenti | City Taxi Brno – Analýza",
  description: "Prehľad 10 taxi služieb v Brne: marketingové posolstvo, hodnoty a diferenciácia.",
};

export default function KonkurentiPage() {
  return (
    <div>
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-taxi-cream/70 transition hover:text-taxi-gold"
        >
          ← Späť na úvod
        </Link>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-taxi-cream sm:text-3xl md:text-4xl">
          10 konkurentov na trhu
        </h1>
        <p className="mt-2 text-taxi-cream/80">
          Marketingové posolstvo, emócie, brand story, diferenciácia a cieľová skupina pre každú taxislužbu v Brne.
        </p>
      </div>

      <div className="space-y-8">
        {competitors.map((c, i) => (
          <article
            key={c.id}
            className="gradient-card animate-fade-in rounded-2xl border border-taxi-slate/50 p-4 sm:p-6 md:p-8"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-taxi-cream sm:text-2xl">{c.name}</h2>
                <a
                  href={`https://${c.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-taxi-gold hover:underline"
                >
                  {c.website}
                </a>
              </div>
              {c.slogan && (
                <span className="rounded-full bg-taxi-gold/20 px-3 py-1 text-sm font-medium text-taxi-gold">
                  {c.slogan}
                </span>
              )}
            </div>

            <p className="mt-4 text-taxi-cream/90">{c.message}</p>

            <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Emócie a hodnoty
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.emotions.map((e) => (
                    <li
                      key={e}
                      className="rounded-lg bg-taxi-slate/50 px-2.5 py-1 text-sm text-taxi-cream/90"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Brand story
                </h3>
                <p className="mt-2 text-sm text-taxi-cream/80">{c.story}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Diferenciácia
                </h3>
                <p className="mt-2 text-sm text-taxi-cream/80">{c.differentiation}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-t border-taxi-slate/50 pt-6">
              <div>
                <span className="text-xs text-taxi-cream/60">Cieľová skupina:</span>
                <p className="text-sm text-taxi-cream/90">{c.targetGroup}</p>
              </div>
              <div>
                <span className="text-xs text-taxi-cream/60">Komunikačný štýl:</span>
                <p className="text-sm text-taxi-cream/90">{c.style}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/city-taxi"
          className="inline-flex items-center gap-2 rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber"
        >
          Analýza City Taxi Brno →
        </Link>
      </div>
    </div>
  );
}
