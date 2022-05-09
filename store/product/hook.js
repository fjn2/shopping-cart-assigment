import { useState } from "react"
import { getAll } from "../../api/product"

const PAGE_SIZE = 3

const useProducts = (initialState) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState(initialState.initialProducts)

  const getNextPage = async() => {
    if (!loading) {
      setLoading(true)
      const { data: newItems } = await getAll({ offset: products.length, count: PAGE_SIZE})
      setProducts([...products, ...newItems])
      setLoading(false)
    }
  }

  return {
    products,
    hasMore: products.length < initialState.totalProducts,
    getNextPage
  }
}

export default useProducts
