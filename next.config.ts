import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products/fruit-jam", destination: "/products/jam", permanent: true },
      { source: "/products/sugar-fondant", destination: "/products/fondants", permanent: true },
      { source: "/products/crushes-syrups", destination: "/products/crushes", permanent: true },
    ];
  },
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
