'use strict';

const CACHE_NAME = 'dewi-cache-v3';

// for now, only caching pwa equired offline handler
// feel free to add more files to speed up page load
const FILES_TO_CACHE = [
  'offline.html',
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        return;
    }
    evt.respondWith(
        fetch(evt.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.match('offline.html');
            });
        })
    );
});
  