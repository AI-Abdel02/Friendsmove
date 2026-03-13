import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/ui/CookieBanner";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Umzugsunternehmen in Lambsheim & Rhein-Neckar`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "FriendsMove – Ihr zuverlässiges Umzugsunternehmen in Lambsheim, Frankenthal, Mannheim, Heidelberg und der gesamten Rhein-Neckar-Region. Professionelle Umzüge, vollversichert und transparent geplant.",
  keywords: [
    "Umzugsunternehmen Lambsheim",
    "Umzug Frankenthal",
    "Umzug Mannheim",
    "Umzug Heidelberg",
    "Privatumzug Lambsheim",
    "Firmenumzug Rhein-Neckar",
    "Klaviertransport Lambsheim",
    "Entrümpelung Frankenthal",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
    images: [{ url: "/hero.jpg", width: 1600, height: 896 }],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${SITE_URL}/#organization`,
  name: "FriendsMove",
  url: SITE_URL,
  telephone: "+4915203237063",
  email: "info@friendsmove.de",
  image: `${SITE_URL}/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jahnstraße 28A",
    postalCode: "67245",
    addressLocality: "Lambsheim",
    addressRegion: "Rhein-Neckar",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.5102,
    longitude: 8.3532,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    "Lambsheim",
    "Frankenthal",
    "Mannheim",
    "Heidelberg",
    "Ludwigshafen",
    "Schwetzingen",
    "Viernheim",
    "Weinheim",
    "Frankfurt am Main",
    "Rhein-Neckar",
    "Vorderpfalz",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Umzugsdienstleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Privatumzug" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Firmenumzug" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fernumzug" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seniorenumzug" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Möbelmontage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Küchenmontage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entrümpelung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klaviertransport" } },
    ],
  },
  sameAs: [
    "https://share.google/Eh9LHySv1Rh9X6SLw",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-brand-green focus:px-4 focus:py-2 focus:text-brand-dark"
          >
            Zum Hauptinhalt springen
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
          <AnalyticsScripts />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
