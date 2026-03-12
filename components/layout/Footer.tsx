import Link from "next/link";
import { EMAIL, CITIES, SERVICES } from "@/lib/seo";

const LEAD_URL = "https://app.friendsmove.com/web/public/vue-app/lead";

const PRIMARY_PHONE = "+4915203237063";
const PRIMARY_PHONE_DISPLAY = "+49 1520 3237063";

const HOTLINE_PHONE = "+491742083291";
const HOTLINE_PHONE_DISPLAY = "+49 174 2083291";

const GOOGLE_REVIEWS_URL = "https://share.google/Eh9LHySv1Rh9X6SLw";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CbPVHV7GWk9pEAE/review";

const ADDRESS = {
  street: "Jahnstraße 28A",
  zip: "67245",
  city: "Lambsheim",
  country: "Germany",
};

export default function Footer() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "FriendsMove",
    url: "https://www.friendsmove.de",
    email: EMAIL,
    telephone: PRIMARY_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.zip,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
    areaServed: [
      "Lambsheim",
      "Frankenthal",
      "Mannheim",
      "Heidelberg",
      "Ludwigshafen",
      "Rhein-Neckar",
      "Vorderpfalz",
    ],
    sameAs: [GOOGLE_REVIEWS_URL],
  };

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#072218_0%,#0a2a1d_45%,#072117_100%)] text-white" role="contentinfo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-12rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/10 blur-[140px]" />
        <div className="absolute right-[-10rem] bottom-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[#00FF88]/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10">
        {/* Main footer */}
        <div className="container-max py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.15fr_0.9fr_0.9fr_0.95fr]">
            {/* Brand */}
            <div className="xl:pr-10">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00FF88]/35 bg-[#00FF88]/10 shadow-[0_0_24px_rgba(0,255,136,0.08)]">
                  <span className="font-display text-xl font-bold leading-none text-[#00FF88]">
                    F
                  </span>
                </span>

                <span className="font-display text-[1.7rem] font-bold tracking-tight text-white">
                  Friends<span className="text-[#00FF88]">Move</span>
                </span>
              </Link>

              <p className="max-w-md text-[15px] leading-8 text-white/68">
                Ihr Umzugspartner für Lambsheim, Frankenthal, Mannheim und die
                Rhein-Neckar-Region. Professionell geplant, zuverlässig
                durchgeführt und persönlich betreut – vom ersten Anruf bis zum
                letzten Karton.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/8 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#00FF88]">
                <span className="h-2 w-2 rounded-full bg-[#00FF88]" />
                4,9/5 Google Bewertungen
              </div>

              <div className="mt-7 flex flex-col gap-3 text-sm">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="group flex items-center gap-3 text-white/72 transition-colors hover:text-[#00FF88]"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Telefon: {PRIMARY_PHONE_DISPLAY}</span>
                </a>

                <a
                  href={`tel:${HOTLINE_PHONE}`}
                  className="group flex items-center gap-3 text-white/72 transition-colors hover:text-[#00FF88]"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm0 0V5m0 10v4m7-7h-4M9 12H5"
                    />
                  </svg>
                  <span>Hotline: {HOTLINE_PHONE_DISPLAY}</span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-white/72 transition-colors hover:text-[#00FF88]"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{EMAIL}</span>
                </a>

                <p className="flex items-start gap-3 text-white/72">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}, {ADDRESS.country}
                  </span>
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-[#00FF88]/30 hover:text-white"
                >
                  <span>🌐</span>
                  Google Bewertungen
                </a>

                <a
                  href={GOOGLE_WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00FF88] px-4 py-2.5 text-sm font-bold text-[#062014] shadow-[0_10px_28px_rgba(0,255,136,0.18)] transition hover:opacity-90"
                >
                  Bewertung schreiben
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Dienstleistungen
              </h3>

              <ul className="flex flex-col gap-3">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="text-sm text-white/62 transition-colors hover:text-[#00FF88]"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regions */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Regionen
              </h3>

              <ul className="flex flex-col gap-3">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/regionen/${c.slug}`}
                      className="text-sm text-white/62 transition-colors hover:text-[#00FF88]"
                    >
                      Umzug {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + opening hours */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Unternehmen
              </h3>

              <ul className="mb-8 flex flex-col gap-3">
                {[
                  { label: "Über uns", href: "/ueber-uns" },
                  { label: "Preise", href: "/preise" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Kontakt", href: "/kontakt" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/datenschutz" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/62 transition-colors hover:text-[#00FF88]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[#00FF88]">🕒</span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/88">
                    Öffnungszeiten
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-white/66">
                  <div className="flex justify-between gap-4">
                    <span>Mo – Fr</span>
                    <span>07:00 – 19:00 Uhr</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Samstag</span>
                    <span>08:00 – 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sonntag</span>
                    <span>Auf Anfrage</span>
                  </div>
                </div>

                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[#00FF88] px-4 py-2.5 text-sm font-bold text-[#062014] transition hover:opacity-90"
                >
                  Angebot anfragen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-max flex flex-col items-center justify-between gap-4 py-5 text-sm text-white/42 md:flex-row">
            <p>© {new Date().getFullYear()} FriendsMove. Alle Rechte vorbehalten.</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF88]" />
                Vollversichert
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF88]" />
                DSGVO-konform
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF88]" />
                Transparente Planung
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#00FF88]" />
                Lokaler Anbieter Lambsheim & Rhein-Neckar
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}