import withOffline from 'next-offline';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    
    formats: ['image/avif', 'image/webp'] as Array<'image/avif' | 'image/webp'>,
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,
  },
  workboxOpts: {
    swDest: 'public/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'dynamic-cache',
          expiration: { maxEntries: 200 },
        },
      },
    ],
  },
};

export default withOffline(nextConfig);
