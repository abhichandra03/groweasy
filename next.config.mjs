/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'utfs.io',
          },
          {
            hostname: 'bannerbot-public.s3.ap-south-1.amazonaws.com',
          },
        ],
    }
};

export default nextConfig;
