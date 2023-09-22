/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://github.com/newfrgmnt',
        permanent: false,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig;