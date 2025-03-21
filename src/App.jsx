import React, { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Modal from 'react-bootstrap/Modal';
import Modals from './components/Modals'

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Cruncher Epic Meal",
      description: "Cruncher + Fries + Drink.",
      price:"1.500 BHD",
      button: "ORDER NOW",
      image: "images/Epicmeal.png"
    },
    {
      id: 2,
      title: "Strips Epic Meal",
      description: "3 Strips + Fries + Drink.",
      price:"1.500 BHD",
      button: "ORDER NOW",
      image: "images/stripsmeal.png"
    },
    {
      id: 3,
      title: "Double Burger Combo",
      description:"2 Burger + Fries + Drink",
      price:"2.700 BHD",
      button: "ORDER NOW",
      image: "images/Burger-Combo.png"
    },
    {
      id: 4,
      title: "Mega Deal",
      description:"12 pcs Chicken + 4 Buns.",
      price:"5.400 BHD",
      button: "ORDER NOW",
      image: "images/mega-deal.png"
    },
    {
      id: 5,
      title: "Rizo Epic Meal",
      description: "Rizo + 1 Strip + Drink.",
      price:"1.500 BHD",
      button: "ORDER NOW",
      image: "images/Rizoepicmeal.png"
    },
    {
      id: 6,
      title: "Snack Epic Meal",
      description: "2 COB + Fries + Drink.",
      price:"1.500 BHD",
      button: "ORDER NOW",
      image: "images/Snack Epic Meal.png"
    },
  ])
  console.log(products);
  


  return (
    <div>
      <Header/>
      <Container className="bg-danger-subtle">
        <Row className="g-2">
          {products.map((product,index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} >
              <Cards {...product} />
            </Col>
          ))}
        </Row>
      </Container> 
        <Footer/>
    </div>
  );
}

export default App