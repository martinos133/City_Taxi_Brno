export interface StrategicRecommendation {
  id: number;
  title: string;
  subtitle: string;
  intro: string;
  points: { title: string; text: string }[];
}

export const strategicRecommendations: StrategicRecommendation[] = [
  {
    id: 1,
    title: "Budovanie „City Community“",
    subtitle: "Koniec anonymity",
    intro:
      "Väčšina taxi služieb v Brne je anonymná. Vy máte unikátnu výhodu – vašu flotilu bielych Superbov pozná každý.",
    points: [
      {
        title: "Tvár značky",
        text: "Ukážte svojich vodičov. Krátke videá na sociálne siete: „Toto je pán Pavel, jazdí v Brne 15 rokov a pozná každú skratku do Líšne.“ Ľudia si radšej objednajú auto u niekoho, koho „poznajú“.",
      },
      {
        title: "Lokálpatriotizmus",
        text: "Spojte sa s brnianskymi ikonami. Partnerstvá s hokejovou Kometou sú skvelé (už ich využívate), ale choďte hlbšie – staňte sa oficiálnym partnerom podujatí ako Brno True Story alebo lokálnych gastro festivalov.",
      },
    ],
  },
  {
    id: 2,
    title: "Extrémna personalizácia cez Appku",
    subtitle: "Marketing 2026",
    intro:
      "V roku 2026 už appka nestačí na objednanie, musí zákazníka poznať.",
    points: [
      {
        title: "Zvyky zákazníka",
        text: "Ak niekto jazdí každý piatok večer z centra do Bystrca, appka mu v piatok o 22:00 pošle notifikáciu: „Ahoj, auto v centre máme o 3 minúty, chceš odviezť domov za tvoju vernostnú cenu?“",
      },
      {
        title: "Gamifikácia",
        text: "Zaveďte statusy. „City Legend“ (zákazník s 100+ jazdami) môže mať prioritné pristavenie v špičke alebo auto vyššej triedy za cenu štandardu.",
      },
    ],
  },
  {
    id: 3,
    title: "Biznis segment ako „Zlatá baňa“",
    subtitle: "Kým Top1Taxi bojuje o študentov cenou, vy ovládnite korporátne Brno.",
    intro: "",
    points: [
      {
        title: "White-label servis",
        text: "Ponúknite firmám v technologickom parku (Spielberk, Titanic) dedikovaný portál. Cestujúci manažér nesmie riešiť bločky – všetko ide na mesačnú faktúru s logom jeho firmy v appke.",
      },
      {
        title: "Silent Ride (Tichá jazda)",
        text: "Zaveďte v aplikácii voľbu „Tichá jazda“. Biznis klientela ocení, ak vodič nezačne debatu o politike, ale nechá ich v pokoji pracovať.",
      },
    ],
  },
  {
    id: 4,
    title: "Ovládnutie „Zero-Click“ vyhľadávania",
    subtitle: "Zákazník dnes nehľadá „taxislužba Brno“, ale povie Siri/Google Assistantovi: „Zavolaj mi taxík.“",
    intro: "",
    points: [
      {
        title: "Lokálne SEO",
        text: "Váš Google Business Profile musí byť v Brne bezchybný. Odpovedajte na každú recenziu (aj negatívnu) do 2 hodín. Negatívna recenzia so skvelou odpoveďou predáva lepšie ako 5 tichých hviezdičiek.",
      },
      {
        title: "QR kódy na „hotspotoch“",
        text: "Umiestnite QR kódy s prednastaveným cieľom (napr. „Smer Hlavní nádraží“) na strategické miesta (vstupy do biznis centier, populárne bary).",
      },
    ],
  },
  {
    id: 5,
    title: "„Bezpečnosť“ ako hlavný komunikačný pilier",
    subtitle: "V dobe rastúcej popularity platforiem (Bolt/Uber) je vašou najväčšou devízou istota.",
    intro: "",
    points: [
      {
        title: "Garancia vodiča",
        text: "Komunikujte, že každý váš vodič má skúšky z místopisu a čistý register. Vytvorte kampaň: „Vieme, kto vás vezie.“",
      },
      {
        title: "Standard čistoty",
        text: "Ak sú vaše autá biele, musia byť symbolom čistoty. Zaveďte „vôňu City Taxi“ – jednotný osviežovač vzduchu, ktorý zákazníkovi okamžite povie: „Som v City Taxi, tu je všetko v poriadku.“",
      },
    ],
  },
  {
    id: 6,
    title: "Odvážny sľub (Guerilla Marketing)",
    subtitle: "Aby ste boli jednotkou, musíte dať sľub, ktorý konkurencia nedokáže splniť.",
    intro: "",
    points: [
      {
        title: "Sľub 5 minút",
        text: "„V širšom centre Brna sme u vás do 5 minút. Ak nie, ďalšia jazda je s 50% zľavou.“ (Tento sľub musí byť podložený dátami z dispečingu, ale marketingovo je to killer)",
      },
    ],
  },
];
