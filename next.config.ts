import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['example.com'],
    unoptimized: true, 
  },
  webpack: (config) => {
    // Sassの設定を更新
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // Dart Sassを使用するためのオプションを追加
            implementation: require('sass'),
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;