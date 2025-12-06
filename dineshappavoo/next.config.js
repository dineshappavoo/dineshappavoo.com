/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // GitHub project pages need a basePath
  basePath: "/dineshappavoo.com",
  assetPrefix: "/dineshappavoo.com/",

  output: "export",      // generates /out
  trailingSlash: true,   // good for static hosting

  images: {
    unoptimized: true,   // required for static export
  },
};

module.exports = nextConfig;
