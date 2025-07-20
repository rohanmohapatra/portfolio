import type { NextConfig } from 'next';
import nextra from 'nextra';

const withNextra = nextra({
  contentDirBasePath: '/blog',
  readingTime: true
});

const nextConfig: NextConfig = withNextra({
  // ... Add regular Next.js options here
  reactStrictMode: true,
  turbopack: undefined,
  output: 'export',
  distDir: 'build'
});

export default nextConfig;
