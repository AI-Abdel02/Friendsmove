import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { SERVICES } from "@/lib/seo";

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  privatumzug:
    "Professioneller Umzug für Privatpersonen – sorgfältig geplant und stressfrei durchgeführt.",
  firmenumzug:
    "Gewerbliche Umzüge mit minimaler Betriebsunterbrechung und strukturierter Logistik.",
  moebelmontage:
    "Auf- und Abbau von Möbeln aller Hersteller – fachgerecht und ohne Beschädigungen.",
  verpackungsservice:
    "Professionelles Verpacken Ihres Inventars mit hochwertigen Materialien.",
  seniorenumzug:
    "Besonders umsichtiger Umzug für Senioren – mit Geduld, Sorgfalt und Empathie.",
  fernumzug:
    "Überregionale Umzüge in Deutschland und Europa – termingerecht und sicher.",
  entruempelung:
    "Entrümpelung und Räumung von Wohnungen, Kellern und Dachböden.",
  halteverbotszone:
    "Beantragung und Einrichtung von Halteverbotszonen für Ihren Umzugstag.",
};

export default function ServicesSection() {
  return (
    <section id="dienstleistungen" className="bg-[#FAF8F3] section-py">
      <div className="container-max">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <p className="section-label">Unsere Leistungen</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-[#5A7A6E] text-lg max-w-xl mx-auto">
            Von der einfachen Wohnungsräumung bis zum komplexen Firmenumzug –
            FriendsMove hat für jeden Bedarf die richtige Lösung.
          </p>
        </FadeUp>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
          {SERVICES.map((service, i) => (
            <FadeUp key={service.slug} delay={i * 75} className="h-full">
              <li role="listitem" className="h-full">
                <Link
                  href={`/${service.slug}`}
                  className="group relative bg-white rounded-3xl p-6 shadow-[0_2px_20px_rgba(6,32,20,0.07)] border border-[#D4E5DC]/50 hover:shadow-[0_12px_40px_rgba(6,32,20,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full no-underline block"
                  aria-label={`Mehr über ${service.name}`}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#F6F0E8] group-hover:bg-[#0E2A1F] rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 mb-4 flex-shrink-0">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#062014] group-hover:text-[#00CC6E] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[#5A7A6E] text-sm leading-relaxed flex-1">
                    {SERVICE_DESCRIPTIONS[service.slug] ?? ""}
                  </p>

                  <span className="flex items-center gap-1 text-[#00CC6E] text-sm font-semibold mt-3">
                    Mehr erfahren
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            </FadeUp>
          ))}
        </ul>

        {/* Bottom CTA */}
        <FadeUp className="text-center mt-12">
          <Link
            href="/dienstleistungen"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#062014] text-[#062014] px-8 py-3 font-semibold hover:bg-[#062014] hover:text-white transition-all duration-200"
          >
            Alle Dienstleistungen ansehen
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
