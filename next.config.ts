import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  swcMinify: true,       // SWC を使用した高速な minify を有効化
  output: "export",
  images: {
    domains: ['example.com'],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;