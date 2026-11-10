/* Zhongwenfy service worker: caches the app shell so it installs and opens like an app. Audio is always streamed. */
const V='zwf-v3',SHELL=['./','index.html','config.js','manifest.webmanifest','packages/manifest.js','packages/p1/exam.js','packages/p2/exam.js','packages/h1p1/exam.js','packages/h2p1/exam.js','packages/h4p1/exam.js','packages/h5p1/exam.js','packages/h6p1/exam.js','icons/icon-192.png','icons/icon-512.png','icons/favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin||/\.mp3$/.test(u.pathname)||r.headers.has('range'))return;
  e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
});
