/**
 * EverSafe Hub Standalone Production Asset Cache - v3
 * Hardened Cache-Buster Engine & Dynamic Lifecycle Activator
 */
const CACHE_NAME = 'eversafe-cache-v3'; // Bumped to v3 to forcefully shatter the old cache lock
const ASSETS_TO_CACHE = [
  'index.html',
  'contract-wo.html',
  'billing-invoice.html',
  'inspection-l2.html',
  'inspection-l1.html',
  'dispatches.html',
  'vault-upload.html',
  'manifest.json',
  'app-icon.jpg' // Added your brand new icon asset directly to the offline hardware storage matrix
];

// Initialize and install background hardware cache parameters
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Force this new service worker to instantly drop into active duty
  self.skipWaiting();
});

// GARBAGE COLLECTION: Automatically purges the old v2 cache so Leo gets the new icon instantly
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Sweeping obsolete cache registry:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Take control of all open browser tabs immediately
  self.clients.claim();
});

// Intercept fetch requests and serve assets gracefully from hardware memory
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
