self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache =>
      cache.addAll([
        '/InfoCyclisme/ascensions.json',
        '/InfoCyclisme/cafes.json',
        '/InfoCyclisme/coffee.png',
        '/InfoCyclisme/eau.json',
        '/InfoCyclisme/fountain.png',
        '/InfoCyclisme/index.html',
        '/InfoCyclisme/location.ico',
        '/InfoCyclisme/mountain.png',
        '/InfoCyclisme/tap.png',
        '/InfoCyclisme/toilets.png',
        '/InfoCyclisme/water.png'
      ])
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
