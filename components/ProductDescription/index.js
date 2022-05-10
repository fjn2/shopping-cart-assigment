import Toast from "react-bootstrap/Toast"
import ToastContainer from "react-bootstrap/ToastContainer"
import ProductDescriptionComponent from "./Component"
import useCart from "../../store/cart/hook"
import { useState } from "react"

const ProductDescription = (props) => {
  const { addItem } = useCart()
  
  const [toastMessage, setToastMessage] = useState('')

  const onItemAdd = (params) => {
    addItem(params)
    setToastMessage('Item added to your cart!')
  }

  return (
    <>
      <ToastContainer position="top-center" style={{ zIndex: 100 }}>
        <Toast onClose={() => setToastMessage(null)} show={!!toastMessage} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{toastMessage}</strong>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <ProductDescriptionComponent {...props} onItemAdd={onItemAdd} />
    </>
  )
}

export default ProductDescription
