import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // ✅ Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript type errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
