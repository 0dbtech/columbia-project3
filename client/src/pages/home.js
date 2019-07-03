import React from 'react';
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import SearchComponent from "../components/Search/search";

class Home extends React.Component {
  //ToDo add constructor, state, component did mount and axios function to store shelters in state.

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