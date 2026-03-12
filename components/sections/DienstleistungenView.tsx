"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    title: "Privatumzug",
    slug: "privatumzug",
    image: "/images/services/privatumzug.jpg",
    alt: "Professioneller Privatumzug mit Möbeltransport im Rhein-Neckar-Gebiet",
    description:
      "Von der kleinen Studio-Wohnung bis zum großen Familienhaus – professionell geplant, vollversichert und auf Wunsch zum Festpreis.",
    bullets: ["Auf- und Abbau inklusive", "Vollversichert", "Festpreis möglich"],
    tag: "Beliebt",
  },
  {
    title: "Firmenumzug",
    slug: "firmenumzug",
    image: "/images/services/firmenumzug.jpg",
    alt: "Firmenumzug für Büros und Unternehmen mit strukturierter Logistik",
    description:
      "Gewerbliche Umzüge mit minimaler Betriebsunterbrechung, strukturierter Logistik und festem Projektmanagement.",
    bullets: ["Wochenend-Termine verfügbar", "IT-Transport möglich", "Projektmanagement"],
    tag: null,
  },
  {
    title: "Fernumzug",
    slug: "fernumzug",
    image: "/images/services/fernumzug.jpg",
    alt: "Fernumzug und überregionaler Umzugsservice in Deutschland und DACH",
    description:
      "Überregionale Umzüge in der gesamten D-A-CH-Region – pünktlich, termingerecht und zu transparenten Konditionen.",
    bullets: ["Deutschlandweit & DACH", "Festpreise möglich", "Sorgfältige Verpackung"],
    tag: null,
  },
  {
    title: "Seniorenumzug",
    slug: "seniorenumzug",
    image: "/images/services/seniorenumzug.jpg",
    alt: "Seniorenumzug mit persönlicher Begleitung und sorgfältiger Organisation",
    description:
      "Rücksichtsvoller, geduldiger Umzug für Senioren – mit persönlicher Begleitung und enger Abstimmung mit der Familie.",
    bullets: ["Persönliche Begleitung", "Koordination mit Familie", "Kein Stress"],
    tag: null,
  },
  {
    title: "Küchenmontage",
    slug: "kuechenmontage",
    image: "/images/services/kuechenmontage.jpg",
    alt: "Küchenmontage und Küchenaufbau beim Umzug durch erfahrene Monteure",
    description:
      "Fachgerechter Auf- und Abbau von Küchen jedes Herstellers – präzise, schnell und ohne Beschädigungen.",
    bullets: ["Alle Küchensysteme", "Inklusive Anschlussarbeiten", "Auch ohne Umzug buchbar"],
    tag: null,
  },
  {
    title: "Möbelmontage",
    slug: "moebelmontage",
    image: "/images/services/moebelmontage.jpg",
    alt: "Professionelle Möbelmontage und Möbelaufbau für Umzüge",
    description:
      "Auf- und Abbau von Möbeln aller Marken und Systeme – von IKEA bis zur Maßanfertigung.",
    bullets: ["Alle Hersteller & Systeme", "Schrankwände & Regale", "Einzeln buchbar"],
    tag: null,
  },
  {
    title: "Klaviertransport",
    slug: "klaviertransport",
    image: "/images/services/klaviertransport.jpg",
    alt: "Sicherer Klaviertransport und Transport schwerer Musikinstrumente",
    description:
      "Professioneller Klaviertransport für empfindliche und schwere Instrumente – sorgfältig geplant, sicher getragen und zuverlässig durchgeführt.",
    bullets: ["Schonender Transport", "Erfahrenes Team", "Sicher & zuverlässig"],
    tag: "Spezial",
  },
  {
    title: "Entrümpelung",
    slug: "entruempelung",
    image: "/images/services/entruempelung.jpg",
    alt: "Entrümpelung von Wohnungen, Kellern und Gewerbeeinheiten",
    description:
      "Professionelle Räumung von Wohnungen, Kellern, Dachböden und Gewerbeimmobilien – inklusive Entsorgung.",
    bullets: ["Inkl. fachgerechter Entsorgung", "Kurzfristig verfügbar", "Transparent kalkuliert"],
    tag: null,
  },
  {
    title: "Halteverbotszone",
    slug: "halteverbotszone",
    image: "/images/services/halteverbotszone.jpg",
    alt: "Einrichtung einer Halteverbotszone für einen Umzug",
    description:
      "Wir unterstützen Sie bei der Einrichtung einer Halteverbotszone für einen reibungslosen Umzug mit besserem Zugang und effizienter Beladung.",
    bullets: ["Mehr Platz vor Ort", "Bessere Zugänglichkeit", "Ideal für Innenstadt-Umzüge"],
    tag: "Service",
  },
  {
    title: "Express Umzug",
    slug: "kontakt",
    image: "/images/services/express-umzug.jpg",
    alt: "Express Umzug mit kurzfristiger Terminverfügbarkeit und schnellem Service",
    description:
      "Kurzfristiger Umzug auf Abruf – wir sind auch bei spontanen Anfragen schnell verfügbar und voll ausgerüstet.",
    bullets: ["Innerhalb von 24–48 Std.", "Komplett ausgerüstet", "Kein Aufpreis versteckt"],
    tag: "Express",
  },
];

