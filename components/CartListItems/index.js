import { useEffect, useState } from "react"
import Toast from "react-bootstrap/Toast"
import ToastContainer from "react-bootstrap/ToastContainer"
import useCart from "../../store/cart/hook"
import useProducts from "../../store/product/hook"
import CartListItemsComponent from "./Component"

const CartListItems = () => {
  const { cart, removeItem, updateItem } = useCart()
  const { getById } = useProducts()
  const [cartProductData, setCartProductData] = useState([])
  
  const [toastMessage, setToastMessage] = useState('')
  

  const onItemRemove = (key) => {
    removeItem(key)
    setToastMessage('Item removed')
  }

  const onItemQuantityChange = ({
    id,
    name,
    price,
    brand,
    quantity,
    itemOptions
  }) =>{
    updateItem({
      id,
      name,
      price,
      brand,
      quantity,
      itemOptions
    })
  }

  useEffect(() => {
    if (cart) {
      const productPromises = Object.keys(cart).map(cartItemKey => getById(cart[cartItemKey].id))
      
      Promise.all(productPromises).then((resp) => {
        setCartProductData(resp)
      })
    }
  }, [cart])

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100 }}>
        <Toast onClose={() => setToastMessage(null)} show={!!toastMessage} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{toastMessage}</strong>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      {
        Object.keys(cart).length === 0 && (
          <div style={{ textAlign: 'center' }}>
            There are no items in your cart!
          </div>
        )
      }
      <CartListItemsComponent
        cart={cart}
        products={cartProductData}
        onItemRemove={onItemRemove}
        onItemQuantityChange={onItemQuantityChange}
      />
    </>
  )
}
export default CartListItems