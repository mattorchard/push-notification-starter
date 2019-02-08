import React from "react";
import {signIn} from "../services/account-service";
export default class SignIn extends React.Component {

  signInWithGoogle = async () => {
    return signIn();
  };

  render() {
    return <div>
      <button type="button" onClick={this.signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  }
}