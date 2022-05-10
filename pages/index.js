import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ProductCard from '../components/ProductCard'
import { getAll } from '../api/product'
import useProducts from '../store/product/hook'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { useCallback, useEffect } from 'react'
import { debounce } from '../utils/debounce'

export async function getServerSideProps({ query }) {
  const { data: firstPage, meta } = await getAll({ name: query.q }, { offset: 0, count: 3 })
  return {
    props: { products: firstPage, totalProducts: meta.total }
  }
}

const getSearchFromQueryParams = () => {
  if (typeof window === 'undefined') {
    return ''
  }
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params.q
}

export default function Home({ products: initialProducts, totalProducts }) {
  const search = getSearchFromQueryParams()

  const { getNextPage, products, hasMore } = useProducts({ initialProducts, totalProducts, search })
  
  const debounceSearch = useCallback(
    debounce(event => {
      if (event.target.value !== search) {
        window.location.href = `?q=${event.target.value}`
      }
    }, 700),
    [],
  )
  
  useEffect(() => {
    const searchElement = document.querySelector('#search-input')
    searchElement.focus()
    searchElement.setSelectionRange(searchElement.value.length, searchElement.value.length);
  }, [])

  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to Product Catalog project
        </h1>

        <p className="description">
          Select the items that you are interested on add to your basket
        </p>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          <FormControl
            placeholder="Write something to search"
            aria-label="Search"
            defaultValue={search}
            onKeyUp={debounceSearch}
            id="search-input"
          />
        </InputGroup>

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
