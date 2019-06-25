import React from 'react';
import HeaderComponent from "../components/Header/header"
import DogComponent from "../components/Dog/dog"
import FooterComponent from "../components/Footer/footer"
import SearchComponent from "../components/Search/search"
import { CardDeck } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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

export default FrontPage;