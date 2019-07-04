import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
import autocomplete from '../components/autocomplete';
import Autocomplete from '../components/autocomplete';
class Home extends React.Component {
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = { 
      shelters: [],
      sheltersZipCodes: []
    };
  }

  componentDidMount() {
    const shelterZipCodeArray=[];
    axios.get('http://localhost:8000/api/all').then(res => {
      console.log(res);
      this.setState({shelters:res.data.shelter_res});
      console.log(this.state.shelters)
      for (var i = 0; i < res.data.shelter_res.length; i ++) {
        shelterZipCodeArray.push( res.data.shelter_res[i].ZIPCODE);
        console.log(shelterZipCodeArray);
      }
      console.log(shelterZipCodeArray);
      this.setState({sheltersZipCodes:shelterZipCodeArray});
    });
  }

  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent suggestions={this.state.sheltersZipCodes} ></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;