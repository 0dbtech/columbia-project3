import React from 'react';
import { Card, Button } from 'react-bootstrap';

class DogComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <Card style={{ width: '18rem' }}>
        <Card.Img  className="dog-img" variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.name}
          </Card.Title>
          <Card.Title>{this.props.age} years old</Card.Title>
          <Card.Title>{this.props.breed}</Card.Title>
          <Button className="card-button" variant="primary">paw</Button>
        </Card.Body>
      </Card>
     
    );
  }
}

export default DogComponent;