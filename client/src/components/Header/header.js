import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class HeaderComponent extends React.Component {
    render() { 
        return (
            <div>
                <div className="header-box">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <p className="logo"><i className="fas fa-paw"></i><a href="#">Buddy</a></p>
                            </Col>
                            <Col xs={6} md={4} className="myUser">
                                <a href="#">Signin</a>/<a href="#">Signup</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;