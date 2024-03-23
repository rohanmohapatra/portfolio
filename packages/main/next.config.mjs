/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "../../build",
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "http://localhost:3001/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
