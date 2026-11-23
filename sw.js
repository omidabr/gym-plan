// Offline support with instant updates: always try the network first (so a new version shows up
// right away), and fall back to the copy saved on the phone when offline or the signal is weak.
const CACHE = 'gym-plan-v4';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(u => new Request(u, {cache: 'reload'})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const net = fetch(e.request, {cache: 'no-cache'}).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return res; });
  const wait = new Promise((_, no) => setTimeout(no, 3000));
  e.respondWith(Promise.race([net, wait]).catch(() => caches.match(e.request, {ignoreSearch: true}).then(hit => hit || net)));
});
