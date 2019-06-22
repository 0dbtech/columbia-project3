import React, { Component } from "react";
import HeaderComponent from "./components/Header/header"
import MapComponent from "./components/Map/map"
import DogComponent from "./components/Dog/dog"
import CarouselComponent from "./components/Carousel/carousel"
import ShelterComponent from "./components/Shelter/shelter"
import FooterComponent from "./components/Footer/footer"
import SearchComponent from "./components/Search/search"
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <SearchComponent></SearchComponent>
        <MapComponent></MapComponent>
        <CarouselComponent></CarouselComponent>
        <DogComponent></DogComponent>
        <ShelterComponent></ShelterComponent>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default App;
