import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['example.com'],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;