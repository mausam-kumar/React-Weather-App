const CACHE_NAME = "version-1"

const urlToCache = ['index.html','offline.html'];

// install serviceWorker
self.addEventListener('install',() => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache')

            return cache.addAll(urlToCache)
        })
    )
});


//listen to request
self.addEventListener('fetch',() => {
    
});

//Activate the serviceWorker
self.addEventListener('activate',() => {
    
});