const WHY_ITEMS = [
  {
    icon: "📋",
    title: "Festpreisangebote",
    text: "Kein Schätzen, kein Nachrechnen. Sie erhalten ein verbindliches Angebot – und zahlen genau das.",
  },
  {
    icon: "🛡",
    title: "Vollversichert",
    text: "Alle Transporte sind vollkaskoversichert. Ihr Inventar ist bei uns zu 100 % geschützt.",
  },
  {
    icon: "⚡",
    title: "Antwort in 60 Min.",
    text: "Wir reagieren auf Anfragen garantiert innerhalb von 60 Minuten während unserer Öffnungszeiten.",
  },
  {
    icon: "📍",
    title: "Lokales Team",
    text: "Wir kennen die Rhein-Neckar-Region in- und auswendig – das spart Zeit und Nerven.",
  },
  {
    icon: "📅",
    title: "Flexible Termine",
    text: "Montag bis Samstag – wir passen uns Ihrem Zeitplan an, auch kurzfristig.",
  },
  {
    icon: "🔧",
    title: "Professionelle Montage",
    text: "Möbel, Küchen, Schrankwände: Unser Team baut auf und ab – fachgerecht und schnell.",
  },
];

const PROCESS_STEPS = [
  { number: "01", title: "Anfrage", text: "Online oder per Telefon – in wenigen Minuten erledigt." },
  { number: "02", title: "Angebot", text: "Verbindliches Festpreisangebot, klar und transparent." },
  { number: "03", title: "Umzugstag", text: "Unser Team erscheint pünktlich und arbeitet strukturiert." },
  { number: "04", title: "Fertig", text: "Alles aufgestellt – erst dann ist unser Auftrag erfüllt." },
];

