import React from 'react'
import Modals from './Modals'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="bg-danger text-center p-3">
      <h1 className="text-light fw-bolder fst-italic pb-2">KFC</h1>
      <p className="text-light  pb-2">Items availability, prices, participation, delivery areas and charges, purchase
        requirements for delivery may vary.</p>
      <div className="wrapper pb-3" id="socialicons">
        <a href="#"><i className='fab fa-facebook' style={{ fontSize: "30px", color: 'white' }}></i></a>
        <a href="#"><i className='fab fa-instagram' style={{ fontSize: "30px", color: 'white' }}></i></a>
        <a href="#"><i className='fab fa-twitter' style={{ fontSize: "30px", color: 'white' }}></i></a>
      </div>
      <span className="text-light ">@ 2025 KFC Bahrain</span>
      <a className="text-light " href="https://www.kfccommunity.com/pp/privacypolicy.html" target="_blank">Privacy
        Policy</a>
      <span className="text-light ">|</span>
      <a className="text-light  my-4" href="https://www.kfccommunity.com/TC" target="_blank">Terms of service</a>
      <span className="text-light fs-4">|</span>
      <a className="text-light  my-4" href="#" onClick={() => setModalShow(true)}>
        Contact us
      </a>
      <Modals
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Footer