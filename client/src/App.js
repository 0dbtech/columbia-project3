import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchComponent from "./components/Search";
import FooterComponent from "./components/Footer";
import FirebaseForm from "./components/Firebase"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Paw Pal | Heroku Deployment Template</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>client/src/App.js</code> and save to reload.  
        </p>
        <h2>React Search component should be below this</h2>
        <FirebaseForm></FirebaseForm>

   
      </div>
    );
  }
}

export default App;
