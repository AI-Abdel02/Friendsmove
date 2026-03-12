import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

const PRICES = [
  {
    title: "1-Zimmer-Umzug",
    size: "ca. 30–45 m²",
    priceFrom: "ab 390 €",
    note: "Ideal für Singles & Studenten",
    features: [
      "2 erfahrene Umzugshelfer",
      "Kleintransporter (bis 3,5 t)",
      "Möbelmontage inklusive",
      "Transportversicherung",
      "Bis 15 km Entfernung",
    ],
  },
  {
    title: "3-Zimmer-Umzug",
    size: "ca. 70–90 m²",
    priceFrom: "ab 750 €",
    note: "Beliebteste Buchung",
    features: [
      "3 erfahrene Umzugshelfer",
      "Großer LKW (7,5 t)",
      "Möbelmontage inklusive",
      "Transportversicherung",
      "Festpreis auf Wunsch",
    ],
  },
  {
    title: "Büroumzug",
    size: "5–15 Arbeitsplätze",
    priceFrom: "auf Anfrage",
    note: "Für Gewerbekunden",
    features: [
      "4+ erfahrene Umzugshelfer",
      "Spezialfahrzeuge nach Bedarf",
      "IT-gerechte Verpackung",
      "Koordinator vor Ort",
      "Wochenend-Umzug möglich",
    ],
  },
];

const PRICE_FACTORS = [
  "📏 Umzugsentfernung",
  "🏠 Größe der Wohnung",
  "🛗 Etage & Fahrstuhl",
  "📦 Verpackungsbedarf",
  "📅 Gewähltes Datum",
  "🔧 Möbelmontage",
  "🚦 Halteverbotszone",
  "🌍 Fernumzug / Ausland",
];

export default function PricingSection() {
  return (
    <section id="preise" className="bg-[#EDE8DC] section-py">
      <div className="container-max">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <p className="section-label">Transparente Preise</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-4">
            Was kostet mein Umzug?
          </h2>
          <p className="text-[#5A7A6E] text-lg max-w-2xl mx-auto">
            Die Kosten hängen von Entfernung, Umfang und Zusatzleistungen ab.
            Diese Beispiele geben Ihnen eine erste Orientierung. Ihr konkretes
            Angebot erhalten Sie kostenlos und unverbindlich.
          </p>
        </FadeUp>

        {/* Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-7" role="list">
          {PRICES.map((p, i) => {
            const featured = i === 1;
            return (
              <FadeUp key={p.title} delay={i * 100} className="h-full">
                <li
                  role="listitem"
                  className={`relative overflow-hidden rounded-3xl flex flex-col h-full ${
                    featured
                      ? "bg-white ring-2 ring-[#00FF88] shadow-[0_12px_50px_rgba(0,255,136,0.15)]"
                      : "bg-white shadow-[0_4px_24px_rgba(6,32,20,0.08)] border border-[#D4E5DC]/60"
                  }`}
                >
                  {featured && (
                    <div className="absolute top-5 right-5">
                      <span className="bg-[#00FF88] text-[#062014] rounded-full text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        Beliebt
                      </span>
                    </div>
                  )}

                  <div className="p-8 flex flex-col gap-6 flex-1">
                    <div>
                      <p className="text-[#5A7A6E] text-sm mb-1">{p.size}</p>
                      <h3 className="font-display font-bold text-xl text-[#062014]">
                        {p.title}
                      </h3>
                      <p className="font-display text-4xl font-bold text-[#062014] mt-3">
                        {p.priceFrom}
                      </p>
                      {p.note && (
                        <p className="text-sm text-[#00CC6E] font-medium mt-1.5">
                          {p.note}
                        </p>
                      )}
                    </div>

                    <ul
                      className="flex flex-col gap-2.5 flex-1"
                      aria-label={`Leistungen für ${p.title}`}
                    >
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#062014]">
                          <svg
                            className="w-4 h-4 text-[#00CC6E] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-[#D4E5DC]/60 mt-auto">
                      <a
                        href={LEAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                          featured
                            ? "bg-[#00FF88] text-[#062014] shadow-[0_8px_30px_rgba(0,255,136,0.25)] hover:bg-[#00CC6E] hover:shadow-[0_10px_35px_rgba(0,255,136,0.35)]"
                            : "bg-[#F6F0E8] text-[#062014] hover:bg-[#00FF88] hover:shadow-[0_8px_25px_rgba(0,255,136,0.2)]"
                        }`}
                      >
                        Angebot anfragen
                      </a>
                    </div>
                  </div>
                </li>
              </FadeUp>
            );
          })}
        </ul>

        {/* Price factors panel */}
        <FadeUp delay={200} className="mt-10">
          <div className="bg-[#0E2A1F] text-white rounded-2xl p-7">
            <h3 className="font-display font-bold text-xl text-white mb-5">
              Diese Faktoren beeinflussen Ihren Preis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PRICE_FACTORS.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] flex-shrink-0" aria-hidden="true" />
                  {f}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/40 italic">
              * Für einen genauen Festpreis empfehlen wir eine kurze Besichtigung
              oder detaillierte Bestandsaufnahme. Diese ist für Sie kostenlos und
              unverbindlich.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="text-center mt-8">
          <Link
            href="/preise"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#062014] text-[#062014] px-8 py-3 font-semibold hover:bg-[#062014] hover:text-white transition-all duration-200"
          >
            Alle Preisinformationen ansehen
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
