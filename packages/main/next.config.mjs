/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  distDir: '../../build',
  basePath: '/versions/v3',
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'http://localhost:3001/blog',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
