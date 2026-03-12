import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Umzug Weinheim – Umzugsunternehmen Weinheim | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen für Weinheim an der Bergstraße. Privatumzug, Möbelmontage – vollversichert, Festpreis, zuverlässig. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/umzug-weinheim" },
  openGraph: {
    title: "Umzug Weinheim – FriendsMove Umzugsunternehmen",
    description: "Ihr regionaler Umzugspartner in Weinheim an der Bergstraße. Transparent, zuverlässig, vollversichert.",
    url: "https://www.friendsmove.de/umzug-weinheim",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Umzug Weinheim", item: "https://www.friendsmove.de/umzug-weinheim" },
  ],
};

const FAQS: FaqItem[] = [
  {
    question: "Führt FriendsMove auch Umzüge in Weinheims Hanglagen durch?",
    answer:
      "Ja. Weinheims Stadtteile wie Sulzbach oder Rippenweier liegen erhöht. Wir planen solche Umzüge sorgfältig – mit passenden Fahrzeugen und erfahrenem Team.",
  },
  {
    question: "Können wir auch in umliegenden Gemeinden von Weinheim buchen?",
    answer:
      "Ja. Wir sind auch in Lützelsachsen, Hohensachsen, Hemsbach, Laudenbach und der gesamten nördlichen Bergstraße tätig.",
  },
  {
    question: "Was kostet ein Umzug in Weinheim?",
    answer:
      "Das hängt von Volumen, Etage und Entfernung ab. Senden Sie uns eine Anfrage – wir erstellen schnell ein kostenloses Festpreisangebot.",
  },
];

export default function UmzugWeinheimPage() {
  const schema = cityBusinessSchema("Weinheim", "weinheim");

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
              <li className="text-white/70">Weinheim</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">Umzug Weinheim</p>
              <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Umzugsunternehmen<br />
                <span className="text-brand-green">in Weinheim</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                FriendsMove – Ihr zuverlässiger Umzugspartner in der Zwei-Burgen-Stadt an der Bergstraße.
                Altstadt, Sulzbach oder Lützelsachsen – wir kennen Weinheim und arbeiten effizient.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Bergstraße erfahren", "Halteverbotszone möglich", "Festpreis", "Vollversichert"].map((chip) => (
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
            <p className="section-label">Weinheim – Lokal kennen wir uns aus</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Umzug in Weinheim – lokal und zuverlässig
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Weinheim an der Bergstraße ist bekannt für seine historische Altstadt und die malerische
                Lage am Übergang zwischen Rheinebene und Odenwald. Einige Stadtteile liegen erhöht und
                erfordern beim Umzug entsprechend angepasste Fahrzeuge und sorgfältige Routenplanung.
              </p>
              <p>
                Als erfahrenes Unternehmen in der Rhein-Neckar-Region kennen wir Weinheim und seine
                Stadtteile gut. Alle Details zu unseren Leistungen vor Ort finden Sie auf unserer{" "}
                <Link href="/regionen/weinheim" className="text-brand-green underline hover:text-brand-green/80">
                  Weinheim-Seite
                </Link>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏰", title: "Altstadt", desc: "Historische Bausubstanz, enge Gassen" },
              { icon: "⛰️", title: "Sulzbach & Rippenweier", desc: "Erhöhte Hanglage" },
              { icon: "🌿", title: "Lützelsachsen", desc: "Westlicher Stadtteil, gut erreichbar" },
              { icon: "🌾", title: "Hohensachsen & Oberflockenbach", desc: "Ländliches Umfeld" },
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
          <p className="section-label">Unsere Services in Weinheim</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Was wir in Weinheim anbieten</h2>
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
            <h2 className="font-display font-bold text-3xl text-brand-dark">Fragen zum Umzug in Weinheim</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
