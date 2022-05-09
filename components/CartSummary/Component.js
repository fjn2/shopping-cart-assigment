import Button from "react-bootstrap/Button"

const CartSummaryComponent = ({ itemsCount, totalAmount }) => {
  return (
    <div>
      <p>You are about to checkout {itemsCount} element for a total of {totalAmount} sek</p>
      <Button onClick={alert('Checkout complete! (for the demo=')}>Checkout</Button>
    </div>
  )
}

export default CartSummaryComponent
