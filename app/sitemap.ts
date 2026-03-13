import { MetadataRoute } from "next";
import { CITY_PAGES, CITY_PAGE_SLUGS } from "@/lib/cityData";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, freq, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: lastMod,
    changeFrequency: freq,
    priority,
  }));

  // /regionen/{slug} pages — derived from city data
  const regionEntries: MetadataRoute.Sitemap = CITY_PAGE_SLUGS.map((slug) => ({
    url: `${BASE}/regionen/${CITY_PAGES[slug].regionenSlug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

  // /umzug-{slug} intent pages — derived from city data (single source of truth)
  const umzugCityEntries: MetadataRoute.Sitemap = CITY_PAGE_SLUGS.map((slug) => ({
    url: `${BASE}${CITY_PAGES[slug].path}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  return [...staticEntries, ...regionEntries, ...umzugCityEntries];
}
