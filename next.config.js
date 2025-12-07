/** @type {import('next').NextConfig} */
// Only disable basePath when explicitly running dev mode
const isDev = process.env.NEXT_LOCAL_GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isDev ? "" : "/dineshappavoo.com",
  assetPrefix: isDev ? "" : "/dineshappavoo.com/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;