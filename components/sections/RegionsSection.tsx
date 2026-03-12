import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import CityMarquee from "@/components/ui/CityMarquee";
import { CITIES } from "@/lib/seo";

const CITY_EXTRAS: Record<string, { highlight: string; emoji: string }> = {
  mannheim:     { highlight: "Umzug in der Quadratestadt", emoji: "🏙" },
  heidelberg:   { highlight: "Altstadt & Neuenheimer Feld", emoji: "🏰" },
  ludwigshafen: { highlight: "Rheinhafen & Stadtgebiet", emoji: "🌉" },
  schwetzingen: { highlight: "Schloss & Kurpfalz", emoji: "🌸" },
  viernheim:    { highlight: "Bergstraße & Region", emoji: "🛍" },
  weinheim:     { highlight: "Zwei-Burgen-Stadt", emoji: "🏔" },
};

export default function RegionsSection() {
  return (
    <section id="regionen" className="bg-[#F4EDE3]">
      {/* Marquee band – full bleed dark green */}
      <div className="bg-[#0E2A1F] py-4 w-full">
        <CityMarquee dark={true} speed="normal" />
      </div>

      {/* Section content */}
      <div className="section-py">
        <div className="container-max">
          {/* Header */}
          <FadeUp className="text-center mb-14">
            <p className="section-label">Unser Einsatzgebiet</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-4">
              Wir sind in Ihrer Region
            </h2>
            <p className="text-[#5A7A6E] text-lg max-w-2xl mx-auto">
              Als regionaler Anbieter kennen wir das Rhein-Neckar-Gebiet genau –
              die Straßen, die Besonderheiten, die besten Lösungen vor Ort.
            </p>
          </FadeUp>

          {/* City grid */}
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-5" role="list">
            {CITIES.map((city, i) => {
              const extra = CITY_EXTRAS[city.slug] ?? {
                highlight: city.desc,
                emoji: "📍",
              };
              return (
                <FadeUp key={city.slug} delay={i * 75} className="h-full">
                  <li role="listitem" className="h-full">
                    <Link
                      href={`/regionen/${city.slug}`}
                      className="group bg-white rounded-3xl p-6 shadow-[0_2px_20px_rgba(6,32,20,0.07)] border border-[#D4E5DC]/50 hover:shadow-[0_8px_35px_rgba(6,32,20,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full no-underline block"
                      aria-label={`Umzug in ${city.name}`}
                    >
                      <span className="text-3xl mb-3 block" aria-hidden="true">
                        {extra.emoji}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#062014] group-hover:text-[#00CC6E] transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-[#5A7A6E] mt-1 mb-4 flex-1">
                        {extra.highlight}
                      </p>
                      <span className="flex items-center gap-1 text-[#00CC6E] text-sm font-semibold mt-auto">
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
              );
            })}
          </ul>

          {/* "Not listed?" panel */}
          <FadeUp delay={150} className="mt-10">
            <div className="bg-[#0E2A1F] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5">
              <span className="text-4xl flex-shrink-0" aria-hidden="true">📍</span>
              <div className="flex-1 text-center md:text-left">
                <p className="font-semibold text-white">Nicht dabei? Kein Problem.</p>
                <p className="text-white/60 text-sm mt-1">
                  Wir sind auch in angrenzenden Städten und Gemeinden tätig.
                  Fragen Sie einfach an – wir finden eine Lösung.
                </p>
              </div>
              <a
                href="https://app.friendsmove.com/web/public/vue-app/lead"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 rounded-full bg-[#00FF88] text-[#062014] font-bold text-sm px-6 py-3 shadow-[0_8px_30px_rgba(0,255,136,0.25)] hover:bg-[#00CC6E] transition-all"
              >
                Anfrage senden
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
