import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Жёстко задаём корень проекта, чтобы Next не путался из-за lock-файлов в home
    root: __dirname,
  },
};

export default nextConfig;
