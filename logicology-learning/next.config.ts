import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['mongoose'],
  images: {
    domains: ['localhost', 'uploadthing.com'],
  },
};

export default nextConfig;
