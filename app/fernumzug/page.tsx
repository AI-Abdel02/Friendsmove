import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Fernumzug Lambsheim & deutschlandweit | FriendsMove",
  description:
    "Professioneller Fernumzug ab Lambsheim, Frankenthal und Rhein-Neckar. Sicherer Transport, strukturierte Planung und zuverlässige Durchführung deutschlandweit.",
  alternates: { canonical: "https://www.friendsmove.de/fernumzug" },
};

const FAQS: FaqItem[] = [
  {
    question: "Was ist ein Fernumzug bei FriendsMove?",
    answer:
      "Ein Fernumzug ist ein Umzug über eine größere Distanz, zum Beispiel von Lambsheim nach Berlin, Hamburg, München oder in eine andere Region Deutschlands. FriendsMove plant Ihren Fernumzug strukturiert und sorgt für einen sicheren, termingerechten Ablauf.",
  },
  {
    question: "Wie wird mein Inventar bei einem Fernumzug geschützt?",
    answer:
      "Wir verwenden sichere Verladetechniken, passende Verpackungslösungen und erfahrene Möbelpacker. So bleibt Ihr Inventar auch bei langen Strecken bestmöglich geschützt.",
  },
  {
    question: "Ist bei einem Fernumzug ein Festpreis möglich?",
    answer:
      "Ja, nach Klärung von Umzugsvolumen, Strecke, Etagen und gewünschten Zusatzleistungen erstellen wir auf Wunsch ein transparentes Angebot. In vielen Fällen ist auch ein Festpreis möglich.",
  },
  {
    question: "Wie früh sollte ich einen Fernumzug buchen?",
    answer:
      "Da Fernumzüge mehr Planung erfordern, empfehlen wir eine möglichst frühe Anfrage. Kurzfristige Termine sind je nach Kapazität ebenfalls möglich.",
  },
  {
    question: "Von welchen Städten aus organisiert FriendsMove Fernumzüge?",
    answer:
      "Wir organisieren Fernumzüge ab Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region.",
  },
];

const STEPS = [
  {
    icon: "📋",
    title: "Anfrage senden",
    desc: "Schnelle Kontaktaufnahme mit allen wichtigen Umzugsdaten.",
  },
  {
    icon: "📞",
    title: "Planung & Beratung",
    desc: "Wir besprechen Strecke, Volumen, Termine und Zusatzleistungen.",
  },
  {
    icon: "📝",
    title: "Angebot erhalten",
    desc: "Transparentes Angebot mit klarer Planung und festen Abläufen.",
  },
  {
    icon: "🚛",
    title: "Transport über Distanz",
    desc: "Sicherer Ferntransport mit erfahrenem Team und passendem Fahrzeug.",
  },
  {
    icon: "🏠",
    title: "Ankunft & Einzug",
    desc: "Entladung, Positionierung und auf Wunsch Möbelmontage am Zielort.",
  },
];

export default function FernumzugPage() {
  return (
    <>
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
                <li className="text-white/70">Fernumzug</li>
              </ol>
            </nav>

            <p className="section-label text-brand-green">Fernumzug</p>

            <h1
              id="page-heading"
              className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Fernumzug ab Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Ob innerhalb Deutschlands oder über mehrere Bundesländer hinweg:
              FriendsMove organisiert Ihren Fernumzug ab Lambsheim,
              Frankenthal, Mannheim, Heidelberg und der gesamten
              Rhein-Neckar-Region professionell, sicher und zuverlässig.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Deutschlandweit",
                "Sicherer Transport",
                "Festpreis möglich",
                "Professionelle Planung",
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
                Startregion: Lambsheim, Frankenthal, Mannheim, Heidelberg,
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
            Was ist beim Fernumzug enthalten?
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Ein Fernumzug erfordert mehr Planung, klare Prozesse und einen
            sicheren Ablauf. Genau darauf ist FriendsMove spezialisiert.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {[
            {
              icon: "🚛",
              title: "Langer Distanztransport",
              desc: "Sicherer Transport über weite Strecken mit passender Fahrzeugplanung.",
            },
            {
              icon: "📦",
              title: "Sorgfältige Verladung",
              desc: "Professionelle Sicherung Ihrer Möbel, Kartons und empfindlichen Gegenstände.",
            },
            {
              icon: "🛡",
              title: "Versicherter Umzug",
              desc: "Ihr Inventar ist auch auf langen Strecken umfassend abgesichert.",
            },
            {
              icon: "🧭",
              title: "Strukturierte Planung",
              desc: "Genauer Ablaufplan für Abholung, Transport und Ankunft am Zielort.",
            },
            {
              icon: "🔧",
              title: "Möbelmontage auf Wunsch",
              desc: "Demontage und Montage Ihrer Möbel am Start- und Zielort möglich.",
            },
            {
              icon: "🏠",
              title: "Komplettservice",
              desc: "Vom ersten Karton bis zum letzten Möbelstück – alles aus einer Hand.",
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

      {/* Process */}
      <SectionWrapper className="bg-brand-bg">
        <div className="mb-12 text-center">
          <p className="section-label">So funktioniert&apos;s</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Ihr Fernumzug Schritt für Schritt
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Von der ersten Anfrage bis zur Ankunft am Zielort begleiten wir
            Ihren Fernumzug mit klarer Struktur und zuverlässiger Planung.
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

      {/* Regions */}
      <SectionWrapper className="bg-white">
        <div className="mb-10 text-center">
          <p className="section-label">Verfügbarkeit</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">
            Fernumzug aus Ihrer Stadt
          </h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir organisieren Fernumzüge ab Lambsheim, Frankenthal, Mannheim,
            Heidelberg, Ludwigshafen und aus der gesamten Rhein-Neckar-Region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10"
            >
              🚛 Fernumzug {city.name}
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
              Häufige Fragen zum Fernumzug
            </h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
