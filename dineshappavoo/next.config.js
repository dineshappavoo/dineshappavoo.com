/** @type {import('next').NextConfig} */

isLocalEnv = false;
isLocalEnv = process.env.NEXT_LOCAL_GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isLocalEnv ? "" : "/dineshappavoo.com",
  trailingSlash: true,
  //basePath: '/dineshappavoo.com',
  // For asset references
  //assetPrefix: '/dineshappavoo.com/',
  assetPrefix: isLocalEnv ? "" : "/dineshappavoo.com/",
  output: "export", // ✅ Always export static files
  trailingSlash: true, // ✅ Ensures paths work correctly for static pages
  compiler: {
    styledComponents: true,
  },
  //experimental: {
    //appDir: true, // ✅ Ensures Next.js uses the App Router
  //},
  images: {
    unoptimized: true, // This helps with static export
  },
};

module.exports = nextConfig;
