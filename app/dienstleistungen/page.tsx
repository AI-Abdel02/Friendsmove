import type { Metadata } from "next";
import DienstleistungenView from "@/components/sections/DienstleistungenView";

export const metadata: Metadata = {
  title: "Dienstleistungen für Umzug, Montage & Entrümpelung | FriendsMove",
  description:
    "Professionelle Umzugsdienstleistungen von FriendsMove im Rhein-Neckar-Gebiet: Privatumzug, Firmenumzug, Fernumzug, Seniorenumzug, Möbelmontage, Küchenmontage, Entrümpelung und Express-Umzug.",
  alternates: {
    canonical: "https://www.friendsmove.de/dienstleistungen",
  },
  openGraph: {
    title: "Dienstleistungen für Umzug, Montage & Entrümpelung | FriendsMove",
    description:
      "Alle Umzugsleistungen im Überblick – professionell, vollversichert und flexibel buchbar im Rhein-Neckar-Gebiet.",
    url: "https://www.friendsmove.de/dienstleistungen",
    siteName: "FriendsMove",
    type: "website",
  },
};

export default function DienstleistungenPage() {
  return <DienstleistungenView />;
}