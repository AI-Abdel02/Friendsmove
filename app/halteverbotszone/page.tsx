import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Halteverbotszone beantragen – Lambsheim & Rhein-Neckar | FriendsMove",
  description:
    "Halteverbotszone für Ihren Umzug in Lambsheim, Frankenthal, Mannheim, Heidelberg und der Rhein-Neckar-Region. Wir beantragen, organisieren und stellen auf – alles aus einer Hand.",
  alternates: { canonical: "https://www.friendsmove.de/halteverbotszone" },
  openGraph: {
    title: "Halteverbotszone beantragen – FriendsMove Rhein-Neckar",
    description: "Halteverbotszone für Umzüge im Rhein-Neckar-Gebiet – Antragstellung und Aufstellung durch FriendsMove.",
    url: "https://www.friendsmove.de/halteverbotszone",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Halteverbotszone einrichten",
  serviceType: "ParkingRestrictionService",
  provider: { "@type": "MovingCompany", name: "FriendsMove", telephone: "+4915203237063", url: "https://www.friendsmove.de" },
  areaServed: { "@type": "AdministrativeArea", name: "Rhein-Neckar" },
  description: "Einrichtung von Halteverbotszonen für Umzüge – inklusive Antragstellung beim Ordnungsamt.",
  url: "https://www.friendsmove.de/halteverbotszone",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: "https://www.friendsmove.de/dienstleistungen" },
    { "@type": "ListItem", position: 3, name: "Halteverbotszone", item: "https://www.friendsmove.de/halteverbotszone" },
  ],
};

const FAQS: FaqItem[] = [
  { question: "Wann brauche ich eine Halteverbotszone für meinen Umzug?", answer: "Eine Halteverbotszone ist sinnvoll oder notwendig, wenn vor Ihrem alten oder neuen Wohnort kein ausreichender Stellplatz für den Umzugswagen vorhanden ist – besonders in Innenstadtlagen wie den Mannheimer Quadraten oder der Heidelberger Altstadt." },
  { question: "Wer beantragt die Halteverbotszone – ich oder FriendsMove?", answer: "Bei FriendsMove übernehmen wir die komplette Antragstellung beim zuständigen Ordnungsamt für Sie. Bitte planen Sie einen Vorlauf von mindestens 7–10 Werktagen ein." },
  { question: "Was kostet eine Halteverbotszone im Rhein-Neckar-Gebiet?", answer: "Typischerweise liegen die Kosten zwischen 80 und 180 €, inklusive Aufstellen der Schilder. Wir informieren Sie vorab transparent über alle Kosten." },
  { question: "Kann die Halteverbotszone auch nur für einen Tag beantragt werden?", answer: "Ja, Halteverbotszonen werden üblicherweise für den Umzugstag beantragt und können auf einen oder mehrere Tage beschränkt werden." },
  { question: "In welchen Städten beantragen Sie Halteverbotszonen?", answer: "Wir beantragen Halteverbotszonen in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen und der gesamten Rhein-Neckar-Region." },
];

const STEPS = [
  { icon: "📋", title: "Anfrage senden", desc: "Teilen Sie uns Adresse, Datum und Länge der Zone mit." },
  { icon: "🏛️", title: "Antragstellung", desc: "Wir beantragen die Halteverbotszone beim Ordnungsamt." },
  { icon: "✅", title: "Genehmigung", desc: "Nach Genehmigung erhalten Sie Bestätigung und Gebührenbescheid." },
  { icon: "🚧", title: "Schilder aufstellen", desc: "Wir stellen die Halteverbotsschilder termingerecht auf." },
  { icon: "🚛", title: "Umzugstag", desc: "Der Lkw kann direkt vor Ihrem Haus halten – reibungslos und pünktlich." },
];

export default function HalteverbotszonePage() {
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
                <li className="text-white/70">Halteverbotszone</li>
              </ol>
            </nav>
            <p className="section-label text-brand-green">Halteverbotszone</p>
            <h1 id="page-heading" className="mt-2 mb-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Halteverbotszone für Ihren <span className="text-brand-green">Umzug einrichten</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              FriendsMove übernimmt die komplette Organisation Ihrer Halteverbotszone – von der Antragstellung
              beim Ordnungsamt bis zum Aufstellen der Schilder. Für Umzüge in Lambsheim, Frankenthal,
              Mannheim, Heidelberg und der Rhein-Neckar-Region.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Antragstellung inklusive", "Schilder aufstellen", "7–10 Tage Vorlauf", "Alle Städte Rhein-Neckar"].map((chip) => (
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Warum eine Halteverbotszone sinnvoll ist</h2>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {[
            { icon: "🚛", title: "Direkter Zugang", desc: "Der Umzugswagen kann direkt vor Ihrem Haus halten – kein unnötiger Weg." },
            { icon: "⏱️", title: "Zeitersparnis", desc: "Kurze Wege bedeuten schnellere Be- und Entladung – und niedrigere Kosten." },
            { icon: "🛡️", title: "Weniger Schäden", desc: "Kurze Transportwege reduzieren das Risiko von Beschädigungen erheblich." },
            { icon: "🏙️", title: "Pflicht in Innenstadtlagen", desc: "In Mannheims Quadraten oder Heidelbergs Altstadt ist eine Sperrzone oft zwingend nötig." },
            { icon: "🏛️", title: "Behördliche Genehmigung", desc: "Wir beantragen die Genehmigung beim Ordnungsamt – Sie müssen nichts tun." },
            { icon: "🚧", title: "Professionelle Beschilderung", desc: "Wir stellen normgerechte Halteverbotsschilder auf und bauen sie nach dem Umzug ab." },
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark md:text-4xl">Von der Anfrage bis zur Sperrzone</h2>
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
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">Halteverbotszone in Ihrer Stadt</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link key={city.slug} href={`/regionen/${city.slug}`} className="flex items-center gap-2 rounded-xl border border-brand-border bg-brand-card px-5 py-2.5 text-sm font-medium text-brand-text transition-all hover:border-brand-green hover:bg-brand-green/10">
              🚧 Halteverbotszone {city.name}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="section-label">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Häufige Fragen zur Halteverbotszone</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
