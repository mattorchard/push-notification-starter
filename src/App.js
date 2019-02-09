import React, {Component} from 'react';
import './App.css';
import SignIn from "./components/SignIn";
import AddToHomeScreen from "./components/AddToHomeScreen";
import Messages from "./components/Messages";

class App extends Component {
  render() {
    return <>
      <header className="banner">
        <h1 className="site-header">Push Notification Starter</h1>
      </header>
      <main className="main-content">
        <SignIn/>
      </main>
    </>
  }
}

export default App;
