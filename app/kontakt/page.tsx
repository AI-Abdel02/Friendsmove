import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt & Angebot anfragen | FriendsMove",
  description:
    "Kontaktieren Sie FriendsMove für ein kostenloses Umzugsangebot in Mannheim, Heidelberg und der Rhein-Neckar-Region. Antwort meist innerhalb von 60 Minuten.",
  alternates: { canonical: "https://www.friendsmove.de/kontakt" },
};

const CONTACT = [
  {
    icon: "📞",
    label: "Telefon",
    value: PHONE_DISPLAY,
    note: "Mo–Fr 07–19 Uhr · Sa 08–16 Uhr",
    href: `tel:${PHONE}`,
  },
  {
    icon: "✉️",
    label: "E-Mail",
    value: EMAIL,
    note: "Antwort meist innerhalb von 60 Minuten",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: "📍",
    label: "Adresse",
    value: `${ADDRESS.street}, ${ADDRESS.zip} ${ADDRESS.city}`,
    note: "Rhein-Neckar Region",
  },
];

const TRUST = [
  "Kostenlose Beratung",
  "Antwort in 60 Minuten",
  "Festpreis möglich",
  "Vollversicherter Umzug",
];

const WHY = [
  {
    icon: "⚡",
    title: "Schnelle Rückmeldung",
    text: "Unser Team antwortet schnell und persönlich auf Ihre Anfrage.",
  },
  {
    icon: "🛡",
    title: "Vollversichert",
    text: "Ihr Umzugsgut ist während des gesamten Transports abgesichert.",
  },
  {
    icon: "📍",
    title: "Lokales Team",
    text: "Wir kennen Mannheim, Heidelberg und die Rhein-Neckar-Region.",
  },
  {
    icon: "🤝",
    title: "Persönliche Betreuung",
    text: "Direkter Ansprechpartner statt anonymem Callcenter.",
  },
];

export default function KontaktPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FriendsMove",
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.zip,
      addressLocality: ADDRESS.city,
      addressCountry: "DE",
    },
    areaServed: [
      "Mannheim",
      "Heidelberg",
      "Ludwigshafen",
      "Frankenthal",
      "Weinheim",
    ],
    url: "https://www.friendsmove.de",
  };

  return (
    <>
      <Script
        id="kontakt-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-brand-dark">

        <div className="absolute inset-0">
          <Image
            src="/images/services/hero-leistungen.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#041b14]/92 via-[#041b14]/72 to-[#041b14]/56" />

        <div className="container-max relative z-10 py-24 md:py-28">

          <p className="section-label text-brand-green">
            Kontakt & Angebot
          </p>

          <h1 className="font-display text-5xl md:text-6xl text-white font-bold mt-4">
            Kostenloses Umzugsangebot
            <span className="block text-[#00FF88]">
              schnell & unverbindlich
            </span>
          </h1>

          <p className="text-white/70 text-lg mt-6 max-w-xl">
            Kontaktieren Sie FriendsMove für einen Privatumzug,
            Firmenumzug oder Fernumzug im Rhein-Neckar-Gebiet.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center rounded-full bg-[#00FF88] px-8 py-3 font-bold text-[#062014] shadow-lg hover:scale-[1.02] transition"
            >
              Jetzt anrufen
            </a>

            <Link
              href="/dienstleistungen"
              className="rounded-full border border-white/30 px-7 py-3 text-white hover:bg-white/10 transition"
            >
              Leistungen ansehen
            </Link>

          </div>

          <div className="flex gap-6 text-white/60 mt-8 text-sm">
            {TRUST.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT + FORM */}
      <SectionWrapper className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f3ec_0%,#f8f7f3_55%,#f3f7f4_100%)]">

        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#00FF88]/7 blur-[120px]" />

        <div className="grid lg:grid-cols-2 gap-14">

          {/* CONTACT */}
          <div className="flex flex-col gap-6">

            <div>
              <p className="section-label">Kontakt</p>
              <h2 className="font-display text-4xl font-bold text-brand-dark">
                So erreichen Sie uns
              </h2>
            </div>

            {CONTACT.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/70 bg-white/90 p-5 shadow-[0_12px_34px_rgba(6,32,20,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5"
              >
                <span className="text-2xl">{item.icon}</span>

                <p className="text-xs uppercase text-brand-muted mt-2">
                  {item.label}
                </p>

                {item.href ? (
                  <a href={item.href} className="font-semibold text-brand-dark">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold text-brand-dark">{item.value}</p>
                )}

                <p className="text-brand-muted text-sm">{item.note}</p>
              </div>
            ))}

          </div>

          {/* FORM */}
          <div className="rounded-[30px] border border-white/70 bg-white/92 p-3 shadow-[0_18px_44px_rgba(6,32,20,0.10)] backdrop-blur-sm">
            <QuoteForm />
          </div>

        </div>

      </SectionWrapper>

      {/* MAP */}
      <SectionWrapper className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7faf8_100%)]">

        <div className="max-w-3xl mb-10">
          <p className="section-label">Standort</p>
          <h2 className="font-display text-4xl font-bold text-brand-dark">
            FriendsMove Rhein-Neckar
          </h2>

          <p className="text-brand-muted mt-4">
            Unser Team unterstützt Umzüge in Mannheim,
            Heidelberg und der gesamten Rhein-Neckar-Region.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/80 bg-white/95 shadow-[0_22px_60px_rgba(6,32,20,0.10)]">

          <div className="h-[450px] w-full">

            <iframe
              title="FriendsMove Standort"
              src="https://www.google.com/maps?q=Jahnstra%C3%9Fe%2028A%2C%2067245%20Lambsheim&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

          </div>

        </div>

      </SectionWrapper>

      {/* WHY */}
      <SectionWrapper className="bg-brand-bg">

        <div className="max-w-3xl mb-12">
          <p className="section-label">Warum FriendsMove</p>
          <h2 className="font-display text-4xl font-bold text-brand-dark">
            Kontaktieren Sie Profis
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {WHY.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_12px_34px_rgba(6,32,20,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1"
            >

              <div className="text-2xl mb-3">{item.icon}</div>

              <h3 className="font-semibold text-brand-dark">
                {item.title}
              </h3>

              <p className="text-brand-muted text-sm mt-2">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </SectionWrapper>
    </>
  );
}