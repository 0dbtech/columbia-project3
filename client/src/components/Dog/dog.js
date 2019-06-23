import React from 'react';
import { Card, Button } from 'react-bootstrap';
function DogComponent() {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555378804/shape/mentalfloss/istock_000009655750_small.jpg" />
  <Card.Body>
    <Card.Title>Tala</Card.Title>
    <Card.Title>2 years old</Card.Title>
    <Card.Title>Golden retriver</Card.Title>
    <Button className="card-button" variant="primary">paw</Button>
  </Card.Body>
</Card>
    );
}

export default DogComponent;