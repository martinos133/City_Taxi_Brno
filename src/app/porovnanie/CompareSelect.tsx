"use client";

import { useRef, useState, useEffect } from "react";
import type { Competitor } from "@/data/competitors";

type CompareSelectProps = {
  id: string;
  label: string;
  placeholder: string;
  options: Competitor[];
  value: string;
  onChange: (id: string) => void;
  disabledIds: string[];
};

export function CompareSelect({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  disabledIds,
}: CompareSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((c) => c.id === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full min-w-0 flex-1 sm:min-w-[200px]">
      <label htmlFor={id} className="block text-sm font-medium text-taxi-cream/90">
        {label}
      </label>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((o) => !o)}
        className="mt-1.5 flex w-full min-h-[48px] items-center justify-between gap-2 rounded-xl border border-taxi-slate/50 bg-taxi-dark px-4 py-3 text-left text-taxi-cream shadow-sm transition hover:border-taxi-slate hover:bg-taxi-slate/10 focus:border-taxi-gold focus:outline-none focus:ring-2 focus:ring-taxi-gold/40"
      >
        <span className={selected ? "font-medium" : "text-taxi-cream/60"}>
          {selected ? selected.name : placeholder}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-taxi-gold/80 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute z-20 mt-1 max-h-[50vh] w-full overflow-auto rounded-xl border border-taxi-slate/50 bg-taxi-charcoal py-1 shadow-xl ring-1 ring-black/20 sm:max-h-[280px] [-webkit-overflow-scrolling:touch]"
        >
          {options.map((c) => {
            const isDisabled = disabledIds.includes(c.id);
            const isSelected = c.id === value;
            return (
              <li
                key={c.id}
                role="option"
                aria-selected={isSelected}
                className={`cursor-pointer px-4 py-2.5 text-sm transition ${
                  isDisabled
                    ? "cursor-not-allowed text-taxi-cream/40"
                    : "text-taxi-cream hover:bg-taxi-gold/15 hover:text-taxi-cream"
                } ${isSelected ? "bg-taxi-gold/20 font-medium text-taxi-gold" : ""}`}
                onClick={() => {
                  if (!isDisabled) {
                    onChange(c.id);
                    setOpen(false);
                  }
                }}
              >
                {c.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
