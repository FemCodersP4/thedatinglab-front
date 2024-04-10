/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_URL: "http://localhost:8000/api",
  },

  images: {
  
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
