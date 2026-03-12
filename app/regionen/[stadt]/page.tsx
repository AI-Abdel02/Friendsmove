import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import QuoteForm from "@/components/ui/QuoteForm";
import CtaSection from "@/components/sections/CtaSection";
import { CITIES, SITE_NAME } from "@/lib/seo";

type Props = {
  params: Promise<{ stadt: string }>;
};

function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCity(stadt);

  if (!city) {
    return { title: "Umzug | FriendsMove" };
  }

  const title = `Umzugsunternehmen ${city.name} | ${SITE_NAME}`;
  const description = `Professioneller Umzug in ${city.name} und Umgebung. Privatumzug, Firmenumzug, Möbelmontage und Fernumzüge mit FriendsMove.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.friendsmove.de/regionen/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { stadt } = await params;
  const city = getCity(stadt);

  if (!city) return null;

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark py-20 text-white md:py-28">
        <div className="container-max grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <nav className="mb-6 text-sm text-white/50">
              <Link href="/" className="hover:text-white">
                Startseite
              </Link>
              {" / "}
              <span>{city.name}</span>
            </nav>

            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              Umzugsunternehmen in{" "}
              <span className="text-brand-green">{city.name}</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg text-white/70">
              FriendsMove ist Ihr zuverlässiger Partner für Umzüge in {city.name}{" "}
              und der Rhein-Neckar-Region. Wir organisieren Privatumzüge,
              Firmenumzüge, Möbelmontagen und Fernumzüge professionell und
              stressfrei.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Festpreis möglich",
                "Vollversichert",
                "Kurzfristige Termine",
                "Professionelles Team",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* SERVICES */}
      <SectionWrapper className="bg-white">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-brand-dark">
            Unsere Umzugsservices in {city.name}
          </h2>
          <p className="mx-auto max-w-xl text-brand-muted">
            Wir bieten professionelle Umzugsdienstleistungen für Privatpersonen,
            Unternehmen und Büros in {city.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Privatumzug", icon: "🏠", link: "/privatumzug" },
            { name: "Firmenumzug", icon: "🏢", link: "/firmenumzug" },
            { name: "Fernumzug", icon: "🚛", link: "/fernumzug" },
            { name: "Möbelmontage", icon: "🔧", link: "/moebelmontage" },
            { name: "Küchenmontage", icon: "🍽️", link: "/kuechenmontage" },
            { name: "Klaviertransport", icon: "🎹", link: "/klaviertransport" },
          ].map((service) => (
            <Link
              key={service.name}
              href={service.link}
              className="card flex flex-col gap-3 hover:border-brand-green"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="font-semibold text-brand-dark">
                {service.name} in {city.name}
              </h3>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CtaSection />
    </>
  );
}