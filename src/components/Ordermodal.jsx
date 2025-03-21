import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Ordermodal(props) {
  return (
    <>
         <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='bg-danger text-light' closeButton>
          <Modal.Title >
         Custimize your Meal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="mb-3">
              <label htmlFor="size" className="form-check-label">Choose your size:</label>
              <input className="form-check-input" type="radio" name="size" id="radio1" />  <label htmlFor="radio2">Large</label>
              <input className="form-check-input" type="radio" name="size" id="radio2" /><label htmlFor="radio2">Medium</label>
              </div>
              <div className="mb-3">
            <label htmlFor="size" className="form-check-label">Select your favourite side item</label>
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
              {/* <option selected>normal Fries</option> */}
              <option value="1">Spicy french fries</option>
              <option value="2">Coleslaw Salad</option>
              <option value="3">Spicy Mayonnaise</option>
            </select>
            </div>
            <div className="mb-3">
            <label htmlFor="size" className="form-check-label">Select your favourite beverage</label>
            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
               <option selected>Pepsi Can</option> 
              <option value="1">Mirinda Can</option>
              <option value="2">7Up Can</option>
              <option value="3">Mojito</option>
              <option value="3">Diet Pepsi Can</option>
            </select>
            </div>
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant='danger'>Add To Cart</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Ordermodal