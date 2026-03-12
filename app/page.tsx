import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HeroCtaStrip from "@/components/sections/HeroCtaStrip";
import TrustStrip from "@/components/ui/TrustStrip";
import ProcessCinematic from "@/components/sections/ProcessCinematic";
import ServicesElite from "@/components/sections/ServicesElite";
import OptionsSection from "@/components/sections/OptionsSection";
import WhySection from "@/components/sections/WhySection";
import RegionsSection from "@/components/sections/RegionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EcoSection from "@/components/sections/EcoSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

  export const metadata: Metadata = {
  title: "FriendsMove – Professionelle Umzüge im Rhein-Neckar-Gebiet",
  description:
    "Ihr zuverlässiges Umzugsunternehmen in Mannheim, Heidelberg, Ludwigshafen und Umgebung. Professionelle Umzüge, Umzugshelfer, Transporter mit Fahrer und individuelle Angebote. Jetzt kostenlos anfragen.",
  alternates: { canonical: "https://www.friendsmove.de" },
  openGraph: {
    title: "FriendsMove – Stressfrei umziehen im Rhein-Neckar-Gebiet",
    description:
      "Professionelle Umzüge und Transporte in Mannheim, Heidelberg, Ludwigshafen und Umgebung.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroCtaStrip />
      <TrustStrip />
      <ProcessCinematic />
      <ServicesElite />
      <OptionsSection />
      <WhySection />
      <RegionsSection />
      <TestimonialsSection />
      <EcoSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
