self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('static-cache-v1').then(cache =>
        cache.addAll([
          '/',
          '/cafe',
          '/images/hero-bg.jpg',
          '/images/logo.webp',
          '/styles.css',
        ])
      )
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  