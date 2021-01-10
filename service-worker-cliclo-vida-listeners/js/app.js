if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
    .then(register => {
      // setTimeout(() => {
      //   register.sync.register('post-gatito');
      //   console.log('Send gatitos to the server');
      // }, 5000);

      Notification.requestPermission().then(result => {
        console.log(result);
        register.showNotification('Holaaa');
      });
    });
}

// fetch('https://reqres.in/api/users')
//   .then(resp => resp.text())
//   .then(console.log);
