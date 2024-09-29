/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssl-product-images.www8-hp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sg-media.apjonlinecdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "my-media.apjonlinecdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "in-media.apjonlinecdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
