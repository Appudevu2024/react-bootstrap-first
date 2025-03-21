import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ordermodal from './Ordermodal';
import { useState } from 'react';

function Cards({ title, description, price, button, image }) {

  const [modalShow, setModalShow] = useState(false);
  return (

    <Card style={{ height: "400px", margin: "15px" }} >
      <Card.Header className='text-center'>{title}</Card.Header>
      <Card.Img variant="top" src={image} style={{
        width: "100%",
        height: "200px", objectFit: "cover"
      }} />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <div className="text-center">
          <Button variant="danger" onClick={() => setModalShow(true)}>{button}</Button>
          <Ordermodal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;