import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
import RealDataBase from "../RealDataBase";
let shelterZipCodeArray = [];
class Home extends React.Component {
  
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = {
      sheltersZipCodes:[]
    };
  }

  componentDidMount() {
    fetch('api/dogsT')
    .then(response => response.json())
    .then(data => this.setState({ data }));
    fetch('api/dogsT')
    .then(response => response.json())
    .then(data => console.log(data));

    fetch('api/all')
    .then(response => response.json())
    .then(data => this.setState({ data }));
    fetch('api/all')
    .then(response => response.json())
    .then(data => console.log(data));
    
  };


  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent suggestions={shelterZipCodeArray} ></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;