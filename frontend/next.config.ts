import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {hostname: '**'} // REMEMBER TO CHANGE THIS PLS ALEJANDRO PLS
    ]
  }
};

export default nextConfig;
