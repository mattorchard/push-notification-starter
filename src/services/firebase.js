import firebase from "firebase";
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
messaging.usePublicVapidKey("BPPfLC_iRrFQQ789b_SYtbRPMfUkWYibidVFXi0BfMUHgK8HrqgBjArovgTIQzh7G9EM-xNzG7yQXHG8ekeigSA");


const updateNotificationToken = async (userId) => {
  const token = await messaging.getToken();
  console.log("New Token", token);
  return firebase.firestore()
  .collection("/users")
  .doc(userId)
  .set({token});
};

export const enableNotificationTokenSyncing = userId => {
  messaging.requestPermission()
  .then(() => {
    // Sync Initial token
    updateNotificationToken(userId);
    // Sync again whenever modified
    messaging.onTokenRefresh(() => updateNotificationToken(userId));
  }).catch(error =>
    console.error("Error while getting permission to show notifications", error)
  );
};

navigator.serviceWorker.register('sw.js')
.then(registration => {
  messaging.useServiceWorker(registration);
  // Once service worker is registered listen to auth changes
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      enableNotificationTokenSyncing(user.uid);
    }
  });


});


export default firebase;
