import type {
  ServiceItem, CityItem, TestimonialItem,
  FAQItem, PricingScenario, ProcessStep, NavItem
} from '@/types'

export const COMPANY = {
  name: 'FriendsMove',
  tagline: 'Ihr Umzugspartner im Rhein-Neckar-Gebiet',
  phone: '+49 621 000 0000',
  phoneDisplay: '0621 000 0000',
  email: 'info@friendsmove.de',
  address: {
    street: 'Musterstraße 1',
    city: 'Mannheim',
    zip: '68159',
    region: 'Baden-Württemberg',
    country: 'Deutschland',
  },
  hours: 'Mo–Fr 7:00–18:00, Sa 8:00–14:00',
  rating: '4,9',
  reviewCount: 148,
  moveCount: '120+',
  responseTime: '60 Min.',
} as const

export const SERVICES: ServiceItem[] = [
  {
    slug: 'privatumzug',
    title: 'Privatumzug',
    shortTitle: 'Privatumzug',
    description: 'Stressfreier Umzug für Familien und Einzelpersonen – komplett geplant und sicher durchgeführt.',
    icon: '🏠',
    href: '/privatumzug',
  },
  {
    slug: 'firmenumzug',
    title: 'Firmenumzug',
    shortTitle: 'Firmenumzug',
    description: 'Büro- und Betriebsumzüge mit minimalen Ausfallzeiten und professioneller Koordination.',
    icon: '🏢',
    href: '/firmenumzug',
  },
  {
    slug: 'moebelmontage',
    title: 'Möbelmontage',
    shortTitle: 'Möbelmontage',
    description: 'Auf- und Abbau von Möbeln aller Art – IKEA, Maßmöbel, komplexe Systeme.',
    icon: '🔧',
    href: '/moebelmontage',
  },
  {
    slug: 'verpackungsservice',
    title: 'Verpackungsservice',
    shortTitle: 'Verpackung',
    description: 'Professionelles Einpacken Ihres Hausrats – mit hochwertigem Material und Sorgfalt.',
    icon: '📦',
    href: '/verpackungsservice',
  },
  {
    slug: 'seniorenumzug',
    title: 'Seniorenumzug',
    shortTitle: 'Seniorenumzug',
    description: 'Besonders rücksichtsvoll und persönlich – speziell auf ältere Menschen abgestimmt.',
    icon: '💛',
    href: '/seniorenumzug',
  },
  {
    slug: 'fernumzug',
    title: 'Fernumzug',
    shortTitle: 'Fernumzug',
    description: 'Deutschlandweite Umzüge aus dem Rhein-Neckar-Gebiet – zuverlässig und gut koordiniert.',
    icon: '🚛',
    href: '/fernumzug',
  },
  {
    slug: 'entruempelung',
    title: 'Entrümpelung',
    shortTitle: 'Entrümpelung',
    description: 'Wohnungen, Keller und Dachböden professionell räumen – inklusive Entsorgung.',
    icon: '🗑️',
    href: '/entruempelung',
  },
  {
    slug: 'halteverbotszone',
    title: 'Halteverbotszone',
    shortTitle: 'Halteverbot',
    description: 'Aufstellung und Beantragung von Halteverbotszonen – wir übernehmen alles Bürokratische.',
    icon: '🚫',
    href: '/halteverbotszone',
  },
]

