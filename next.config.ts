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
        destination: "https://app.friendsmove.com/web/public/vue-app/lead",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
