import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    },
    {
      source: "/cafe/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=7200, stale-while-revalidate=86400" },
      ],
    },
  ],
  redirects: async () => [
    { source: "/cafes", destination: "/cafe", permanent: true },
    { source: "/productos", destination: "/cafe", permanent: true },
  ],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
