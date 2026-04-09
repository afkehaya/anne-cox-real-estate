import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/anne-cox-real-estate',
  assetPrefix: '/anne-cox-real-estate',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
