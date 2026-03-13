import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Entrümpelung Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professionelle Entrümpelung in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Haushaltsauflösung, Kellerräumung und Dachbodenräumung – kurzfristig, sauber und inklusive Entsorgung.",
  alternates: { canonical: "https://www.friendsmove.de/entruempelung" },
  openGraph: {
    title: "Entrümpelung Lambsheim & Rhein-Neckar – FriendsMove",
    description: "Kurzfristige Entrümpelung und Haushaltsauflösung im Rhein-Neckar-Gebiet. Professionell, sauber und inklusive Entsorgung.",
    url: "https://www.friendsmove.de/entruempelung",
    siteName: "FriendsMove",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung Rhein-Neckar | FriendsMove",
    description: "Kurzfristige Entrümpelung in Lambsheim und der Rhein-Neckar-Region – inklusive Entsorgung.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Entrümpelung",
  serviceType: "HouseClearing",
  provider: {
    "@type": "MovingCompany",
    name: "FriendsMove",
    telephone: "+4915203237063",
    url: "https://www.friendsmove.de",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Neckar" },
  description: "Professionelle Entrümpelung und Haushaltsauflösung in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region.",
  url: "https://www.friendsmove.de/entruempelung",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: "https://www.friendsmove.de/dienstleistungen" },
    { "@type": "ListItem", position: 3, name: "Entrümpelung", item: "https://www.friendsmove.de/entruempelung" },
  ],
};

const FAQS: FaqItem[] = [
  { question: "Was ist bei einer Entrümpelung von FriendsMove enthalten?", answer: "Unsere Entrümpelung umfasst den vollständigen Abtransport von Möbeln, Hausrat, Elektroschrott und sonstigen Gegenständen sowie die fachgerechte Entsorgung. Auf Wunsch trennen wir Sperrmüll, Elektronikschrott und Wertstoffe." },
  { question: "Wie schnell kann eine Entrümpelung in Mannheim oder Heidelberg stattfinden?", answer: "In vielen Fällen sind wir innerhalb weniger Tage verfügbar. Kurzfristige Entrümpelungen im Rhein-Neckar-Gebiet sind auf Anfrage möglich – kontaktieren Sie uns einfach direkt." },
  { question: "Entrümpeln Sie auch Keller und Dachböden?", answer: "Ja. Wir entrümpeln Wohnungen, Häuser, Keller, Dachböden, Garagen und Gewerbeimmobilien – vollständig und auf Wunsch inklusive Grundreinigung." },
  { question: "Was kostet eine Entrümpelung?", answer: "Die Kosten hängen vom Volumen, der Zugänglichkeit und dem Aufwand ab. Wir erstellen Ihnen nach einer kurzen Absprache ein transparentes Angebot – meist innerhalb von 60 Minuten." },
  { question: "In welchen Regionen bieten Sie Entrümpelung an?", answer: "Wir führen Entrümpelungen in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region durch." },
];

const STEPS = [
  { icon: "📋", title: "Anfrage senden", desc: "Beschreiben Sie Umfang und Ort – wir antworten in 60 Minuten." },
  { icon: "💬", title: "Kostenvoranschlag", desc: "Nach kurzer Absprache erhalten Sie ein verbindliches Angebot." },
  { icon: "📅", title: "Terminvereinbarung", desc: "Wir vereinbaren einen Termin – oft innerhalb weniger Tage." },
  { icon: "🗑️", title: "Durchführung", desc: "Unser Team räumt strukturiert, sauber und zuverlässig." },
  { icon: "♻️", title: "Entsorgung", desc: "Alle Gegenstände werden fachgerecht entsorgt oder recycelt." },
];

export default function EntruempelungPage() {
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
                <li><Link href="/dienstleistungen" className="transition-colors hover:text-white/70">Dienstleistungen</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/70">Entrümpelung</li>
              </ol>
            </nav>
            <p className="section-label text-brand-green">Entrümpelung</p>
            <h1 id="page-heading" className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Entrümpelung in Lambsheim & <span className="text-brand-green">Rhein-Neckar</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove übernimmt die professionelle Entrümpelung von Wohnungen, Häusern, Kellern
              und Gewerbeimmobilien in Lambsheim, Frankenthal, Mannheim, Heidelberg und der
              Rhein-Neckar-Region – sauber, schnell und inklusive fachgerechter Entsorgung.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Kurzfristig verfügbar", "Inkl. Entsorgung", "Auf Wunsch Grundreinigung", "Transparent kalkuliert"].map((chip) => (
                <span key={chip} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />{chip}
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Was ist bei der Entrümpelung enthalten?</h2>
          <p className="mx-auto max-w-2xl text-brand-muted">Von der Abholung über den Abtransport bis zur fachgerechten Entsorgung – alles aus einer Hand.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {[
            { icon: "🏠", title: "Wohnungsauflösung", desc: "Vollständige Räumung von Wohnungen und Häusern – inkl. aller Möbel und Hausratgegenstände." },
            { icon: "🪜", title: "Kellerräumung", desc: "Ordentliche Räumung von Kellern, Lagerräumen und Abstellkammern." },
            { icon: "🏚", title: "Dachbodenräumung", desc: "Professionelle Entrümpelung von Dachböden, Garagen und Nebengebäuden." },
            { icon: "♻️", title: "Fachgerechte Entsorgung", desc: "Sperrmüll, Elektronikschrott und Wertstoffe werden getrennt und umweltgerecht entsorgt." },
            { icon: "🏢", title: "Gewerbeentrümpelung", desc: "Räumung von Büros, Lagerräumen und Gewerbeflächen – strukturiert und schnell." },
            { icon: "✅", title: "Auf Wunsch Grundreinigung", desc: "Nach der Entrümpelung bieten wir auf Anfrage eine professionelle Grundreinigung an." },
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Ihre Entrümpelung Schritt für Schritt</h2>
        </div>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card flex flex-col items-center gap-3 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark font-display font-bold text-brand-green">{i + 1}</span>
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">Entrümpelung in Ihrer Stadt</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/regionen/${city.slug}`} className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10">
              ♻️ Entrümpelung {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Häufige Fragen zur Entrümpelung</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
