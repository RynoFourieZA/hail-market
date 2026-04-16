import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tasks",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
