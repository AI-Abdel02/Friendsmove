import FadeUp from "@/components/ui/FadeUp";
import type { Testimonial } from "@/types";

const GOOGLE_REVIEWS_URL = "https://share.google/Eh9LHySv1Rh9X6SLw";
const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CbPVHV7GWk9pEAE/review";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oliver Camerino",
    city: "Frankenthal",
    rating: 5,
    service: "Privatumzug",
    date: "vor 2 Monaten",
    text: "Sehr gutes Umzugsunternehmen. Toller Service. Die Mitarbeiter sehr motiviert. 100% Weiterempfehlung!",
  },
  {
    name: "Savvas Lazaridis",
    city: "Lambsheim",
    rating: 5,
    service: "Umzug",
    date: "vor 3 Monaten",
    text: "Top Leute, bis zum Schluss gearbeitet und sehr gute Arbeit geleistet. Sehr freundliche Jungs 👍",
  },
  {
    name: "Irmgard Greiner",
    city: "Heidelberg",
    rating: 5,
    service: "Privatumzug",
    date: "vor 3 Monaten",
    text: "Sehr gute Dienstleistung. Wir sind rundum zufrieden.",
  },
  {
    name: "Ursula Werling",
    city: "Frankenthal",
    rating: 5,
    service: "Umzug",
    date: "vor 3 Monaten",
    text: "Super Arbeit von den Herren. Auch wenn kleine Unklarheiten entstanden sind, wurden diese sofort behoben. Am Ende hat alles wunderbar funktioniert. Sehr zufrieden!",
  },
];

function Stars({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) {
  const classes = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${classes} ${
            i < rating ? "text-amber-400" : "text-amber-200/50"
          } fill-current`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function InitialBadge({ name }: { name: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0E2A1F] text-lg font-bold text-white shadow-[0_10px_25px_rgba(6,32,20,0.18)]">
      {name.charAt(0)}
    </div>
  );
}

function MiniReviewCard({ t }: { t: Testimonial }) {
  return (
    <article className="group h-full rounded-[28px] border border-[#dde5dd] bg-white p-6 shadow-[0_14px_40px_rgba(6,32,20,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#00FF88]/35 hover:shadow-[0_22px_50px_rgba(6,32,20,0.12)]">
      <Stars rating={t.rating} size="sm" />

      <div className="mt-4">
        <div
          aria-hidden="true"
          className="mb-3 text-3xl font-black leading-none text-[#0E2A1F]/10"
        >
          “
        </div>

        <p className="line-clamp-5 text-[15px] leading-7 text-[#486459]">
          {t.text}
        </p>
      </div>

      <div className="mt-6 border-t border-[#eef2ee] pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2FFF8] text-sm font-bold text-[#062014]">
            {(t.name ?? t.author ?? "?").charAt(0)}
          </div>

          <div>
            <p className="font-display text-lg font-bold text-[#062014]">
              {t.name}
            </p>
            <p className="text-sm text-[#6f887d]">
              {t.city} · {t.service}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs text-[#97a8a0]">{t.date}</p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section
      id="bewertungen"
      className="relative overflow-hidden bg-[#F6F0E8] py-24 md:py-32"
    >
      {/* ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-8rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[#00FF88]/8 blur-[120px]" />
        <div className="absolute right-[-10rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-[#00FF88]/7 blur-[120px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-[#0E2A1F]/[0.05] blur-[120px]" />
      </div>

      {/* subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
          <p className="section-label">Google Bewertungen</p>

          <h2 className="font-display text-4xl font-bold tracking-tight text-[#062014] md:text-5xl lg:text-[3.4rem]">
            Was unsere Kunden aus Lambsheim & Umgebung sagen
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5A7A6E]">
            Echte Kundenbewertungen von Umzügen in Lambsheim, Frankenthal,
            Heidelberg und der Rhein-Neckar-Region. Vertrauen entsteht durch
            echte Erfahrungen – und genau das schätzen unsere Kunden an
            FriendsMove.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Stars rating={5} />
            <p className="font-semibold text-[#062014]">
              4,9 / 5
              <span className="ml-2 text-sm font-normal text-[#5A7A6E]">
                · echte Google-Bewertungen
              </span>
            </p>
          </div>
        </FadeUp>

        {/* Featured review */}
        <FadeUp>
          <article className="relative overflow-hidden rounded-[36px] border border-[#e1e8e1] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(6,32,20,0.10)] md:px-10 md:py-10 lg:px-14 lg:py-12">
            {/* quote mark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-5 text-[5rem] font-black leading-none text-[#0E2A1F]/10 md:text-[6.5rem]"
            >
              ”
            </div>

            <Stars rating={featured.rating} />

            <blockquote className="mt-6 max-w-5xl font-display text-2xl font-bold leading-[1.22] text-[#163629] md:text-3xl lg:text-[3.05rem]">
              “{featured.text}”
            </blockquote>

            <div className="mt-8 border-t border-[#e8eeea] pt-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <InitialBadge name={featured.name ?? featured.author ?? ""} />

                  <div>
                    <p className="font-display text-xl font-bold text-[#062014]">
                      {featured.name}
                    </p>
                    <p className="mt-1 text-sm text-[#6a8579]">
                      {featured.city} · {featured.service}
                    </p>
                  </div>
                </div>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#edf4ff] px-5 py-3 text-sm font-semibold text-[#3b6df5] transition hover:opacity-90"
                >
                  <span>🌐</span>
                  Google Bewertung
                </a>
              </div>
            </div>
          </article>
        </FadeUp>

        {/* Secondary reviews */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {others.map((t, i) => (
            <FadeUp key={`${t.name}-${t.date}`} delay={i * 70}>
              <MiniReviewCard t={t} />
            </FadeUp>
          ))}
        </div>

        {/* trust line */}
        <FadeUp className="mt-10">
          <p className="text-center text-sm text-[#6c8479]">
            Mehr als 80 zufriedene Kundenbewertungen auf Google aus Lambsheim,
            Frankenthal, Heidelberg und der gesamten Rhein-Neckar-Region.
          </p>
        </FadeUp>

        {/* CTA buttons */}
        <FadeUp className="mt-12">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#062014]/18 bg-white px-7 py-4 text-base font-semibold text-[#062014] shadow-[0_8px_24px_rgba(6,32,20,0.06)] transition hover:-translate-y-0.5 hover:border-[#062014]/35"
            >
              Alle Bewertungen ansehen
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00FF88] px-7 py-4 text-base font-bold text-[#062014] shadow-[0_12px_34px_rgba(0,255,136,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,255,136,0.30)]"
            >
              Bewertung auf Google schreiben
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}