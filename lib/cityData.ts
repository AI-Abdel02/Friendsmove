/**
 * Programmatic SEO city data.
 * To add a new city: add an entry here + create app/umzug-{slug}/page.tsx (5 lines).
 */

import type { FaqItem } from "@/types";

export interface CityDistrict {
  icon: string;
  title: string;
  desc: string;
}

export interface CityPageData {
  /** Display name */
  name: string;
  /** URL slug — must match the folder name umzug-{slug} */
  slug: string;
  /** Canonical URL path, e.g. /umzug-mannheim */
  path: string;
  /** Corresponding /regionen/{regionenSlug} page (for internal linking) */
  regionenSlug: string;
  /** Hero label above H1 */
  heroLabel: string;
  /** H1 first line */
  h1Line1: string;
  /** H1 highlighted second line */
  h1Line2: string;
  /** Hero intro paragraph */
  heroParagraph: string;
  /** Trust chips in the hero */
  chips: string[];
  /** Local knowledge section label */
  localLabel: string;
  /** H2 for local knowledge section */
  localH2: string;
  /** Paragraph 1 of local knowledge section */
  localP1: string;
  /** Paragraph 2 (may contain mention of /regionen/ link) */
  localP2: string;
  /** Optional extra link label and href shown in localP2 */
  extraLink?: { label: string; href: string };
  /** 4 city districts/areas */
  districts: CityDistrict[];
  /** 3 city-specific FAQs */
  faqs: FaqItem[];
  /** SEO meta title */
  metaTitle: string;
  /** SEO meta description */
  metaDescription: string;
  /** OpenGraph title */
  ogTitle: string;
  /** OpenGraph description */
  ogDescription: string;
  /** Schema.org name for cityBusinessSchema (may differ, e.g. Frankfurt am Main) */
  schemaName: string;
  /** Schema.org slug for cityBusinessSchema */
  schemaSlug: string;
}

