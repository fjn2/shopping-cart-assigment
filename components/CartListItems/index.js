import useCart from "../../store/cart/hook"
import CartListItemsComponent from "./Component"

const CartListItems = () => {
  const { cart, removeItem } = useCart()

  const onItemRemove = (key) => {
    removeItem(key)
  }

  return <CartListItemsComponent cart={cart} onItemRemove={onItemRemove} />
}
export default CartListItems