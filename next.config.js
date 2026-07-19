/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },
  // Trigger rebuild
};

module.exports = nextConfig;
