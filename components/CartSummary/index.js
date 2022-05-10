import Button from "react-bootstrap/Button"
import useCart from "../../store/cart/hook"
import CartSummaryComponent from "./Component"

const CartSummary = () => {
  const { cart } = useCart()
  
  const itemsCount = Object.keys(cart).length
  const totalAmount = Object.keys(cart).reduce((acc, itemKey) => ( acc + (+cart[itemKey].price) * cart[itemKey].quantity ), 0)

  return (
    <CartSummaryComponent itemsCount={itemsCount} totalAmount={totalAmount} />
  )
}

export default CartSummary
