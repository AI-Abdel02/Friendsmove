import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Seniorenumzug Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Einfühlsamer Seniorenumzug in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Persönliche Begleitung, koordinierter Ablauf und geduldiges Team – für einen stressfreien Umzug im Alter.",
  alternates: { canonical: "https://www.friendsmove.de/seniorenumzug" },
  openGraph: {
    title: "Seniorenumzug Lambsheim & Rhein-Neckar – FriendsMove",
    description: "Professioneller und einfühlsamer Seniorenumzug mit persönlicher Begleitung im Rhein-Neckar-Gebiet.",
    url: "https://www.friendsmove.de/seniorenumzug",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seniorenumzug",
  serviceType: "SeniorMovingService",
  provider: { "@type": "MovingCompany", name: "FriendsMove", telephone: "+4915203237063", url: "https://www.friendsmove.de" },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Neckar" },
  description: "Einfühlsamer Seniorenumzug mit persönlicher Begleitung und enger Familienabstimmung im Rhein-Neckar-Gebiet.",
  url: "https://www.friendsmove.de/seniorenumzug",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: "https://www.friendsmove.de/dienstleistungen" },
    { "@type": "ListItem", position: 3, name: "Seniorenumzug", item: "https://www.friendsmove.de/seniorenumzug" },
  ],
};

const FAQS: FaqItem[] = [
  { question: "Wie läuft ein Seniorenumzug mit FriendsMove ab?", answer: "Beim Seniorenumzug legen wir besonderen Wert auf Ruhe, Geduld und eine enge Abstimmung. Wir besprechen alle Details im Voraus – auch gerne mit Angehörigen – und begleiten Sie persönlich durch den gesamten Prozess." },
  { question: "Kann FriendsMove auch die Familie bei der Planung einbeziehen?", answer: "Ja, wir stimmen uns auf Wunsch direkt mit Angehörigen ab und halten diese über den Ablauf informiert." },
  { question: "Was ist beim Seniorenumzug in der Rhein-Neckar-Region besonders?", answer: "Viele Seniorenumzüge finden in Bestandswohnungen ohne Aufzug statt. Unser Team ist erfahren im Tragen von Möbeln in Altbauten und kennt die Besonderheiten in Mannheim, Heidelberg und Ludwigshafen." },
  { question: "Hilft FriendsMove auch beim Auflösen des alten Haushalts?", answer: "Ja, wir bieten bei Seniorenumzügen auf Wunsch auch eine Haushaltsauflösung oder Teilentrümpelung an." },
  { question: "In welchen Städten bieten Sie Seniorenumzüge an?", answer: "Seniorenumzüge führen wir in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region durch." },
];

const STEPS = [
  { icon: "📋", title: "Persönliche Anfrage", desc: "Wir nehmen uns Zeit für Ihr Anliegen – telefonisch oder online." },
  { icon: "🤝", title: "Absprache & Planung", desc: "Gemeinsam mit Ihnen und Angehörigen planen wir jeden Schritt." },
  { icon: "📦", title: "Sorgfältige Vorbereitung", desc: "Verpackung und Demontage auf Wunsch – alles aus einer Hand." },
  { icon: "🚛", title: "Ruhiger Umzugstag", desc: "Unser geduldiges Team nimmt sich die Zeit, die Sie brauchen." },
  { icon: "🏠", title: "Einrichtung & Abschluss", desc: "Alles steht an seinem Platz – bis Sie rundum zufrieden sind." },
];

export default function SeniorenumzugPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                <li className="text-white/70">Seniorenumzug</li>
              </ol>
            </nav>
            <p className="section-label text-brand-green">Seniorenumzug</p>
            <h1 id="page-heading" className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Seniorenumzug in Lambsheim & <span className="text-brand-green">Rhein-Neckar</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove begleitet Senioren einfühlsam und rücksichtsvoll durch jeden Schritt des Umzugs – in Lambsheim,
              Frankenthal, Mannheim, Heidelberg und der gesamten Rhein-Neckar-Region.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Persönliche Begleitung", "Familienabstimmung", "Geduld & Fürsorge", "Kein Stress"].map((chip) => (
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Was ist beim Seniorenumzug enthalten?</h2>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {[
            { icon: "🤝", title: "Persönliche Begleitung", desc: "Ein fester Ansprechpartner begleitet Sie durch den gesamten Umzugsprozess." },
            { icon: "👨‍👩‍👧", title: "Koordination mit der Familie", desc: "Auf Wunsch stimmen wir uns direkt mit Ihren Angehörigen ab." },
            { icon: "⏳", title: "Zeit & Geduld", desc: "Kein Zeitdruck – wir nehmen uns die Zeit, die Sie brauchen." },
            { icon: "📦", title: "Verpackungsservice", desc: "Optionales Einpacken und Auspacken durch erfahrenes Personal." },
            { icon: "🔧", title: "Möbeldemontage & Aufbau", desc: "Fachgerechter Ab- und Aufbau aller Möbel am neuen Standort." },
            { icon: "🏠", title: "Haushaltsauflösung auf Wunsch", desc: "Wir helfen bei der Teilauflösung oder Entrümpelung des alten Haushalts." },
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Ihr Seniorenumzug Schritt für Schritt</h2>
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">Seniorenumzug in Ihrer Stadt</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/regionen/${city.slug}`} className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10">
              🤝 Seniorenumzug {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Häufige Fragen zum Seniorenumzug</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
