import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HeaderComponent() {
    return (
        <div>
            <Container className="myuser">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
    <h1><i class="fas fa-paw"></i><a href="#">Buddy</a></h1>
    </Col>
    <Col xs={6} md={4}>
    <a href="#">Signin</a>/<a href="#">Signup</a>
    </Col>
  </Row>
  </Container>
  </div>
    );
}

export default HeaderComponent;


            
            {/* <div className="header-container">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <h1><i class="fas fa-paw"></i><a href="#">Buddy</a></h1>
                </div> */}
                {/* <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Please enter your address..." />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#CollapsNavbar">
                &#9776;</button>
                // <div class="collapse navbar-toggleable-xs" id="collapseHeader"> */}
                
                {/* <div className="col-sm-1 col-md-1 col-lg-1">
                    <div className="d-flex justify-content-around">
                        <a href="#">Signin</a>/<a href="#">Signup</a>
                    
                    </div> */}
                    {/* </div> */}
                {/* </div>
                </div>

            </div> */}
       