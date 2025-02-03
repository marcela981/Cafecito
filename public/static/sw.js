const CACHE_NAME = 'cafecito-v2';
const OFFLINE_PAGE = '/offline.html';

self.addEventListener('install', (event) => {
  const assets = [
    '/',
    '/cafe',
    '/styles.css',
    '/images/logo.webp',
    '/images/hero-bg.jpg'
  ];
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request)
          .catch(() => caches.match(OFFLINE_PAGE));
      })
  );
});