import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Melhor para VPS
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
