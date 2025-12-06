/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",     // generate /out on build
  trailingSlash: true,
  images: {
    unoptimized: true,  // needed for static export
  },
};

module.exports = nextConfig;
