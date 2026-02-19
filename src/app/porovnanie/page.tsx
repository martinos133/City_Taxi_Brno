import Link from "next/link";
import { competitors, cityTaxiAnalysis } from "@/data/competitors";
import { CompareTwo } from "./CompareTwo";

export const metadata = {
  title: "Porovnanie | City Taxi Brno – Analýza",
  description: "Porovnanie City Taxi Brno s konkurenciou na brnianskom trhu.",
};

export default function PorovnaniePage() {
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
          Porovnanie s konkurenciou
        </h1>
        <p className="mt-2 text-taxi-cream/80">
          Kde stojí City Taxi Brno oproti kľúčovým hráčom a ako sa odlišuje.
        </p>
      </div>

      <CompareTwo />

      {/* City Taxi vs Top1, Lido, Impuls */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-taxi-gold">City Taxi vs kľúčoví konkurenti</h2>
        <p className="mt-1 text-sm text-taxi-cream/70">
          Priame odporúčania z analýzy klienta
        </p>
        <div className="mt-6 space-y-4">
          {cityTaxiAnalysis.comparison.map((c, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-taxi-gold/30 bg-taxi-charcoal/50 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-semibold text-taxi-cream">City Taxi</span>
                <span className="mx-2 text-taxi-cream/50">vs</span>
                <span className="font-semibold text-taxi-gold">{c.vs}</span>
              </div>
              <p className="text-taxi-cream/90 sm:text-right">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabuľka / karty všetkých */}
      <section>
        <h2 className="text-xl font-semibold text-taxi-cream">Všetci hráči na trhu</h2>
        <p className="mt-1 text-sm text-taxi-cream/70">
          Stručné porovnanie poslania a cieľovky
        </p>

        <div className="mt-6 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[640px] border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-taxi-slate/50">
                <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Služba
                </th>
                <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Hlavné posolstvo
                </th>
                <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Cieľová skupina
                </th>
                <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-taxi-gold">
                  Štýl
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-taxi-slate/30">
              <tr className="bg-taxi-gold/10">
                <td className="py-3 pr-4 font-semibold text-taxi-cream">City Taxi Brno</td>
                <td className="py-3 pr-4 text-sm text-taxi-cream/90">
                  Moderná technológia, vysoký štandard vozidiel, profesionalita
                </td>
                <td className="py-3 pr-4 text-sm text-taxi-cream/80">
                  Biznis, cenovo orientovaní, vyhľadávajúci kvalitu
                </td>
                <td className="py-3 text-sm text-taxi-cream/80">Korporátny, digitálny</td>
              </tr>
              {competitors.map((c) => (
                <tr key={c.id} className="hover:bg-taxi-slate/20">
                  <td className="py-3 pr-4 font-medium text-taxi-cream/95">{c.name}</td>
                  <td className="py-3 pr-4 text-sm text-taxi-cream/80">{c.tagline}</td>
                  <td className="py-3 pr-4 text-sm text-taxi-cream/70">{c.targetGroup}</td>
                  <td className="py-3 text-sm text-taxi-cream/70">{c.style}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/city-taxi"
          className="rounded-xl border border-taxi-slate bg-taxi-slate/20 px-6 py-3 font-semibold text-taxi-cream transition hover:bg-taxi-slate/40"
        >
          Analýza City Taxi
        </Link>
        <Link
          href="/konkurenti"
          className="inline-flex items-center gap-2 rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber"
        >
          Detail konkurentov →
        </Link>
      </div>
    </div>
  );
}
