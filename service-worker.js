/**
 * EverSafe Operations Hub - Enterprise PWA Service Worker Engine
 * Version: 9.0 Production Complete
 * Engineering Focus: Full 11-Node Offline Cache Coverage & Real-Time Garbage Collection
 */

const CACHE_NAME = 'eversafe-enterprise-v9'; // Forcefully dumps old local storage caches immediately

// Exhaustive offline hardware storage core registry array matrix
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './jobs.html',
  './inspection-l1.html',
  './inspection-l2.html',
  './proposals.html',
  './estimate.html',
  './contract-wo.html',
  './signatures.html',
  './billing-invoice.html',
  './dispatches.html',
  './vault-upload.html',
  './code-library.html', // <-- NEW LIBRARY ADDED HERE
  './navbar.js',
  './manifest.json',
  './app-icon.jpg',
  './app-icon-192.png',
  './app-icon-512.png'
];

// 1. INITIALIZE & INSTALL OFFLINE DATA PARAMS
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Synchronizing enterprise assets to hardware storage layer...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Force this updated service worker worker process to drop straight into active duty
  self.skipWaiting();
});

// 2. GARBAGE COLLECTION LAYER: Cleanly purges obsolete legacy cache blocks instantly
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Sweeping obsolete or corrupted legacy cache registry:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Take atomic control of all active terminal browser instances and windows immediately
  self.clients.claim();
});

// 3. SECURE INTERCEPT ENGINE: Serves local cached assets instantly for lightning-fast offline field velocity
self.addEventListener('fetch', (event) => {
  // Avoid intercepting remote third-party operational APIs (like Google Sheets or Square SDK networks)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return clean cached file baseline instantly
      }

      // If asset isn't inside local cache, fetch from active antenna networks gracefully
      return fetch(event.request).catch((err) => {
        console.warn('Network offline intercept event captured. Resource connection unavailable:', err);
      });
    })
  );
});
