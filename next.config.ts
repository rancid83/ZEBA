import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  experimental: {
    optimizePackageImports: ['antd'],
  },
  transpilePackages: ['antd', '@ant-design/cssinjs'],
};

export default nextConfig;
