import Link from "next/link";
import { cityTaxiAnalysis } from "@/data/competitors";

export const metadata = {
  title: "City Taxi Brno | Analýza klienta",
  description: "Positioning, silné a slabé stránky a odporúčania pre City Taxi Brno.",
};

export default function CityTaxiPage() {
  const { positioning, strengths, weaknesses, opportunities, comparison } = cityTaxiAnalysis;

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
          Analýza klienta: City Taxi Brno
        </h1>
        <p className="mt-2 text-taxi-cream/80">
          Aktuálny positioning, silné a slabé stránky a príležitosti na zlepšenie.
        </p>
      </div>

      <section className="mb-8 rounded-2xl border border-taxi-slate/50 bg-taxi-charcoal/50 p-4 sm:mb-12 sm:p-6 md:p-8">
        <h2 className="text-lg font-semibold text-taxi-gold">Aktuálny positioning</h2>
        <p className="mt-3 text-taxi-cream/90">{positioning}</p>
      </section>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-emerald-400">Silné stránky</h2>
          <ul className="mt-4 space-y-3">
            {strengths.map((s, i) => (
              <li key={i} className="flex gap-3 text-taxi-cream/90">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-amber-400">Slabé stránky</h2>
          <ul className="mt-4 space-y-3">
            {weaknesses.map((w, i) => (
              <li key={i} className="flex gap-3 text-taxi-cream/90">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-taxi-gold/30 bg-taxi-gold/5 p-4 sm:p-6 md:p-8">
        <h2 className="text-lg font-semibold text-taxi-gold">Príležitosti na zlepšenie a odporúčania</h2>
        <ul className="mt-4 space-y-4">
          {opportunities.map((o, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-taxi-gold/20 text-sm font-bold text-taxi-gold">
                {i + 1}
              </span>
              <span className="text-taxi-cream/90">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-taxi-slate/50 p-4 sm:p-6 md:p-8">
        <h2 className="text-lg font-semibold text-taxi-cream">Porovnanie v skratke</h2>
        <div className="mt-4 space-y-3">
          {comparison.map((c, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline gap-2 rounded-xl bg-taxi-slate/30 px-4 py-3"
            >
              <span className="font-medium text-taxi-gold">Oproti {c.vs}:</span>
              <span className="text-taxi-cream/90">{c.text}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
        <Link
          href="/konkurenti"
          className="min-h-[48px] rounded-xl border border-taxi-slate bg-taxi-slate/20 px-5 py-3 font-semibold text-taxi-cream transition hover:bg-taxi-slate/40 sm:px-6"
        >
          Späť na konkurentov
        </Link>
        <Link
          href="/porovnanie"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-taxi-gold px-5 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber sm:px-6"
        >
          Celé porovnanie →
        </Link>
      </div>
    </div>
  );
}
