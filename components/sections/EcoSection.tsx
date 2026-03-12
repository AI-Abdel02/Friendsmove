import FadeUp from "@/components/ui/FadeUp";

const ECO_ITEMS = [
  {
    icon: "🌿",
    title: "CO₂-optimierte Routen",
    description:
      "Wir planen unsere Fahrtstrecken digital und effizient – weniger Kilometer, weniger Emissionen.",
  },
  {
    icon: "🔄",
    title: "Reduzierte Leerfahrten",
    description:
      "Durch intelligente Tourenplanung minimieren wir unnötige Leerfahrten konsequent.",
  },
  {
    icon: "📦",
    title: "Nachhaltige Verpackung",
    description:
      "Auf Wunsch setzen wir auf wiederverwendbare Transportboxen statt Einwegkartons.",
  },
  {
    icon: "♻️",
    title: "Verantwortungsvolle Entsorgung",
    description:
      "Nicht mehr benötigte Gegenstände werden fachgerecht sortiert, gespendet oder recycelt.",
  },
];

export default function EcoSection() {
  return (
    <section id="nachhaltigkeit" className="bg-[#0E2A1F] section-py">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-[#00FF88]/40" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#00FF88]">
                Nachhaltigkeit
              </p>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-5">
              Umzug mit Verantwortung
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-5">
              Wir sind uns unserer Verantwortung gegenüber der Region bewusst.
              Deshalb optimieren wir unsere Abläufe konsequent – nicht als
              Marketingversprechen, sondern weil es das Richtige ist.
            </p>
            <p className="text-white/50 leading-relaxed text-base">
              Als lokales Unternehmen im Rhein-Neckar-Gebiet wollen wir auch in
              Zukunft in einer lebenswerten Region tätig sein. Das motiviert uns,
              nachhaltig zu handeln.
            </p>
          </FadeUp>

          {/* Right: cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
            {ECO_ITEMS.map((e, i) => (
              <FadeUp key={e.title} delay={i * 80}>
                <li
                  role="listitem"
                  className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#00FF88]/30 transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    <span aria-hidden="true">{e.icon}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {e.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {e.description}
                  </p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
