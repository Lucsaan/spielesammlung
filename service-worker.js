// Service Worker für Mamas Spieleseite
// Version 1.0 - Einfache Offline-Funktionalität

const CACHE_NAME = 'spieleseite-v1';
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

// Fetch - Cache-First-Strategie für die HTML-Seite, Network-First für externe Links
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Nur eigene Dateien cachen, externe Spieleseiten nicht
  if (url.origin !== location.origin) {
    // Externe Links (Spieleseiten) immer aus dem Netzwerk laden
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[Service Worker] Aus Cache geladen:', event.request.url);
          return cachedResponse;
        }
        
        console.log('[Service Worker] Aus Netzwerk geladen:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Antwort klonen, da sie nur einmal verwendet werden kann
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
      })
      .catch(() => {
        console.log('[Service Worker] Offline - Datei nicht verfügbar:', event.request.url);
        // Hier könnte eine Offline-Fallback-Seite zurückgegeben werden
      })
  );
});
