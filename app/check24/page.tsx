import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { PHONE, PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FriendsMove über Check24 | Schnell & unverbindlich anfragen",
  description:
    "Jetzt Ihren Umzug mit FriendsMove über Check24 anfragen. Schnell, transparent und unverbindlich – professioneller Umzugsservice für Privat- und Firmenkunden.",
  robots: { index: false, follow: false },
};

const LEAD_URL =
  "https://app.friendsmove.com/web/public/vue-app/lead?source=check24";

const BENEFITS = [
  {
    icon: "⚡",
    title: "Schnelle Rückmeldung",
    description:
      "Wir bearbeiten Ihre Anfrage schnell und zuverlässig, damit Sie ohne lange Wartezeit planen können.",
  },
  {
    icon: "🏆",
    title: "Professioneller Service",
    description:
      "Ob Privatumzug, Firmenumzug oder Zusatzleistungen – unser Team arbeitet sorgfältig, freundlich und effizient.",
  },
  {
    icon: "🔓",
    title: "Transparent & unverbindlich",
    description:
      "Ihre Anfrage ist kostenlos und unverbindlich. Sie erhalten eine klare und faire Einschätzung für Ihren Umzug.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Anfrage senden",
    description:
      "Starten Sie Ihre Anfrage bequem online über unser Formular.",
    tag: "Kostenlos & unverbindlich",
  },
  {
    number: "02",
    title: "Details abstimmen",
    description:
      "Wir prüfen Ihre Angaben und melden uns schnell bei Ihnen zurück.",
    tag: "Schnelle Rückmeldung",
  },
  {
    number: "03",
    title: "Umzug professionell durchführen",
    description:
      "Unser Team unterstützt Sie zuverlässig bei Ihrem Umzug oder Transport.",
    tag: "Vollversichert",
  },
];

const WHY_BULLETS = [
  "Privatumzüge",
  "Firmenumzüge",
  "Möbelmontage",
  "Express-Umzüge",
  "Zuverlässige Planung",
  "Freundlicher Service",
];

const FAQS = [
  {
    question: "Ist die Anfrage kostenlos?",
    answer: "Ja, Ihre Anfrage ist kostenlos und unverbindlich.",
  },
  {
    question: "Wie schnell erhalte ich eine Rückmeldung?",
    answer:
      "In der Regel melden wir uns schnellstmöglich nach Eingang Ihrer Anfrage bei Ihnen.",
  },
  {
    question: "Welche Leistungen bietet FriendsMove an?",
    answer:
      "Wir unterstützen unter anderem bei Privatumzügen, Firmenumzügen, Kleintransporten, Möbelmontage und Express-Umzügen.",
  },
];

