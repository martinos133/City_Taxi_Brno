import Link from "next/link";
import { becodeContent } from "@/data/becode";

export const metadata = {
  title: "Prečo BeCode | City Taxi Brno – Analýza",
  description:
    "Prečo pre transformáciu City Taxi zvoliť BeCode – technológia, produkcia s emóciou a full-servis marketing v jednom.",
};

export default function BecodePage() {
  const { intro, pillars, summary } = becodeContent;

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
          Prečo pre transformáciu City Taxi zvoliť práve BeCode?
        </h1>
        <p className="mt-4 text-lg text-taxi-cream/90">{intro.text}</p>
        <p className="mt-4 rounded-xl border border-taxi-gold/30 bg-taxi-gold/10 px-4 py-3 text-taxi-cream/95">
          {intro.promise}
        </p>
      </div>

      <div className="space-y-10">
        {pillars.map((pillar) => (
          <article
            key={pillar.id}
            className="rounded-2xl border border-taxi-slate/50 bg-taxi-charcoal/40 p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-taxi-gold/20 text-xl font-bold text-taxi-gold">
                {pillar.id}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-taxi-cream sm:text-2xl">
                  {pillar.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-taxi-gold">
                  {pillar.subtitle}
                </p>
                {pillar.intro && (
                  <p className="mt-4 text-taxi-cream/90">{pillar.intro}</p>
                )}
                <ul className="mt-6 space-y-5">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="border-l-2 border-taxi-gold/40 pl-4">
                      <h3 className="font-semibold text-taxi-cream">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-taxi-cream/85">{point.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-taxi-gold/40 bg-taxi-gold/10 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-taxi-gold">Zhrnutie</h2>
        <p className="mt-3 text-taxi-cream/95">{summary.text}</p>
        <p className="mt-4 font-medium text-taxi-cream">
          {summary.closing}
        </p>
      </section>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/strategia"
          className="rounded-xl border border-taxi-slate bg-taxi-slate/20 px-6 py-3 font-semibold text-taxi-cream transition hover:bg-taxi-slate/40"
        >
          Stratégia
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber"
        >
          Späť na úvod →
        </Link>
      </div>
    </div>
  );
}
