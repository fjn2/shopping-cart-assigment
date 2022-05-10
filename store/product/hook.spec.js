import { act, renderHook } from '@testing-library/react-hooks'
import useProducts from './hook';
import { getAll } from "../../api/product"

jest.mock('../../api/product', () => {
  return {
    getAll: jest.fn(),
    getById: jest.fn()
  }
})

describe('Product hook', () => {
  it('Should retrieve the products from the initial state', () => {
    // given
    const initialState = {
      initialProducts: [{
        id: 1,
        name: 'Product 1'
      }]
    }

    // when
    const { result: { current: { products }}} =  renderHook(() => useProducts(initialState))
    
    // then
    expect(products).toBe(initialState.initialProducts)
  })

  it('Should get the next product page', async () => {
    // given
    const initialState = {
      search: 'string to search', 
      initialProducts: [{
        id: 1,
        name: 'Product 1'
      }]
    }
    getAll.mockImplementation(() => ({ data: [{
      id: 2,
      name: 'Product 2'
    }, {
      id: 3,
      name: 'Product 3'
    }]}))

    // when
    const { result} =  renderHook(() => useProducts(initialState))
    const { current: { getNextPage }} = result
    await act(() => getNextPage())
    
    // then
    const { current: { products }} = result
    expect(getAll).toHaveBeenCalledWith({name: "string to search"}, {count: 3, offset: 1})
    expect(products).toEqual([{id: 1, name: "Product 1"}, {id: 2, name: "Product 2"}, {id: 3, name: "Product 3"}])
  })
})