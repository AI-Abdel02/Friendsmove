import type { Service, City, Testimonial, FAQItem, ProcessStep, TrustStat } from '@/types'

export const services: Service[] = [
  {
    slug: 'privatumzug',
    title: 'Privatumzug',
    shortTitle: 'Privatumzug',
    description: 'Stressfreier Umzug für Privatpersonen – von der Planung bis zum letzten Karton.',
    icon: '🏠',
    href: '/privatumzug',
  },
  {
    slug: 'firmenumzug',
    title: 'Firmenumzug',
    shortTitle: 'Firmenumzug',
    description: 'Professioneller Büroumzug mit minimaler Ausfallzeit und strukturierter Planung.',
    icon: '🏢',
    href: '/firmenumzug',
  },
  {
    slug: 'moebelmontage',
    title: 'Möbelmontage',
    shortTitle: 'Möbelmontage',
    description: 'Fachgerechter Auf- und Abbau aller Möbel – IKEA, Maßmöbel und mehr.',
    icon: '🔧',
    href: '/moebelmontage',
  },
  {
    slug: 'verpackungsservice',
    title: 'Verpackungsservice',
    shortTitle: 'Verpackung',
    description: 'Professionelles Ein- und Auspacken Ihres Haushalts – sicher und effizient.',
    icon: '📦',
    href: '/verpackungsservice',
  },
  {
    slug: 'seniorenumzug',
    title: 'Seniorenumzug',
    shortTitle: 'Seniorenumzug',
    description: 'Besonders einfühlsamer Umzugsservice für ältere Menschen – mit Geduld und Fürsorge.',
    icon: '🤝',
    href: '/seniorenumzug',
  },
  {
    slug: 'fernumzug',
    title: 'Fernumzug',
    shortTitle: 'Fernumzug',
    description: 'Zuverlässige Umzüge quer durch Deutschland und ins europäische Ausland.',
    icon: '🚛',
    href: '/fernumzug',
  },
  {
    slug: 'entruempelung',
    title: 'Entrümpelung',
    shortTitle: 'Entrümpelung',
    description: 'Fachgerechte Haushaltsauflösung und Entrümpelung – schnell, sauber, zuverlässig.',
    icon: '🗑️',
    href: '/entruempelung',
  },
  {
    slug: 'halteverbotszone',
    title: 'Halteverbotszone',
    shortTitle: 'Halteverbotszone',
    description: 'Einrichtung temporärer Halteverbote – wir kümmern uns um Genehmigung und Aufstellung.',
    icon: '🚧',
    href: '/halteverbotszone',
  },
]

export const cities: City[] = [
  {
    slug: 'mannheim',
    name: 'Mannheim',
    description: 'Umzugsservice in der Quadratestadt – lokal verwurzelt, professionell organisiert.',
    href: '/regionen/mannheim',
  },
  {
    slug: 'heidelberg',
    name: 'Heidelberg',
    description: 'Umzüge in der romantischen Universitätsstadt mit engen Altgassen und besonderen Anforderungen.',
    href: '/regionen/heidelberg',
  },
  {
    slug: 'ludwigshafen',
    name: 'Ludwigshafen',
    description: 'Professionelle Umzüge rechts und links des Rheins – schnell und koordiniert.',
    href: '/regionen/ludwigshafen',
  },
  {
    slug: 'schwetzingen',
    name: 'Schwetzingen',
    description: 'Zuverlässiger Umzugsservice in Schwetzingen und der umliegenden Kurpfalzregion.',
    href: '/regionen/schwetzingen',
  },
  {
    slug: 'viernheim',
    name: 'Viernheim',
    description: 'Ihr Umzugspartner in Viernheim – pünktlich, versichert, regional erfahren.',
    href: '/regionen/viernheim',
  },
  {
    slug: 'weinheim',
    name: 'Weinheim',
    description: 'Umzüge in der Zwei-Burgen-Stadt – mit lokaler Ortskenntnis und professionellem Team.',
    href: '/regionen/weinheim',
  },
]

