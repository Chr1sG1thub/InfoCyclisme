self.addEventListener('install', event => {
  // No files to cache
  self.skipWaiting(); // Optional: activate immediately
});

self.addEventListener('activate', event => {
  self.clients.claim(); // Take control of pages immediately
});

