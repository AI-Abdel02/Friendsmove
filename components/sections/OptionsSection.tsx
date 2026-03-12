const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

const OPTIONS = [
  {
    icon: "🎓",
    title: "Studenten Umzugshilfe",
    description:
      "Ideal für kleine Umzüge oder Unterstützung beim Tragen von Möbeln und Kartons.",
    points: [
      "Flexible Stundenbuchung",
      "Ideal für kleine Wohnungen",
      "Kurzfristig verfügbar",
    ],
    cta: "Studentenhelfer anfragen",
  },
  {
    icon: "👷",
    title: "1 Umzugshelfer",
    description:
      "Ein einzelner Helfer unterstützt Sie beim Tragen, Laden oder Entladen.",
    points: [
      "Unterstützung beim Möbeltragen",
      "Flexible Einsatzdauer",
      "Perfekt für kleinere Transporte",
    ],
    cta: "1 Helfer anfragen",
  },
  {
    icon: "👷👷",
    title: "2 Umzugshelfer",
    description:
      "Perfekt für Wohnungsumzüge – zwei Helfer erledigen den Transport effizient.",
    points: [
      "Schneller Möbeltransport",
      "Ideal für Wohnungen",
      "Professionelle Unterstützung",
    ],
    cta: "2 Helfer anfragen",
    featured: true,
  },
  {
    icon: "🚚",
    title: "Transporter mit Fahrer",
    description:
      "Transportlösung für Möbel, Geräte und Kartons mit erfahrenem Fahrer.",
    points: [
      "Sicherer Möbeltransport",
      "Ideal für Fernumzüge",
      "Flexible Buchung",
    ],
    cta: "Transporter anfragen",
  },
  {
    icon: "🏠",
    title: "Komplettes Umzugsteam",
    description:
      "Rundum-Umzugsservice mit Helfern, Fahrzeug und optionaler Möbelmontage.",
    points: [
      "Umzugshelfer + Fahrzeug",
      "Planung & Organisation",
      "Möbelmontage möglich",
    ],
    cta: "Kompletten Umzug planen",
  },
];

export default function OptionsSection() {
  const topRow = OPTIONS.slice(0, 3);
  const bottomRow = OPTIONS.slice(3);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#062014_0%,#08261a_55%,#0b2d1f_100%)] py-24 md:py-32">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10rem] top-16 h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/10 blur-[140px]" />
        <div className="absolute right-[-8rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-[#00FF88]/8 blur-[140px]" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00FF88]">
            Flexible Buchung
          </p>

          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Buchen Sie genau die Hilfe,
            <br className="hidden md:block" /> die Sie brauchen
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#a4beb3] md:text-lg">
            Ob Studentenhilfe, einzelne Umzugshelfer oder ein kompletter
            Umzugsservice mit Fahrzeug – FriendsMove stellt Ihr passendes Team
            flexibel für Mannheim, Heidelberg, Ludwigshafen und das
            Rhein-Neckar-Gebiet zusammen.
          </p>
        </div>

        {/* top row */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3">
          {topRow.map((option) => (
            <article
              key={option.title}
              className={`rounded-[28px] border p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 ${
                option.featured
                  ? "border-[#00FF88]/45 bg-white/[0.09] ring-1 ring-[#00FF88]/25"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              <div className="mb-4 text-4xl">{option.icon}</div>

              <h3 className="text-2xl font-bold text-white">{option.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[#a4beb3]">
                {option.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[#d6e4de]">
                {option.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-0.5 text-[#00FF88]">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-[#00FF88] px-5 py-3 text-sm font-bold text-[#062014] transition hover:opacity-90"
              >
                {option.cta}
              </a>
            </article>
          ))}
        </div>

        {/* bottom row */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-6 md:grid-cols-2">
          {bottomRow.map((option) => (
            <article
              key={option.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 text-4xl">{option.icon}</div>

              <h3 className="text-2xl font-bold text-white">{option.title}</h3>

              <p className="mt-3 text-sm leading-7 text-[#a4beb3]">
                {option.description}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[#d6e4de]">
                {option.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-0.5 text-[#00FF88]">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-[#00FF88] px-5 py-3 text-sm font-bold text-[#062014] transition hover:opacity-90"
              >
                {option.cta}
              </a>
            </article>
          ))}
        </div>

        {/* SEO support line */}
        <p className="mt-12 text-center text-sm text-[#7f9a8f]">
          Beliebte Suchanfragen: Umzugshelfer Mannheim · Studenten Umzugshilfe
          Heidelberg · Transporter mit Fahrer Ludwigshafen · Umzugsservice
          Rhein-Neckar
        </p>
      </div>

      {/* bottom transition to next cream section */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#f6f0e8]" />
    </section>
  );
}