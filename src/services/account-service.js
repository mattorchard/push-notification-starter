import firebase from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = async () => {
  try {
    await firebase.auth().signInWithPopup(provider);
    console.log("Sign in success");
  } catch(error) {
    const {code, message} = error;
    console.log("Error signing in", code, message);
  }
};
