import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES, SITE_URL } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Möbelmontage Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professionelle Möbelmontage in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Fachgerechter Auf- und Abbau von Möbeln für Privat- und Firmenumzüge.",
  alternates: { canonical: "https://www.friendsmove.de/moebelmontage" },
  openGraph: {
    title: "Möbelmontage Rhein-Neckar – Fachgerecht & Zuverlässig | FriendsMove",
    description:
      "Auf- und Abbau von Möbeln aller Art in Mannheim, Heidelberg, Ludwigshafen und der Rhein-Neckar-Region.",
    url: "https://www.friendsmove.de/moebelmontage",
    siteName: "FriendsMove",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Möbelmontage Rhein-Neckar | FriendsMove",
    description: "Professioneller Möbelauf- und Abbau in der Rhein-Neckar-Region.",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "Welche Möbel montiert FriendsMove?",
    answer:
      "Wir übernehmen die fachgerechte Demontage und Montage von Schränken, Betten, Regalen, Tischen, Kommoden, Büromöbeln und vielen weiteren Möbelstücken – sowohl für Privatkunden als auch für Unternehmen.",
  },
  {
    question: "Kann die Möbelmontage auch ohne kompletten Umzug gebucht werden?",
    answer:
      "Ja, unsere Möbelmontage kann auch als einzelne Leistung gebucht werden. Wenn Sie nur Unterstützung beim Ab- und Aufbau Ihrer Möbel benötigen, erstellen wir Ihnen gerne ein passendes Angebot.",
  },
  {
    question: "Bringt Ihr Team Werkzeug für die Möbelmontage mit?",
    answer:
      "Ja, unser Team arbeitet mit dem passenden Standardwerkzeug für die professionelle Möbelmontage. So können Möbel sicher und effizient abgebaut, transportfähig gemacht und am Zielort wieder aufgebaut werden.",
  },
  {
    question: "Ist Möbelmontage auch bei Firmenumzügen möglich?",
    answer:
      "Ja, wir übernehmen Möbelmontage auch bei Büro- und Firmenumzügen, zum Beispiel für Schreibtische, Regale, Aktenschränke und andere Betriebseinrichtungen.",
  },
  {
    question: "In welchen Städten bietet FriendsMove Möbelmontage an?",
    answer:
      "Wir bieten Möbelmontage in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und in der gesamten Rhein-Neckar-Region an.",
  },
];

const STEPS = [
  {
    icon: "🛠️",
    title: "Anfrage senden",
    desc: "Teilen Sie uns mit, welche Möbel montiert oder demontiert werden sollen.",
  },
  {
    icon: "📋",
    title: "Leistung abstimmen",
    desc: "Wir klären Umfang, Termin, Ort und besondere Anforderungen.",
  },
  {
    icon: "🚚",
    title: "Vorbereitung & Transport",
    desc: "Falls gewünscht, wird die Möbelmontage direkt mit dem Umzug kombiniert.",
  },
  {
    icon: "🔧",
    title: "Montage vor Ort",
    desc: "Unsere Mitarbeiter bauen Ihre Möbel fachgerecht auf und aus.",
  },
  {
    icon: "✅",
    title: "Abschluss",
    desc: "Alles wird final geprüft und sauber an Ort und Stelle übergeben.",
  },
];

export default function MoebelmontagePage() {
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
      { "@type": "ListItem", position: 2, name: "Möbelmontage", item: `${SITE_URL}/moebelmontage` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
                <li className="text-white/70">Möbelmontage</li>
              </ol>
            </nav>

            <p className="section-label text-brand-green">Möbelmontage</p>

            <h1
              id="page-heading"
              className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Möbelmontage in Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove übernimmt die fachgerechte Möbelmontage für
              Privatumzüge, Firmenumzüge und einzelne Montageaufträge in
              Lambsheim, Frankenthal, Mannheim, Heidelberg und der gesamten
              Rhein-Neckar-Region – zuverlässig, sauber und professionell.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Fachgerechter Aufbau",
                "Demontage & Montage",
                "Für Privat & Büro",
                "Mit Umzug kombinierbar",
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

      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <p className="section-label">Leistungsumfang</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Was ist bei der Möbelmontage enthalten?
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Unsere Möbelmontage ist auf sichere, saubere und effiziente
            Abläufe ausgelegt – für einzelne Möbelstücke oder komplette
            Einrichtungen.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {[
            {
              icon: "🪑",
              title: "Abbau von Möbeln",
              desc: "Fachgerechte Demontage von Schränken, Betten, Regalen, Tischen und weiteren Möbelstücken.",
            },
            {
              icon: "🔩",
              title: "Montage am Zielort",
              desc: "Sorgfältiger Wiederaufbau Ihrer Möbel am neuen Standort oder in Ihren Geschäftsräumen.",
            },
            {
              icon: "🧰",
              title: "Professionelles Werkzeug",
              desc: "Unsere Mitarbeiter arbeiten mit passendem Standardwerkzeug für eine sichere Montage.",
            },
            {
              icon: "🏠",
              title: "Privat & Gewerbe",
              desc: "Möbelmontage für Wohnungen, Häuser, Büros und gewerbliche Räume.",
            },
            {
              icon: "🚚",
              title: "Mit Umzug kombinierbar",
              desc: "Die Möbelmontage kann direkt mit Ihrem Privatumzug oder Firmenumzug kombiniert werden.",
            },
            {
              icon: "✅",
              title: "Sauberer Abschluss",
              desc: "Nach der Montage prüfen wir gemeinsam die Positionierung und den ordentlichen Aufbau.",
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

      <SectionWrapper className="bg-brand-bg">
        <div className="mb-12 text-center">
          <p className="section-label">So funktioniert&apos;s</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Ihre Möbelmontage Schritt für Schritt
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Von der ersten Anfrage bis zur fertigen Montage begleiten wir Ihren
            Auftrag mit klarer Planung und fachgerechter Umsetzung.
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

      <SectionWrapper className="bg-white">
        <div className="mb-10 text-center">
          <p className="section-label">Verfügbarkeit</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">
            Möbelmontage in Ihrer Stadt
          </h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir bieten Möbelmontage in Lambsheim, Frankenthal, Mannheim,
            Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region an.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10"
            >
              🔧 Möbelmontage {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Häufige Fragen zur Möbelmontage
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}