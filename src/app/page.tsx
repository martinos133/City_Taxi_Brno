import Link from "next/link";

export default function HomePage() {
  return (
    <div className="gradient-hero -mx-4 -mt-8 rounded-b-3xl px-6 py-16 sm:-mx-6 sm:px-8 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-taxi-cream sm:text-5xl md:text-6xl">
          Analýza trhu taxi v Brne
        </h1>
        <p className="mt-4 animate-fade-in text-lg text-taxi-cream/80 [animation-delay:0.1s] sm:text-xl">
          Prehľad konkurencie a odporúčania pre <strong className="text-taxi-gold">City Taxi Brno</strong>
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/konkurenti"
            className="gold-glow inline-flex items-center rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark transition hover:bg-taxi-amber"
          >
            10 konkurentov
          </Link>
          <Link
            href="/city-taxi"
            className="inline-flex items-center rounded-xl border border-taxi-gold/50 bg-transparent px-6 py-3 font-semibold text-taxi-gold transition hover:bg-taxi-gold/10"
          >
            Analýza City Taxi
          </Link>
          <Link
            href="/porovnanie"
            className="inline-flex items-center rounded-xl border border-taxi-slate bg-taxi-slate/20 px-6 py-3 font-semibold text-taxi-cream transition hover:bg-taxi-slate/40"
          >
            Porovnanie
          </Link>
        </div>
      </div>

      <section className="mx-auto mt-20 max-w-4xl">
        <h2 className="text-xl font-semibold text-taxi-cream sm:text-2xl">Čo tu nájdete</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="gradient-card gold-glow rounded-2xl border border-taxi-slate/50 p-6">
            <div className="text-2xl font-bold text-taxi-gold">10</div>
            <h3 className="mt-1 font-semibold text-taxi-cream">Konkurenti</h3>
            <p className="mt-2 text-sm text-taxi-cream/70">
              MS-TAXI, Mája, Ave, Top1Taxi, Impuls, ESO, Roman Krejčí, Jedeme, Lido, Ella – marketingové posolstvo, hodnoty a diferenciácia.
            </p>
            <Link href="/konkurenti" className="mt-4 inline-block text-sm font-medium text-taxi-gold hover:underline">
              Prejsť na konkurentov →
            </Link>
          </div>
          <div className="gradient-card rounded-2xl border border-taxi-slate/50 p-6">
            <div className="text-2xl font-bold text-taxi-gold">City Taxi</div>
            <h3 className="mt-1 font-semibold text-taxi-cream">Analýza klienta</h3>
            <p className="mt-2 text-sm text-taxi-cream/70">
              Silné a slabé stránky, príležitosti a odporúčania pre lepší positioning a storytelling.
            </p>
            <Link href="/city-taxi" className="mt-4 inline-block text-sm font-medium text-taxi-gold hover:underline">
              Prejsť na analýzu →
            </Link>
          </div>
          <div className="gradient-card rounded-2xl border border-taxi-slate/50 p-6">
            <div className="text-2xl font-bold text-taxi-gold">VS</div>
            <h3 className="mt-1 font-semibold text-taxi-cream">Porovnanie</h3>
            <p className="mt-2 text-sm text-taxi-cream/70">
              Ako sa City Taxi odlišuje oproti Top1Taxi, Lido Taxi a Taxi Impuls.
            </p>
            <Link href="/porovnanie" className="mt-4 inline-block text-sm font-medium text-taxi-gold hover:underline">
              Prejsť na porovnanie →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