export const CITY_PAGES: Record<string, CityPageData> = {
  mannheim: {
    name: "Mannheim",
    slug: "mannheim",
    path: "/umzug-mannheim",
    regionenSlug: "mannheim",
    heroLabel: "Umzug Mannheim",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Mannheim",
    heroParagraph:
      "FriendsMove – Ihr lokaler Umzugspartner in der Quadratestadt. Ob Innenstadt, Käfertal, Rheinau oder Lindenhof – wir kennen Mannheim und sorgen für einen reibungslosen Umzug.",
    chips: ["Lokale Ortskenntnis", "Halteverbotszone möglich", "Festpreis", "Vollversichert"],
    localLabel: "Mannheim – Lokal kennen wir uns aus",
    localH2: "Umzug in Mannheim – was Sie wissen sollten",
    localP1:
      "Mannheims einzigartiges Quadratesystem macht die Stadt attraktiv – stellt aber bei Umzügen besondere Anforderungen. Enge Zugänge, begrenzte Parkmöglichkeiten und Straßenbahn-Trassen erfordern gute Ortskenntnis und durchdachte Planung.",
    localP2:
      "Als regional verwurzeltes Unternehmen kennen wir die besten Anfahrtswege, wissen wo Halteverbotszonen nötig sind und haben die nötigen Kontakte zum Ordnungsamt. Mehr zu unseren Leistungen in der Quadratestadt auf unserer",
    districts: [
      { icon: "🏙", title: "Innenstadt / Quadrate", desc: "Halteverbotszone meist notwendig" },
      { icon: "🌳", title: "Lindenhof & Neckarstadt", desc: "Straßenparkplätze begrenzt" },
      { icon: "🏘", title: "Sandhofen & Käfertal", desc: "Gute Erreichbarkeit, Neubaugebiete" },
      { icon: "🌉", title: "Rheinau & Almenhof", desc: "Wachsende Wohngebiete" },
    ],
    faqs: [
      {
        question: "Benötige ich für einen Umzug in Mannheim eine Halteverbotszone?",
        answer:
          "In Mannheims Quadraten und vielen innerstädtischen Gebieten ist eine Halteverbotszone sinnvoll oder notwendig. Wir beantragen diese für Sie beim Ordnungsamt – sprechen Sie uns einfach darauf an.",
      },
      {
        question: "Wie lange dauert ein Umzug innerhalb von Mannheim?",
        answer:
          "Das hängt von Wohnungsgröße und Stockwerk ab. Eine 2-Zimmer-Wohnung innerhalb der Stadt dauert typischerweise 3–5 Stunden. Wir erstellen Ihnen ein genaues Angebot.",
      },
      {
        question: "Kann FriendsMove auch kurzfristig in Mannheim helfen?",
        answer:
          "Ja, wir haben oft noch kurzfristige Kapazitäten. Rufen Sie uns an oder schreiben Sie uns – wir prüfen sofort, was möglich ist.",
      },
    ],
    metaTitle: "Umzug Mannheim – Umzugsunternehmen Mannheim | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Mannheim. Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Min. Jetzt kostenlos anfragen.",
    ogTitle: "Umzug Mannheim – FriendsMove Umzugsunternehmen",
    ogDescription: "Ihr regionaler Umzugspartner in Mannheim. Transparent, zuverlässig, vollversichert.",
    schemaName: "Mannheim",
    schemaSlug: "mannheim",
  },

  heidelberg: {
    name: "Heidelberg",
    slug: "heidelberg",
    path: "/umzug-heidelberg",
    regionenSlug: "heidelberg",
    heroLabel: "Umzug Heidelberg",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Heidelberg",
    heroParagraph:
      "FriendsMove – Ihr zuverlässiger Umzugspartner in der romantischen Universitätsstadt. Altstadt, Weststadt, Kirchheim oder Ziegelhausen – wir kennen Heidelbergs Besonderheiten.",
    chips: ["Altstadt-Erfahrung", "Halteverbotszone möglich", "Festpreis", "Vollversichert"],
    localLabel: "Heidelberg – Lokal kennen wir uns aus",
    localH2: "Umzug in Heidelberg – worauf es ankommt",
    localP1:
      "Heidelbergs historische Altstadt ist wunderschön – für Umzüge aber eine echte Herausforderung. Enge Gassen, eingeschränkte Zufahrtsmöglichkeiten und begrenzte Parkflächen in der Weststadt erfordern sorgfältige Planung und erfahrene Umzugsprofis.",
    localP2:
      "Als Team mit guter Ortskenntnis wissen wir, wie man auch in schwer zugänglichen Stadtteilen effizient arbeitet. Halteverbotszonen beantragen wir für Sie rechtzeitig beim Ordnungsamt. Mehr zu unseren lokalen Leistungen auf unserer",
    districts: [
      { icon: "🏰", title: "Altstadt", desc: "Enge Gassen, Halteverbotszone Pflicht" },
      { icon: "🏙", title: "Weststadt", desc: "Dichte Bebauung, Parkplatzmangel" },
      { icon: "🌿", title: "Neuenheim & Handschuhsheim", desc: "Ruhige, begehrte Stadtteile" },
      { icon: "🏘", title: "Kirchheim & Emmertsgrund", desc: "Gut erreichbare Stadtrand-Lagen" },
    ],
    faqs: [
      {
        question: "Wie organisiert FriendsMove Umzüge in Heidelbergs Altstadt?",
        answer:
          "Die engen Gassen der Heidelberger Altstadt erfordern besondere Planung. Wir beantragen rechtzeitig eine Halteverbotszone und setzen passende Fahrzeuge ein, um Ihren Umzug reibungslos durchzuführen.",
      },
      {
        question: "Hilft FriendsMove auch bei Studentenumzügen in Heidelberg?",
        answer:
          "Ja. Studentenumzüge sind bei uns ganz regulär buchbar – auch kurzfristig oder mit kleinem Volumen. Fragen Sie einfach nach einem Angebot.",
      },
      {
        question: "Wie weit im Voraus sollte ich in Heidelberg buchen?",
        answer:
          "2–4 Wochen Vorlauf sind ideal, besonders für Umzüge in der Altstadt oder Weststadt. Bei kurzfristigen Anfragen rufen Sie uns direkt an – wir schauen was möglich ist.",
      },
    ],
    metaTitle: "Umzug Heidelberg – Umzugsunternehmen Heidelberg | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Heidelberg. Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Min. Jetzt kostenlos anfragen.",
    ogTitle: "Umzug Heidelberg – FriendsMove Umzugsunternehmen",
    ogDescription: "Ihr regionaler Umzugspartner in Heidelberg. Transparent, zuverlässig, vollversichert.",
    schemaName: "Heidelberg",
    schemaSlug: "heidelberg",
  },

  ludwigshafen: {
    name: "Ludwigshafen",
    slug: "ludwigshafen",
    path: "/umzug-ludwigshafen",
    regionenSlug: "ludwigshafen",
    heroLabel: "Umzug Ludwigshafen",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Ludwigshafen",
    heroParagraph:
      "FriendsMove – Ihr zuverlässiger Umzugspartner in Ludwigshafen am Rhein. Von der Innenstadt bis Maudach oder Ruchheim – professionell und ortskundig.",
    chips: ["Lokale Ortskenntnis", "Rhein-Neckar-Region", "Festpreis", "Vollversichert"],
    localLabel: "Ludwigshafen – Lokal kennen wir uns aus",
    localH2: "Umzug in Ludwigshafen – lokal und zuverlässig",
    localP1:
      "Ludwigshafen am Rhein ist eine vielfältige Stadt mit unterschiedlichen Wohnquartieren – von der belebten Innenstadt bis zu ruhigeren Stadtteilen wie Maudach oder Ruchheim. Als erfahrenes Umzugsunternehmen kennen wir die lokalen Gegebenheiten und planen jeden Umzug optimal.",
    localP2:
      "Umzüge zwischen Ludwigshafen und dem benachbarten Mannheim oder anderen Städten der Rhein-Neckar-Region führen wir täglich durch. Mehr zu unseren lokalen Leistungen auf unserer",
    districts: [
      { icon: "🏙", title: "Innenstadt", desc: "Belebte Wohngebiete, gut erschlossen" },
      { icon: "🏘", title: "Oggersheim", desc: "Bevölkerungsreicher Stadtteil" },
      { icon: "🌊", title: "Mundenheim & Oppau", desc: "Südliche Stadtteile am Rhein" },
      { icon: "🌿", title: "Maudach & Ruchheim", desc: "Ruhige Stadtrand-Lagen" },
    ],
    faqs: [
      {
        question: "Führt FriendsMove auch Umzüge zwischen Ludwigshafen und Mannheim durch?",
        answer:
          "Ja. Umzüge zwischen Ludwigshafen und Mannheim – über den Rhein – gehören zu unseren häufig gebuchten Strecken. Wir kennen die Route und planen effizient.",
      },
      {
        question: "Wie kurzfristig kann ich in Ludwigshafen einen Umzug buchen?",
        answer:
          "Wir versuchen auch kurzfristige Anfragen zu erfüllen. Rufen Sie uns direkt an – wir prüfen sofort die verfügbaren Kapazitäten.",
      },
      {
        question: "Bietet FriendsMove auch Firmenumzüge in Ludwigshafen an?",
        answer:
          "Ja. Wir organisieren Büro- und Firmenumzüge in Ludwigshafen mit minimaler Betriebsunterbrechung – auf Wunsch am Wochenende oder außerhalb der Geschäftszeiten.",
      },
    ],
    metaTitle: "Umzug Ludwigshafen – Umzugsunternehmen Ludwigshafen | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Ludwigshafen am Rhein. Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Min. Jetzt anfragen.",
    ogTitle: "Umzug Ludwigshafen – FriendsMove Umzugsunternehmen",
    ogDescription:
      "Ihr regionaler Umzugspartner in Ludwigshafen am Rhein. Transparent, zuverlässig, vollversichert.",
    schemaName: "Ludwigshafen",
    schemaSlug: "ludwigshafen",
  },

  schwetzingen: {
    name: "Schwetzingen",
    slug: "schwetzingen",
    path: "/umzug-schwetzingen",
    regionenSlug: "schwetzingen",
    heroLabel: "Umzug Schwetzingen",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Schwetzingen",
    heroParagraph:
      "FriendsMove – Ihr zuverlässiger Umzugspartner in der Schlossstadt Schwetzingen und der gesamten Kurpfalz. Professionell, pünktlich, vollversichert.",
    chips: ["Kurpfalz-Region", "Festpreis", "Vollversichert", "Antwort in 60 Min."],
    localLabel: "Schwetzingen – Lokal kennen wir uns aus",
    localH2: "Umzug in Schwetzingen – kompetent und regional",
    localP1:
      "Schwetzingen liegt strategisch günstig zwischen Mannheim und Heidelberg – ideal für Umzüge innerhalb der Kurpfalzregion. Wir kennen die örtlichen Gegebenheiten, die Parkplatzsituation rund um den Schlossgarten und die besten Routen in die umliegenden Gemeinden.",
    localP2:
      "Neben Schwetzingen bedienen wir auch die Umlandgemeinden Plankstadt, Oftersheim, Hockenheim und Brühl. Mehr zu unseren regionalen Leistungen auf unserer",
    districts: [
      { icon: "🏛️", title: "Schlossbereich", desc: "Zentrale Lage, Parkmöglichkeiten begrenzt" },
      { icon: "🏘", title: "Hirschacker & Nordstadt", desc: "Gut erreichbare Wohngebiete" },
      { icon: "🌿", title: "Oftersheim & Plankstadt", desc: "Umlandgemeinden, ruhig und gut erreichbar" },
      { icon: "🏗", title: "Hockenheim & Brühl", desc: "Südliche Nachbargemeinden" },
    ],
    faqs: [
      {
        question: "Ist FriendsMove auch in den umliegenden Gemeinden von Schwetzingen tätig?",
        answer:
          "Ja. Wir führen Umzüge in Schwetzingen sowie in Plankstadt, Oftersheim, Hockenheim und der gesamten Kurpfalzregion durch.",
      },
      {
        question: "Wie schnell erhalte ich ein Angebot für meinen Umzug in Schwetzingen?",
        answer:
          "In der Regel melden wir uns innerhalb von 60 Minuten auf Ihre Anfrage – auch samstags. Füllen Sie das Formular aus oder rufen Sie uns direkt an.",
      },
      {
        question: "Bietet FriendsMove auch Möbelmontage in Schwetzingen an?",
        answer:
          "Ja, wir bieten Möbelmontage und Küchenmontage in Schwetzingen als separate Leistungen an – unabhängig von einem Umzug buchbar.",
      },
    ],
    metaTitle: "Umzug Schwetzingen – Umzugsunternehmen Schwetzingen | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Schwetzingen. Privatumzug, Möbelmontage – vollversichert, Festpreis, schnell verfügbar. Jetzt kostenlos anfragen.",
    ogTitle: "Umzug Schwetzingen – FriendsMove Umzugsunternehmen",
    ogDescription: "Ihr regionaler Umzugspartner in Schwetzingen. Transparent, zuverlässig, vollversichert.",
    schemaName: "Schwetzingen",
    schemaSlug: "schwetzingen",
  },

  weinheim: {
    name: "Weinheim",
    slug: "weinheim",
    path: "/umzug-weinheim",
    regionenSlug: "weinheim",
    heroLabel: "Umzug Weinheim",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Weinheim",
    heroParagraph:
      "FriendsMove – Ihr zuverlässiger Umzugspartner in Weinheim an der Bergstraße. Ob Innenstadt, Sulzbach oder die Berglagen – wir kennen die Zwei-Burgen-Stadt.",
    chips: ["Bergstraße-Region", "Festpreis", "Vollversichert", "Lokale Ortskenntnis"],
    localLabel: "Weinheim – Lokal kennen wir uns aus",
    localH2: "Umzug in Weinheim – Bergstraße kennen wir",
    localP1:
      "Weinheims Stadtteile liegen teils auf erhöhten Lagen entlang der Bergstraße, was bei Umzügen besondere Anforderungen an Fahrzeuge und Planung stellt. Wir kennen die Strecken, die Hanglage-Stadtteile und die passenden Lösungen für jeden Umzug.",
    localP2:
      "Neben Weinheim selbst betreuen wir auch Lützelsachsen, Hohensachsen, Hemsbach und Laudenbach. Mehr auf unserer",
    districts: [
      { icon: "🏙", title: "Innenstadt", desc: "Zentrale Lage, gute Erreichbarkeit" },
      { icon: "⛰", title: "Sulzbach & Rippenweier", desc: "Erhöhte Lagen, sorgfältige Planung nötig" },
      { icon: "🌳", title: "Lützelsachsen", desc: "Ruhiger Vorort, idyllische Weinberglage" },
      { icon: "🏘", title: "Hemsbach & Laudenbach", desc: "Nördliche Nachbarorte" },
    ],
    faqs: [
      {
        question: "Führt FriendsMove auch Umzüge in Weinheims Hanglagen durch?",
        answer:
          "Ja. Weinheims Stadtteile wie Sulzbach oder Rippenweier liegen erhöht. Wir planen solche Umzüge sorgfältig – mit passenden Fahrzeugen und erfahrenem Team.",
      },
      {
        question: "Können wir auch in umliegenden Gemeinden von Weinheim buchen?",
        answer:
          "Ja. Wir sind auch in Lützelsachsen, Hohensachsen, Hemsbach, Laudenbach und der gesamten nördlichen Bergstraße tätig.",
      },
      {
        question: "Was kostet ein Umzug in Weinheim?",
        answer:
          "Das hängt von Volumen, Etage und Entfernung ab. Senden Sie uns eine Anfrage – wir erstellen schnell ein kostenloses Festpreisangebot.",
      },
    ],
    metaTitle: "Umzug Weinheim – Umzugsunternehmen Weinheim | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Weinheim an der Bergstraße. Privatumzug, Möbelmontage – vollversichert, Festpreis, zuverlässig. Jetzt kostenlos anfragen.",
    ogTitle: "Umzug Weinheim – FriendsMove Umzugsunternehmen",
    ogDescription:
      "Ihr regionaler Umzugspartner in Weinheim an der Bergstraße. Transparent, zuverlässig, vollversichert.",
    schemaName: "Weinheim",
    schemaSlug: "weinheim",
  },

  frankfurt: {
    name: "Frankfurt am Main",
    slug: "frankfurt",
    path: "/umzug-frankfurt",
    regionenSlug: "frankfurt",
    heroLabel: "Umzug Frankfurt",
    h1Line1: "Umzug nach",
    h1Line2: "Frankfurt am Main",
    heroParagraph:
      "FriendsMove organisiert Ihren Umzug von der Rhein-Neckar-Region nach Frankfurt am Main – oder umgekehrt. Professionell geplant, vollversichert und zum transparenten Festpreis.",
    chips: ["Fernumzug möglich", "Festpreis", "Vollversichert", "Antwort in 60 Min."],
    localLabel: "Frankfurt – Fernumzug mit System",
    localH2: "Umzug von/nach Frankfurt – was Sie wissen sollten",
    localP1:
      "Frankfurt am Main liegt ca. 80–100 km von der Rhein-Neckar-Region entfernt. Ein Umzug dorthin ist ein klassischer Fernumzug, der sorgfältige Planung erfordert: Fahrzeugkapazität, optimale Routenführung und klare Zeitfenster für Be- und Entladen.",
    localP2:
      "FriendsMove hat Erfahrung mit überregionalen Umzügen und bietet Ihnen einen transparenten Festpreis für die gesamte Strecke. Mehr Infos zu unserem Fernumzugsservice auf unserer",
    extraLink: { label: "Fernumzug-Seite", href: "/fernumzug" },
    districts: [
      { icon: "🏦", title: "Sachsenhausen", desc: "Beliebt, alte und neue Bebauung" },
      { icon: "🎓", title: "Bockenheim & Nordend", desc: "Hohe Nachfrage, dicht bebaut" },
      { icon: "🌇", title: "Westend & Bornheim", desc: "Begehrte Wohnlagen" },
      { icon: "🏘", title: "Höchst & Sachsenhausen-Süd", desc: "Ruhigere Randlagen" },
    ],
    faqs: [
      {
        question: "Wie weit ist die Strecke von Mannheim/Heidelberg nach Frankfurt?",
        answer:
          "Die Strecke von Mannheim nach Frankfurt beträgt ca. 80–90 km, von Heidelberg ca. 90–100 km. Dies ist ein klassischer Fernumzug, den wir regelmäßig und zuverlässig durchführen.",
      },
      {
        question: "Kann FriendsMove einen Festpreis für den Umzug nach Frankfurt anbieten?",
        answer:
          "Ja. Nach Klärung von Volumen, Etage und Leistungsumfang erstellen wir ein transparentes Festpreisangebot für Ihren Umzug von oder nach Frankfurt.",
      },
      {
        question: "Wie lange dauert ein Umzug von der Rhein-Neckar-Region nach Frankfurt?",
        answer:
          "Typischerweise dauert ein solcher Umzug einen vollen Tag – inklusive Be- und Entladen sowie Transport. Bei großen Haushalten kann auch ein zweiter Tag eingeplant werden.",
      },
    ],
    metaTitle: "Umzug Frankfurt – Umzugsunternehmen Frankfurt am Main | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Frankfurt am Main. Fernumzug aus dem Rhein-Neckar-Gebiet nach Frankfurt – vollversichert, Festpreis, zuverlässig. Jetzt anfragen.",
    ogTitle: "Umzug Frankfurt – FriendsMove Umzugsunternehmen",
    ogDescription: "Fernumzug von Mannheim/Heidelberg nach Frankfurt. Vollversichert, Festpreis.",
    schemaName: "Frankfurt am Main",
    schemaSlug: "frankfurt",
  },

  lambsheim: {
    name: "Lambsheim",
    slug: "lambsheim",
    path: "/umzug-lambsheim",
    regionenSlug: "lambsheim",
    heroLabel: "Umzug Lambsheim",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Lambsheim",
    heroParagraph:
      "FriendsMove hat seinen Sitz in Lambsheim – mitten in der Vorderpfalz. Wir kennen die Region wie kein anderes Unternehmen und stehen Ihnen mit kurzen Reaktionszeiten zur Seite.",
    chips: ["Heimatstandort", "Festpreis", "Vollversichert", "Schnelle Reaktion"],
    localLabel: "Lambsheim – Unser Heimatstandort",
    localH2: "Umzug in Lambsheim und der Vorderpfalz",
    localP1:
      "Als in Lambsheim ansässiges Unternehmen kennen wir die Gemeinde und die gesamte Vorderpfalz aus dem Effeff. Kurze Wege, schnelle Verfügbarkeit und persönlicher Service sind unser Versprechen an alle Kunden in der Region.",
    localP2:
      "Neben Lambsheim betreuen wir auch Frankenthal, Grünstadt, Bobenheim-Roxheim und alle weiteren Gemeinden im Umkreis. Mehr Infos zur Region auf unserer",
    districts: [
      { icon: "🏡", title: "Ortskern Lambsheim", desc: "Unser Heimatstandort" },
      { icon: "🌾", title: "Bobenheim-Roxheim", desc: "Nachbargemeinde nördlich von Lambsheim" },
      { icon: "🏙️", title: "Frankenthal", desc: "Größte Stadt in unmittelbarer Nähe" },
      { icon: "🌳", title: "Grünstadt & Umland", desc: "Weinstraße-Region im Norden" },
    ],
    faqs: [
      {
        question: "Wo hat FriendsMove seinen Standort?",
        answer:
          "Unser Firmensitz ist in Lambsheim (Jahnstraße 28A, 67245 Lambsheim). Von hier aus bedienen wir die gesamte Rhein-Neckar- und Vorderpfalz-Region.",
      },
      {
        question: "Wie schnell kann FriendsMove in Lambsheim reagieren?",
        answer:
          "Da wir vor Ort ansässig sind, können wir in Lambsheim besonders schnell reagieren – auch für kurzfristige Anfragen und Notsituationen.",
      },
      {
        question: "Welche Leistungen bietet FriendsMove in Lambsheim an?",
        answer:
          "Wir bieten das vollständige Spektrum: Privatumzug, Firmenumzug, Möbelmontage, Küchenmontage, Klaviertransport, Entrümpelung und Halteverbotszone – alles aus einer Hand.",
      },
    ],
    metaTitle: "Umzugsunternehmen Lambsheim | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen in Lambsheim. Privatumzug, Firmenumzug, Möbelmontage und Entrümpelung in Lambsheim und Rhein-Neckar. Jetzt anfragen.",
    ogTitle: "Umzugsunternehmen Lambsheim – FriendsMove",
    ogDescription: "Ihr Umzugspartner direkt aus Lambsheim. Vollversichert, Festpreis, lokal verwurzelt.",
    schemaName: "Lambsheim",
    schemaSlug: "lambsheim",
  },

  frankenthal: {
    name: "Frankenthal",
    slug: "frankenthal",
    path: "/umzug-frankenthal",
    regionenSlug: "frankenthal",
    heroLabel: "Umzug Frankenthal",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Frankenthal",
    heroParagraph:
      "FriendsMove – Ihr regionaler Umzugspartner in Frankenthal (Pfalz). Vom Stadtzentrum bis zu den Außenbezirken: professionell, vollversichert und mit Festpreis.",
    chips: ["Vorderpfalz-Region", "Festpreis", "Vollversichert", "Antwort in 60 Min."],
    localLabel: "Frankenthal – Lokal kennen wir uns aus",
    localH2: "Umzug in Frankenthal – zuverlässig in der Vorderpfalz",
    localP1:
      "Frankenthal liegt zentral in der Vorderpfalz, direkt zwischen Mannheim und Worms. Als in Lambsheim beheimatetes Unternehmen sind wir bestens mit den lokalen Gegebenheiten in Frankenthal vertraut – kurze Anfahrtswege inklusive.",
    localP2:
      "Wir führen Umzüge im gesamten Stadtgebiet Frankenthals durch und bedienen auch die umliegenden Ortschaften. Mehr zur Region auf unserer",
    districts: [
      { icon: "🏙️", title: "Innenstadt", desc: "Gut erschlossen, zentrale Lage" },
      { icon: "🏘", title: "Flomersheim & Eppstein", desc: "Eingemeindete Ortsteile im Norden" },
      { icon: "🌾", title: "Studernheim & Beindersheim", desc: "Südliche Ortsteile" },
      { icon: "🏗", title: "Industriegebiet Nord", desc: "Für Firmenumzüge gut erreichbar" },
    ],
    faqs: [
      {
        question: "Wie schnell ist FriendsMove in Frankenthal vor Ort?",
        answer:
          "Da unser Standort in Lambsheim liegt – nur wenige Kilometer von Frankenthal entfernt – können wir sehr kurzfristig reagieren. Rufen Sie uns an und wir klären sofort die Verfügbarkeit.",
      },
      {
        question: "Bietet FriendsMove auch Entrümpelung in Frankenthal an?",
        answer:
          "Ja. Wir räumen Wohnungen, Keller und Dachböden in Frankenthal professionell aus – inklusive umweltgerechter Entsorgung.",
      },
      {
        question: "Kann FriendsMove auch Umzüge innerhalb von Frankenthal durchführen?",
        answer:
          "Ja, auch Umzüge innerhalb der Stadt – z. B. von einem Stadtteil in den anderen – sind bei uns problemlos buchbar. Fragen Sie jetzt ein Angebot an.",
      },
    ],
    metaTitle: "Umzug Frankenthal – Umzugsunternehmen Frankenthal | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Frankenthal (Pfalz). Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Min. Jetzt anfragen.",
    ogTitle: "Umzug Frankenthal – FriendsMove Umzugsunternehmen",
    ogDescription: "Ihr regionaler Umzugspartner in Frankenthal (Pfalz). Transparent, zuverlässig, vollversichert.",
    schemaName: "Frankenthal",
    schemaSlug: "frankenthal",
  },

  viernheim: {
    name: "Viernheim",
    slug: "viernheim",
    path: "/umzug-viernheim",
    regionenSlug: "viernheim",
    heroLabel: "Umzug Viernheim",
    h1Line1: "Umzugsunternehmen",
    h1Line2: "in Viernheim",
    heroParagraph:
      "FriendsMove – Ihr Umzugspartner in Viernheim, direkt an der Bergstraße. Schnell, zuverlässig und vollversichert – für Privat- und Firmenumzüge.",
    chips: ["Bergstraße-Region", "Festpreis", "Vollversichert", "Lokale Ortskenntnis"],
    localLabel: "Viernheim – Lokal kennen wir uns aus",
    localH2: "Umzug in Viernheim – professionell an der Bergstraße",
    localP1:
      "Viernheim liegt direkt an der Grenze zwischen Hessen und Baden-Württemberg, in unmittelbarer Nähe zu Mannheim und Weinheim. Wir kennen die lokalen Besonderheiten – von der gut erschlossenen Innenstadt bis zu den Wohngebieten am Stadtrand.",
    localP2:
      "Als regional tätiges Unternehmen aus dem Rhein-Neckar-Gebiet sind wir ideal für Umzüge in Viernheim und Umgebung aufgestellt. Mehr auf unserer",
    districts: [
      { icon: "🏘", title: "Innenstadt", desc: "Gut erschlossen, dichte Bebauung" },
      { icon: "🌿", title: "Stadtrand West", desc: "Neuere Wohngebiete, gut erreichbar" },
      { icon: "🛍", title: "Viernheim-Süd", desc: "Nähe zum Rhein-Neckar-Zentrum" },
      { icon: "🌲", title: "Randgebiete & Wald", desc: "Ruhige Lagen mit guten Zufahrten" },
    ],
    faqs: [
      {
        question: "Führt FriendsMove Umzüge zwischen Viernheim und Mannheim durch?",
        answer:
          "Ja. Umzüge zwischen Viernheim und Mannheim oder Weinheim gehören zu unserem Tagesgeschäft – schnelle Verbindung, planbare Durchführung.",
      },
      {
        question: "Ist eine Halteverbotszone in Viernheim notwendig?",
        answer:
          "Das hängt von der genauen Adresse ab. In dichter bebauten Bereichen empfehlen wir eine Halteverbotszone. Wir beraten Sie und beantragen diese bei Bedarf für Sie.",
      },
      {
        question: "Wie lange dauert ein Umzug in Viernheim?",
        answer:
          "Ein typischer 2-Zimmer-Umzug in Viernheim dauert 3–5 Stunden. Bei größeren Haushalten planen wir mehr Zeit ein. Fordern Sie jetzt ein unverbindliches Angebot an.",
      },
    ],
    metaTitle: "Umzug Viernheim – Umzugsunternehmen Viernheim | FriendsMove",
    metaDescription:
      "Professionelles Umzugsunternehmen für Viernheim an der Bergstraße. Privatumzug, Möbelmontage – vollversichert, Festpreis, zuverlässig. Jetzt kostenlos anfragen.",
    ogTitle: "Umzug Viernheim – FriendsMove Umzugsunternehmen",
    ogDescription: "Ihr Umzugspartner in Viernheim. Transparent, vollversichert, Festpreis möglich.",
    schemaName: "Viernheim",
    schemaSlug: "viernheim",
  },
};

/** Ordered list of all city slugs — used by sitemap and navigation. */
export const CITY_PAGE_SLUGS = Object.keys(CITY_PAGES) as Array<keyof typeof CITY_PAGES>;
