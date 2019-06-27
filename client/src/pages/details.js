import React from 'react';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import DetailsComponent from "../components/Details/details";

class Details extends React.Component {
  render() {
    return (
      <div>
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <div className="myDogs">
          <DetailsComponent></DetailsComponent>
        </div>
        <div className="myFooter">
        <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Details;