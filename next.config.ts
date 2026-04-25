import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  allowedDevOrigins: ["192.168.100.20"],

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.theissue.xyz",
          },
        ],
        destination: "https://theissue.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;