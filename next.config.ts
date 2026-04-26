import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Жёстко задаём корень проекта, чтобы Next не путался из-за lock-файлов в home
    root: __dirname,
  },

  allowedDevOrigins: ["192.168.100.20"],
};

export default nextConfig;