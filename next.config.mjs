/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "get-me-chai.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c10.patreonusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
