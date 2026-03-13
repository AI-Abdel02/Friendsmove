import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Küchenmontage Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professionelle Küchenmontage in Lambsheim, Mannheim, Heidelberg und der Rhein-Neckar-Region. Fachgerechter Auf- und Abbau aller Küchensysteme – auch ohne Umzug buchbar. Jetzt anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/kuechenmontage" },
  openGraph: {
    title: "Küchenmontage Lambsheim & Rhein-Neckar – FriendsMove",
    description: "Professioneller Auf- und Abbau von Einbauküchen aller Hersteller in Lambsheim und der Rhein-Neckar-Region.",
    url: "https://www.friendsmove.de/kuechenmontage",
    siteName: "FriendsMove",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Küchenmontage Rhein-Neckar | FriendsMove",
    description: "Fachgerechte Küchenmontage in Lambsheim und der Rhein-Neckar-Region. Auch ohne Umzug buchbar.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Küchenmontage",
  serviceType: "Küchenmontage",
  provider: {
    "@type": "MovingCompany",
    name: "FriendsMove",
    url: "https://www.friendsmove.de",
    telephone: "+4915203237063",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jahnstraße 28A",
      postalCode: "67245",
      addressLocality: "Lambsheim",
      addressCountry: "DE",
    },
  },
  areaServed: ["Lambsheim", "Frankenthal", "Mannheim", "Heidelberg", "Ludwigshafen", "Rhein-Neckar"],
  description:
    "Fachgerechter Auf- und Abbau von Einbauküchen aller Hersteller in Lambsheim und der Rhein-Neckar-Region.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Küchenmontage", item: "https://www.friendsmove.de/kuechenmontage" },
  ],
};

const FAQS: FaqItem[] = [
  {
    question: "Wie läuft eine Küchenmontage mit FriendsMove ab?",
    answer:
      "Wir demontieren Ihre alte Küche sorgfältig, verpacken alle Teile geschützt und bauen sie am neuen Ort präzise wieder auf – inkl. Anschlussarbeiten und abschließender Funktionsprüfung.",
  },
  {
    question: "Können Sie auch Küchen aufbauen, die nicht von uns abgebaut wurden?",
    answer:
      "Ja. Wir bauen Küchen aller Hersteller auf – ob Ikea, Nobilia, Häcker, Nolte oder Individualküche. Der Abbau durch uns ist keine Voraussetzung.",
  },
  {
    question: "Ist Küchenmontage auch ohne Umzug buchbar?",
    answer:
      "Absolut. Viele Kunden beauftragen uns nur für den Küchenauf- oder abbau – etwa bei einer Küchenrenovierung oder einem Neubau. Kein Umzug notwendig.",
  },
  {
    question: "Was kostet eine Küchenmontage?",
    answer:
      "Der Preis hängt von der Küchengröße, Anzahl der Module und Aufwand für Anschlussarbeiten ab. Senden Sie uns einfach eine Anfrage – wir erstellen ein transparentes Festpreisangebot.",
  },
  {
    question: "In welchen Städten bieten Sie Küchenmontage an?",
    answer:
      "Wir sind in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region tätig.",
  },
];

const STEPS = [
  { icon: "📋", title: "Anfrage senden", desc: "Beschreiben Sie Ihre Küche und den gewünschten Leistungsumfang." },
  { icon: "💬", title: "Angebot erhalten", desc: "Wir erstellen ein klares Festpreisangebot nach Ihren Angaben." },
  { icon: "📅", title: "Termin vereinbaren", desc: "Flexibel – auch kurzfristig oder am Wochenende möglich." },
  { icon: "🔧", title: "Montage", desc: "Unser Montageteam arbeitet präzise, sauber und effizient." },
  { icon: "✅", title: "Abnahme", desc: "Küche komplett aufgebaut und funktionsfähig – erst dann fertig." },
];

export default function KuechenmontagePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-brand-dark py-20 md:py-28" aria-labelledby="page-heading">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-max relative z-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/40">
                <li><Link href="/" className="transition-colors hover:text-white/70">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/70">Küchenmontage</li>
              </ol>
            </nav>
            <p className="section-label text-brand-green">Küchenmontage</p>
            <h1 id="page-heading" className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Küchenmontage in Lambsheim &{" "}
              <span className="text-brand-green">Rhein-Neckar</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Professioneller Auf- und Abbau von Einbauküchen aller Hersteller – präzise, sauber und ohne
              Beschädigungen. Auch als Einzelleistung ohne Umzug buchbar.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Alle Küchensysteme", "Inkl. Anschlussarbeiten", "Auch ohne Umzug", "Festpreis möglich"].map((chip) => (
                <span key={chip} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-2 text-sm text-white/60">
              <p>Einsatzgebiet: Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen & Umgebung</p>
              <p>Jahnstraße 28A · 67245 Lambsheim · Deutschland</p>
              <p>Telefon: +49 1520 3237063 · Hotline: +49 174 2083291</p>
            </div>
          </div>
          <div><QuoteForm /></div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <p className="section-label">Leistungsumfang</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Was ist bei der Küchenmontage enthalten?
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">Von der Demontage bis zur Abnahme – alles aus einer Hand.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {[
            { icon: "🔧", title: "Ab- und Aufbau", desc: "Fachgerechte Demontage und Montage aller Küchenmodule." },
            { icon: "🍽️", title: "Alle Hersteller", desc: "Ikea, Nobilia, Nolte, Häcker, Siematic und mehr." },
            { icon: "🔌", title: "Anschlussarbeiten", desc: "Spüle, Geschirrspüler, Herd – wir schließen an." },
            { icon: "📦", title: "Sichere Verpackung", desc: "Türen, Fronten und Glaselemente werden sicher verpackt." },
            { icon: "🏠", title: "Auch ohne Umzug", desc: "Küchenmontage als eigenständige Leistung buchbar." },
            { icon: "✅", title: "Qualitätsprüfung", desc: "Funktionsprüfung nach Abschluss inklusive." },
          ].map((item) => (
            <li key={item.title} role="listitem" className="card flex flex-col gap-3">
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mb-12 text-center">
          <p className="section-label">So funktioniert&apos;s</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">
            Küchenmontage Schritt für Schritt
          </h2>
        </div>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col items-center gap-3 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark font-display font-bold text-brand-green">
                {i + 1}
              </span>
              <span className="text-2xl" aria-hidden="true">{s.icon}</span>
              <h3 className="text-sm font-semibold text-brand-dark">{s.title}</h3>
              <p className="text-xs leading-relaxed text-brand-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="mb-10 text-center">
          <p className="section-label">Verfügbarkeit</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">Küchenmontage in Ihrer Stadt</h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir führen Küchenmontagen in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen
            und der gesamten Rhein-Neckar-Region durch.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/regionen/${city.slug}`}
              className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10">
              📍 Küchenmontage {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Häufige Fragen zur Küchenmontage</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
