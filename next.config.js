/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s3.ap-southeast-2.amazonaws.com"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};
