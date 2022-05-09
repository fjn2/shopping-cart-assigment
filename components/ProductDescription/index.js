import ProductDescriptionComponent from "./Component"
import useCart from "../../store/cart/hook"

const ProductDescription = (props) => {
  const { addItem } = useCart()
  
  const onItemAdd = (params) => {
    addItem(params)
  }

  return <ProductDescriptionComponent {...props} onItemAdd={onItemAdd} />
}

export default ProductDescription
