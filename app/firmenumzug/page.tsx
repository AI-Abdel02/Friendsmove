import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES, SITE_URL } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Firmenumzug Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professionelle Firmenumzüge in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Strukturierte Planung, minimale Betriebsunterbrechung, Wochenendtermine und sichere Durchführung.",
  alternates: { canonical: "https://www.friendsmove.de/firmenumzug" },
  openGraph: {
    title: "Firmenumzug Rhein-Neckar – Professionell & Terminsicher | FriendsMove",
    description:
      "Büro- und Betriebsumzüge mit minimaler Betriebsunterbrechung in Mannheim, Heidelberg, Ludwigshafen und der Rhein-Neckar-Region.",
    url: "https://www.friendsmove.de/firmenumzug",
    siteName: "FriendsMove",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmenumzug Rhein-Neckar | FriendsMove",
    description: "Büro- und Betriebsumzüge mit minimaler Betriebsunterbrechung. Wochenendtermine möglich.",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "Wie wird eine minimale Betriebsunterbrechung sichergestellt?",
    answer:
      "Durch eine sorgfältige Vorabplanung, klare Zuständigkeiten, strukturiertes Labeling und – wenn nötig – Umzüge am Wochenende oder außerhalb Ihrer Geschäftszeiten. So bleibt Ihr Tagesgeschäft so ungestört wie möglich.",
  },
  {
    question: "Können Sie IT-Equipment demontieren und transportieren?",
    answer:
      "Wir unterstützen beim sicheren Verpacken, Transportieren und Positionieren von IT-Equipment, Monitoren, Arbeitsplätzen und Peripheriegeräten. Für technische Einrichtung oder Netzwerkkonfiguration empfehlen wir bei Bedarf einen spezialisierten IT-Dienstleister.",
  },
  {
    question: "Bieten Sie Firmenumzüge auch am Wochenende an?",
    answer:
      "Ja, auf Wunsch organisieren wir Ihren Firmenumzug auch am Wochenende oder außerhalb Ihrer normalen Arbeitszeiten, damit Ihre Betriebsabläufe möglichst wenig unterbrochen werden.",
  },
  {
    question: "Ist ein Festpreis für Firmenumzüge möglich?",
    answer:
      "Ja, nach Aufnahme aller relevanten Informationen erstellen wir ein transparentes Angebot. Je nach Umfang, Strecke, Inventar und Zusatzleistungen ist auch ein Festpreis möglich.",
  },
  {
    question: "In welchen Städten führt FriendsMove Firmenumzüge durch?",
    answer:
      "Wir organisieren Firmenumzüge in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und in der gesamten Rhein-Neckar-Region.",
  },
];

export default function FirmenumzugPage() {
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
      { "@type": "ListItem", position: 2, name: "Firmenumzug", item: `${SITE_URL}/firmenumzug` },
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
                <li className="text-white/70">Firmenumzug</li>
              </ol>
            </nav>

            <p className="section-label text-brand-green">Firmenumzug</p>

            <h1
              id="page-heading"
              className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Firmenumzug in Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove plant und realisiert strukturierte Firmenumzüge für
              Unternehmen in Lambsheim, Frankenthal, Mannheim, Heidelberg und
              der gesamten Rhein-Neckar-Region – zuverlässig, terminsicher und
              mit dem Fokus auf minimale Betriebsunterbrechung.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Wochenend-Termine",
                "Strukturierte Planung",
                "IT-Transport möglich",
                "Festpreis möglich",
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

      {/* Services */}
      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <p className="section-label">Leistungsumfang</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Was wir für Ihr Unternehmen tun
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Wir unterstützen Unternehmen jeder Größe mit klarer Planung,
            sicherem Transport und einer Durchführung, die auf reibungslose
            Betriebsabläufe ausgerichtet ist.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {[
            {
              icon: "📊",
              title: "Projektmanagement",
              desc: "Dedizierter Ansprechpartner, Zeitplan, Labeling-System und lückenlose Kommunikation für Ihren Firmenumzug.",
            },
            {
              icon: "🖥",
              title: "IT-Equipment & Arbeitsplätze",
              desc: "Sicheres Verpacken und Transportieren von Computern, Monitoren, Druckern und Peripheriegeräten.",
            },
            {
              icon: "🗄",
              title: "Büromöbel & Inventar",
              desc: "Professioneller Transport sowie Auf- und Abbau von Schreibtischen, Regalen, Stühlen und Büroeinrichtung.",
            },
            {
              icon: "📅",
              title: "Umzug außerhalb der Geschäftszeiten",
              desc: "Auf Wunsch führen wir Umzüge am Wochenende oder nach Betriebsschluss durch.",
            },
            {
              icon: "🏢",
              title: "Für kleine und große Unternehmen",
              desc: "Vom kleinen Büro bis zum mittelständischen Unternehmen mit mehreren Arbeitsplätzen.",
            },
            {
              icon: "📄",
              title: "Transparente Abrechnung",
              desc: "Ordentliche Rechnung und transparente Angebotsstruktur – passend für Ihre Buchhaltung.",
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

      {/* Regions */}
      <SectionWrapper className="bg-brand-bg">
        <div className="mb-10 text-center">
          <p className="section-label">Verfügbarkeit</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">
            Firmenumzug in Ihrer Stadt
          </h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir organisieren Firmenumzüge in Lambsheim, Frankenthal, Mannheim,
            Heidelberg, Ludwigshafen und in der gesamten Rhein-Neckar-Region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-white px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10"
            >
              🏢 Firmenumzug {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Häufige Fragen zum Firmenumzug
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
