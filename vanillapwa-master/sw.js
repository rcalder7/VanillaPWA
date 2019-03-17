let CACHE_NAME = 'vanillajspwa';
let urlsToCache = [
	'index.html',
	'index.js',
	'icons/todoicon.png',
	'learn.json',
	'manifest.webmanifest',
	'js/app.js',
	'js/controller.js',
	'js/helpers.js',
	'js/model.js',
	'js/store.js',
	'js/template.js',
	'js/view.js',
	'test/ControllerSpec.js',
	'test/SpecRunner.html',
	'node_modules/todomvc-common/base.js',
	'node_modules/todomvc-common/base.css',
	'node_modules/todomvc-app-css/index.css'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				console.log('Opened cache');
				return cache.addAll(urlsToCache);
			}) 
	);
});


// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});
