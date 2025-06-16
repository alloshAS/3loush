self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("3loush-cache").then(cache => {
      return cache.addAll([
        "/3loush/",
        "/3loush/index.html",
        "/3loush/pro.css",
        "/3loush/script.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});