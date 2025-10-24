'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "8d59c07554892dc68ad9b1be096ea489",
"icons/Icon-maskable-512.png": "8d59c07554892dc68ad9b1be096ea489",
"icons/Icon-192.png": "d46be4b519e450f4803af9df0eca08b0",
"icons/Icon-maskable-192.png": "d46be4b519e450f4803af9df0eca08b0",
"manifest.json": "5afff58a86846e929ccf40bcf35d579c",
"index.html": "7d20c7fe2e51af2f0f288034fd9de7ae",
"/": "7d20c7fe2e51af2f0f288034fd9de7ae",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "0f80a469467422c98e4822f7a592eb13",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25202_36PM.png": "eea2d473e2b21518efa83a7fcc94aead",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25203_29AM.png": "be75a95f8d57d419a74aa664ff9f6012",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%252011_33PM.png": "3a9dcf7892f7802489a14174ae878e19",
"assets/assets/images/placeholder_profile.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25202_30PM.png": "4c6b9fbf5c69f14ebe7eee0a2b5a564f",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25202_30PM%2520(1).png": "4c6b9fbf5c69f14ebe7eee0a2b5a564f",
"assets/assets/images/file.svg": "9edaa08fb72757c94c3866e14f637609",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25203_29AM%2520(1).png": "be75a95f8d57d419a74aa664ff9f6012",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%252011_27PM.png": "9dad6d90bc9d28f34871a360ea3c7ef3",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%252010_46PM%2520(1).png": "45e01f7bbcadc07084e7ae7603665bc7",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%252010_46PM.png": "45e01f7bbcadc07084e7ae7603665bc7",
"assets/assets/images/Generated_Image_October_21__2025_-_11_33PM-removebg-preview.svg": "7085384a45d932c96b08f940a0eefd86",
"assets/assets/images/Generated_Image_October_21__2025_-_11_33PM-removebg-preview.png": "b2dd9f8cc0570aef8f2dc16b1b37fa7c",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25203_11AM.png": "5b06d3c8484a5145c556931db21c6dc3",
"assets/assets/images/Generated%2520Image%2520October%252021,%25202025%2520-%25202_23PM.png": "a7586b2593f35c15ffaa3c56dab19a92",
"assets/fonts/MaterialIcons-Regular.otf": "8c16c5e5a606f61de256d5c028838d4f",
"assets/NOTICES": "15f88d295e61aafd2604b81fc3d56bb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "9a0c607fe76687e8e70518b4a71d440a",
"assets/AssetManifest.json": "6a86e7065fa8a0bdedab6a1ed7c11e08",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "bc66e43650c8b77c2de052ebd59a3565",
"flutter_bootstrap.js": "b7001411bff8a058f2aed78e3aabccc0",
"version.json": "57a5f29685316b97af6356d9fe76fbd3",
"main.dart.js": "ebbcda69e6766e3a531ede61d2a4f69a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
