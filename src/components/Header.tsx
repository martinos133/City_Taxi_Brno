"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Úvod" },
  { href: "/konkurenti", label: "Konkurenti" },
  { href: "/city-taxi", label: "City Taxi" },
  { href: "/porovnanie", label: "Porovnanie" },
  { href: "/strategia", label: "Stratégia" },
];

const linkClass =
  "block rounded-lg px-4 py-3 text-base font-medium text-taxi-cream/90 transition hover:bg-taxi-slate/30 hover:text-taxi-gold";
const linkClassDesktop =
  "rounded-lg px-3 py-2 text-sm font-medium text-taxi-cream/80 transition hover:bg-taxi-slate/30 hover:text-taxi-gold min-h-[44px] min-w-[44px] inline-flex items-center justify-center";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-taxi-slate/50 bg-taxi-dark/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 min-h-[56px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-16">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-taxi-cream transition hover:text-taxi-gold sm:text-lg"
          onClick={() => setOpen(false)}
        >
          City Taxi Brno
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:gap-2 md:flex">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClassDesktop}>
              {label}
            </Link>
          ))}
          <Link
            href="/becode"
            className="ml-2 min-h-[44px] rounded-xl bg-taxi-gold px-4 py-2.5 text-sm font-semibold text-taxi-dark shadow-md transition hover:bg-taxi-amber hover:shadow-lg"
          >
            Prečo BeCode
          </Link>
        </nav>

        {/* Mobile: hamburger + CTA */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/becode"
            className="rounded-xl bg-taxi-gold px-3 py-2.5 text-sm font-semibold text-taxi-dark"
          >
            Prečo BeCode
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-taxi-slate/50 bg-taxi-slate/20 text-taxi-cream transition hover:bg-taxi-slate/40"
            aria-expanded={open}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed right-0 top-14 z-50 flex w-full max-w-sm flex-col gap-1 border-b border-l border-taxi-slate/50 bg-taxi-charcoal py-4 shadow-xl md:hidden"
            aria-label="Hlavné menu"
          >
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex justify-center px-4">
              <Link
                href="/becode"
                className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-taxi-gold px-6 py-3 font-semibold text-taxi-dark"
                onClick={() => setOpen(false)}
              >
                Prečo BeCode
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
