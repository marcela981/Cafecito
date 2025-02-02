import withOffline from 'next-offline';

const nextConfig = {
  workboxOpts: {
    swDest: 'static/sw.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offline-cache',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
};

module.exports = {
  images: {
    domains: [], // Para imágenes externas ej: ['upload.wikimedia.org']
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
}

export default withOffline(nextConfig);