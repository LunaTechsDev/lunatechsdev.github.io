if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"6d82f94762d326f02ad59b897ea3e247"},{url:"article/index.html",revision:"58f53e1c10ef8056f1dc9da7f0fa4670"},{url:"assets/css/0.styles.ae87de93.css",revision:"639fcbb27279e6d9c84390e2995669cd"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/13.0ecdbb65.js",revision:"87d2d9bd61ba462352869daac375a203"},{url:"assets/js/14.6831cba8.js",revision:"91d916bfd37e7409ac59b0c7f4b50cc7"},{url:"assets/js/app.fe17ba77.js",revision:"38dea24d16414453e3968820ba8e9a7a"},{url:"assets/js/layout-Blog.3fbf483e.js",revision:"5ecea2124846bf3db93807a12af425d9"},{url:"assets/js/layout-Layout.2d6a1710.js",revision:"8f6a0b0820b9acdbe0ad5a171e3eb54a"},{url:"assets/js/layout-NotFound.9c1621a5.js",revision:"fd7938faa3881ee34e91e3b25025cec7"},{url:"assets/js/page-FAQ--54e5ae6a.f248f6f0.js",revision:"5626394d1fbe71a67b12e8f3a9084ca6"},{url:"assets/js/page-Home--956dd9f8.ddc2c103.js",revision:"6f9351f1693cf2fbe520d70b67a294da"},{url:"assets/js/page-Plugins--00d976e4.49c89cbc.js",revision:"8425eaa16ed968777e68550c72b2b58b"},{url:"assets/js/page-ReportaBug--716ad601.197b7aec.js",revision:"329fb80723069478fc356605e51172fd"},{url:"assets/js/page-TermsofUse--71bfa06e.07edc2a5.js",revision:"dd4b0f666a4198cae62b1a8e66335112"},{url:"assets/js/vendors~layout-Blog~layout-Layout.13ba3d17.js",revision:"20910d8ee6fd3ff974ba72020e51ee1d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.c6fa2237.js",revision:"ebcab9fb508253527a5855b8302ffac2"},{url:"assets/js/vendors~layout-Layout.0ced6e83.js",revision:"b7969d88ed6b066011ab592220cbd526"},{url:"category/index.html",revision:"4987dc8da3079649784161d4db885bd5"},{url:"faq/index.html",revision:"7f0758d1a80fa3c074ee4d7e9c9231e6"},{url:"index.html",revision:"84e875992335a498433291e882ef6ddb"},{url:"logo.png",revision:"9f667b3132a2847b97d718112f9f78fc"},{url:"LunaLiteDoc.png",revision:"c0cac8fee16e959a4de0cd0528c1cde3"},{url:"LunaSense.png",revision:"58a6806910caf92c4c25ef6045edb5f5"},{url:"LunaTea.png",revision:"ec9748bfdbaf83f7ed0ec588fd8d3e3a"},{url:"plugins/index.html",revision:"d5bccd2f778e53429cbcd51f61ff686e"},{url:"report-bug/index.html",revision:"d7b0e1768b8dddade376a1606ae954c9"},{url:"tag/index.html",revision:"a6ab7638e468285de921d1a5b9e7ba28"},{url:"terms-of-use/index.html",revision:"25e4bc4d786c0b1db36841eace354b46"},{url:"timeline/index.html",revision:"ad5568d277e3cb2a02ea60fbd790b08d"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});