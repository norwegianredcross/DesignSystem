// next.config.js or next.config.ts
import type { NextConfig } from "next";

const repoName = 'DesignSystem'; // Correct Casing
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '', // Correct: /DesignSystem

  // --- ADD THIS LINE ---
  assetPrefix: isProd ? `/${repoName}/` : '', // Correct: /DesignSystem/ (Note trailing slash)
  // --- END ADD ---

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;