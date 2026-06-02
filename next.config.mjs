/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: "/home/walid/urbasphere"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
