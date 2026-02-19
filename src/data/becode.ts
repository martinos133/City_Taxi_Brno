export interface BecodePillar {
  id: number;
  title: string;
  subtitle: string;
  intro?: string;
  points: { title: string; text: string }[];
}

export const becodeContent = {
  intro: {
    question:
      "Prečo pre transformáciu City Taxi zvoliť práve BeCode?",
    text: "Analýza konkurencie ukázala, že trh v Brne je roztrieštený medzi „lacné dispečingy“ a „tradičné legendy“. City Taxi má najlepšie predpoklady stať sa moderným lídrom, ale chýba mu jednotný digitálny ekosystém a emócia, ktorá by zákazníka pripútala k značke silnejšie než len cena.",
    promise:
      "V BeCode neriešime len čiastkové úlohy – my spájame technológie, marketing a profesionálnu produkciu do jedného celku. Tu sú 3 piliere, ktorými vás posunieme na pozíciu TOP 1:",
  },
  pillars: [
    {
      id: 1,
      title: "Technologická prevaha",
      subtitle: "Development & UX",
      intro: "Väčšina vašej konkurencie má weby, ktoré sú v roku 2026 morálne zastarané.",
      points: [
        {
          title: "Web ako konverzný nástroj",
          text: "Navrhneme a vyvinieme webovú platformu, ktorá nebude len informačná. Bude natívne prepojená s vaším dispečingom, umožní okamžitú objednávku bez sťahovania aplikácie (ideálne pre turistov a jednorazové jazdy) a bude optimalizovaná na extrémny výkon v Google vyhľadávaní.",
        },
        {
          title: "B2B Portál na mieru",
          text: "Vyvinieme pre vás rozhranie pre firemnú klientelu. Firmy v Brne potrebujú prehľad o jazdách, fakturáciu na jeden klik a správu zamestnancov. Toto je produkt, ktorý vás okamžite oddelí od „amatérskych“ taxislužieb.",
        },
      ],
    },
    {
      id: 2,
      title: "Produkcia s emóciou",
      subtitle: "Herečky & Content",
      intro: "Taxi služba je o ľuďoch a dôvere. Konkurencia komunikuje stroho („prídeme o 5 minút“). My do City Taxi vnesieme život.",
      points: [
        {
          title: "Profesionálna video-produkcia",
          text: "Disponujeme vlastným produkčným tímom a hereckým obsadením. Vytvoríme pre vás sériu prémiových videí a Reels, ktoré nebudú len o autách, ale o príbehoch z Brna.",
        },
        {
          title: "Budovanie komunity",
          text: "Pomocou našich tvárí (herečiek) zhmotníme pocit bezpečia a komfortu. Ukážeme, že City Taxi je voľba pre modernú ženu, manažéra v strese aj partiu priateľov mieriaci do centra. Zmeníme vnímanie z „prepravy“ na „zážitok“.",
        },
      ],
    },
    {
      id: 3,
      title: "Full-servis Marketing",
      subtitle: "Stratégia & Dáta",
      intro: "Nerobíme marketing pre lajky, robíme ho pre objednávky.",
      points: [
        {
          title: "Dominancia v Brne",
          text: "Nastavíme agresívne lokálne SEO a PPC kampane tak, aby pri každom relevantnom vyhľadávaní v regióne svietilo City Taxi na prvom mieste.",
        },
        {
          title: "Konzistentná identita",
          text: "Od polepových dizajnov vozidiel cez vizuál aplikácie až po tón komunikácie na sociálnych sieťach – zabezpečíme, aby City Taxi pôsobilo ako najprofesionálnejšia služba v meste.",
        },
      ],
    },
  ] as BecodePillar[],
  summary: {
    text: "Kým ostatní vám ponúknu buď len „kód“, alebo len „reklamu“, BeCode vám dodá kompletný engine pre rast. Máme vývojárov, ktorí postavia váš digitálny dom, a produkciu, ktorá ho naplní životom a zákazníkmi.",
    closing:
      "Váš úspech v Brne nie je otázkou náhody, ale správne zvolenej technológie a príbehu. My v BeCode sme pripravení postaviť oboje.",
  },
};
