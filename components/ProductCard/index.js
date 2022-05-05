import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"

import ProductImage from "../ProductImage"


const ProductCard = ({ name, brand, price }) => {
  return (
    <Card style={{ display: 'flex' }}>
      <Card.Img variant="top" src={`https://avatars.dicebear.com/api/jdenticon/${name}.svg`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <b>{brand}</b>
        </Card.Text>
        <span>{price} sek</span>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
