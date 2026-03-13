/**
 * Reusable city landing page template.
 * Used by every /umzug-{city} page — content comes from lib/cityData.ts.
 */

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { SERVICES, PHONE, PHONE_DISPLAY, SITE_URL, cityBusinessSchema } from "@/lib/seo";
import type { CityPageData } from "@/lib/cityData";
import { CITY_PAGES } from "@/lib/cityData";

interface Props {
  city: CityPageData;
}

export default function UmzugCityTemplate({ city }: Props) {
  const schema = cityBusinessSchema(city.schemaName, city.schemaSlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Umzug ${city.name}`,
        item: `${SITE_URL}${city.path}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Other city pages for internal linking (exclude current)
  const otherCities = Object.values(CITY_PAGES).filter((c) => c.slug !== city.slug);

  return (
    <>
      {/* ── Structured Data ──────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="bg-brand-dark py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="city-heading"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-max relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-white/70">
                  Startseite
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70">{city.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label text-brand-green">{city.heroLabel}</p>
              <h1
                id="city-heading"
                className="font-display font-bold text-4xl md:text-5xl text-white mt-2 mb-5 leading-tight"
              >
                {city.h1Line1}
                <br />
                <span className="text-brand-green">{city.h1Line2}</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-lg">
                {city.heroParagraph}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {city.chips.map((chip) => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-sm rounded-full px-4 py-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 w-fit hover:bg-white/20 transition-colors"
              >
                <span className="text-brand-green text-xl" aria-hidden="true">
                  📞
                </span>
                <div>
                  <p className="text-white/60 text-xs">Jetzt anrufen</p>
                  <p className="text-white font-semibold">{PHONE_DISPLAY}</p>
                </div>
              </a>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Knowledge ──────────────────────────────────── */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">{city.localLabel}</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark mb-5">
              {city.localH2}
            </h2>
            <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
              <p>{city.localP1}</p>
              <p>
                {city.localP2}{" "}
                <Link
                  href={`/regionen/${city.regionenSlug}`}
                  className="text-brand-green underline hover:text-brand-green/80"
                >
                  {city.name}-Seite
                </Link>
                {city.extraLink && (
                  <>
                    {" "}
                    sowie auf der{" "}
                    <Link
                      href={city.extraLink.href}
                      className="text-brand-green underline hover:text-brand-green/80"
                    >
                      {city.extraLink.label}
                    </Link>
                  </>
                )}
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {city.districts.map((area) => (
              <div key={area.title} className="card flex flex-col gap-2">
                <span className="text-xl" aria-hidden="true">
                  {area.icon}
                </span>
                <h3 className="font-semibold text-brand-dark text-sm">{area.title}</h3>
                <p className="text-brand-muted text-xs">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Services ─────────────────────────────────────────── */}
      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-10">
          <p className="section-label">Unsere Services in {city.name}</p>
          <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">
            Was wir in {city.name} anbieten
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
          {SERVICES.map((s) => (
            <li key={s.slug} role="listitem">
              <Link
                href={`/${s.slug}`}
                className="card flex flex-col items-center gap-2 text-center hover:border hover:border-brand-green transition-all block"
              >
                <span className="text-2xl" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="text-sm font-medium text-brand-dark">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-brand-dark">
              Fragen zum Umzug in {city.name}
            </h2>
          </div>
          <FaqAccordion items={city.faqs} />
        </div>
      </SectionWrapper>

      {/* ── Internal Links to Other City Pages ───────────────── */}
      <SectionWrapper className="bg-brand-bg">
        <div className="text-center mb-8">
          <p className="section-label">Weitere Regionen</p>
          <h2 className="font-display font-bold text-2xl text-brand-dark">
            FriendsMove in Ihrer Region
          </h2>
          <p className="text-brand-muted mt-2 text-sm">
            Wir sind im gesamten Rhein-Neckar-Gebiet für Sie im Einsatz.
          </p>
        </div>
        <ul
          className="flex flex-wrap justify-center gap-3"
          aria-label="Umzüge in anderen Städten"
          role="list"
        >
          {otherCities.map((c) => (
            <li key={c.slug} role="listitem">
              <Link
                href={c.path}
                className="inline-block bg-white border border-brand-border rounded-full px-4 py-2 text-sm text-brand-dark hover:border-brand-green hover:text-brand-green transition-colors"
              >
                Umzug {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}
