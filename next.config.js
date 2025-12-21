/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  outputFileTracingIncludes: {
    "/": ["content/**"],
    "/blogs/[slug]": ["content/**"],
    "/(insightfull)/categories/[slug]": ["content/**"],
    "/(insightfull)/about-us": ["content/**"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};

module.exports = nextConfig;
