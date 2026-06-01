// EverSafe Hub Standalone Production Asset Cache
const CACHE_NAME = 'eversafe-cache-v2';
const ASSETS_TO_CACHE = [
  'index.html',
  'contract-wo.html',
  'billing-invoice.html',
  'inspection-l2.html',
  'inspection-l1.html',
  'dispatches.html',
  'vault-upload.html',
  'manifest.json'
];

// Initialize and install background hardware cache parameters
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Intercept fetch requests and serve assets gracefully from hardware memory
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
