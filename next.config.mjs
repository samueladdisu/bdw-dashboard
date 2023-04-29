/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/bdw-dashboard',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bdw-dashboard',
        basePath: false,
        permanent: false,
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
