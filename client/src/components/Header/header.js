import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HeaderComponent() {
    return (
        <div>
            <div className="header-box">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <h1><i className="fas fa-paw"></i><a href="#">Buddy</a></h1>
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

export default HeaderComponent;