export const testimonials: Testimonial[] = [
  {
    author: 'Markus T.',
    city: 'Mannheim',
    rating: 5,
    text: 'Absolut professionelles Team. Alles lief wie am Schnürchen – pünktlich, sauber, und kein einziger Kratzer an den Möbeln. Volle Empfehlung!',
    service: 'Privatumzug',
    date: '2024-11',
  },
  {
    author: 'Sandra K.',
    city: 'Heidelberg',
    rating: 5,
    text: 'FriendsMove hat unseren Büroumzug perfekt koordiniert. Minimale Ausfallzeit, alles in Absprache mit uns. Werden wir wieder beauftragen.',
    service: 'Firmenumzug',
    date: '2024-10',
  },
  {
    author: 'Heinrich & Monika R.',
    city: 'Viernheim',
    rating: 5,
    text: 'Für unseren Seniorenumzug wurde uns ein besonders geduldiges Team zugeteilt. Wir fühlten uns von Anfang an gut aufgehoben. Herzlichen Dank!',
    service: 'Seniorenumzug',
    date: '2024-09',
  },
  {
    author: 'Lena M.',
    city: 'Weinheim',
    rating: 5,
    text: 'Das Angebot kam innerhalb von 30 Minuten, der Festpreis stimmte genau – keine versteckten Kosten. Sehr transparent und fair.',
    service: 'Privatumzug',
    date: '2024-11',
  },
  {
    author: 'Thomas B.',
    city: 'Ludwigshafen',
    rating: 5,
    text: 'Drei-Zimmer-Wohnung, 4. Stock ohne Aufzug. Die Jungs haben geschuftet wie Profis und trotzdem die ganze Zeit gute Laune gehabt. Top!',
    service: 'Privatumzug',
    date: '2024-08',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Was kostet ein Umzug mit FriendsMove?',
    answer: 'Die Kosten hängen von verschiedenen Faktoren ab: Entfernung, Wohnungsgröße, Stockwerk und Zusatzleistungen. Ein 1-Zimmer-Umzug innerhalb Mannheims beginnt ab ca. 350 €. Wir bieten auf Wunsch Festpreise an – nach einer Besichtigung oder detaillierter Aufnahme. Fordern Sie einfach Ihr kostenloses Angebot an.',
  },
  {
    question: 'Sind meine Möbel während des Umzugs versichert?',
    answer: 'Ja. FriendsMove arbeitet mit einer Vollkaskoversicherung. Transportschäden sind im Rahmen unserer Haftpflicht abgedeckt. Die genauen Konditionen erläutern wir Ihnen gerne im persönlichen Gespräch.',
  },
  {
    question: 'Wie schnell erhalte ich ein Angebot?',
    answer: 'In der Regel antworten wir innerhalb von 60 Minuten auf Ihre Anfrage – auch am Samstag. Bei größeren Umzügen empfehlen wir eine kostenlose Vor-Ort-Besichtigung für ein präzises Festpreisangebot.',
  },
  {
    question: 'Brauche ich eine Halteverbotszone?',
    answer: 'Bei Umzügen in Innenstadtlagen ist eine temporäre Halteverbotszone oft notwendig, um sicheres Be- und Entladen zu gewährleisten. Wir übernehmen auf Wunsch die komplette Beantragung bei der Behörde und die Aufstellung der Schilder.',
  },
  {
    question: 'Arbeiten Sie auch am Wochenende?',
    answer: 'Ja, wir sind Montag bis Samstag von 08:00 bis 18:00 Uhr für Sie da. Samstagsumzüge sind bei uns regulär buchbar – ohne Aufpreis.',
  },
  {
    question: 'Wie weit im Voraus soll ich buchen?',
    answer: 'Wir empfehlen 3–4 Wochen Vorlaufzeit, besonders für Umzüge an Wochenenden oder Monatsenden. Kurzfristige Buchungen versuchen wir immer zu ermöglichen – fragen Sie einfach nach.',
  },
  {
    question: 'Bieten Sie auch Verpackungsmaterial an?',
    answer: 'Ja. Wir liefern auf Wunsch Umzugskartons, Packpapier, Blasenfolie und Möbeldecken direkt zu Ihnen nach Hause. Alternativ können Sie unseren Komplett-Verpackungsservice buchen.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Anfrage senden',
    description: 'Füllen Sie das Formular aus oder rufen Sie uns an. Wir melden uns innerhalb von 60 Minuten.',
    icon: '📋',
  },
  {
    step: 2,
    title: 'Planung & Angebot',
    description: 'Wir besprechen Details, erfassen den Leistungsumfang und erstellen Ihr transparentes Festpreisangebot.',
    icon: '📐',
  },
  {
    step: 3,
    title: 'Umzugstag',
    description: 'Unser erfahrenes Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihr Eigentum mit höchster Sorgfalt.',
    icon: '🚛',
  },
  {
    step: 4,
    title: 'Einzug & Abschluss',
    description: 'Möbel stehen, alles ist am richtigen Ort. Sie nehmen ab – wir sind erst fertig, wenn Sie zufrieden sind.',
    icon: '🏠',
  },
]

export const trustStats: TrustStat[] = [
  { icon: '⭐', value: '4,9', label: 'Google-Bewertung' },
  { icon: '📦', value: '120+', label: 'Umzüge pro Jahr' },
  { icon: '⚡', value: '60 Min', label: 'Antwortzeit' },
  { icon: '🛡', value: '100%', label: 'Vollkaskoversichert' },
  { icon: '📍', value: '6+', label: 'Städte im Rhein-Neckar' },
]
