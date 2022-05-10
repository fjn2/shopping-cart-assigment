import CartListItems from "../components/CartListItems"
import CartSummary from "../components/CartSummary"

const Cart = () => {
  return (
    <div className="container">
      <h1 className="title">
        Your cart
      </h1>

      <CartListItems />
      <CartSummary />
    </div>
  )
}

export default Cart