import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";
import axios from "axios";
class Home extends React.Component {
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.
  constructor(props) {
    super(props);
    this.state = { 
      shelters: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/all').then(res => {
      console.log(res);
      this.setState({shelters:res.data.shelter_res});
      console.log(this.state.shelters)
    });
  }

  render() {
    return (
      <div className="home-page">
        <div className="myHeader">
          <HeaderComponent></HeaderComponent>
        </div>
        <div className="mySearch">
          <SearchComponent></SearchComponent>
        </div>
        <div className="myFooter">
          <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Home;