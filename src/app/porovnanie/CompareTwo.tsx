"use client";

import { useState } from "react";
import type { Competitor } from "@/data/competitors";
import { allForComparison } from "@/data/competitors";
import { CompareSelect } from "./CompareSelect";

export function CompareTwo() {
  const [idA, setIdA] = useState<string>("");
  const [idB, setIdB] = useState<string>("");

  const firmA = idA ? allForComparison.find((c) => c.id === idA) : null;
  const firmB = idB ? allForComparison.find((c) => c.id === idB) : null;
  const showComparison = firmA && firmB && idA !== idB;

  return (
    <section className="mb-8 rounded-2xl border border-taxi-slate/50 bg-taxi-charcoal/30 p-4 sm:mb-12 sm:p-6 md:p-8">
      <h2 className="text-xl font-semibold text-taxi-gold">Porovnaj dve firmy medzi sebou</h2>
      <p className="mt-1 text-sm text-taxi-cream/70">
        Vyberte dve taxislužby a zobrazí sa ich detailné porovnanie.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6">
        <CompareSelect
          id="compare-a"
          label="Prvá firma"
          placeholder="Vyberte prvú firmu"
          options={allForComparison}
          value={idA}
          onChange={setIdA}
          disabledIds={idB ? [idB] : []}
        />
        <div className="flex shrink-0 items-center justify-center py-1 sm:pb-3">
          <span className="rounded-full bg-taxi-slate/50 px-3 py-1 text-sm font-semibold text-taxi-gold">
            vs
          </span>
        </div>
        <CompareSelect
          id="compare-b"
          label="Druhá firma"
          placeholder="Vyberte druhú firmu"
          options={allForComparison}
          value={idB}
          onChange={setIdB}
          disabledIds={idA ? [idA] : []}
        />
      </div>

      {idA && idB && idA === idB && (
        <p className="mt-4 text-sm text-amber-400">Vyberte dve rôzne firmy.</p>
      )}

      {showComparison && firmA && firmB && (
        <div className="mt-8 grid gap-8 border-t border-taxi-slate/50 pt-8 md:grid-cols-2">
          <CompareCard firm={firmA} />
          <CompareCard firm={firmB} />
        </div>
      )}
    </section>
  );
}

function CompareCard({ firm }: { firm: Competitor }) {
  return (
    <div className="rounded-xl border border-taxi-slate/50 bg-taxi-dark/80 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-bold text-taxi-cream">{firm.name}</h3>
        <a
          href={`https://${firm.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-taxi-gold hover:underline"
        >
          {firm.website}
        </a>
      </div>
      {firm.slogan && (
        <p className="mt-1 text-sm font-medium text-taxi-gold">&quot;{firm.slogan}&quot;</p>
      )}
      <p className="mt-3 text-sm text-taxi-cream/90">{firm.message}</p>
      <div className="mt-4 space-y-3">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
            Emócie a hodnoty
          </h4>
          <p className="mt-1 text-sm text-taxi-cream/80">
            {firm.emotions.join(" · ")}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
            Brand story
          </h4>
          <p className="mt-1 text-sm text-taxi-cream/80">{firm.story}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
            Diferenciácia
          </h4>
          <p className="mt-1 text-sm text-taxi-cream/80">{firm.differentiation}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
            Cieľová skupina
          </h4>
          <p className="mt-1 text-sm text-taxi-cream/80">{firm.targetGroup}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-taxi-gold">
            Komunikačný štýl
          </h4>
          <p className="mt-1 text-sm text-taxi-cream/80">{firm.style}</p>
        </div>
      </div>
    </div>
  );
}
