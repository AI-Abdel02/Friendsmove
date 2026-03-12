import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/impressum", "/datenschutz"],
      },
    ],
    sitemap: "https://www.friendsmove.de/sitemap.xml",
    host: "https://www.friendsmove.de",
  };
}
