import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from "react";

const CartSummaryComponent = ({ itemsCount, totalAmount }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  if (!itemsCount) {
    return null
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <p>You are about to checkout <b>{itemsCount}</b> element for a total of <b>{totalAmount} sek</b></p>
        <Button onClick={() => setShow(true)}>Checkout</Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Checkout you cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is all for the demo!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default CartSummaryComponent
