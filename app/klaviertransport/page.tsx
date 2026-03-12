import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Klaviertransport Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professioneller Klaviertransport in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Sicherer Transport von Klavieren und Flügeln durch erfahrene Umzugsprofis.",
  alternates: { canonical: "https://www.friendsmove.de/klaviertransport" },
};

const FAQS: FaqItem[] = [
  {
    question: "Transportiert FriendsMove auch schwere Klaviere?",
    answer:
      "Ja, wir transportieren sowohl klassische Klaviere als auch Flügel. Unsere Mitarbeiter arbeiten mit geeigneten Transporttechniken und Sicherungssystemen, um Instrumente sicher zu bewegen.",
  },
  {
    question: "Wie wird mein Klavier beim Transport geschützt?",
    answer:
      "Ihr Klavier wird sorgfältig verpackt, gesichert und mit speziellen Trage- und Transportsystemen bewegt. So bleibt das Instrument während des gesamten Transports geschützt.",
  },
  {
    question: "Kann der Klaviertransport mit einem Umzug kombiniert werden?",
    answer:
      "Ja, viele Kunden kombinieren den Klaviertransport mit einem Privatumzug oder Firmenumzug. Dadurch sparen Sie Zeit und organisatorischen Aufwand.",
  },
  {
    question: "Transportiert FriendsMove auch Flügel?",
    answer:
      "Ja, auch größere Instrumente wie Flügel können transportiert werden. Der Transport wird individuell geplant, abhängig von Gewicht, Zugang und Etagen.",
  },
  {
    question: "In welchen Städten bietet FriendsMove Klaviertransport an?",
    answer:
      "Wir bieten Klaviertransport in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region an.",
  },
];

const STEPS = [
  {
    icon: "📋",
    title: "Anfrage senden",
    desc: "Sie teilen uns Gewicht, Standort und Zielort Ihres Klaviers mit.",
  },
  {
    icon: "📏",
    title: "Transport planen",
    desc: "Wir planen den Transportweg, Zugang, Etagen und notwendige Sicherung.",
  },
  {
    icon: "🛡️",
    title: "Instrument sichern",
    desc: "Das Klavier wird sorgfältig geschützt und transportbereit gemacht.",
  },
  {
    icon: "🚚",
    title: "Transport",
    desc: "Das Instrument wird sicher zum Zielort transportiert.",
  },
  {
    icon: "🎹",
    title: "Aufstellung",
    desc: "Am Zielort positionieren wir Ihr Klavier sorgfältig am gewünschten Platz.",
  },
];

export default function KlaviertransportPage() {
  return (
    <>
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
                  <Link href="/" className="hover:text-white/70">
                    Startseite
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white/70">Klaviertransport</li>
              </ol>
            </nav>

            <p className="section-label text-brand-green">Klaviertransport</p>

            <h1
              id="page-heading"
              className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Klaviertransport in Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove übernimmt den sicheren Transport von Klavieren und
              Flügeln in Lambsheim, Frankenthal, Mannheim, Heidelberg und der
              gesamten Rhein-Neckar-Region – sorgfältig geplant und professionell
              durchgeführt.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Sicherer Transport",
                "Erfahrene Möbelpacker",
                "Für Klavier & Flügel",
                "Professionelle Planung",
              ].map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
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

      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-12">
          <p className="section-label">Ablauf</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark">
            Klaviertransport Schritt für Schritt
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card text-center flex flex-col items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark text-brand-green font-bold">
                {i + 1}
              </span>
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-semibold text-brand-dark text-sm">{s.title}</h3>
              <p className="text-brand-muted text-xs">{s.desc}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <p className="section-label">Region</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark">
            Klaviertransport in Ihrer Stadt
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 bg-brand-card border border-brand-border hover:border-brand-green
                         hover:bg-brand-green/10 rounded-xl px-5 py-2.5 text-sm font-medium text-brand-text transition-all"
            >
              🎹 Klaviertransport {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark">
              Häufige Fragen zum Klaviertransport
            </h2>
          </div>

          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
