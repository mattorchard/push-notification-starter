import firebase, {enableTokenSyncing} from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const user = result.user;
    console.log("Sign in success");
    enableTokenSyncing(user.uid);
  } catch(error) {
    const {code, message} = error;
    console.log("Error signing in", code, message);
  }
};
