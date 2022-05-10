import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductImage from '../../../components/ProductImage'
import ProductDescription from '../../../components/ProductDescription'
import { getAll as getAllProducts, getById as getByIdProducts } from '../../../api/product'

export async function getStaticPaths() {
  const { data: products } = await getAllProducts({})
  const paths = products.map(({ id }) => ({ params: { id: id + '' } } ))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const product = await getByIdProducts(params.id)
  return {
    props: { product }
  }
}

export default function Detail({ product }) {
  return (
    <Container style={{ maxWidth: '1000px' }}>
      <Row>
        <Col xs={12} md={3}><ProductImage name={`${product.name}_${product.price}`} available={product.available} /></Col>
        <Col xs={12} md={8}><ProductDescription {...product} /></Col>
      </Row>
    </Container>
  )
}