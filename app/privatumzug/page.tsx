import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES, SITE_URL } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Privatumzug Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professioneller Privatumzug in Lambsheim, Frankenthal, Mannheim, Heidelberg und der gesamten Rhein-Neckar-Region. Festpreis möglich, vollversichert, kurzfristig verfügbar. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/privatumzug" },
  openGraph: {
    title: "Privatumzug Rhein-Neckar – Vollversichert & Fair | FriendsMove",
    description:
      "Stressfreier Privatumzug in Mannheim, Heidelberg, Ludwigshafen und der Rhein-Neckar-Region. Festpreis möglich, kurzfristig verfügbar.",
    url: "https://www.friendsmove.de/privatumzug",
    siteName: "FriendsMove",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privatumzug Rhein-Neckar | FriendsMove",
    description: "Stressfreier Privatumzug. Festpreis möglich, vollversichert.",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "Wie läuft ein Privatumzug mit FriendsMove ab?",
    answer:
      "Nach Ihrer Anfrage erhalten Sie schnell eine Rückmeldung. Wir klären alle wichtigen Details, erstellen ein transparentes Angebot und planen Ihren Privatumzug in Lambsheim, Frankenthal oder der Rhein-Neckar-Region Schritt für Schritt. Am Umzugstag arbeitet unser Team pünktlich, sorgfältig und zuverlässig.",
  },
  {
    question: "Was ist beim Privatumzug im Angebot enthalten?",
    answer:
      "Je nach gebuchtem Umfang umfasst Ihr Privatumzug den Transport, das Tragen, die Möbelmontage und auf Wunsch zusätzliche Leistungen wie Verpackungsservice, Küchenmontage oder Halteverbotszone. Gerne erstellen wir Ihnen ein individuelles Angebot.",
  },
  {
    question: "Ist ein Festpreis für meinen Privatumzug möglich?",
    answer:
      "Ja, in vielen Fällen bieten wir einen transparenten Festpreis an. Nach Klärung von Umzugsvolumen, Strecke, Etage und Zusatzleistungen erhalten Sie ein klares Angebot ohne versteckte Überraschungen.",
  },
  {
    question: "Wie weit im Voraus sollte ich meinen Privatumzug buchen?",
    answer:
      "Wir empfehlen eine Vorlaufzeit von 2 bis 4 Wochen. Kurzfristige Privatumzüge in Lambsheim, Frankenthal, Mannheim oder Heidelberg sind ebenfalls oft möglich – kontaktieren Sie uns einfach direkt.",
  },
  {
    question: "In welchen Städten bietet FriendsMove Privatumzüge an?",
    answer:
      "Wir organisieren Privatumzüge in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und in der gesamten Rhein-Neckar-Region.",
  },
];

const STEPS = [
  {
    icon: "📋",
    title: "Anfrage senden",
    desc: "Online oder telefonisch – schnell, unkompliziert und kostenlos.",
  },
  {
    icon: "💬",
    title: "Beratung & Angebot",
    desc: "Wir klären alle Details und erstellen Ihr individuelles Angebot.",
  },
  {
    icon: "📝",
    title: "Planung & Termin",
    desc: "Datum, Leistungen und Ablauf werden transparent abgestimmt.",
  },
  {
    icon: "🚛",
    title: "Umzugstag",
    desc: "Unser Team arbeitet pünktlich, strukturiert und sorgfältig.",
  },
  {
    icon: "🏠",
    title: "Einzug & Abschluss",
    desc: "Alles wird sauber platziert, aufgebaut und final geprüft.",
  },
];

export default function PrivatumzugPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Privatumzug", item: `${SITE_URL}/privatumzug` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-brand-dark py-20 md:py-28"
        aria-labelledby="page-heading"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-max relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/40">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white/70"
                  >
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/70">Privatumzug</li>
              </ol>
            </nav>

            <p className="section-label text-brand-green">Privatumzug</p>

            <h1
              id="page-heading"
              className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Privatumzug in Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Ob kleine Wohnung, Familienhaushalt oder kompletter Hausumzug:
              FriendsMove organisiert Ihren Privatumzug in Lambsheim,
              Frankenthal, Mannheim, Heidelberg und der gesamten
              Rhein-Neckar-Region professionell, zuverlässig und auf Wunsch zum
              Festpreis.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Festpreis möglich",
                "Vollversichert",
                "Kurzfristig verfügbar",
                "Antwort in 60 Min.",
              ].map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-green"
                    aria-hidden="true"
                  />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-2 text-sm text-white/60">
              <p>
                Einsatzgebiet: Lambsheim, Frankenthal, Mannheim, Heidelberg,
                Ludwigshafen & Umgebung
              </p>
              <p>Jahnstraße 28A · 67245 Lambsheim · Deutschland</p>
              <p>Telefon: +49 1520 3237063 · Hotline: +49 174 2083291</p>
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Services included */}
      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <p className="section-label">Leistungsumfang</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Was ist beim Privatumzug enthalten?
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Wir bieten professionelle Umzugsleistungen für Privatkunden in
            Lambsheim und der gesamten Rhein-Neckar-Region – flexibel,
            transparent und auf Ihren Bedarf abgestimmt.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {[
            {
              icon: "🚛",
              title: "Professioneller Transport",
              desc: "Moderne, saubere Fahrzeuge – passend zur Größe Ihres Privatumzugs.",
            },
            {
              icon: "🔧",
              title: "Möbelmontage & Demontage",
              desc: "Fachgerechter Auf- und Abbau Ihrer Möbel durch geschulte Mitarbeiter.",
            },
            {
              icon: "🛡",
              title: "Vollkaskoversicherung",
              desc: "Ihr Inventar ist während des gesamten Umzugs umfassend abgesichert.",
            },
            {
              icon: "📦",
              title: "Verpackungsservice",
              desc: "Optionales Ein- und Auspacken mit professionellen Materialien und System.",
            },
            {
              icon: "🍽️",
              title: "Küchenmontage",
              desc: "Sorgfältige Demontage, Transport und Montage Ihrer Küche auf Wunsch.",
            },
            {
              icon: "🚧",
              title: "Halteverbotszone",
              desc: "Auf Wunsch beantragen und organisieren wir die Halteverbotszone für Ihren Umzug.",
            },
          ].map((item) => (
            <li
              key={item.title}
              role="listitem"
              className="card flex flex-col gap-3"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* Process steps */}
      <SectionWrapper className="bg-brand-bg">
        <div className="mb-12 text-center">
          <p className="section-label">So funktioniert&apos;s</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Ihr Privatumzug Schritt für Schritt
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Mit FriendsMove ist Ihr Privatumzug in Lambsheim und Rhein-Neckar
            klar strukturiert – von der ersten Anfrage bis zum letzten Karton.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="card flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark font-display font-bold text-brand-green">
                {i + 1}
              </span>
              <span className="text-2xl" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="text-sm font-semibold text-brand-dark">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed text-brand-muted">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      {/* Available regions */}
      <SectionWrapper className="bg-white">
        <div className="mb-10 text-center">
          <p className="section-label">Verfügbarkeit</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">
            Privatumzug in Ihrer Stadt
          </h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir führen Privatumzüge in Lambsheim, Frankenthal, Mannheim,
            Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region
            durch.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10"
            >
              📍 Privatumzug {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Häufige Fragen zum Privatumzug
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
