import Link from "next/link";
import { strategicRecommendations } from "@/data/strategia";

export const metadata = {
  title: "Stratégia | City Taxi Brno – Analýza",
  description:
    "6 strategických odporúčaní, ako ovládnuť brnianske ulice – City Community, personalizácia, biznis segment, zero-click, bezpečnosť, odvážny sľub.",
};

export default function StrategiaPage() {
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
          6 strategických odporúčaní
        </h1>
        <p className="mt-2 text-lg text-taxi-gold">
          Ako ovládnuť brnianske ulice
        </p>
        <p className="mt-2 text-taxi-cream/80">
          Konkrétne kroky pre City Taxi Brno – od komunity cez personalizáciu až po odvážny sľub.
        </p>
      </div>

      <div className="space-y-10">
        {strategicRecommendations.map((rec) => (
          <article
            key={rec.id}
            className="rounded-2xl border border-taxi-slate/50 bg-taxi-charcoal/40 p-4 sm:p-6 md:p-8"
          >
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-taxi-gold/20 text-xl font-bold text-taxi-gold">
                {rec.id}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-taxi-cream sm:text-2xl">
                  {rec.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-taxi-gold">
                  {rec.subtitle}
                </p>
                {rec.intro && (
                  <p className="mt-4 text-taxi-cream/90">{rec.intro}</p>
                )}
                <ul className="mt-6 space-y-5">
                  {rec.points.map((point, i) => (
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

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/city-taxi"
          className="rounded-xl border border-taxi-slate bg-taxi-slate/20 px-6 py-3 font-semibold text-taxi-cream transition hover:bg-taxi-slate/40"
        >
          Analýza City Taxi
        </Link>
        <Link
          href="/porovnanie"
          className="inline-flex items-center gap-2 rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber"
        >
          Porovnanie konkurencie →
        </Link>
      </div>
    </div>
  );
}
