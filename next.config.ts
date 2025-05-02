// next.config.js or next.config.mjs

import type { NextConfig } from "next";


const repoName = '<repository-name>';

const nextConfig: NextConfig = {
  
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',

 
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;