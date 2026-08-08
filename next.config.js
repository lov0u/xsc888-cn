/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "payload.ra0.cn",
      },
      {
        protocol: "http",
        hostname: "strapi.ra0.cn",
      },
      {
        protocol: "http",
        hostname: "payload.ra0.cn",
      },
      {
        protocol: "http",
        hostname: "strapi.ra0.cn",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  compress: true,
  poweredByHeader: false,
  trailingSlash: true,
};

module.exports = nextConfig;
