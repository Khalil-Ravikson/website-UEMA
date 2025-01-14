import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.devtool = process.env.NODE_ENV === 'production' ? false : 'source-map';
    return config;
  },
};

export default nextConfig;
