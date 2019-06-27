import React from 'react';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import DetailsComponent from "../components/Details/details";
import Map from "../components/GoogleMap/map";
import { Container, Col, Row } from 'react-bootstrap';


class Details extends React.Component {
  render() {
    return (
      <div>
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <Container>
          <Row>
            <Col>
              <DetailsComponent></DetailsComponent>
            </Col>
            <Col>
              <Map></Map>
            </Col>
          </Row>
        </Container>
        <div className="myFooter">
        <FooterComponent></FooterComponent>
        </div>
      </div>
    );
  }
}

export default Details;