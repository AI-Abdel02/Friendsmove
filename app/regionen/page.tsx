
import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES, SERVICES } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Umzug Rhein-Neckar – Alle Regionen | FriendsMove",
  description:
    "FriendsMove ist Ihr Umzugspartner in Lambsheim, Frankenthal, Mannheim, Heidelberg, Ludwigshafen, Schwetzingen, Viernheim, Weinheim und Frankfurt am Main.",
  alternates: { canonical: "https://www.friendsmove.de/regionen" },
};

const CITY_INFO: Record<
  string,
  { desc: string; emoji: string; challenge: string }
> = {
  lambsheim: {
    emoji: "🏡",
    desc: "Gemeinde in der Vorderpfalz mit direkter Nähe zu Frankenthal und dem Rhein-Neckar-Gebiet.",
    challenge:
      "Wohngebiete, enge Zufahrten in Nebenstraßen und koordinierte Haltemöglichkeiten.",
  },
  frankenthal: {
    emoji: "🏙️",
    desc: "Stadt in der Vorderpfalz mit urbaner Struktur und guter Verbindung in die Region.",
    challenge:
      "Dichte Wohnlagen, Parkraumsituation und logistische Planung im Stadtgebiet.",
  },
  mannheim: {
    emoji: "🏙",
    desc: "Deutschlands Quadratestadt mit dicht bebautem Stadtgebiet.",
    challenge:
      "Parkplatzmangel, enge Innenstadtgassen, Halteverbotszonen notwendig.",
  },
  heidelberg: {
    emoji: "🏰",
    desc: "Universitäts- und Kulturstadt mit historischer Altstadt.",
    challenge:
      "Altstadtbereich mit engen Gassen, Treppenhäusern und Parkrestriktionen.",
  },
  ludwigshafen: {
    emoji: "🌉",
    desc: "Industriestadt am Rhein mit gemischter Wohn- und Gewerbelage.",
    challenge:
      "Schwerlasttransporte, Gewerbegebiet-Logistik und weite Fahrstrecken im Stadtgebiet.",
  },
  schwetzingen: {
    emoji: "🌸",
    desc: "Schlossstadt in der Kurpfalz – ruhig, gepflegt und strukturiert.",
    challenge:
      "Historischer Ortskern, Schlosspark-Umgebung und sensible Zufahrtsbereiche.",
  },
  viernheim: {
    emoji: "🛍",
    desc: "Stadt an der Bergstraße mit guter Erreichbarkeit und wachsendem Wohngebiet.",
    challenge:
      "Neue Wohnquartiere, verkehrsreiche Zonen und koordinierte Ladebereiche.",
  },
  weinheim: {
    emoji: "🏔",
    desc: "Zwei-Burgen-Stadt an der Bergstraße mit charmanten Wohnlagen.",
    challenge:
      "Hanglagen, Altstadtbereiche und kurvenreiche Zufahrten in Wohnstraßen.",
  },
  frankfurt: {
    emoji: "🏦",
    desc: "Finanzmetropole Deutschlands mit dichter Bebauung und hohem Verkehrsaufkommen.",
    challenge:
      "Stadtverkehr, Ladezonen, Zeitfenster und komplexe Zufahrtsplanung bei Umzügen.",
  },
};

export default function RegionenPage() {
  return (
    <>
      <section
        className="bg-brand-dark py-20 md:py-28"
        aria-labelledby="regions-heading"
      >
        <div className="container-max text-center">
          <p className="section-label text-brand-green">Unser Einsatzgebiet</p>
          <h1
            id="regions-heading"
            className="mt-2 mb-5 font-display text-4xl font-bold text-white md:text-5xl"
          >
            Umzug in Lambsheim & Rhein-Neckar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Als regionaler Spezialist kennen wir Städte, Wohnlagen,
            Zufahrtswege und logistische Besonderheiten in Lambsheim,
            Frankenthal, Mannheim, Heidelberg und der gesamten Region –
            und finden für Ihren Umzug die passende Lösung.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <ul
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {CITIES.map((city) => {
            const info = CITY_INFO[city.slug] ?? {
              emoji: "📍",
              desc: city.desc,
              challenge:
                "Individuelle Planung, passende Fahrzeuge und zuverlässige Durchführung vor Ort.",
            };

            return (
              <li key={city.slug} role="listitem">
                <Link
                  href={`/regionen/${city.slug}`}
                  className="group card flex h-full flex-col gap-4 transition-all hover:border hover:border-brand-green"
                  aria-label={`Umzugsservices in ${city.name}`}
                >
                  <span className="text-4xl" aria-hidden="true">
                    {info.emoji}
                  </span>

                  <div>
                    <h2 className="mb-2 font-display text-xl font-bold text-brand-dark transition-colors group-hover:text-brand-accent">
                      Umzug {city.name}
                    </h2>

                    <p className="mb-3 text-sm leading-relaxed text-brand-muted">
                      {info.desc}
                    </p>

                    <div className="rounded-xl bg-brand-card p-3">
                      <p className="mb-1 text-xs font-semibold text-brand-dark">
                        Ortsspezifische Besonderheit:
                      </p>
                      <p className="text-xs leading-relaxed text-brand-muted">
                        {info.challenge}
                      </p>
                    </div>
                  </div>

                  <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-brand-accent">
                    Zur Stadtseite
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-bg">
        <div className="mb-10 text-center">
          <p className="section-label">Unsere Dienstleistungen</p>
          <h2 className="mb-4 font-display text-3xl font-bold text-brand-dark">
            Alle Services in allen Regionen
          </h2>
          <p className="mx-auto max-w-2xl text-brand-muted">
            Unsere Umzugsleistungen stehen in Lambsheim, Frankenthal,
            Mannheim, Heidelberg, Ludwigshafen, Schwetzingen, Viernheim,
            Weinheim und Frankfurt am Main zur Verfügung.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4" role="list">
          {SERVICES.map((s) => (
            <li key={s.slug} role="listitem">
              <Link
                href={`/${s.slug}`}
                className="card flex flex-col items-center gap-2 text-center transition-all hover:border hover:border-brand-green"
              >
                <span className="text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="text-sm font-medium text-brand-dark">
                  {s.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}