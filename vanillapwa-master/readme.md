<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="http://todomvc.com/examples/vanilla-es6/">
    <img alt="VanillaJs" src="https://icons-for-free.com/free-icons/png/512/1886538.png" width="150" />
  </a>
</p>
<h1 align="center">
  ToDoMVC VanillaJS PWA Support Documentation
</h1>
<h3> App can be accessed and installed from: https://markprisacaru.github.io/projects/vanillajspwa/
 </h3>


## 🚁 Guide

1.  **Create learn.json in VanillaJSPWA ToDoMVC App.**

    Follow this link `https://github.com/markprisacaru/markprisacaru.github.io/blob/master/projects/vanillajspwa/learn.json`

2.  **Create manifest.webmanifest file**

    ```
      {
      "short_name": "vanjspwa2DO",
      "name": "Vanillajs To Do App as PWA",
      "icons": [
      {
        "src": "/projects/vanillajspwa/icons/todoicon.png",
        "type": "image/png",
        "sizes": "512x512"
      }
      ],
      "start_url": "/projects/vanillajspwa/",
      "background_color": "#3367D6",
      "display": "standalone",
      "scope": "/projects/vanillajspwa/",
      "theme_color": "#3367D6"
      }
    ```
    Make sure to chane the src links above to match your directory.

3.  **Update base.jsto get learn.json file**

    ```
    getFile('/projects/vanillajspwa/learn.json', Learn);
    ```
    
4.  **Create sw.js (service worker)**
    ```
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
          ```
      5.  **Update index.html to get service worke and manifest file**

          Add the following lines of code:
          ```
          <link rel="manifest" href="manifest.webmanifest">
          ```
          The following script will go inside body:
          ```
          <script>
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                navigator.serviceWorker.register('./sw.js').then(function(registration) {
                //Registration was successful
                console.log('ServiceWorker registaion succeeded')
              }, function(err) {
                //registration failed :(
                console.log('ServiceWorker regisration failed')
              });
            });
            }
            </script>
     ```
6.  **Create icons folder to add icons**

7.  **Access your github Pages and check if you can install the app**



<!-- AUTO-GENERATED-CONTENT:END -->
