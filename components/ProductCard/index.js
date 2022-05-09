import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"


const ProductCard = ({ id, name, brand, price }) => {
  return (
    <a href={`details/${id}`}>
      <Card style={{ display: 'flex'}}>
        <Card.Img variant="top" src={`https://avatars.dicebear.com/api/jdenticon/${name}_${price}.svg`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>{brand}</b>
          </Card.Text>
          <span>{price} sek</span>
        </Card.Body>
      </Card>
    </a>
  )
}

export default ProductCard
