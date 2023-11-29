/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/auth/sign-in",
  //       destination: "/api/auth/signin",
  //       permanent: true,
  //     },
  //   ];
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.famlam.ca",
      },
    ],
  },
};

module.exports = nextConfig;
