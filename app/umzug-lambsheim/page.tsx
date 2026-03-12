import { buildMeta, PHONE_DISPLAY } from "@/lib/seo";

export const metadata = buildMeta(
  "Umzugsunternehmen Lambsheim",
  "Professionelles Umzugsunternehmen in Lambsheim. Privatumzug, Firmenumzug, Möbelmontage und Entrümpelung in Lambsheim und Rhein-Neckar.",
  "/umzug-lambsheim"
);

export default function Page() {
  return (
    <section className="bg-[#F9F5EF] py-20">
      <div className="container-max max-w-4xl">

        <h1 className="text-4xl font-bold text-[#062014] mb-6">
          Umzugsunternehmen in Lambsheim
        </h1>

        <p className="text-lg mb-6 text-[#334]">
          FriendsMove ist Ihr zuverlässiges Umzugsunternehmen in Lambsheim.
          Wir organisieren professionelle Umzüge für Privatpersonen,
          Familien und Unternehmen in Lambsheim und der gesamten
          Rhein-Neckar-Region.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#062014]">
          Unsere Leistungen in Lambsheim
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Privatumzug Lambsheim</li>
          <li>Firmenumzug Lambsheim</li>
          <li>Möbelmontage</li>
          <li>Küchenmontage</li>
          <li>Klaviertransport</li>
          <li>Entrümpelung</li>
          <li>Halteverbotszone</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#062014]">
          Warum FriendsMove
        </h2>

        <ul className="space-y-2">
          <li>✔ Vollversichert</li>
          <li>✔ Festpreis möglich</li>
          <li>✔ Lokales Umzugsunternehmen</li>
          <li>✔ Schnelle Angebote</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-[#062014]">
          Kontakt
        </h2>

        <p>
          FriendsMove Umzüge<br />
          Jahnstraße 28A<br />
          67245 Lambsheim<br />
          Telefon: {PHONE_DISPLAY}
        </p>

      </div>
    </section>
  );
}
