/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/check24',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
