import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Umzug Frankfurt – Umzugsunternehmen Frankfurt am Main | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen für Frankfurt am Main. Fernumzug aus dem Rhein-Neckar-Gebiet nach Frankfurt – vollversichert, Festpreis, zuverlässig. Jetzt anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/umzug-frankfurt" },
  openGraph: {
    title: "Umzug Frankfurt – FriendsMove Umzugsunternehmen",
    description: "Fernumzug von Mannheim/Heidelberg nach Frankfurt. Vollversichert, Festpreis.",
    url: "https://www.friendsmove.de/umzug-frankfurt",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Umzug Frankfurt", item: "https://www.friendsmove.de/umzug-frankfurt" },
  ],
};

const FAQS: FaqItem[] = [
  {
    question: "Wie weit ist die Strecke von Mannheim/Heidelberg nach Frankfurt?",
    answer:
      "Die Strecke von Mannheim nach Frankfurt beträgt ca. 80–90 km, von Heidelberg ca. 90–100 km. Dies ist ein klassischer Fernumzug, den wir regelmäßig und zuverlässig durchführen.",
  },
  {
    question: "Kann FriendsMove einen Festpreis für den Umzug nach Frankfurt anbieten?",
    answer:
      "Ja. Nach Klärung von Volumen, Etage und Leistungsumfang erstellen wir ein transparentes Festpreisangebot für Ihren Umzug von oder nach Frankfurt.",
  },
  {
    question: "Wie lange dauert ein Umzug von der Rhein-Neckar-Region nach Frankfurt?",
    answer:
      "Typischerweise dauert ein solcher Umzug einen vollen Tag – inklusive Be- und Entladen sowie Transport. Bei großen Haushalten kann auch ein zweiter Tag eingeplant werden.",
  },
];

export default function UmzugFrankfurtPage() {
  const schema = cityBusinessSchema("Frankfurt am Main", "frankfurt");

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
              <li className="text-white/70">Frankfurt am Main</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">Umzug Frankfurt</p>
              <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Umzug nach<br />
                <span className="text-brand-green">Frankfurt am Main</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                FriendsMove organisiert Ihren Umzug von der Rhein-Neckar-Region nach Frankfurt am Main –
                oder umgekehrt. Professionell geplant, vollversichert und zum transparenten Festpreis.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Fernumzug möglich", "Festpreis", "Vollversichert", "Antwort in 60 Min."].map((chip) => (
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
            <p className="section-label">Frankfurt – Fernumzug mit System</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Umzug von/nach Frankfurt – was Sie wissen sollten
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Frankfurt am Main liegt ca. 80–100 km von der Rhein-Neckar-Region entfernt. Ein Umzug
                dorthin ist ein klassischer Fernumzug, der sorgfältige Planung erfordert: Fahrzeugkapazität,
                optimale Routenführung und klare Zeitfenster für Be- und Entladen.
              </p>
              <p>
                FriendsMove hat Erfahrung mit überregionalen Umzügen und bietet Ihnen einen transparenten
                Festpreis für die gesamte Strecke. Mehr Infos zu unserem Fernumzugsservice auf unserer{" "}
                <Link href="/regionen/frankfurt" className="text-brand-green underline hover:text-brand-green/80">
                  Frankfurt-Seite
                </Link>{" "}
                sowie auf der{" "}
                <Link href="/fernumzug" className="text-brand-green underline hover:text-brand-green/80">
                  Fernumzug-Seite
                </Link>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏦", title: "Sachsenhausen", desc: "Beliebt, alte und neue Bebauung" },
              { icon: "🎓", title: "Bockenheim & Nordend", desc: "Hohe Nachfrage, dicht bebaut" },
              { icon: "🌆", title: "Westend & Innenstadt", desc: "Enger Innenstadtbereich" },
              { icon: "🌳", title: "Bornheim & Ostend", desc: "Wachsende Stadtteile" },
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
          <p className="section-label">Unsere Services für Frankfurt</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Was wir für Ihren Frankfurt-Umzug anbieten</h2>
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
            <h2 className="font-display font-bold text-3xl text-brand-dark">Fragen zum Umzug nach Frankfurt</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
