import React, {Component} from 'react';
import './App.css';
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return <>
      <header className="banner">
        <h1 className="site-header">Howdy</h1>
      </header>
      <main className="main-content">
        <SignIn/>
      </main>
    </>
  }
}

export default App;