const FAQS = [
  {
    question: "Welche Umzugsleistungen bietet FriendsMove an?",
    answer:
      "FriendsMove bietet Privatumzug, Firmenumzug, Fernumzug, Seniorenumzug, Küchenmontage, Möbelmontage, Entrümpelung und Express-Umzüge im Rhein-Neckar-Gebiet an.",
  },
  {
    question: "Kann ich Möbelmontage und Umzug zusammen buchen?",
    answer:
      "Ja. Viele unserer Kundinnen und Kunden buchen den Umzug direkt zusammen mit Möbel- oder Küchenmontage, damit alles aus einer Hand organisiert wird.",
  },
  {
    question: "Bietet FriendsMove auch kurzfristige Termine an?",
    answer:
      "Ja. Mit unserem Express-Umzug unterstützen wir auch bei kurzfristigen Anfragen – abhängig von Umfang und aktueller Kapazität.",
  },
  {
    question: "Ist mein Umzugsgut während des Transports versichert?",
    answer:
      "Ja. Unsere Umzüge sind vollversichert, damit Ihr Inventar während Transport, Tragen und Beladung bestmöglich abgesichert ist.",
  },
  {
    question: "In welchen Regionen ist FriendsMove aktiv?",
    answer:
      "Wir sind im gesamten Rhein-Neckar-Gebiet aktiv, unter anderem in Mannheim, Heidelberg, Ludwigshafen, Lampertheim, Frankenthal, Weinheim, Schwetzingen und Umgebung.",
  },
];

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "FriendsMove",
      url: "https://www.friendsmove.de/dienstleistungen",
      image: "https://www.friendsmove.de/images/services/hero-leistungen.jpg",
      telephone: "+49 1520 3237063",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
      },
      areaServed: [
        "Mannheim",
        "Heidelberg",
        "Ludwigshafen",
        "Lampertheim",
        "Frankenthal",
        "Weinheim",
        "Schwetzingen",
      ],
      description:
        "Professionelle Umzugsdienstleistungen von FriendsMove im Rhein-Neckar-Gebiet – Privatumzug, Firmenumzug, Fernumzug, Seniorenumzug, Küchenmontage, Möbelmontage, Entrümpelung und Express-Umzug.",
    },
    ...SERVICES.map((service) => ({
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      provider: {
        "@type": "LocalBusiness",
        name: "FriendsMove",
      },
      areaServed: [
        "Mannheim",
        "Heidelberg",
        "Ludwigshafen",
        "Lampertheim",
        "Frankenthal",
        "Weinheim",
        "Schwetzingen",
      ],
      description: service.description,
    })),
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#D4E5DC]/70 bg-white/95 shadow-[0_8px_30px_rgba(6,32,20,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF88]/25 hover:shadow-[0_24px_70px_rgba(6,32,20,0.16)]"
        aria-label={`Mehr über ${service.title}`}
      >
        {/* soft cinematic glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#00FF88]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0E2A1F]/8 blur-3xl" />
        </div>

        {/* image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />

          {/* cleaner overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041b14]/42 via-[#041b14]/08 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_58%)]" />

          {/* subtle top edge light */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />

          {service.tag && (
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#00FF88] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#062014] shadow-[0_10px_24px_rgba(0,255,136,0.22)]">
              {service.tag}
            </div>
          )}

          {/* title block */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5">
            <div className="inline-flex max-w-full items-center rounded-2xl border border-white/10 bg-black/12 px-3 py-2 backdrop-blur-[2px]">
              <h3 className="font-display text-[1.35rem] font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-[1.45rem]">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="relative flex flex-1 flex-col gap-4 p-6">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/25 to-transparent" />

          <p className="leading-relaxed text-[#5A7A6E]">{service.description}</p>

          <ul className="flex flex-col gap-2.5" aria-label={`Highlights für ${service.title}`}>
            {service.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-[#062014]">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#00FF88]/15 bg-[#00FF88]/12 shadow-[0_0_0_4px_rgba(0,255,136,0.03)]">
                  <svg
                    className="h-3 w-3 text-[#00CC6E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00FF88]/10 bg-[#F7FBF8] px-4 py-2.5 text-sm font-semibold text-[#00A85B] transition-all duration-300 group-hover:border-[#00FF88]/25 group-hover:bg-[#ECFFF5] group-hover:text-[#008F4C]">
              Jetzt anfragen
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <details className="group rounded-2xl border border-[#D4E5DC]/60 bg-white p-6 shadow-[0_4px_24px_rgba(6,32,20,0.06)] transition-all duration-300 hover:shadow-[0_12px_34px_rgba(6,32,20,0.10)]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-bold text-[#062014]">
          {question}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00FF88]/10 text-[#00CC6E] transition group-open:rotate-45">
            +
          </span>
        </summary>
        <p className="mt-4 leading-relaxed text-[#5A7A6E]">{answer}</p>
      </details>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DienstleistungenView() {
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  return (
    <>
      <Script
        id="dienstleistungen-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative isolate overflow-hidden bg-[#041b14]"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero-leistungen.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#041b14]/90 via-[#041b14]/65 to-[#041b14]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041b14]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(ellipse_60%_55%_at_20%_55%,rgba(0,255,136,0.14)_0%,transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF88]/40 to-transparent" />

        <div className="container-max relative z-10 py-28 md:py-36 lg:py-44">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/10 px-4 py-2 text-sm font-semibold text-[#00FF88] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF88]" />
              Alle Leistungen im Überblick
            </div>

            <h1
              id="services-hero-heading"
              className="font-display text-5xl font-bold leading-[1.0] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Umzug & <span className="text-[#00FF88]">Montage</span>
              <br />
              aus einer Hand.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Von der Anfrage bis zum letzten aufgestellten Möbelstück übernimmt
              FriendsMove jeden Schritt Ihres Umzugs im Rhein-Neckar-Gebiet –
              flexibel buchbar, vollversichert und auf Wunsch zum Festpreis.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#00FF88] px-8 text-base font-bold text-[#062014] shadow-[0_10px_35px_rgba(0,255,136,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,255,136,0.4)]"
              >
                Kostenloses Angebot anfragen
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="tel:+4915203237063"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/14"
              >
                <span className="text-[#00FF88]">📞</span>
                +49 1520 3237063
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
              {["Vollversichert", "Festpreis möglich", "Antwort in 60 Min."].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[#00FF88]" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        className="relative overflow-hidden bg-[#F6F0E8] py-24 md:py-32"
        aria-labelledby="services-grid-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#00FF88]/5 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0E2A1F]/5 blur-[120px]"
        />

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 max-w-3xl"
          >
            <p className="section-label mb-3">Unsere Leistungen</p>
            <h2
              id="services-grid-heading"
              className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl"
            >
              Was wir für Sie tun
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A7A6E]">
              Ob privater Wohnungswechsel, Firmenumzug, Fernumzug oder professionelle
              Montage: FriendsMove bietet moderne Umzugsdienstleistungen mit klaren
              Abläufen, hoher Sorgfalt und transparenter Kommunikation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug + service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        className="relative overflow-hidden bg-[#0E2A1F] py-24 md:py-32"
        aria-labelledby="why-heading"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#00FF88]/8 blur-[130px]" />
          <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[#00FF88]/6 blur-[120px]" />
        </div>

        <div className="container-max relative z-10" ref={whyRef}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00FF88]">
              Warum FriendsMove
            </p>
            <h2
              id="why-heading"
              className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Der Unterschied, den Sie spüren
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              Wir kombinieren lokales Know-how, professionelle Planung und ein
              serviceorientiertes Team, damit Ihr Umzug nicht nur funktioniert,
              sondern wirklich angenehm abläuft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-white/8 bg-white/5 p-6 transition-all duration-300 hover:border-[#00FF88]/30 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/8 text-2xl transition-colors group-hover:bg-[#00FF88]/10">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="bg-[#F6F0E8] py-24 md:py-32"
        aria-labelledby="process-heading"
        ref={processRef}
      >
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
          >
            <p className="section-label mb-3">So einfach geht&apos;s</p>
            <h2
              id="process-heading"
              className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl"
            >
              So läuft es ab
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-[#5A7A6E]">
              In vier klaren Schritten zu Ihrem strukturierten und stressfreien Umzug.
            </p>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[#D4E5DC] to-transparent lg:block"
            />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-start gap-4"
                >
                  <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-[#00FF88]/30 bg-white shadow-[0_4px_20px_rgba(0,255,136,0.1)]">
                    <div className="absolute inset-0 rounded-2xl bg-[#00FF88]/5" />
                    <span className="font-display text-lg font-bold text-[#00CC6E]">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="mb-1.5 font-display text-xl font-bold text-[#062014]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5A7A6E]">{step.text}</p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="h-0.5 w-8 rounded-full bg-[#00FF88]" />
                    <span className="h-0.5 w-3 rounded-full bg-[#D4E5DC]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="relative overflow-hidden bg-[#F8F7F3] py-24 md:py-32"
        aria-labelledby="faq-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00FF88]/5 blur-[130px]"
        />

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="section-label mb-3">FAQ</p>
            <h2
              id="faq-heading"
              className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl"
            >
              Häufige Fragen zu unseren Leistungen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#5A7A6E]">
              Hier finden Sie Antworten auf häufige Fragen zu unseren
              Umzugsdienstleistungen, Montagearbeiten und kurzfristigen Terminen.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-4">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden bg-[#0E2A1F] py-24 md:py-32"
        aria-labelledby="cta-heading"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-25 [background:radial-gradient(ellipse_70%_55%_at_50%_55%,rgba(0,255,136,1)_0%,transparent_70%)]" />
          <div className="absolute left-[15%] top-0 h-96 w-px bg-gradient-to-b from-[#00FF88]/20 via-[#00FF88]/5 to-transparent" />
          <div className="absolute right-[18%] top-0 h-96 w-px bg-gradient-to-b from-[#00FF88]/15 via-[#00FF88]/5 to-transparent" />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display font-black uppercase tracking-[0.35em] text-[#00FF88]/[0.03]"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          FriendsMove
        </span>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="container-max relative z-10 text-center"
        >
          <p className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#00FF88]">
            Ihr nächster Schritt
          </p>

          <h2
            id="cta-heading"
            className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Bereit für Ihren
            <br />
            <span className="text-[#00FF88]">stressfreien Umzug?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Fordern Sie jetzt Ihr kostenloses Angebot an. Wir melden uns innerhalb
            von 60 Minuten – transparent, unverbindlich und mit einem professionellen
            Service, der zu Ihrem Umzug passt.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#00FF88] px-9 text-base font-bold text-[#062014] shadow-[0_12px_40px_rgba(0,255,136,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,255,136,0.4)]"
            >
              Kostenloses Angebot anfragen
            </a>

            <a
              href="tel:+4915203237063"
              className="inline-flex min-h-[56px] items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/12"
            >
              <span className="text-[#00FF88]">📞</span>
              +49 1520 3237063
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/40">
            {["Kostenlos & unverbindlich", "Antwort in 60 Minuten", "Festpreis auf Wunsch", "DSGVO-konform"].map(
              (t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-[#00FF88]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
}