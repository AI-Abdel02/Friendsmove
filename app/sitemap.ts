import { MetadataRoute } from "next";

const BASE = "https://www.friendsmove.de";

const STATIC_PAGES: Array<{
  path: string;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "",                     freq: "weekly",   priority: 1.0 },
  { path: "/dienstleistungen",    freq: "monthly",  priority: 0.90 },
  // Service pages
  { path: "/privatumzug",         freq: "monthly",  priority: 0.88 },
  { path: "/firmenumzug",         freq: "monthly",  priority: 0.88 },
  { path: "/fernumzug",           freq: "monthly",  priority: 0.85 },
  { path: "/seniorenumzug",       freq: "monthly",  priority: 0.85 },
  { path: "/moebelmontage",       freq: "monthly",  priority: 0.82 },
  { path: "/kuechenmontage",      freq: "monthly",  priority: 0.82 },
  { path: "/entruempelung",       freq: "monthly",  priority: 0.82 },
  { path: "/klaviertransport",    freq: "monthly",  priority: 0.80 },
  { path: "/halteverbotszone",    freq: "monthly",  priority: 0.78 },
  { path: "/verpackungsservice",  freq: "monthly",  priority: 0.78 },
  // Core pages
  { path: "/preise",              freq: "monthly",  priority: 0.82 },
  { path: "/kontakt",             freq: "monthly",  priority: 0.85 },
  { path: "/faq",                 freq: "monthly",  priority: 0.72 },
  { path: "/ueber-uns",           freq: "monthly",  priority: 0.65 },
  // Regions hub
  { path: "/regionen",            freq: "monthly",  priority: 0.78 },
  // Lambsheim-specific landing page
  { path: "/umzug-lambsheim",     freq: "monthly",  priority: 0.85 },
];

const REGIONEN_SLUGS = [
  "lambsheim",
  "frankenthal",
  "mannheim",
  "heidelberg",
  "ludwigshafen",
  "schwetzingen",
  "viernheim",
  "weinheim",
  "frankfurt",
] as const;

// Intent-based city landing pages (umzug-*)
const UMZUG_CITIES = [
  "mannheim",
  "heidelberg",
  "ludwigshafen",
  "frankfurt",
  "schwetzingen",
  "weinheim",
  "frankenthal",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2025-11-01");

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, freq, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: lastMod,
    changeFrequency: freq,
    priority,
  }));

  const regionEntries: MetadataRoute.Sitemap = REGIONEN_SLUGS.map((slug) => ({
    url: `${BASE}/regionen/${slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.82,
  }));

  const umzugCityEntries: MetadataRoute.Sitemap = UMZUG_CITIES.map((city) => ({
    url: `${BASE}/umzug-${city}`,
    lastModified: lastMod,
    changeFrequency: "monthly",
    priority: 0.88,
  }));

  return [...staticEntries, ...regionEntries, ...umzugCityEntries];
}
