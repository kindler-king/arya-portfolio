import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app (the parent folder has other lockfiles).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
