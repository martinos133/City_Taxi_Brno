import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "City Taxi Brno – Analýza trhu",
  description: "Marketingová a konkurenčná analýza taxi služieb v Brne pre City Taxi Brno.",
};

const navItems = [
  { href: "/", label: "Úvod" },
  { href: "/konkurenti", label: "Konkurenti" },
  { href: "/city-taxi", label: "City Taxi" },
  { href: "/porovnanie", label: "Porovnanie" },
  { href: "/strategia", label: "Stratégia" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${dmSans.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-body">
        <header className="sticky top-0 z-50 border-b border-taxi-slate/50 bg-taxi-dark/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-taxi-cream transition hover:text-taxi-gold"
            >
              City Taxi Brno
            </Link>
            <nav className="flex items-center gap-1 sm:gap-2">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-taxi-cream/80 transition hover:bg-taxi-slate/30 hover:text-taxi-gold"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/becode"
                className="ml-2 rounded-xl bg-taxi-gold px-4 py-2 text-sm font-semibold text-taxi-dark shadow-md transition hover:bg-taxi-amber hover:shadow-lg"
              >
                Prečo BeCode
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
        <footer className="border-t border-taxi-slate/50 bg-taxi-charcoal/50 py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-taxi-cream/60 sm:px-6">
            Analýza trhu taxi služieb v Brne · City Taxi Brno
          </div>
        </footer>
      </body>
    </html>
  );
}
