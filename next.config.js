/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/check24",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "friendsmove.com",
          },
        ],
        destination: "https://friendsmove.de/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;