self.addEventListener('install', evt => {
  // descarga de assets
  // creación de cache
  console.log('SW: SW install');

  const install = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('SW: Instalaciones terminadas');
      self.skipWaiting();
      resolve();
    }, 1);
  });

  evt.waitUntil(install);
});

self.addEventListener('activate', evt => {
  // borrar cache viejo
  console.log('SW: SW activate');
});

self.addEventListener('fetch', evt => {
  // aplicar estrategias del cache
  console.log('SW:', evt.request.url);

  // if (evt.request.url.includes('https://reqres.in')) {
  //   const response = new Response(`{ ok: false, message: 'PWA Learning' }`);
  //   evt.respondWith(response);
  // }
});

self.addEventListener('sync', evt => {
  console.log('Tenemos conexión');
  console.log(evt.tag)
});

self.addEventListener('push', evt => {
  console.log('Push notification');
});
