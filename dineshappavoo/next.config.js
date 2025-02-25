/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? "/dineshappavoo.com" : "",
  assetPrefix: isGitHubPages ? "/dineshappavoo.com/" : "",
  output: "export", // ✅ Always export static files
  trailingSlash: true, // ✅ Ensures paths work correctly for static pages
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true, // ✅ Ensures Next.js doesn’t use the App Router
  },
};

module.exports = nextConfig;
