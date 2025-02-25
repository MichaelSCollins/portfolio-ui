import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'mikedevportfolio.s3.us-east-2.amazonaws.com',
      's3.us-east-2.amazonaws.com'
    ],
  },
};

export default nextConfig;
