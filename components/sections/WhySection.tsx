import FadeUp from "@/components/ui/FadeUp";

const REASONS = [
  {
    icon: "👷",
    title: "Erfahrene Möbelpacker",
    description:
      "Unser Team wird regelmäßig geschult und behandelt Ihr Inventar wie das eigene.",
  },
  {
    icon: "📊",
    title: "Strukturierte Einsatzplanung",
    description:
      "Jeder Umzug wird im Detail vorgeplant – Zeitplan, Routen und Ressourcen.",
  },
  {
    icon: "🛡",
    title: "Versicherter Transport",
    description:
      "Alle Transporte sind vollkaskoversichert. Ihre Möbel sind zu 100 % geschützt.",
  },
  {
    icon: "🚛",
    title: "Moderne Fahrzeuge",
    description:
      "Sauber, gewartet und ausgestattet – unsere Fahrzeuge sind für jeden Auftrag bereit.",
  },
  {
    icon: "💬",
    title: "Transparente Planung",
    description:
      "Sie erhalten ein klares Angebot und eine transparente Planung ohne Überraschungen.",
  },
  {
    icon: "📍",
    title: "Regionale Ortskenntnis",
    description:
      "Als lokales Unternehmen kennen wir Mannheim, Heidelberg und Ludwigshafen genau.",
  },
  {
    icon: "👤",
    title: "Fester Ansprechpartner",
    description:
      "Sie haben eine feste Kontaktperson – von der Anfrage bis zum Einzug.",
  },
  {
    icon: "⚡",
    title: "Schnelle Reaktionszeit",
    description:
      "Wir antworten auf Anfragen meist innerhalb von 60 Minuten.",
  },
];

export default function WhySection() {
  return (
    <section
      id="warum-friendsmove"
      className="relative overflow-hidden bg-[#F6F0E8] py-24 md:py-32"
    >
      {/* cinematic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/10 blur-[120px]" />
        <div className="absolute right-[-10rem] bottom-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#00FF88]/8 blur-[120px]" />
      </div>

      {/* subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#00FF88]/40" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#00FF88]">
              Warum FriendsMove
            </p>
            <span className="block h-px w-8 bg-[#00FF88]/40" />
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-5">
            Der Unterschied, den Sie spüren
          </h2>

          <p className="text-[#5A7A6E] text-lg max-w-xl mx-auto">
            Wir sind kein anonymes Großunternehmen. Wir sind Ihr regionaler
            Umzugspartner im Rhein-Neckar-Gebiet – mit persönlichem Einsatz und
            professioneller Planung für jeden Umzug.
          </p>
        </FadeUp>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <FadeUp key={r.title} delay={i * 60}>
              <li className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#e6e6e6] hover:border-[#00FF88]/40 hover:shadow-xl transition-all duration-300">

                <div className="w-12 h-12 bg-[#F2FFF8] rounded-xl flex items-center justify-center text-2xl">
                  {r.icon}
                </div>

                <h3 className="font-display font-semibold text-lg text-[#062014]">
                  {r.title}
                </h3>

                <p className="text-[#5A7A6E] text-sm leading-relaxed">
                  {r.description}
                </p>

              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}