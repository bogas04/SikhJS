const VERSION = 'v4';
const RUNTIME = 'runtime';

const currentCaches = [RUNTIME, VERSION];

const CACHE_URLS = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/fonts/gurmukhi_heavy.ttf',
  './assets/js/main.js',
  './assets/js/vendor.js',
];

const deleteCache = c => caches.delete(c);
const deleteCaches = cs => Promise.all(cs.map(deleteCache));
const findCachesToDelete = cs => cs.filter(c => !currentCaches.includes(c));
const isSameOrigin = event => event.request.url.startsWith(self.location.origin);

const updateCacheFromNetwork = event => cachedResponse => cachedResponse || caches
  .open(RUNTIME)
  .then(cache => fetch(event.request)
    .then(response => cache
      .put(event.request, response.clone())
      .then(() => response)
    )
  );

const onInstall = event => event.waitUntil(
  caches
    .open(VERSION)
    .then(cache => cache.addAll(CACHE_URLS))
    .then(self.skipWaiting())
);

const onActivate = event => event.waitUntil(caches
  .keys()
  .then(findCachesToDelete)
  .then(deleteCaches)
  .then(() => self.clients.claim())
);

const onFetch = event => isSameOrigin(event)
  ? event.respondWith(caches.match(event.request).then(updateCacheFromNetwork(event)))
  : null // TODO: Cache khajana API
  ;

self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
self.addEventListener('install', onInstall);