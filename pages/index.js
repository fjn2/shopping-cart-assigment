import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProductCard from '../components/ProductCard'
import { getAll } from '../api/product'
import useProducts from '../store/product/hook'

export async function getStaticProps({ params }) {
  const products = await getAll()
  const firstPage = products.slice(0, 3)
  return {
    props: { products: firstPage }
  }
}

export default function Home({ products }) {
  const { getNextPage } = useProducts({ initialProducts: products })
  return (
    <div className="container">
      <Head>
        <title>Product Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Product Catalog - assigment project
        </h1>

        <p className="description">
          Select the items that you are interested on add to your basket
        </p>

        <Row>
          {products.map(product => {
            return <Col xs={12} md={6} lg={4}><ProductCard {...product} /></Col>
          })}
        </Row>
        <hr />
        <Row>
          <Button onClick={() => getNextPage()}>Load More</Button>
        </Row>
      </main>
    </div>
  )
}
