import type { Metadata, Viewport } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${dmSans.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen min-w-0 font-body overflow-x-hidden">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 md:py-12">{children}</main>
        <footer className="border-t border-taxi-slate/50 bg-taxi-charcoal/50 py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-xs text-taxi-cream/60 sm:px-6 sm:text-sm">
            Analýza trhu taxi služieb v Brne · City Taxi Brno
          </div>
        </footer>
      </body>
    </html>
  );
}
