if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return i[e]||(n=new Promise((async n=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},n=(n,i)=>{Promise.all(n.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(n)};self.define=(n,a,s)=>{i[n]||(i[n]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+n.slice(1)};return Promise.all(a.map((n=>{switch(n){case"exports":return i;case"module":return c;default:return e(n)}}))).then((e=>{const n=s(...e);return i.default||(i.default=n),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BipdNhLEJ-UluWjKTC2uL/_buildManifest.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/BipdNhLEJ-UluWjKTC2uL/_ssgManifest.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/3ef630e34cd10ba68f9d468ac363ff81c534e1e9.9782e38b031b5aec490c.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/aa339697.81d3755a1df95fed9f2f.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/framework.900ff9a55f86e5377e8c.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/main-0faf1c88e54e4f465a3b.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/pages/_app-562d0e7f58d99af4ecf3.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/pages/_error-aee330b8de65b9d6b1c7.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/pages/home-7d8f322aeef221641cdf.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/pages/index-5159d9da5661261f828b.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/css/0ed98e23b75ff708b681.css",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/css/381f5b9c92d1673af027.css",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/_next/static/css/abebb99a00b1e5347780.css",revision:"BipdNhLEJ-UluWjKTC2uL"},{url:"/android-icon-144x144.png",revision:"ccbfd7860f59ffe0ab9176cac69642dd"},{url:"/android-icon-192x192.png",revision:"9ac13c8d529591af7b518426d3c265e8"},{url:"/android-icon-36x36.png",revision:"8a5600288b1f3c35e7078dc1ce5ff0c0"},{url:"/android-icon-48x48.png",revision:"79d435f948eb346e141019e08d9569fc"},{url:"/android-icon-72x72.png",revision:"d0d7e7e8098228a143a2663c86d17066"},{url:"/android-icon-96x96.png",revision:"97ab00a9c1cfcb6a96527bbe232843ae"},{url:"/apple-icon-114x114.png",revision:"ce17786a1d9c3ee3b697fff6da3d27b8"},{url:"/apple-icon-120x120.png",revision:"bceb24f715036a22918d188c8d1a4fcb"},{url:"/apple-icon-144x144.png",revision:"ccbfd7860f59ffe0ab9176cac69642dd"},{url:"/apple-icon-152x152.png",revision:"21b8c99e3f632aec4a7ff81cae15507a"},{url:"/apple-icon-180x180.png",revision:"fd7ed87b36b68516de4a15f8c7f0dca6"},{url:"/apple-icon-57x57.png",revision:"47a8cbf9a2de64642e476f209001bf66"},{url:"/apple-icon-60x60.png",revision:"99389847a3d5dcf2d9a6bc78ea5ef3b3"},{url:"/apple-icon-72x72.png",revision:"d0d7e7e8098228a143a2663c86d17066"},{url:"/apple-icon-76x76.png",revision:"7945ac4958ab278ac97ccb147d7586ae"},{url:"/apple-icon-precomposed.png",revision:"1536ca12f37b66139746836cb32cc08b"},{url:"/apple-icon.png",revision:"1536ca12f37b66139746836cb32cc08b"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"ba0166d5121acc4bd78bc37114f13dc8"},{url:"/favicon-32x32.png",revision:"17572f6a9edc00d52baceab49eeaf26b"},{url:"/favicon-96x96.png",revision:"97ab00a9c1cfcb6a96527bbe232843ae"},{url:"/favicon.ico",revision:"c4ba2538bb42dfa4aac8cd03cb74f2af"},{url:"/icons/icon-192x192.png",revision:"ef878bda9d555429b5d8f568d4c72a59"},{url:"/icons/icon-256x256.png",revision:"86aa2817f77fd99ba14c44de28390755"},{url:"/icons/icon-384x384.png",revision:"7e983ea975954a928c7a53851dbbcdab"},{url:"/icons/icon-512x512.png",revision:"67b89fe68118f610027b41845d65b622"},{url:"/logo.png",revision:"1da378403a83f438096cbdccbae4d224"},{url:"/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/ms-icon-144x144.png",revision:"ccbfd7860f59ffe0ab9176cac69642dd"},{url:"/ms-icon-150x150.png",revision:"91fa827f0166418a495155d0b25ba841"},{url:"/ms-icon-310x310.png",revision:"1ee767a34bc84a94ee43079d1679bfce"},{url:"/ms-icon-70x70.png",revision:"95bfb93d95509b79be3c46746f6cf39d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
