import React from "react";
import {signIn} from "../services/account-service";
import firebase from "../services/firebase";

export default class SignIn extends React.Component {
  state = {
    signedIn: true
  };

  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user =>
      this.setState({signedIn: Boolean(user)}));
  }


  render () {
    return  this.state.signedIn ? "" :
      <button type="button" onClick={() => signIn()}>
        Sign in with Google
      </button>
  }
};