import React from "react";
import  SheltersMapContainer from "./SheltersMapContainer";
//import StethoscopeIcon from "../stethoscopeIcon.png";

export default class Map extends React.Component {
  shelters = [
    {
      location: { lat: 40.785940, lng: -73.977480 },
      uid: 0,
      title: "Westside Veterinary Center"
    },
    {
      location: { lat: 40.811008, lng: -73.954314 },
      uid: 1,
      title: "Gods Angels"
    },
    {
      location: { lat: 40.808714, lng: -73.965500 },
      uid: 2,
      title: "High Paws"
    },
    {
      location: { lat: 40.810628, lng: -73.960192 },
      uid: 3,
      title: "Animal rescue"
    },
    {
      location: { lat: 40.807659, lng: -73.963095 },
      uid: 4,
      title: "Dog Lovers"
    },
    {
      location: { lat: 40.803810, lng: -73.957938 },
      uid: 5,
      title: "Dogs Shelter 123"
    },
    {
      location: { lat: 40.806409, lng: -73.956038 },
      uid: 6,
      title: "Animal Saviors"
    }
  ];

  render(){
    return(
      <SheltersMapContainer shelters={this.shelters}></SheltersMapContainer>
    );
  }
}