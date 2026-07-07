import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },

  async redirects() {
    return [
      {
        source: "/check24",
        destination: "https://app.friendsmove.de/web/public/konto?source=check24",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
