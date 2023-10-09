/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: {
  //     protocol: "https",
  //     hostnames: "images.unsplash.com",
  //   },
  // },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
