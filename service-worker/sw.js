self.addEventListener('fetch', evt => {
  // ============ MANIPULACIÓN DE CSS ============
  // if (evt.request.url.includes('style.css')) {
  //   const response = new Response(`
  //     body {
  //       background: lime;
  //       color: pink;
  //     }
  //   `, {
  //     headers: {
  //       'Content-Type': 'text/css'
  //     }
  //   });

  //   evt.respondWith(response);
  // }

  // ============ MANIPULACIÓN DE IMG ============
  // if (evt.request.url.includes('main.jpg')) {
  //   evt.respondWith(fetch('https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/04/Does-your-E-commerce-Need-Progressive-Web-Apps-to-develop.png?fit=1000%2C600&ssl=1'));
  // }

  // ============ MANEJO DE ERRORES ============
  // let url = 'https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/04/Does-your-E-commerce-Need-Progressive-Web-Apps-to-develop.png?fit=1000%2C600&ssl=1';

  // const response = fetch(evt.request).then(response => response.ok ? response : fetch(url));

  // evt.respondWith(response);
});
