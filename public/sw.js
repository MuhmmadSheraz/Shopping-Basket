console.log("Registered");
// Cache Version
let version = "v2";

//Cache Files
let cacheFiles = [
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/",
  "/index.html",
];

// Install Service Woker
self.addEventListener("install", (e) => {
  console.log("Service Worker Installing...");
  self.skipWaiting();
  e.waitUntil(
    caches.open(version).then((cache) => {
      console.log("cacheFiles", cacheFiles);
      return cache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};
// Fetch Service Worker
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            console.log(response);
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});
