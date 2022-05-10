import Card from "react-bootstrap/Card"

const ProductCard = ({ id, name, brand, price, available }) => {
  return (
    <a href={`details/${id}`} style={{ color: 'inherit', textDecoration: 'none'}}>
      <Card style={{ display: 'flex'}}>
        <Card.Img style={{ filter: `grayscale(${available ? 0 : 1})` }} variant="top" src={`https://avatars.dicebear.com/api/jdenticon/${name}_${price}.svg`} />
        <Card.Body>
          <Card.Title>{available ? '' : '[X] '}{name}</Card.Title>
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
