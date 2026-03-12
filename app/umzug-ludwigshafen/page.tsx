import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";
import type { FaqItem } from "@/types";

export const metadata: Metadata = {
  title: "Umzug Ludwigshafen – Umzugsunternehmen Ludwigshafen | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen für Ludwigshafen am Rhein. Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Min. Jetzt anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/umzug-ludwigshafen" },
  openGraph: {
    title: "Umzug Ludwigshafen – FriendsMove Umzugsunternehmen",
    description: "Ihr regionaler Umzugspartner in Ludwigshafen am Rhein. Transparent, zuverlässig, vollversichert.",
    url: "https://www.friendsmove.de/umzug-ludwigshafen",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.friendsmove.de" },
    { "@type": "ListItem", position: 2, name: "Umzug Ludwigshafen", item: "https://www.friendsmove.de/umzug-ludwigshafen" },
  ],
};

const FAQS: FaqItem[] = [
  {
    question: "Führt FriendsMove auch Umzüge zwischen Ludwigshafen und Mannheim durch?",
    answer:
      "Ja. Umzüge zwischen Ludwigshafen und Mannheim – über den Rhein – gehören zu unseren häufig gebuchten Strecken. Wir kennen die Route und planen effizient.",
  },
  {
    question: "Wie kurzfristig kann ich in Ludwigshafen einen Umzug buchen?",
    answer:
      "Wir versuchen auch kurzfristige Anfragen zu erfüllen. Rufen Sie uns direkt an – wir prüfen sofort die verfügbaren Kapazitäten.",
  },
  {
    question: "Bietet FriendsMove auch Firmenumzüge in Ludwigshafen an?",
    answer:
      "Ja. Wir organisieren Büro- und Firmenumzüge in Ludwigshafen mit minimaler Betriebsunterbrechung – auf Wunsch am Wochenende oder außerhalb der Geschäftszeiten.",
  },
];

export default function UmzugLudwigshafenPage() {
  const schema = cityBusinessSchema("Ludwigshafen", "ludwigshafen");

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
              <li className="text-white/70">Ludwigshafen</li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">Umzug Ludwigshafen</p>
              <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Umzugsunternehmen<br />
                <span className="text-brand-green">in Ludwigshafen</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                FriendsMove – Ihr professioneller Umzugspartner in Ludwigshafen am Rhein.
                Von der Innenstadt über Oggersheim bis Mundenheim – wir organisieren Ihren Umzug zuverlässig.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Rhein-Neckar erfahren", "Halteverbotszone möglich", "Festpreis", "Vollversichert"].map((chip) => (
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
            <p className="section-label">Ludwigshafen – Lokal kennen wir uns aus</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Umzug in Ludwigshafen – lokal und zuverlässig
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Ludwigshafen am Rhein ist eine vielfältige Stadt mit unterschiedlichen Wohnquartieren –
                von der belebten Innenstadt bis zu ruhigeren Stadtteilen wie Maudach oder Ruchheim.
                Als erfahrenes Umzugsunternehmen kennen wir die lokalen Gegebenheiten und planen
                jeden Umzug optimal.
              </p>
              <p>
                Umzüge zwischen Ludwigshafen und dem benachbarten Mannheim oder anderen Städten
                der Rhein-Neckar-Region führen wir täglich durch. Mehr zu unseren lokalen Leistungen
                finden Sie auf unserer{" "}
                <Link href="/regionen/ludwigshafen" className="text-brand-green underline hover:text-brand-green/80">
                  Ludwigshafen-Seite
                </Link>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏙", title: "Innenstadt", desc: "Belebte Wohngebiete, gut erschlossen" },
              { icon: "🏘", title: "Oggersheim", desc: "Bevölkerungsreicher Stadtteil" },
              { icon: "🌊", title: "Mundenheim & Oppau", desc: "Südliche Stadtteile am Rhein" },
              { icon: "🌿", title: "Maudach & Ruchheim", desc: "Ruhige Stadtrand-Lagen" },
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
          <p className="section-label">Unsere Services in Ludwigshafen</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Was wir in Ludwigshafen anbieten</h2>
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
            <h2 className="font-display font-bold text-3xl text-brand-dark">Fragen zum Umzug in Ludwigshafen</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