export const CITIES: CityItem[] = [
  {
    slug: 'mannheim',
    name: 'Mannheim',
    href: '/regionen/mannheim',
    description: 'Umzüge im Quadrate-System und allen Stadtteilen Mannheims.',
  },
  {
    slug: 'heidelberg',
    name: 'Heidelberg',
    href: '/regionen/heidelberg',
    description: 'Umzüge in der Altstadt, Weststadt, Neuenheim und allen anderen Stadtteilen.',
  },
  {
    slug: 'ludwigshafen',
    name: 'Ludwigshafen',
    href: '/regionen/ludwigshafen',
    description: 'Professionelle Umzüge im gesamten Stadtgebiet Ludwigshafens.',
  },
  {
    slug: 'schwetzingen',
    name: 'Schwetzingen',
    href: '/regionen/schwetzingen',
    description: 'Umzüge in Schwetzingen und der gesamten Kurpfalz.',
  },
  {
    slug: 'viernheim',
    name: 'Viernheim',
    href: '/regionen/viernheim',
    description: 'Zuverlässige Umzüge in Viernheim und Umgebung.',
  },
  {
    slug: 'weinheim',
    name: 'Weinheim',
    href: '/regionen/weinheim',
    description: 'Umzüge in Weinheim – der Zwei-Burgen-Stadt.',
  },
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Sandra M.',
    city: 'Mannheim',
    rating: 5,
    text: 'Wir haben FriendsMove für unseren Umzug von Mannheim nach Heidelberg gebucht und waren absolut begeistert. Das Team war pünktlich, freundlich und unglaublich sorgfältig. Kein einziges Möbelstück wurde beschädigt. Volle Empfehlung!',
    date: 'Oktober 2024',
  },
  {
    name: 'Thomas K.',
    city: 'Heidelberg',
    rating: 5,
    text: 'Büroumzug in Heidelberg mit FriendsMove – perfekt organisiert. Wir haben montags gebucht und freitags stand alles am neuen Platz. Keine Ausfallzeit, kein Chaos. Das ist professionelles Arbeiten.',
    date: 'September 2024',
  },
  {
    name: 'Maria L.',
    city: 'Ludwigshafen',
    rating: 5,
    text: 'Der Seniorenumzug meiner Mutter war besonders einfühlsam und respektvoll. Das Team hat sich Zeit gelassen, alles erklärt und meine Mutter optimal betreut. Ich bin sehr dankbar.',
    date: 'August 2024',
  },
  {
    name: 'Jonas R.',
    city: 'Schwetzingen',
    rating: 5,
    text: 'Angebot innerhalb von 30 Minuten, alles transparent und fair. Umzugstag war stressfrei – pünktlich, schnell, sauber. Genau so stelle ich mir einen professionellen Umzug vor.',
    date: 'November 2024',
  },
  {
    name: 'Petra W.',
    city: 'Weinheim',
    rating: 5,
    text: 'Auch die Halteverbotszone haben die sich gekümmert. Alles aus einer Hand – das war für mich das Wichtigste. Der Umzug selbst war tadellos.',
    date: 'Oktober 2024',
  },
  {
    name: 'Michael B.',
    city: 'Mannheim',
    rating: 5,
    text: 'Zweiter Umzug mit FriendsMove – und wieder top. Festpreis eingehalten, kein Stress, freundliches Team. Was will man mehr?',
    date: 'Dezember 2024',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Was kostet ein Umzug mit FriendsMove?',
    answer: 'Die Kosten hängen von der Wohnungsgröße, dem Umfang der Leistungen und der Entfernung ab. Ein 1-Zimmer-Umzug startet ab ca. 300–500 €, ein 3-Zimmer-Umzug liegt typischerweise zwischen 800–1.500 €. Wir bieten auf Wunsch einen verbindlichen Festpreis an – fragen Sie einfach Ihr individuelles Angebot an.',
  },
  {
    question: 'Sind meine Möbel und Gegenstände während des Umzugs versichert?',
    answer: 'Ja. Alle Transporte sind über unsere Betriebshaftpflicht- und Transportversicherung abgedeckt. Bei besonders wertvollen Gegenständen empfehlen wir eine individuelle Abstimmung vorab. Wir arbeiten transparent und informieren Sie vor dem Umzug über den Versicherungsschutz.',
  },
  {
    question: 'Wie schnell bekomme ich ein Angebot?',
    answer: 'In der Regel antworten wir innerhalb von 60 Minuten während unserer Öffnungszeiten (Mo–Fr 7–18 Uhr, Sa 8–14 Uhr). Nutzen Sie unser Online-Formular oder rufen Sie uns direkt an – für kurzfristige Anfragen.',
  },
  {
    question: 'Brauche ich eine Halteverbotszone?',
    answer: 'In vielen Fällen ja – vor allem in dicht besiedelten Stadtteilen in Mannheim, Heidelberg oder Ludwigshafen. Wir beantragen die Halteverbotszone für Sie beim zuständigen Ordnungsamt und kümmern uns um die Aufstellung der Schilder. Das ist ein Rundum-Service, den wir gerne übernehmen.',
  },
  {
    question: 'Arbeiten Sie auch am Wochenende?',
    answer: 'Ja, samstags sind wir von 8–14 Uhr erreichbar und für Umzüge verfügbar. Für Wochenend-Umzüge bitten wir um frühzeitige Buchung, da die Kapazitäten begrenzter sind.',
  },
  {
    question: 'Bieten Sie auch Verpackungsmaterial an?',
    answer: 'Ja – wir stellen hochwertiges Umzugsmaterial bereit: Kartons in verschiedenen Größen, Kleiderkisten, Polstermaterial, Stretchfolie und Spezialverpackungen für Kunst und Elektronik. Auf Wunsch übernehmen wir auch das komplette Einpacken Ihres Hausrats.',
  },
  {
    question: 'Was ist der Unterschied zwischen Festpreis und Stundenlohn?',
    answer: 'Beim Festpreis vereinbaren wir vorab einen verbindlichen Gesamtpreis – ideal für planbare Umzüge. Der Stundenlohn eignet sich für kleinere oder flexible Aufträge. Wir empfehlen für größere Umzüge immer eine Besichtigung oder detaillierte Angaben, damit wir einen verlässlichen Festpreis kalkulieren können.',
  },
  {
    question: 'Wie weit im Voraus muss ich buchen?',
    answer: 'Wir empfehlen, mindestens 2–4 Wochen im Voraus zu buchen – besonders für Samstage und Monatsenden, die besonders gefragt sind. Kurzfristige Umzüge sind aber möglich – kontaktieren Sie uns und wir prüfen die Verfügbarkeit.',
  },
]

