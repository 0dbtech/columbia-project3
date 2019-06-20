import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchComponent from "./components/Search";

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
        <SearchComponent></SearchComponent>
      </div>
    );
  }
}

export default App;
