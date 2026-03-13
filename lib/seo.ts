/* =====================================================
   GLOBAL SEO CONFIG
===================================================== */

export const SITE_NAME = "FriendsMove";
export const SITE_URL = "https://www.friendsmove.de";

/* =====================================================
   CONTACT / NAP
===================================================== */

export const PHONE = "+4915203237063";
export const PHONE_DISPLAY = "+49 1520 3237063";

export const HOTLINE = "+491742083291";
export const HOTLINE_DISPLAY = "+49 174 2083291";

export const EMAIL = "info@friendsmove.de";

export const ADDRESS = {
  street: "Jahnstraße 28A",
  city: "Lambsheim",
  zip: "67245",
  region: "Rhein-Neckar",
  country: "Germany",
};

/* =====================================================
   SERVICE AREA
===================================================== */

export const CITIES = [
  {
    name: "Lambsheim",
    slug: "lambsheim",
    desc: "Gemeinde in der Vorderpfalz",
    emoji: "🏡",
  },
  {
    name: "Frankenthal",
    slug: "frankenthal",
    desc: "Stadt in der Vorderpfalz",
    emoji: "🏙️",
  },
  {
    name: "Mannheim",
    slug: "mannheim",
    desc: "Metropole der Rhein-Neckar-Region",
    emoji: "🌆",
  },
  {
    name: "Heidelberg",
    slug: "heidelberg",
    desc: "Historische Universitätsstadt",
    emoji: "🏰",
  },
  {
    name: "Ludwigshafen",
    slug: "ludwigshafen",
    desc: "Industriestadt am Rhein",
    emoji: "🏭",
  },
  {
    name: "Schwetzingen",
    slug: "schwetzingen",
    desc: "Schlossstadt in der Kurpfalz",
    emoji: "🏛️",
  },
  {
    name: "Viernheim",
    slug: "viernheim",
    desc: "Stadt an der Bergstraße",
    emoji: "🏘️",
  },
  {
    name: "Weinheim",
    slug: "weinheim",
    desc: "Zwei-Burgen-Stadt",
    emoji: "🏞️",
  },
  {
    name: "Frankfurt am Main",
    slug: "frankfurt",
    desc: "Finanzmetropole Deutschlands",
    emoji: "🏦",
  },
] as const;

/* =====================================================
   SERVICES
===================================================== */

export const SERVICES = [
  { name: "Privatumzug", slug: "privatumzug", icon: "🏠" },
  { name: "Firmenumzug", slug: "firmenumzug", icon: "🏢" },
  { name: "Fernumzug", slug: "fernumzug", icon: "🚛" },
  { name: "Möbelmontage", slug: "moebelmontage", icon: "🔧" },
  { name: "Küchenmontage", slug: "kuechenmontage", icon: "🍽️" },
  { name: "Klaviertransport", slug: "klaviertransport", icon: "🎹" },
  { name: "Entrümpelung", slug: "entruempelung", icon: "♻️" },
  { name: "Halteverbotszone", slug: "halteverbotszone", icon: "🚧" },
] as const;

/* =====================================================
   META BUILDER
===================================================== */

export function buildMeta(title: string, description: string, path = "") {
  return {
    title: `${title} | FriendsMove Umzugsunternehmen`,
    description,
    canonical: `${SITE_URL}${path}`,
    ogUrl: `${SITE_URL}${path}`,
  };
}

/* =====================================================
   HELPERS
===================================================== */

export function buildCityUrl(citySlug: string) {
  return `${SITE_URL}/regionen/${citySlug}`;
}

export function buildServiceUrl(serviceSlug: string) {
  return `${SITE_URL}/${serviceSlug}`;
}

/* =====================================================
   BUSINESS INFO
===================================================== */

export const BUSINESS_INFO = {
  name: "FriendsMove",
  phone: PHONE,
  hotline: HOTLINE,
  email: EMAIL,
  address: ADDRESS,
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
};

/* =====================================================
   SCHEMA
===================================================== */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: SITE_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.zip,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    addressCountry: "DE",
  },
  areaServed: CITIES.map((city) => city.name),
  sameAs: ["https://share.google/Eh9LHySv1Rh9X6SLw"],
};

export function cityBusinessSchema(cityName: string, citySlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE_URL}/regionen/${citySlug}#local-business`,
    name: SITE_NAME,
    url: `${SITE_URL}/regionen/${citySlug}`,
    email: EMAIL,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.zip,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    sameAs: ["https://share.google/Eh9LHySv1Rh9X6SLw"],
  };
}

/* =====================================================
   CITY PAGE METADATA BUILDER
===================================================== */

import type { Metadata } from "next";
import type { CityPageData } from "@/lib/cityData";

export function buildCityPageMetadata(city: CityPageData): Metadata {
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${city.path}`,
    },
    openGraph: {
      title: city.ogTitle,
      description: city.ogDescription,
      url: `${SITE_URL}${city.path}`,
      siteName: SITE_NAME,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: city.ogTitle,
      description: city.ogDescription,
    },
  };
}