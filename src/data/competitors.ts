export interface Competitor {
  id: string;
  name: string;
  website: string;
  tagline: string;
  message: string;
  emotions: string[];
  story: string;
  differentiation: string;
  targetGroup: string;
  style: string;
  slogan?: string;
}

export const competitors: Competitor[] = [
  {
    id: "ms-taxi",
    name: "MS-TAXI",
    website: "ms-taxi.cz",
    tagline: "Kvalitná preprava za rozumné ceny",
    message: "Kvalitná preprava osôb za rozumné ceny. Hlavným sľubom je férovosť a dochvíľnosť.",
    emotions: ["Dôvera", "Solídnosť", "Lokálna znalosť"],
    story: "Tradičná taxislužba, ktorá vsádza na „čisté autá a slušných vodičov“. Nehrá sa na high-tech startup, ale na poctivé remeslo.",
    differentiation: "Silný dôraz na letiskové transfery (Viedeň, Praha) a drink taxi.",
    targetGroup: "Bežní obyvatelia Brna, turisti potrebujúci transfer.",
    style: "Vecný, profesionálny, mierne konzervatívny.",
    slogan: "Váš spoľahlivý partner na cestách.",
  },
  {
    id: "taxi-maja",
    name: "Taxi Mája Brno",
    website: "jizda.eu",
    tagline: "Viac než len taxi",
    message: "Maximálna dostupnosť a široké portfólio služieb.",
    emotions: ["Ochota", "Pomoc (asistenčné služby)", "Flexibilita"],
    story: "„Viac než len taxi.“ Prezentujú sa ako multifunkčný dopravca (kuriér, štartovanie cez káble, drink taxi).",
    differentiation: "Extrémne široký záber doplnkových služieb (od nákupov po asistenciu).",
    targetGroup: "Ľudový zákazník, ľudia v núdzi (vybitá baterka), nočný život.",
    style: "Priateľský, neformálny, zameraný na riešenie problému.",
  },
  {
    id: "ave-taxi",
    name: "Ave Taxi Brno",
    website: "avetaxibrno.cz",
    tagline: "Rýchlosť a nonstop dostupnosť",
    message: "Rýchlosť a nonstop dostupnosť v rámci celého Brna.",
    emotions: ["Pohotovosť", "Istota, že sa dovoláte"],
    story: "Klasický mestský dispečing. Budujú obraz „všadeprítomného taxi“.",
    differentiation: "Zameranie na jazdu po meste a fixné ceny na vybrané trasy.",
    targetGroup: "Bežný mestský zákazník, študenti, ľudia vracajúci sa z akcií.",
    style: "Dispečersky stručný, funkčný, bez zbytočného marketingu.",
  },
  {
    id: "top1taxi",
    name: "Top1Taxi",
    website: "top1taxi.cz",
    tagline: "Najlacnejšie taxi v Brne",
    message: "„Najlacnejšie taxi v Brne“ (dlhodobo komunikované cez cenu od 80–90 Kč).",
    emotions: ["Úspora", "Efektivita", "Modernosť (vlastná appka)"],
    story: "Dravý, nízkonákladový hráč, ktorý chce dominovať objemom objednávok.",
    differentiation: "Agresívna cenová politika a technologické riešenia (vlastná mobilná aplikácia).",
    targetGroup: "Mladí ľudia, študenti, cenovo senzitívni zákazníci.",
    style: "Dynamický, moderný, technologický.",
    slogan: "Jazdite lacnejšie.",
  },
  {
    id: "taxi-impuls",
    name: "Taxi Impuls",
    website: "taxi-impuls.cz",
    tagline: "Tradičná kvalita a veľká flotila",
    message: "Tradičná kvalita a veľká flotila.",
    emotions: ["Stabilita", "Professionalita", "Bezpečie"],
    story: "Jedna z najstarších a najväčších služieb v Brne. Pozícia „istoty na trhu“.",
    differentiation: "Veľký počet vozidiel, čo zaručuje krátke dojazdové časy. Silné firemné zázemie.",
    targetGroup: "Biznis klientela, konzervatívni zákazníci, štátne inštitúcie.",
    style: "Formálny, autoritatívny, zdôrazňujúci históriu a veľkosť.",
  },
  {
    id: "eso-taxi",
    name: "ESO Taxi",
    website: "esotaxibrno.cz",
    tagline: "Pohodlie a individuálny prístup",
    message: "Pohodlie a individuálny prístup.",
    emotions: ["Komfort", "Ústretovosť"],
    story: "Menšia, rodinnejšia firma, ktorá vsádza na vzťah so zákazníkom.",
    differentiation: "Čistota interiérov a ochota vodičov nad rámec bežných povinností.",
    targetGroup: "Ženy, rodiny s deťmi, starší ľudia, ktorí hľadajú slušnosť.",
    style: "Ľudský, jemný, zameraný na detail.",
  },
  {
    id: "roman-krejci",
    name: "Autodoprava Roman Krejčí",
    website: "brno-taxi.cz",
    tagline: "Osobný prístup a diaľkové trasy",
    message: "Osobný prístup majiteľa a špecializácia na diaľkové trasy.",
    emotions: ["Zodpovednosť", "Presnosť", "Bezpečnosť"],
    story: "Butiková preprava. Nie je to anonymný dispečing, ale konkrétne meno a tvár.",
    differentiation: "Luxusnejšie vozidlá (často Mercedes), zameranie na transfery na letiská a dlhé trasy.",
    targetGroup: "Manažéri, VIP hostia, individuálne transfery.",
    style: "Vysoko profesionálny, biznisový, strohý.",
  },
  {
    id: "jedeme-taxi",
    name: "Jedeme Taxi",
    website: "jedemetaxi.cz",
    tagline: "Moderná preprava pre 21. storočie",
    message: "Moderná preprava pre 21. storočie.",
    emotions: ["Rýchlosť", "Jednoduchosť", "Transparentnosť"],
    story: "Moderná alternatíva ku klasickým „starým“ taxislužbám.",
    differentiation: "Prehľadný web, fixné ceny dopredu, moderný vozový park.",
    targetGroup: "Aktívni ľudia, turisti využívajúci online objednávanie.",
    style: "Svieži, digitálny, jasný.",
  },
  {
    id: "lido-taxi",
    name: "Lido Taxi",
    website: "taxi-brno.eu",
    tagline: "Legenda brnianskych ulíc",
    message: "Najtradičnejšie brnianske taxi (založené 1990).",
    emotions: ["Tradícia", "Lokálpatriotizmus", "Skúsenosť"],
    story: "„Legenda brnianskych ulíc.“ Stavajú na tom, že poznajú každú uličku v Brne.",
    differentiation: "Krátke telefónne číslo 14314, silná nostalgia a lojalita starších Brňanov.",
    targetGroup: "Staršia generácia, firmy s dlhodobou zmluvou, lokálni patrioti.",
    style: "Konzervatívny, dôveryhodný, „stará škola“.",
  },
  {
    id: "ella-taxi",
    name: "Ella Taxi",
    website: "ellataxi.cz",
    tagline: "Férové ceny a spoľahlivosť",
    message: "Férové ceny a spoľahlivosť bez kompromisov.",
    emotions: ["Transparentnosť", "Slušnosť"],
    story: "Férový hráč na trhu, ktorý bojuje proti „nešvárom“ taxikárov.",
    differentiation: "Pevné ceny, čistý marketing bez skrytých poplatkov.",
    targetGroup: "Turisti (ktorí sa boja oklamania) a bežní cestujúci.",
    style: "Priamy, otvorený, férový.",
  },
];

