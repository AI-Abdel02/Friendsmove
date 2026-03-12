import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Verpackungsservice für Umzug – Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Professioneller Verpackungsservice in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Einpacken, Auspacken und Materiallieferung – sorgfältig, schnell und zuverlässig.",
  alternates: { canonical: "https://www.friendsmove.de/verpackungsservice" },
  openGraph: {
    title: "Verpackungsservice für Umzüge – FriendsMove Rhein-Neckar",
    description: "Professionelles Ein- und Auspacken für Ihren Umzug im Rhein-Neckar-Gebiet.",
    url: "https://www.friendsmove.de/verpackungsservice",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Verpackungsservice",
  serviceType: "PackingService",
  provider: { "@type": "MovingCompany", name: "FriendsMove", telephone: "+4915203237063", url: "https://www.friendsmove.de" },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Neckar" },
  description: "Professioneller Verpackungsservice für Umzüge – inklusive Einpacken, Auspacken und Materiallieferung.",
  url: "https://www.friendsmove.de/verpackungsservice",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: "https://www.friendsmove.de/dienstleistungen" },
    { "@type": "ListItem", position: 3, name: "Verpackungsservice", item: "https://www.friendsmove.de/verpackungsservice" },
  ],
};

const FAQS: FaqItem[] = [
  { question: "Was ist beim Verpackungsservice von FriendsMove enthalten?", answer: "Unser Verpackungsservice umfasst das professionelle Einpacken Ihrer Gegenstände mit geeigneten Materialien (Kartons, Packpapier, Blasenfolie, Möbeldecken), die Kennzeichnung aller Pakete sowie auf Wunsch auch das Auspacken am Zielort." },
  { question: "Kann ich den Verpackungsservice auch ohne kompletten Umzug buchen?", answer: "Ja, der Verpackungsservice kann separat als eigenständige Leistung gebucht werden." },
  { question: "Welche Materialien werden verwendet?", answer: "Wir arbeiten mit stabilen Umzugskartons, Packpapier, Luftpolsterfolie, Stretchfolie und Möbeldecken. Zerbrechliche Gegenstände werden besonders sorgfältig verpackt." },
  { question: "Ist der Inhalt beim Verpackungsservice versichert?", answer: "Ja. Ihre Gegenstände sind vollkaskoversichert während Transport und Handhabung." },
  { question: "In welchen Städten bieten Sie den Verpackungsservice an?", answer: "In Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region." },
];

const STEPS = [
  { icon: "📋", title: "Anfrage senden", desc: "Beschreiben Sie Umfang und Besonderheiten – wir antworten in 60 Min." },
  { icon: "📦", title: "Materialplanung", desc: "Wir planen Kartons und Verpackungsmaterial passend für Ihren Haushalt." },
  { icon: "📅", title: "Terminvereinbarung", desc: "Verpacken vor dem Umzug, Auspacken danach – flexibel nach Ihrem Wunsch." },
  { icon: "🔐", title: "Fachgerechtes Einpacken", desc: "Jedes Stück wird sorgfältig verpackt, beschriftet und transportfertig gemacht." },
  { icon: "✅", title: "Auspacken am Zielort", desc: "Auf Wunsch packen wir alles aus und räumen es an seinen Platz." },
];

export default function VerpackungsservicePage() {
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
                <li className="text-white/70">Verpackungsservice</li>
              </ol>
            </nav>
            <p className="section-label text-brand-green">Verpackungsservice</p>
            <h1 id="page-heading" className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Verpackungsservice in Lambsheim & <span className="text-brand-green">Rhein-Neckar</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove verpackt Ihren Haushalt professionell und sorgfältig – in Lambsheim, Frankenthal,
              Mannheim, Heidelberg und der gesamten Rhein-Neckar-Region.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Professionelles Material", "Zerbrechliches sicher verpackt", "Einpacken & Auspacken", "Auch einzeln buchbar"].map((chip) => (
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Was ist im Verpackungsservice enthalten?</h2>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {[
            { icon: "📦", title: "Professionelles Einpacken", desc: "Systematisches Einpacken aller Gegenstände mit geeigneten Materialien und Beschriftung." },
            { icon: "🧁", title: "Zerbrechliches besonders gesichert", desc: "Geschirr, Gläser und Kunstgegenstände werden extra sorgfältig verpackt." },
            { icon: "🚗", title: "Materiallieferung", desc: "Wir liefern alle nötigen Umzugskartons, Packpapier und Blasenfolie direkt zu Ihnen." },
            { icon: "📋", title: "Systematische Kennzeichnung", desc: "Jeder Karton wird beschriftet und einem Raum zugeordnet – für schnelles Auspacken." },
            { icon: "🏠", title: "Auspacken am Zielort", desc: "Auf Wunsch packen wir alles am neuen Ort aus und räumen es ein." },
            { icon: "🔧", title: "Kombination mit Umzug", desc: "Direkt mit Ihrem Privatumzug oder Firmenumzug kombinierbar." },
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Ihr Verpackungsservice Schritt für Schritt</h2>
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">Verpackungsservice in Ihrer Stadt</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/regionen/${city.slug}`} className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10">
              📦 Verpackungsservice {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Häufige Fragen zum Verpackungsservice</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
