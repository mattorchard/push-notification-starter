console.log("Registering fetch handler");
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
  );
});

importScripts("https://www.gstatic.com/firebasejs/5.8.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.8.2/firebase-messaging.js");
const config = {
  apiKey: "AIzaSyC26SGXhWfq7xG0stEDiShb5uttLExx6h8",
  authDomain: "matts-push-starter.firebaseapp.com",
  databaseURL: "https://matts-push-starter.firebaseio.com",
  projectId: "matts-push-starter",
  storageBucket: "matts-push-starter.appspot.com",
  messagingSenderId: "390575520005"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const {title, ...options} = payload;
  return self.registration.showNotification(title, options);
});