var CACHE_NAME = 'Mario Making Mods';
var urlsToCache = [
'/',
'/css/common.css',
'/js/tricks.js',
'/js/jscolor.js'
];

self.addEventListener(
    'install', function (event) {
        // Perform install steps
        event.waitUntil(
            caches.open(CACHE_NAME)
            .then(
                function (cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                }
            )
        );
    }
);
