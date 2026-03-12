"use client";

import Image from "next/image";
const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Anfrage senden",
    subtitle: "Einfach & schnell",
    description:
      "Füllen Sie unser Online-Formular aus oder rufen Sie uns direkt an. Wir erfassen alle Details zu Ihrer Situation – unkompliziert und in wenigen Minuten.",
    image: "/images/process/anfrage.jpg",
    tag: "Kostenlos & unverbindlich",
  },
  {
    number: "02",
    title: "Planung & Angebot",
    subtitle: "Transparent & verbindlich",
    description:
      "Wir erstellen ein detailliertes, verbindliches Angebot – auf Wunsch mit persönlicher Besichtigung und Festpreisgarantie. Keine versteckten Kosten.",
    image: "/images/process/planung.jpg",
    tag: "Festpreis möglich",
  },
  {
    number: "03",
    title: "Umzugstag",
    subtitle: "Pünktlich & professionell",
    description:
      "Unser erfahrenes Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihr Inventar mit höchster Sorgfalt. Sie müssen sich um nichts kümmern.",
    image: "/images/process/umzugstag.jpg",
    tag: "Vollversichert",
  },
  {
    number: "04",
    title: "Einzug & Abschluss",
    subtitle: "Vollständig & zufrieden",
    description:
      "Alles wird an Ort und Stelle aufgebaut und positioniert. Erst wenn Sie rundum zufrieden sind, ist unser Auftrag abgeschlossen.",
    image: "/images/process/einzug.jpg",
    tag: "100% Zufriedenheit",
  },
];

const CITY_NAMES = [
  "Mannheim",
  "Heidelberg",
  "Ludwigshafen",
  "Frankfurt",
  "Schwetzingen",
  "Weinheim",
];

function StepRow({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        isEven ? "" : "lg:[direction:rtl] [&>*]:[direction:ltr]"
      }`}
    >
      {/* Image panel */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/45 bg-white/20 shadow-[0_24px_64px_rgba(6,32,20,0.16)] backdrop-blur-[2px] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(6,32,20,0.22)]">
        {/* Glow ring */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/25" />

        {/* Oversized step number behind image */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-6 z-10 select-none font-black leading-none text-white/[0.08]"
          style={{ fontSize: "clamp(6rem,16vw,11rem)" }}
        >
          {step.number}
        </span>

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-[1.06]"
          />

          {/* Premium cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041b14]/50 via-[#041b14]/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.12)_100%)]" />
        </div>

        {/* Tag chip on image */}
        <div className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0E2A1F]/82 px-3 py-1.5 text-xs font-semibold text-[#00FF88] backdrop-blur-md shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
          {step.tag}
        </div>
      </div>

      {/* Text panel */}
      <div className="relative flex flex-col gap-5">
        {/* Soft glow behind text */}
        <div className="pointer-events-none absolute -left-6 top-6 h-28 w-28 rounded-full bg-[#00FF88]/[0.07] blur-3xl" />

        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[#00FF88]/25 bg-white/45 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#00C96B]">
            SCHRITT {step.number}
          </span>
          <span className="h-px w-6 bg-[#00FF88]/40" />
          <span className="text-xs font-medium text-[#5A7A6E]">
            {step.subtitle}
          </span>
        </div>

        <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#062014] lg:text-5xl">
          {step.title}
        </h3>

        <p className="max-w-md text-base leading-relaxed text-[#5A7A6E]">
          {step.description}
        </p>

        <div className="flex items-center gap-3 pt-1">
          <span className="h-0.5 w-10 rounded-full bg-[#00FF88]" />
          <span className="h-0.5 w-4 rounded-full bg-[#D4E5DC]" />
          <span className="h-0.5 w-2 rounded-full bg-[#D4E5DC]" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessCinematic() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="prozess"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f9f5ee_0%,#f3ece3_34%,#eee5da_68%,#e8dfd4_100%)] py-24 md:py-32"
    >
      {/* Base ambient layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main green glow */}
        <div className="absolute -left-32 top-[18%] h-[32rem] w-[32rem] rounded-full bg-[#00FF88]/[0.07] blur-[140px]" />
        <div className="absolute -right-24 bottom-[12%] h-[30rem] w-[30rem] rounded-full bg-[#00FF88]/[0.05] blur-[150px]" />

        {/* Dark contrast glow */}
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0E2A1F]/[0.06] blur-[150px]" />
        <div className="absolute bottom-[-10rem] left-[18%] h-[24rem] w-[24rem] rounded-full bg-[#0E2A1F]/[0.05] blur-[130px]" />

        {/* Light beams */}
        <div className="absolute left-[8%] top-0 h-full w-[22rem] rotate-[10deg] bg-gradient-to-b from-white/18 via-white/6 to-transparent blur-3xl" />
        <div className="absolute right-[10%] top-0 h-full w-[18rem] -rotate-[8deg] bg-gradient-to-b from-white/14 via-white/5 to-transparent blur-3xl" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(6,32,20,0.05)_100%)]" />
      </div>

      {/* Luxury subtle grid / texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Floating city names */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {CITY_NAMES.map((city, i) => (
          <span
            key={city}
            className="absolute font-display font-black uppercase tracking-[0.22em] text-[#062014]/[0.035]"
            style={{
              fontSize: "clamp(2.4rem, 5.8vw, 5.6rem)",
              top: `${10 + i * 14}%`,
              left: i % 2 === 0 ? `${2 + i * 4}%` : undefined,
              right: i % 2 !== 0 ? `${4 + i * 2}%` : undefined,
              transform: `rotate(${i % 2 === 0 ? -2.5 : 1.6}deg)`,
            }}
          >
            {city}
          </span>
        ))}
      </div>

      {/* Blur veil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 backdrop-blur-[1.2px]"
      />

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 32 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 max-w-2xl"
        >
          <p className="section-label mb-4">Unser Prozess</p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl lg:text-[3.25rem]">
            Ihr Umzug in{" "}
            <span className="relative inline-block">
              4 Schritten
              <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#00FF88]" />
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5A7A6E]">
            Wir machen Ihr Umzugsvorhaben planbar, transparent und stressfrei –
            von der ersten Anfrage bis zum letzten Karton.
          </p>
        </motion.div>

        {/* Steps with timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c9ded2] to-transparent lg:block"
          />

          {/* Extra line glow */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00FF88]/15 to-transparent blur-sm lg:block"
          />

          <div className="flex flex-col gap-24 lg:gap-32">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Timeline node */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#00FF88]/60 bg-white/70 shadow-[0_0_0_8px_rgba(0,255,136,0.08)] backdrop-blur-md">
                    <div className="absolute inset-0 rounded-full bg-[#00FF88]/[0.07] blur-md" />
                    <span className="relative font-display text-xs font-bold text-[#00C96B]">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <StepRow step={step} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 flex flex-col items-center gap-5 text-center"
        >
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
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}