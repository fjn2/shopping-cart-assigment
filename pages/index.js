import Head from 'next/head'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProductCard from '../components/ProductCard'
import { getAll } from '../api/product'
import useProducts from '../store/product/hook'

export async function getStaticProps({ params }) {
  const { data: firstPage, meta } = await getAll({ offset: 0, count: 3 })
  return {
    props: { products: firstPage, totalProducts: meta.total }
  }
}

export default function Home({ products: initialProducts, totalProducts }) {
  const { getNextPage, products, hasMore } = useProducts({ initialProducts, totalProducts })
  return (
    <div className="container">
      <Head>
        <title>Product Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Product Catalog project
        </h1>

        <p className="description">
          Select the items that you are interested on add to your basket
        </p>
        <p>
          Showing {products.length} out of {totalProducts} products
        </p>
        
        <Row>
          {products.map(product => {
            return <Col xs={12} md={6} lg={4} key={product.id} style={{ margin: '8px 0' }}><ProductCard {...product} /></Col>
          })}
        </Row>
        <hr />
        <Row>
          <Button disabled={!hasMore} onClick={() => getNextPage()}>Load More</Button>
        </Row>
      </main>
    </div>
  )
}
