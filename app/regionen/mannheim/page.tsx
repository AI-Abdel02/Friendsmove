import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";
import type { FaqItem, Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "Umzug Mannheim – Umzugsunternehmen Mannheim | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen in Mannheim. Privatumzug, Firmenumzug, Möbelmontage – vollversichert, Festpreis, Antwort in 60 Minuten. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/regionen/mannheim" },
  openGraph: {
    title: "Umzug Mannheim – FriendsMove Umzugsunternehmen",
    description: "Ihr regionaler Umzugspartner in Mannheim. Transparent, zuverlässig, vollversichert.",
    url: "https://www.friendsmove.de/regionen/mannheim",
  },
};

const FAQS: FaqItem[] = [
  {
    question: "Benötige ich für einen Umzug in Mannheim eine Halteverbotszone?",
    answer:
      "In Mannheims Quadraten und vielen Stadtgebieten ist eine Halteverbotszone sinnvoll oder notwendig. Wir beantragen diese für Sie beim Ordnungsamt – einfach ansprechen.",
  },
  {
    question: "Wie lange dauert ein Umzug innerhalb von Mannheim?",
    answer:
      "Das hängt von der Wohnungsgröße und dem Stockwerk ab. Eine 2-Zimmer-Wohnung innerhalb der Stadt dauert typischerweise 3–5 Stunden.",
  },
  {
    question: "Kann FriendsMove auch kurzfristig in Mannheim helfen?",
    answer:
      "Ja, wir haben oft noch kurzfristige Kapazitäten. Rufen Sie uns einfach an oder schreiben Sie uns – wir prüfen sofort, was möglich ist.",
  },
];

const LOCAL_TESTIMONIALS: Testimonial[] = [
  {
    name: "Markus Bauer",
    city: "Mannheim",
    rating: 5,
    service: "Privatumzug",
    date: "Jan 2024",
    text: "Umzug in den Mannheimer Quadraten – FriendsMove hat die Halteverbotszone organisiert und alles tadellos durchgeführt. Pünktlich, professionell, top!",
  },
  {
    name: "Claudia Werner",
    city: "Mannheim-Lindenhof",
    rating: 5,
    service: "Möbelmontage",
    date: "Mrz 2024",
    text: "Küchenmontage und Möbelaufbau im Lindenhof. Schnell, sauber, keine Beschädigungen. Genau so soll's sein.",
  },
];

export default function MannheimPage() {
  const schema = cityBusinessSchema("Mannheim", "mannheim");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden" aria-labelledby="city-heading">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-max relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white/70">Startseite</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/regionen" className="hover:text-white/70">Regionen</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">Mannheim</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">Umzug Mannheim</p>
              <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
                Ihr Umzugsunternehmen<br />
                <span className="text-brand-green">in Mannheim</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                FriendsMove ist Ihr lokaler Umzugspartner in der Quadratestadt. 
                Ob Innenstadt, Käfertal oder Rheinau – wir kennen Mannheim und 
                sorgen für einen reibungslosen Umzug.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Lokale Ortskenntnis", "Halteverbotszone möglich", "Festpreis", "Vollversichert"].map((chip) => (
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

      {/* Mannheim local context */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Mannheim – Lokal kennen wir uns aus</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              Umzug in der Quadratestadt hat seine Besonderheiten
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>
                Mannheims einzigartiges Quadratesystem macht die Stadt wunderschön – 
                aber für Umzüge stellt es besondere Anforderungen. Enge Zugänge, 
                Parkplatzmangel und Straßenbahn-Trassen erfordern gute Ortskenntnis 
                und Planung.
              </p>
              <p>
                Als in Mannheim ansässiges Unternehmen kennen wir die besten Anfahrtswege, 
                wissen wo Halteverbotszonen nötig sind und haben die Kontakte zum Ordnungsamt.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏙", title: "Innenstadt / Quadrate", desc: "Halteverbotszone meist notwendig" },
              { icon: "🌳", title: "Lindenhof & Neckarstadt", desc: "Straßenparkplätze begrenzt" },
              { icon: "🏘", title: "Sandhofen & Käfertal", desc: "Gute Erreichbarkeit, Neubaugebiete" },
              { icon: "🌉", title: "Rheinau & Almenhof", desc: "Wachsende Wohngebiete, Neuzugänge" },
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

      {/* Services in Mannheim */}
      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-10">
          <p className="section-label">Unsere Services in Mannheim</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">
            Was wir in Mannheim anbieten
          </h2>
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

      {/* Local testimonials */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-10">
          <p className="section-label">Kundenstimmen aus Mannheim</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark">Was Mannheimer sagen</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto" role="list">
          {LOCAL_TESTIMONIALS.map((t) => (
            <li key={t.name} role="listitem">
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-brand-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark">Fragen zum Umzug in Mannheim</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