/** City Taxi v rovnakom tvare ako konkurenti – na porovnanie „vyber si dve firmy“. */
export const cityTaxiCompetitor: Competitor = {
  id: "city-taxi",
  name: "City Taxi Brno",
  website: "citytaxibrno.cz",
  tagline: "Moderná technológia a vysoký štandard",
  message:
    "City Taxi sa profiluje ako moderná, technologicky vyspelá služba (aplikácia) s dôrazom na vysoký štandard vozového parku. Komunikujú profesionalitu a biznis úroveň.",
  emotions: ["Professionalita", "Technológia", "Kvalita vozového parku"],
  story: "Moderná taxislužba s jednotným vizuálom a vlastnou aplikáciou. Korporátne a upratane.",
  differentiation: "Vlastná aplikácia, jednotný vozový park (často biele vozidlá), biznis úroveň.",
  targetGroup: "Biznis klientela, cenovo orientovaní zákazníci vyhľadávajúci kvalitu.",
  style: "Korporátny, digitálny, profesionálny.",
};

/** Všetky firmy (City Taxi + 10 konkurentov) na výber v porovnávaní. */
export const allForComparison: Competitor[] = [cityTaxiCompetitor, ...competitors];

export const cityTaxiAnalysis = {
  client: "City Taxi Brno",
  website: "citytaxibrno.cz",
  positioning:
    "City Taxi sa profiluje ako moderná, technologicky vyspelá služba (aplikácia) s dôrazom na vysoký štandard vozového parku (často biele vozidlá, zjednotený vizuál). Komunikujú profesionalitu a biznis úroveň.",
  strengths: [
    "Vizuálna identita: Pôsobia najviac „korporátne“ a upratane v dobrom slova zmysle.",
    "Technológia: Kvalitná vlastná aplikácia, ktorá konkuruje Boltu/Uberu, ale s kvalitou taxi.",
    "Vozový park: Jednota a čistota vozidiel (pôsobia prémiovejšie než Lido alebo Ave).",
  ],
  weaknesses: [
    "Emocionálna odťažitosť: Komunikácia je občas až príliš chladná a sterilná v porovnaní s ESO alebo Mája.",
    "Zameniteľnosť: V mori „profesionálnych taxi“ sa niekedy stráca ich unikátny príbeh (prečo práve City?).",
  ],
  opportunities: [
    "Storytelling: Prejsť od „máme autá a appku“ k „sme súčasťou pohybu Brna“. Viac zdôrazniť lokálne partnerstvá (napr. preprava na Brnianske podujatia).",
    "Segmentácia: Viac vyzdvihnúť „City Business“ pre firmy. Mnohé firmy v Brne hľadajú alternatívu k neosobným aplikáciám, kde dostanú faktúru a garantovanú kvalitu.",
    "Jasný sľub: Zatiaľ čo Top1 má „cenu“, City by malo mať „garanciu“. Napr. „Ak neprídeme do 8 minút, máte zľavu“ (odvážne, ale účinné).",
    "Komunikácia hodnôt: Zdôrazniť bezpečnosť vodičov (previerky) – v dobe anonymných platforiem je toto obrovská výhoda klasického taxi.",
  ],
  comparison: [
    { vs: "Top1Taxi", text: "City je prémiové, Top1 je low-cost." },
    { vs: "Lido Taxi", text: "City je moderná budúcnosť, Lido je úctyhodná minulosť." },
    { vs: "Taxi Impuls", text: "City pôsobí agilnejšie a digitálnejšie." },
  ],
};
