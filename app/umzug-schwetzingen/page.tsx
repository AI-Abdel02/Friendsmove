import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Umzug Schwetzingen – Umzugsunternehmen Schwetzingen | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen für Schwetzingen. Privatumzug, Möbelmontage – vollversichert, Festpreis, schnell verfügbar. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/umzug-schwetzingen" },
  openGraph: {
    title: "Umzug Schwetzingen – FriendsMove Umzugsunternehmen",
    description: "Ihr regionaler Umzugspartner in Schwetzingen. Transparent, zuverlässig, vollversichert.",
    url: "https://www.friendsmove.de/umzug-schwetzingen",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Umzug Schwetzingen", item: "https://www.friendsmove.de/umzug-schwetzingen" },
  ],
};

const FAQS: FaqItem[] = [
  {
    question: "Ist FriendsMove auch in den umliegenden Gemeinden von Schwetzingen tätig?",
    answer:
      "Ja. Wir führen Umzüge in Schwetzingen sowie in Plankstadt, Oftersheim, Hockenheim und der gesamten Kurpfalzregion durch.",
  },
  {
    question: "Wie schnell erhalte ich ein Angebot für meinen Umzug in Schwetzingen?",
    answer:
      "In der Regel melden wir uns innerhalb von 60 Minuten auf Ihre Anfrage – auch samstags. Füllen Sie das Formular aus oder rufen Sie uns direkt an.",
  },
  {
    question: "Bietet FriendsMove auch Möbelmontage in Schwetzingen an?",
    answer:
      "Ja, wir bieten Möbelmontage und Küchenmontage in Schwetzingen als separate Leistungen an – unabhängig von einem Umzug buchbar.",
  },
];

export default function UmzugSchwetzingenPage() {
  const schema = cityBusinessSchema("Schwetzingen", "schwetzingen");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden" aria-labelledby="city-heading">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-max relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white/70">Startseite</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">Schwetzingen</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">Umzug Schwetzingen</p>
              <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Umzugsunternehmen<br />
                <span className="text-brand-green">in Schwetzingen</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                FriendsMove – Ihr regionaler Umzugspartner in der Schlossstadt Schwetzingen. Mit kurzen
                Wegen und lokaler Ortskenntnis organisieren wir Ihren Umzug in der Kurpfalzregion.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Kurpfalz erfahren", "Halteverbotszone möglich", "Festpreis", "Vollversichert"].map((chip) => (
                  <span key={chip} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-sm rounded-full px-4 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 w-fit hover:bg-white/20 transition-colors">
                <span className="text-brand-green text-xl" aria-hidden="true">📞</span>
                <div>
                  <p className="text-white/60 text-xs">Jetzt anrufen</p>
                  <p className="text-white font-semibold">{PHONE_DISPLAY}</p>
                </div>
              </a>
            </div>
            <div><QuoteForm /></div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Schwetzingen – Lokal kennen wir uns aus</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Umzug in Schwetzingen – regional und nah
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Schwetzingen mit seinem berühmten Schlossgarten liegt zentral in der Kurpfalzregion –
                gut erreichbar, mit kurzen Wegen zu Mannheim und Heidelberg. Als lokales
                Umzugsunternehmen sind wir schnell vor Ort und kennen die Besonderheiten der Stadt.
              </p>
              <p>
                Ob Altbau nahe dem Schlossgarten oder Neubau in den Randgebieten – wir passen unsere
                Planung an Ihre Situation an. Mehr zu unseren Leistungen in der Region auf unserer{" "}
                <Link href="/regionen/schwetzingen" className="text-brand-green underline hover:text-brand-green/80">
                  Schwetzingen-Seite
                </Link>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏛️", title: "Innenstadt & Schlossgarten", desc: "Touristisch, besondere Zufahrt" },
              { icon: "🏘", title: "Nordstadt", desc: "Ruhige Wohngebiete" },
              { icon: "🌱", title: "Hirschacker & Riedwiesen", desc: "Neuere Wohngebiete" },
              { icon: "🌾", title: "Plankstadt & Oftersheim", desc: "Umliegende Gemeinden" },
            ].map((area) => (
              <div key={area.title} className="card flex flex-col gap-2">
                <span className="text-xl" aria-hidden="true">{area.icon}</span>
                <h3 className="font-semibold text-brand-dark text-sm">{area.title}</h3>
                <p className="text-brand-muted text-xs">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-10">
          <p className="section-label">Unsere Services in Schwetzingen</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Was wir in Schwetzingen anbieten</h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
          {SERVICES.map((s) => (
            <li key={s.slug} role="listitem">
              <Link href={`/${s.slug}`} className="card flex flex-col items-center gap-2 text-center hover:border hover:border-brand-green transition-all block">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
                <span className="text-sm font-medium text-brand-dark">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark">Fragen zum Umzug in Schwetzingen</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
