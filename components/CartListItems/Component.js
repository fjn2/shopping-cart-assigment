import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ProductImage from "../ProductImage"
import getAvailableQuantity from "../../utils/getAvailableQuantity"

const CartListItemsComponent = ({
  cart,
  products,
  onItemRemove,
  onItemQuantityChange
}) => {
  return (
    <div style={{ textAlign: 'left' }}>
      {Object.keys(cart).map((cartKey) => {
        const cartItem = cart[cartKey]

        const product = products.find(product => product.id === cartItem.id) || {}
        const availableQuantity = getAvailableQuantity(product.options, cartItem.itemOptions)

        return (
          <Row key={cartKey}>
            <Col className="d-none d-md-block">
              <ProductImage available name={`${cartItem.name}_${cartItem.price}`} />
            </Col>
            <Col>
              <a href={`details/${cartItem.id}`}>
                {cartItem.name} <span className="d-none d-md-block">- {cartItem.brand}</span>
              </a>
            </Col>
            <Col>
              {cartItem.price} sek
            </Col>
            <Col className="d-none d-md-block">
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
              <InputGroup>
                <FormControl
                  type="number"
                  aria-label="Quantity"
                  min={1}
                  max={availableQuantity}
                  value={cartItem.quantity}
                  onChange={(e) => {
                    onItemQuantityChange({
                      ...cartItem,
                      quantity: e.target.value
                    })
                  }}
                  isInvalid={cartItem.quantity > availableQuantity}
                />
                <Form.Control.Feedback type="invalid">
                  max {availableQuantity} items
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
            <Col style={{flex: '0 0 90px'}}>
              <Button variant="danger" style={{ margin: '0 4px' }} onClick={() => onItemRemove(cartKey)}>Remove</Button>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}
export default CartListItemsComponent