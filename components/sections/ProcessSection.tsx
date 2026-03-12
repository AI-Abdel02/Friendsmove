import FadeUp from "@/components/ui/FadeUp";

const STEPS = [
  {
    step: 1,
    icon: "📋",
    title: "Anfrage senden",
    description:
      "Füllen Sie unser Online-Formular aus oder rufen Sie uns an. Wir erfassen alle relevanten Details und melden uns innerhalb von 60 Minuten.",
  },
  {
    step: 2,
    icon: "📐",
    title: "Planung & Angebot",
    description:
      "Wir erstellen ein transparentes, verbindliches Angebot – auf Wunsch mit Besichtigung und Festpreisgarantie ohne versteckte Kosten.",
  },
  {
    step: 3,
    icon: "🚛",
    title: "Umzugstag",
    description:
      "Unser erfahrenes Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihr Inventar mit höchster Sorgfalt.",
  },
  {
    step: 4,
    icon: "🏠",
    title: "Einzug & Abschluss",
    description:
      "Alles wird an Ort und Stelle aufgebaut. Erst wenn Sie rundum zufrieden sind, ist unser Auftrag vollständig abgeschlossen.",
  },
];

export default function ProcessSection() {
  return (
    <section id="prozess" className="bg-[#F6F0E8] section-py">
      <div className="container-max">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <p className="section-label">Unser Prozess</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-4">
            Ihr Umzug in 4 Schritten
          </h2>
          <p className="text-[#5A7A6E] text-lg max-w-xl mx-auto">
            Wir machen Ihr Umzugsvorhaben planbar, transparent und stressfrei –
            von der ersten Anfrage bis zum letzten Karton.
          </p>
        </FadeUp>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Umzugsprozess in 4 Schritten"
        >
          {STEPS.map((s, i) => (
            <FadeUp key={s.step} delay={i * 100} className="h-full">
              <li className="relative bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(6,32,20,0.08)] border border-[#D4E5DC]/60 hover:shadow-[0_8px_40px_rgba(6,32,20,0.13)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Decorative background number */}
                <span
                  className="absolute top-4 right-5 text-7xl font-display font-bold text-[#00FF88]/15 leading-none select-none"
                  aria-hidden="true"
                >
                  {s.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-[#0E2A1F] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 mb-4">
                  <span aria-hidden="true">{s.icon}</span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#062014] mb-2 relative z-10">
                  {s.title}
                </h3>
                <p className="text-[#5A7A6E] text-sm leading-relaxed relative z-10 flex-1">
                  {s.description}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
