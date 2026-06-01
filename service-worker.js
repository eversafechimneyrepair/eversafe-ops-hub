const CACHE_NAME = 'eversafe-cache-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json'
];

// Initialize and install background cache parameters
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Intercept fetch requests and serve assets gracefully
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
