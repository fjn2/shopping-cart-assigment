import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ProductImage from "../ProductImage"

const CartListItemsComponent = ({
  cart,
  onItemRemove,
}) => {
  return (
    <div>
      {Object.keys(cart).map((cartKey) => {
        const cartItem = cart[cartKey]
        return (
          <Row>
            <Col>
              <ProductImage  name={`${cartItem.name}_${cartItem.price}`} />
            </Col>
            <Col>
              {cartItem.name}
            </Col>
            <Col>
              {cartItem.brand}
            </Col>
            <Col>
              {cartItem.price} sek
            </Col>
            <Col>
              {Object.keys(cartItem.itemOptions).map((optionKey) => {
                return (
                  <div key={optionKey}>
                    <span style={{ textTransform: 'capitalize' }}>{optionKey}: </span>
                    <b>{cartItem.itemOptions[optionKey]}</b>
                  </div>
                )
              })}
            </Col>
            <Col>
              {cartItem.quantity}
            </Col>
            <Col>
              <Button onClick={() => onItemRemove(cartKey)}>Remove</Button>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}
export default CartListItemsComponent