export const PRICING_SCENARIOS: PricingScenario[] = [
  {
    title: '1-Zimmer-Umzug',
    size: 'ca. 30–45 m²',
    priceFrom: '350',
    priceTo: '600',
    description: 'Ideal für Singles oder Studenten. Kleintransporter, 2 Umzugshelfer, bis zu 4 Stunden.',
    features: [
      '2 erfahrene Umzugshelfer',
      'Kleintransporter (bis 3,5 t)',
      'Möbelmontage inklusive',
      'Transportversicherung',
    ],
  },
  {
    title: '3-Zimmer-Umzug',
    size: 'ca. 70–90 m²',
    priceFrom: '900',
    priceTo: '1.500',
    description: 'Der Klassiker für Familien und Paare. Großer LKW, 3 Umzugshelfer, ganztägiger Einsatz.',
    features: [
      '3 erfahrene Umzugshelfer',
      'Großer LKW (7,5 t)',
      'Möbelmontage inklusive',
      'Transportversicherung',
      'Auf Wunsch Festpreis',
    ],
  },
  {
    title: 'Kleines Büro',
    size: '5–10 Arbeitsplätze',
    priceFrom: '1.200',
    priceTo: '2.500',
    description: 'Für kleine bis mittelgroße Betriebe. Strukturierte Planung, Wochenend-Option möglich.',
    features: [
      '4+ erfahrene Umzugshelfer',
      'Spezialfahrzeuge nach Bedarf',
      'IT-gerechte Verpackung',
      'Koordinator vor Ort',
      'Wochenend-Umzug möglich',
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Anfrage senden',
    description: 'Füllen Sie unser kurzes Formular aus oder rufen Sie uns an. Wir antworten innerhalb von 60 Minuten.',
    icon: '📋',
  },
  {
    step: 2,
    title: 'Planung & Angebot',
    description: 'Wir erstellen Ihnen ein transparentes Angebot – auf Wunsch als verbindlicher Festpreis.',
    icon: '📝',
  },
  {
    step: 3,
    title: 'Umzugstag',
    description: 'Unser Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihr Eigentum mit Sorgfalt.',
    icon: '🚛',
  },
  {
    step: 4,
    title: 'Einzug & Abschluss',
    description: 'Alles steht am richtigen Platz. Sie prüfen, bestätigen – und fangen entspannt an, sich einzuleben.',
    icon: '🏡',
  },
]

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dienstleistungen',
    href: '/dienstleistungen',
    children: [
      { label: 'Privatumzug', href: '/privatumzug' },
      { label: 'Firmenumzug', href: '/firmenumzug' },
      { label: 'Möbelmontage', href: '/moebelmontage' },
      { label: 'Verpackungsservice', href: '/verpackungsservice' },
      { label: 'Seniorenumzug', href: '/seniorenumzug' },
      { label: 'Fernumzug', href: '/fernumzug' },
      { label: 'Entrümpelung', href: '/entruempelung' },
      { label: 'Halteverbotszone', href: '/halteverbotszone' },
    ],
  },
  {
    label: 'Regionen',
    href: '/regionen',
    children: CITIES.map(c => ({ label: `Umzug ${c.name}`, href: c.href })),
  },
  { label: 'Preise', href: '/preise' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
]
