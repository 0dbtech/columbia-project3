import React, { Component } from "react";
import HeaderComponent from "./components/Header/header"
import DogComponent from "./components/Dog/dog"
import FooterComponent from "./components/Footer/footer"
import SearchComponent from "./components/Search/search"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        
        <div className="mySearch">
          <SearchComponent></SearchComponent>
        </div>

        <div className="myDog">
          <DogComponent></DogComponent>
        </div>
        
        <div>
        <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default App;
