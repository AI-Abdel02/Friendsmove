import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Privatumzug Mannheim & Rhein-Neckar",
    description:
      "Professionelle Privatumzüge für Familien und Haushalte in Mannheim, Heidelberg und Ludwigshafen – zuverlässig geplant und stressfrei durchgeführt.",
    image: "/images/services/privatumzug.jpg",
    alt: "Privatumzug in Mannheim mit FriendsMove",
    href: "/dienstleistungen#privatumzug",
  },
  {
    title: "Firmenumzug für Unternehmen",
    description:
      "Effiziente Büro- und Firmenumzüge mit minimaler Ausfallzeit – von der Planung bis zur Montage.",
    image: "/images/services/firmenumzug.jpg",
    alt: "Firmenumzug für Unternehmen mit FriendsMove",
    href: "/dienstleistungen#firmenumzug",
  },
  {
    title: "Fernumzug deutschlandweit",
    description:
      "Ob Mannheim nach Berlin oder Heidelberg nach München – wir organisieren Ihren Fernumzug sicher und strukturiert.",
    image: "/images/services/fernumzug.jpg",
    alt: "Fernumzug deutschlandweit mit FriendsMove",
    href: "/dienstleistungen#fernumzug",
  },
  {
    title: "Professionelle Möbelmontage",
    description:
      "Fachgerechte Demontage und Montage Ihrer Möbel – schnell, präzise und zuverlässig.",
    image: "/images/services/moebelmontage.jpg",
    alt: "Professionelle Möbelmontage mit FriendsMove",
    href: "/dienstleistungen#moebelmontage",
  },
  {
    title: "Küchenmontage vom Profi",
    description:
      "Wir demontieren, transportieren und montieren Ihre Küche fachgerecht inklusive Ausrichtung und Anschluss.",
    image: "/images/services/kuechenmontage.jpg",
    alt: "Küchenmontage vom Profi mit FriendsMove",
    href: "/dienstleistungen#kuechenmontage",
  },
  {
    title: "Sicherer Klaviertransport",
    description:
      "Der Transport von Klavieren erfordert Erfahrung und Spezialausrüstung – unser Team sorgt für einen sicheren Transport.",
    image: "/images/services/klaviertransport.jpg",
    alt: "Sicherer Klaviertransport mit FriendsMove",
    href: "/dienstleistungen#klaviertransport",
  },
  {
    title: "Entrümpelung & Haushaltsauflösung",
    description:
      "Professionelle Entrümpelung von Wohnungen, Kellern und Büros inklusive fachgerechter Entsorgung.",
    image: "/images/services/entruempelung.jpg",
    alt: "Entrümpelung und Haushaltsauflösung mit FriendsMove",
    href: "/dienstleistungen#entruempelung",
  },
];

export default function ServicesElite() {
  return (
    <section className="bg-[#F6F0E8] py-28">
      <div className="container-max">
        <h2 className="text-center font-display text-5xl font-bold text-[#062014]">
          Umzugsleistungen für Privatkunden und Unternehmen
        </h2>

        <p className="mt-4 text-center text-[#5A7A6E]">
          FriendsMove bietet professionelle Umzugsleistungen in Mannheim,
          Heidelberg, Ludwigshafen und im gesamten Rhein-Neckar-Gebiet – von
          Privatumzügen bis Klaviertransport und Entrümpelung.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#062014]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5A7A6E]">
                  {service.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00C96B]">
                  Mehr erfahren
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
