/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/check24',
        destination: 'https://app.friendsmove.com/web/public/vue-app/lead',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
