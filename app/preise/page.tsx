import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CtaSection from "@/components/sections/CtaSection";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

export const metadata: Metadata = {
  title: "Umzugspreise & Kosten – Transparent & Fair | FriendsMove",
  description:
    "Faire und transparente Umzugspreise von FriendsMove im Rhein-Neckar-Gebiet. Vollversichert, individuell kalkuliert und ohne versteckte Kosten. Kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de/preise" },
  openGraph: {
    title: "Umzugspreise & Kosten – Transparent & Fair | FriendsMove",
    description:
      "Transparente Preisgestaltung für Umzüge in Mannheim, Heidelberg, Ludwigshafen und der Rhein-Neckar-Region.",
    url: "https://www.friendsmove.de/preise",
    siteName: "FriendsMove",
    type: "website",
  },
};

const PROMISES = [
  {
    icon: "🛡",
    title: "Vollversichert",
    text: "Ihr Umzugsgut ist während Transport, Tragen und Beladung umfassend abgesichert.",
  },
  {
    icon: "💰",
    title: "Faire Preise",
    text: "Wir kalkulieren nachvollziehbar, transparent und passend zum tatsächlichen Umfang Ihres Umzugs.",
  },
  {
    icon: "📋",
    title: "Klare Angebote",
    text: "Sie erhalten ein verständliches Angebot ohne unübersichtliche Positionen oder versteckte Kosten.",
  },
  {
    icon: "⚡",
    title: "Schnelle Rückmeldung",
    text: "In der Regel melden wir uns innerhalb von 60 Minuten mit einer ersten Einschätzung zurück.",
  },
];

const FACTORS = [
  {
    icon: "🏠",
    title: "Wohnungsgröße",
    text: "Je größer Wohnung oder Haus, desto mehr Möbel, Kartons und Trageaufwand müssen eingeplant werden.",
  },
  {
    icon: "📍",
    title: "Entfernung",
    text: "Kurzstrecke, Stadtumzug oder Fernumzug beeinflussen Fahrzeit, Einsatzdauer und Fahrzeugplanung.",
  },
  {
    icon: "🛗",
    title: "Etage & Zugang",
    text: "Treppen, enge Zufahrten, fehlender Aufzug oder lange Laufwege wirken sich auf den Aufwand aus.",
  },
  {
    icon: "🔧",
    title: "Montagearbeiten",
    text: "Möbelmontage, Küchenmontage oder Sondertransporte werden individuell in die Planung aufgenommen.",
  },
  {
    icon: "🚦",
    title: "Halteverbotszone",
    text: "Eine reservierte Ladezone spart Zeit und erleichtert die Durchführung besonders in Innenstädten.",
  },
  {
    icon: "📦",
    title: "Verpackung & Service",
    text: "Ob Sie selbst packen oder unseren Packservice nutzen, macht einen Unterschied in Zeit und Material.",
  },
];

const REASONS = [
  "Keine versteckten Kosten",
  "Individuelle Kalkulation statt pauschaler Standardpreise",
  "Festpreis auf Wunsch möglich",
  "Professionelles und versichertes Team",
  "Geeignet für Privat- und Firmenumzüge",
  "Stark in Mannheim, Heidelberg, Ludwigshafen und Umgebung",
];

const CITIES = [
  "Mannheim",
  "Heidelberg",
  "Ludwigshafen",
  "Schwetzingen",
  "Weinheim",
  "Frankenthal",
];

