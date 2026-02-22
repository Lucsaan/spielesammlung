// Service Worker für Mamas Spieleseite
// Version 1.2 - Network-First für automatische Updates

const CACHE_NAME = 'spieleseite-v1.2';
const ASSETS_TO_CACHE = [
  './spieleseite.html',
  './manifest.json'
];

// Installation - Dateien cachen
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation gestartet');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Dateien werden gecached');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[Service Worker] Installation abgeschlossen');
        return self.skipWaiting();
      })
  );
});

// Aktivierung - Alte Caches löschen
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Aktivierung gestartet');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Alter Cache wird gelöscht:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Aktivierung abgeschlossen');
        return self.clients.claim();
      })
  );
});

// Fetch - NETWORK-FIRST-Strategie: Versucht immer Updates zu laden, Cache nur als Fallback
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Nur eigene Dateien cachen, externe Spieleseiten nicht
  if (url.origin !== location.origin) {
    // Externe Links (Spieleseiten) immer aus dem Netzwerk laden
    return;
  }
  
  event.respondWith(
    // ERST vom Netzwerk versuchen (damit Updates sofort ankommen)
    fetch(event.request)
      .then((response) => {
        console.log('[Service Worker] ✅ Neu vom Server geladen:', event.request.url);
        
        // Antwort klonen und im Cache aktualisieren
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
            console.log('[Service Worker] 💾 Cache aktualisiert');
          });
        
        return response;
      })
      .catch(() => {
        // NUR wenn offline, aus dem Cache laden
        console.log('[Service Worker] ⚠️ Offline - versuche Cache:', event.request.url);
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[Service Worker] 📦 Aus Cache geladen (offline)');
              return cachedResponse;
            }
            console.log('[Service Worker] ❌ Nicht verfügbar (offline + nicht gecached)');
          });
      })
  );
});
