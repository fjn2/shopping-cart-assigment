import { mount } from 'enzyme';
import { useEffect } from 'react';
import useCart, { CartContext } from './hook';

describe('Cart hook', () => {
  it('Should initialize the cart correctly', () => {
    // given
    const TestConsumer = () => {
      const { cart } = useCart()
      return JSON.stringify(cart)
    }

    // when
    const elem = mount(<CartContext><TestConsumer /></CartContext>)
    
    // then
    expect(elem).toMatchSnapshot()
  })

  it('Should add items to the cart', () => {
    // given
    const testProduct = {
      id: 1,
      name: 'Test Name',
      price: 123,
      brand: 'Test brand',
      quantity: 2,
      itemOptions: [{ color: ['red'] }]
    }

    // when
    const TestConsumer = () => {
      const { addItem, cart } = useCart()
      useEffect(() => {
        addItem(testProduct)
      }, [])
      return JSON.stringify(cart)
    }
    const elem = mount(<CartContext><TestConsumer /></CartContext>)

    // then
    expect(elem).toMatchSnapshot()
  })

  it('Should remove an item from the cart correctly', () => {
    // given
    const testProduct = {
      id: 1,
      name: 'Test Name',
      price: 123,
      brand: 'Test brand',
      quantity: 2,
      itemOptions: [{ color: ['red'] }]
    }
    const TestConsumer = () => {
      const { cart, addItem, removeItem } = useCart()
      useEffect(() => {
        addItem(testProduct)
        removeItem(Object.keys(cart)[0])
      }, [])
      return JSON.stringify(cart)
    }

    const elem = mount(<CartContext><TestConsumer /></CartContext>)
    
    expect(elem).toMatchSnapshot()
  })

  it('Should update an item from the cart correctly', () => {
    // given
    const testProduct = {
      id: 1,
      name: 'Test Name',
      price: 123,
      brand: 'Test brand',
      quantity: 2,
      itemOptions: [{ color: ['red'] }]
    }
    const updatedProduct = {
      id: 1,
      name: 'Test Name',
      price: 123,
      brand: 'Test brand',
      quantity: 5, // <- new quantity
      itemOptions: [{ color: ['red'] }]
    }
    const TestConsumer = () => {
      const { cart, addItem, updateItem } = useCart()
      useEffect(() => {
        addItem(testProduct)
        updateItem(updatedProduct)
      }, [])
      return JSON.stringify(cart)
    }

    const elem = mount(<CartContext><TestConsumer /></CartContext>)
    
    expect(elem).toMatchSnapshot()
  })
})