export default function Check24Page() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] overflow-hidden bg-[#03110d]"
        aria-labelledby="hero-heading"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_30%,rgba(0,255,136,0.14),transparent_28%),radial-gradient(circle_at_72%_28%,rgba(0,255,136,0.10),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(0,120,255,0.08),transparent_32%)]" />

        {/* Cinematic glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[16%] h-[380px] w-[380px] rounded-full bg-[#00FF88]/12 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#00FF88]/9 blur-[120px]"
        />

        {/* Floating particles */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute left-[14%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#00FF88]/45 blur-[1px] animate-pulse" />
          <span className="absolute left-[38%] top-[34%] h-2 w-2 rounded-full bg-white/35 blur-[1px] animate-pulse" />
          <span className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-[#00FF88]/35 blur-[1px] animate-pulse" />
          <span className="absolute left-[28%] bottom-[18%] h-2 w-2 rounded-full bg-white/28 blur-[1px] animate-pulse" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pb-16 pt-[110px] sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">

            {/* ── Left content ── */}
            <div>
              {/* Source badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.55)]" />
                Exklusiv über Check24
              </div>

              <h1
                id="hero-heading"
                className="mt-5 text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-5xl md:mt-6 lg:text-6xl xl:text-[4.6rem]"
              >
                Ihr Umzug mit FriendsMove{" "}
                <span className="relative inline-block text-[#00FF88]">
                  über Check24
                  <span className="absolute -bottom-2 left-0 h-[10px] w-full bg-[#00FF88]/10 blur-md" />
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Schnell, transparent und unverbindlich anfragen. Wir begleiten
                Ihren Umzug professionell – von der ersten Anfrage bis zur
                sicheren Durchführung.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {[
                  "✓ Vollversichert",
                  "✓ Festpreis garantiert",
                  "✓ Rhein-Neckar-Region",
                  "✓ 4,9 / 5 Google",
                ].map((chip) => (
                  <div
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-[#0a1c15]/78 px-3 py-2 text-xs font-medium text-white shadow-[0_12px_24px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-4 sm:py-2.5 sm:text-sm"
                  >
                    {chip}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#00FF88] px-7 text-sm font-extrabold text-[#062014] shadow-[0_18px_45px_rgba(0,255,136,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(0,255,136,0.38)] sm:min-h-[60px] sm:px-8 sm:text-base"
                >
                  <span className="mr-2">Jetzt kostenlos anfragen</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/14 hover:-translate-y-0.5 sm:min-h-[60px] sm:gap-3 sm:px-7 sm:text-base"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#00FF88] sm:h-10 sm:w-10">
                    📞
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </div>

              <p className="mt-4 text-sm text-white/45">
                Unverbindlich · Schnell · Professionell
              </p>
            </div>

            {/* ── Right glass card ── */}
            <div className="w-full lg:ml-auto">
              <div className="relative">
                <div className="absolute inset-0 rounded-[34px] bg-[#00FF88]/16 blur-2xl" />

                <div className="group relative overflow-hidden rounded-[28px] border border-white/18 bg-[linear-gradient(180deg,rgba(6,18,36,0.96)_0%,rgba(7,20,38,0.97)_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:rounded-[34px] sm:p-8">
                  {/* top line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/80 to-transparent" />

                  {/* sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-0 left-[-18%] w-[24%] rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)] opacity-60 animate-[ctaSweep_7.5s_linear_infinite]" />
                  </div>

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00FF88]/12 blur-3xl" />

                  <div className="relative">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#00FF88]">
                      Ihr Vorteil über Check24
                    </p>

                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      Mehr erfahren
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-white/68 sm:leading-7">
                      Als Check24-Interessent profitieren Sie von schneller
                      Bearbeitung und einem persönlichen Ansprechpartner.
                    </p>

                    <div className="mt-5 flex gap-2">
                      <span className="h-1.5 w-12 rounded-full bg-[#00FF88]" />
                      <span className="h-1.5 w-4 rounded-full bg-white/30" />
                    </div>

                    {/* Feature list */}
                    <ul className="mt-6 space-y-3">
                      {[
                        "Kostenlose Anfrage ohne Risiko",
                        "Schnelle Rückmeldung & Festpreis",
                        "Vollversicherter Transport",
                        "Persönlicher Ansprechpartner",
                        "Flexible Umzugstermine",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-white/80"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00FF88]/15 text-[10px] text-[#00FF88]">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={LEAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#00FF88] px-6 text-base font-extrabold text-[#062014] shadow-[0_16px_40px_rgba(0,255,136,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(0,255,136,0.38)] sm:h-16 sm:text-lg"
                    >
                      Jetzt kostenlos anfragen →
                    </a>

                    <p className="mt-4 text-center text-xs text-white/45">
                      Kein Risiko · Keine Vorauszahlung · Kein Spam
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F6F0E8] py-24 md:py-32">
        {/* ambient glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/10 blur-[120px]" />
          <div className="absolute right-[-10rem] bottom-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#00FF88]/8 blur-[120px]" />
        </div>
        {/* subtle grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>

        <div className="container-max relative z-10">
          <FadeUp className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#00FF88]/40" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#00FF88]">
                Warum FriendsMove
              </p>
              <span className="block h-px w-8 bg-[#00FF88]/40" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-5">
              Warum FriendsMove?
            </h2>
            <p className="text-[#5A7A6E] text-lg max-w-xl mx-auto">
              Wir sind Ihr regionaler Umzugspartner – mit persönlichem Einsatz
              und professioneller Planung für jeden Umzug.
            </p>
          </FadeUp>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 80}>
                <li className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#e6e6e6] hover:border-[#00FF88]/40 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F2FFF8] rounded-xl flex items-center justify-center text-2xl">
                    {b.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#062014]">
                    {b.title}
                  </h3>
                  <p className="text-[#5A7A6E] text-sm leading-relaxed">
                    {b.description}
                  </p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f9f5ee_0%,#f3ece3_34%,#eee5da_68%,#e8dfd4_100%)] py-24 md:py-32">
        {/* ambient layers */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-[18%] h-[32rem] w-[32rem] rounded-full bg-[#00FF88]/[0.07] blur-[140px]" />
          <div className="absolute -right-24 bottom-[12%] h-[30rem] w-[30rem] rounded-full bg-[#00FF88]/[0.05] blur-[150px]" />
          <div className="absolute left-[8%] top-0 h-full w-[22rem] rotate-[10deg] bg-gradient-to-b from-white/18 via-white/6 to-transparent blur-3xl" />
        </div>
        {/* grid texture */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>

        <div className="container-max relative z-10">
          <FadeUp className="max-w-2xl mb-20">
            <p className="section-label mb-4">Unser Prozess</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl lg:text-[3.25rem]">
              So{" "}
              <span className="relative inline-block">
                funktioniert es
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#00FF88]" />
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5A7A6E]">
              In drei einfachen Schritten zu Ihrem professionellen Umzug –
              transparent, schnell und stressfrei.
            </p>
          </FadeUp>

          {/* Steps */}
          <div className="relative">
            {/* vertical timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9ded2] to-transparent sm:left-8 lg:hidden"
            />

            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
              {STEPS.map((step, i) => (
                <FadeUp key={step.number} delay={i * 100}>
                  <div className="relative flex gap-6 lg:flex-col lg:gap-5">
                    {/* number node */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#00FF88]/60 bg-white/70 shadow-[0_0_0_8px_rgba(0,255,136,0.08)] backdrop-blur-md lg:h-12 lg:w-12">
                      <div className="absolute inset-0 rounded-full bg-[#00FF88]/[0.07] blur-md" />
                      <span className="relative font-display text-sm font-bold text-[#00C96B] lg:text-xs">
                        {i + 1}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {/* step pill */}
                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00FF88]/25 bg-white/45 px-3 py-1.5 backdrop-blur-sm">
                        <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#00C96B]">
                          SCHRITT {step.number}
                        </span>
                        <span className="h-px w-4 bg-[#00FF88]/40" />
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#00FF88]/25 bg-[#00C96B]/8 px-2 py-0.5 text-[10px] font-semibold text-[#00C96B]">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-bold leading-tight text-[#062014] lg:text-3xl">
                        {step.title}
                      </h3>

                      <p className="text-base leading-relaxed text-[#5A7A6E]">
                        {step.description}
                      </p>

                      <div className="flex items-center gap-3 pt-1">
                        <span className="h-0.5 w-10 rounded-full bg-[#00FF88]" />
                        <span className="h-0.5 w-4 rounded-full bg-[#D4E5DC]" />
                        <span className="h-0.5 w-2 rounded-full bg-[#D4E5DC]" />
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Step CTA */}
          <FadeUp className="mt-20 flex flex-col items-center gap-5 text-center">
            <p className="text-sm font-medium text-[#5A7A6E]">
              Bereit für Ihren stressfreien Umzug?
            </p>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00FF88] px-9 py-4 text-base font-bold text-[#062014] shadow-[0_10px_35px_rgba(0,255,136,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,255,136,0.35)]"
            >
              Kostenloses Angebot anfragen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY FRIENDSMOVE ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06150f] py-24 md:py-32">
        {/* dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-[15%] h-[30rem] w-[30rem] rounded-full bg-[#00FF88]/10 blur-[130px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-[10%] h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/8 blur-[140px]" />

        <div className="container-max relative z-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
            {/* Left */}
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/25 bg-[#00FF88]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00FF88] mb-5">
                Über uns
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight mb-6">
                Ihr zuverlässiger{" "}
                <span className="text-[#00FF88]">Umzugspartner</span>
              </h2>
              <p className="text-white/72 text-base leading-relaxed mb-6 max-w-lg">
                FriendsMove steht für moderne, flexible und kundennahe
                Umzugsservices. Wir unterstützen Privatkunden und Unternehmen
                bei Umzügen, Transporten und Zusatzleistungen – professionell,
                termintreu und mit hohem Qualitätsanspruch.
              </p>
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#00FF88] px-7 text-sm font-extrabold text-[#062014] shadow-[0_12px_32px_rgba(0,255,136,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,255,136,0.34)]"
              >
                Jetzt anfragen
              </a>
            </FadeUp>

            {/* Right — bullet grid */}
            <FadeUp delay={100}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_BULLETS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00FF88]/15 text-xs text-[#00FF88]">
                      ✓
                    </span>
                    <span className="font-display font-semibold text-base text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Rating badge */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/8 px-5 py-3">
                <span className="flex -space-x-1.5">
                  {["O", "S", "I", "U"].map((l) => (
                    <span
                      key={l}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#03110d] bg-[#0f241c] text-xs font-bold text-white"
                    >
                      {l}
                    </span>
                  ))}
                </span>
                <p className="text-sm text-white/80">
                  Über <span className="font-bold text-white">50+ zufriedene</span> Kunden in der Region
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-[#F6F0E8] section-py">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
            {/* sticky left */}
            <FadeUp className="lg:sticky lg:top-28">
              <p className="section-label">Häufige Fragen</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#062014] mb-5 leading-tight">
                Häufige Fragen
              </h2>
              <p className="text-[#5A7A6E] leading-relaxed mb-8 text-base">
                Sie haben noch offene Fragen? Wir helfen Ihnen gerne persönlich
                weiter.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#062014] text-[#062014] px-6 py-3 font-semibold text-sm hover:bg-[#062014] hover:text-white transition-all duration-200"
              >
                📞 Jetzt anrufen
              </a>
            </FadeUp>

            {/* accordion */}
            <FadeUp delay={100} className="lg:col-span-2">
              <FaqAccordion items={FAQS} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#eef1f4] py-24 sm:py-28">
        {/* ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-[#00FF88]/10 blur-3xl" />
          <div className="absolute right-[-6%] top-[8%] h-80 w-80 rounded-full bg-[#00FF88]/8 blur-3xl" />
          <div className="absolute bottom-[-18%] left-[35%] h-72 w-72 rounded-full bg-[#0E2A1F]/8 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <FadeUp>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[36px] border border-[#00FF88]/25 bg-[linear-gradient(135deg,rgba(9,27,22,0.98)_0%,rgba(22,53,48,0.96)_32%,rgba(56,90,86,0.92)_68%,rgba(99,137,130,0.92)_100%)] p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.28)] transition-all duration-700 hover:-translate-y-0.5 hover:shadow-[0_38px_120px_rgba(0,0,0,0.34)]"
            >
              <div className="relative overflow-hidden rounded-[35px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] px-6 py-10 backdrop-blur-sm sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                {/* sweep */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[35px]">
                  <div className="absolute inset-y-0 left-[-22%] w-[30%] rotate-[12deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60 animate-[ctaSweep_8s_linear_infinite]" />
                </div>
                {/* glows */}
                <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#00FF88]/16 blur-3xl transition-all duration-700 group-hover:bg-[#00FF88]/22" />
                <div className="pointer-events-none absolute right-[-40px] top-[-30px] h-56 w-56 rounded-full bg-white/8 blur-3xl" />

                {/* particles */}
                <div className="pointer-events-none absolute inset-0">
                  <span className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#00FF88]/55 blur-[1px] animate-pulse" />
                  <span className="absolute left-[42%] top-[24%] h-2 w-2 rounded-full bg-white/45 blur-[1px] animate-pulse" />
                  <span className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-[#00FF88]/45 blur-[1px] animate-pulse" />
                </div>

                <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
                  {/* left */}
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/25 bg-[#00FF88]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.08)]">
                      <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_12px_rgba(0,255,136,0.55)]" />
                      Über Check24
                    </div>

                    <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                      Bereit für{" "}
                      <span className="block text-[#00FF88]">Ihre Anfrage?</span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                      Starten Sie jetzt Ihre unverbindliche Anfrage und lassen
                      Sie sich professionell begleiten.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {["Kostenlos anfragen", "Schnelle Antwort", "Festpreis garantiert"].map((chip, i) => (
                        <span
                          key={chip}
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                          style={{ transitionDelay: `${250 + i * 90}ms` }}
                        >
                          <span className="h-2 w-2 rounded-full bg-[#00FF88]" />
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* right */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-[30px] bg-[#00FF88]/16 blur-2xl transition-all duration-500 group-hover:bg-[#00FF88]/24" />
                    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,18,36,0.96)_0%,rgba(10,24,43,0.95)_100%)] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-6">
                      <div className="relative space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00FF88]">
                          <span className="animate-pulse">⚡</span>
                          Schnelle Bearbeitung
                        </span>

                        <div className="space-y-3">
                          <span className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#00FF88] px-6 text-center text-base font-extrabold text-[#062014] shadow-[0_16px_40px_rgba(0,255,136,0.24)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_50px_rgba(0,255,136,0.34)]">
                            Weiter zur Anfrage →
                          </span>

                          <span className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/14 bg-white/5 px-6 text-center text-base font-bold text-white/92 backdrop-blur-sm">
                            📞 {PHONE_DISPLAY}
                          </span>
                        </div>

                        <p className="text-sm leading-7 text-white/55">
                          Kostenlos · Unverbindlich · Ohne Risiko
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
