// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendNotification = functions.firestore
.document('/objects/{objectId}')
.onUpdate(change => {

  const object = change.after.data();
  const {userId, title, body} = object;

  return admin.firestore()
  .collection("users")
  .doc(userId)
  .get()
  .then(userSnap => {
    const userData = userSnap.data();
    if (!userData) {
      throw new Error(`No user found for uid ${userId}`);
    }

    const token = userData.token;

    return {
      token,
      notification: {
        title,
        body
      },
      webpush: {
        fcm_options: {
          link: "https://matts-push-starter.firebaseapp.com"
        }
      }
    };
  }).then(message =>
    admin.messaging().send(message)
  ).then(response =>
    console.log('Successfully sent message:', response)
  )
});