export default function PreisePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden bg-brand-dark"
        aria-labelledby="preise-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero-leistungen.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#041b14]/92 via-[#041b14]/72 to-[#041b14]/56" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041b14]/72 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(ellipse_60%_55%_at_20%_55%,rgba(0,255,136,0.14)_0%,transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent" />

        <div className="container-max relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/10 px-4 py-2 text-sm font-semibold text-[#00FF88] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
              Preise & Transparenz
            </p>

            <h1
              id="preise-heading"
              className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Faire Preise.
              <span className="block text-[#00FF88]">Transparent kalkuliert.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Jeder Umzug ist anders. Deshalb setzen wir bei FriendsMove nicht auf
              unklare Pauschalen, sondern auf transparente Angebote, faire
              Kalkulation und einen professionellen, vollversicherten Service im
              Rhein-Neckar-Gebiet.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#00FF88] px-8 text-base font-bold text-[#062014] shadow-[0_10px_35px_rgba(0,255,136,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,255,136,0.4)]"
              >
                Kostenloses Angebot anfragen
              </a>

              <Link
                href="/dienstleistungen"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/14"
              >
                Dienstleistungen ansehen
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              {["Vollversichert", "Ohne versteckte Kosten", "Festpreis auf Wunsch"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[#00FF88]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRICE PROMISE */}
      <SectionWrapper className="relative overflow-hidden bg-[#F6F0E8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#00FF88]/5 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0E2A1F]/5 blur-[120px]"
        />

        <div className="relative z-10">
          <div className="mb-14 max-w-3xl">
            <p className="section-label mb-3">Unser Preisversprechen</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
              Gute Preise brauchen Vertrauen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">
              Für viele Kundinnen und Kunden ist nicht nur der Preis wichtig,
              sondern auch die Sicherheit dahinter. Deshalb kombinieren wir faire
              Kalkulation mit Zuverlässigkeit, Versicherungsschutz und klarer
              Kommunikation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
            {PROMISES.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#D4E5DC]/70 bg-white/95 p-6 shadow-[0_8px_30px_rgba(6,32,20,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF88]/25 hover:shadow-[0_24px_70px_rgba(6,32,20,0.16)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#00FF88]/10 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00FF88]/12 bg-[#F7FBF8] text-2xl shadow-[0_0_0_6px_rgba(0,255,136,0.03)]">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FACTORS + SALES BLOCKS */}
      <SectionWrapper className="bg-[#F8F7F3]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="section-label mb-3">Wie wir kalkulieren</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
              Was beeinflusst Ihren Umzugspreis?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-muted">
              Ein fairer Preis entsteht dann, wenn der Umzug realistisch geplant
              wird. Deshalb berücksichtigen wir die wichtigsten Faktoren und
              erstellen darauf aufbauend ein passendes Angebot.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {FACTORS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-brand-border bg-white p-5 shadow-[0_6px_24px_rgba(6,32,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(6,32,20,0.09)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7FBF8] text-xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-[30px] border border-white/8 bg-brand-dark p-8 text-white shadow-[0_24px_70px_rgba(6,32,20,0.16)]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#00FF88]">
                Festpreis auf Wunsch
              </p>
              <h3 className="font-display text-3xl font-bold">
                Planbar statt unklar
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Auf Wunsch erstellen wir ein schriftliches Festpreisangebot.
                Damit wissen Sie vor dem Umzug, womit Sie rechnen können — klar,
                nachvollziehbar und ohne spätere Überraschungen.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Schriftliches Angebot",
                  "Transparent kalkuliert",
                  "Ideal für planbare Umzüge",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00FF88]/15 text-[#00FF88]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#00FF88] px-7 text-sm font-bold text-[#062014] shadow-[0_10px_35px_rgba(0,255,136,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,255,136,0.38)]"
                >
                  Festpreis anfragen
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-brand-border bg-white p-8 shadow-[0_10px_32px_rgba(6,32,20,0.06)]">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#00A85B]">
                Warum FriendsMove
              </p>
              <h3 className="font-display text-3xl font-bold text-brand-dark">
                Gute Werbung ist ein guter Umzug
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">
                Unsere beste Werbung sind saubere Abläufe, faire Preise und
                zufriedene Kundinnen und Kunden. Genau deshalb setzen wir auf
                Qualität, Versicherungsschutz und einen seriösen Auftritt statt auf
                Lockpreise.
              </p>

              <div className="mt-6 grid gap-3">
                {REASONS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-brand-border bg-[#FCFDFC] px-4 py-3 text-sm font-medium text-brand-dark"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#00FF88]" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={LEAD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  Angebot sichern
                </a>
                <Link href="/faq" className="btn-outline text-sm">
                  Zur FAQ-Seite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* LOCAL SEO / GOOGLE ADS SUPPORT */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-label mb-3">Rhein-Neckar Region</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            Transparent kalkulierte Umzüge in Ihrer Region
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            FriendsMove unterstützt Privat- und Firmenumzüge in Mannheim,
            Heidelberg, Ludwigshafen, Schwetzingen, Weinheim, Frankenthal und der
            gesamten Rhein-Neckar-Region. Unsere Preisgestaltung ist nachvollziehbar,
            unser Team professionell und jeder Umzug wird passend zu Ihrem Bedarf
            geplant. So verstehen Interessenten schnell, wofür wir stehen: faire
            Konditionen, persönliche Betreuung und ein zuverlässig organisierter
            Umzugsservice.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {CITIES.map((city) => (
              <span
                key={city}
                className="rounded-full border border-brand-border bg-[#F8FBF9] px-4 py-2 text-sm font-semibold text-brand-dark"
              >
                {city}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={LEAD_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Kostenloses Angebot anfragen
            </a>
            <Link href="/regionen" className="btn-outline">
              Regionen ansehen
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}