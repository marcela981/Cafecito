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

export default withOffline(nextConfig);