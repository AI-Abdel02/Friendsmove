import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, cityBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Umzug Heidelberg – Umzugsunternehmen Heidelberg | FriendsMove",
  description:
    "Professionelles Umzugsunternehmen in Heidelberg. Privatumzug, Firmenumzug – vollversichert, Festpreis, Antwort in 60 Minuten. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/regionen/heidelberg" },
};

export default function HeidelbergPage() {
  const schema = cityBusinessSchema("Heidelberg", "heidelberg");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden" aria-labelledby="city-heading">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-max relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/40">
                <li><Link href="/" className="hover:text-white/70">Startseite</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/regionen" className="hover:text-white/70">Regionen</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/70">Heidelberg</li>
              </ol>
            </nav>
            <span className="text-5xl mb-4 block" aria-hidden="true">🏰</span>
            <p className="section-label text-brand-green">Umzug Heidelberg</p>
            <h1 id="city-heading" className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight">
              Ihr Umzugsunternehmen<br />
              <span className="text-brand-green">in Heidelberg</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
              FriendsMove ist Ihr lokaler Umzugspartner in Heidelberg – Universitäts- und Kulturstadt. 
              Wir kennen die Besonderheiten der Stadt und sorgen für einen reibungslosen Umzug.
            </p>
            <p className="text-white/50 text-sm mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="text-brand-green font-semibold">Lokale Besonderheit: </span>
              historische Altstadt, enge Gassen, Mietpreise steigen
            </p>
            <a href={"tel:" + ""} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 w-fit hover:bg-white/20 transition-colors">
              <span className="text-brand-green text-xl" aria-hidden="true">📞</span>
              <div>
                <p className="text-white/60 text-xs">Jetzt anrufen</p>
                <p className="text-white font-semibold"></p>
              </div>
            </a>
          </div>
          <div><QuoteForm /></div>
        </div>
      </section>

      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-10">
          <p className="section-label">Unsere Services in Heidelberg</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Was wir in Heidelberg anbieten</h2>
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

      <CtaSection />
    </>
  );
}
