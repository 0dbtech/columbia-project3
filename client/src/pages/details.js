import React from 'react';
import HeaderComponent  from "../components/Header/header";
import FooterComponent  from "../components/Footer/footer";
import DetailsComponent from "../components/Details/details";
//import Map from "../components/GoogleMap/map";
import { Container, Col, Row } from 'react-bootstrap';
import VideoComponent from "../components/Video/video";
import DateTimeForm from '../components/Calendar/calendar';

class Details extends React.Component {
  
  render() {
    return (
      <div className="dog-page">
        <div className="myHeader">
         <HeaderComponent></HeaderComponent>
        </div>
        <Container>
          <Row>
            <Col>
              <DetailsComponent></DetailsComponent>
            </Col>
            <Col>
              {/* <Map></Map> */}
              <VideoComponent></VideoComponent>
            </Col>
          </Row>
          <Row className="calendar-container">
            <DateTimeForm></DateTimeForm>
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