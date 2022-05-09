import { useState, useEffect, createContext, useContext } from 'react'
import useLocalStorage from '../../utils/useLocalStorage'

export const StoreContext = createContext({})

/**
 * Create a key to identify the item in the cart
 * @param {object} params contains: id, name, price, itemOptions 
 * @returns an unique key for a cart item
 */
const getCartItemKey = (params) => {
  return JSON.stringify(params)
}

export const CartContext = ({
  children
}) => {
  // if is SSR do nothing
  if (typeof window === 'undefined') {
    return (
      <StoreContext.Provider
      value={{
        cart: {}
      }}
    >
      {children}
    </StoreContext.Provider>
    )
  }
  const [userCart, setUserCart] = useLocalStorage('userCart', {})

  const addItem = ({
    id,
    name,
    price,
    quantity,
    itemOptions
  }) => {
    const key = getCartItemKey({
      id,
      name,
      price,
      itemOptions
    })

    if (userCart[key]) {
      // the key already exists, join both values
      setUserCart({
        ...userCart,
        [key]: {
          id,
          name,
          price,
          quantity: quantity + userCart[key].quantity,
          itemOptions
        }
      })
    } else {
      // add new entry
      setUserCart({
        ...userCart,
        [key]: {
          id,
          name,
          price,
          quantity,
          itemOptions
        }
      })
    }
  }

  const removeItem = (key) => {
    delete userCart[key]
    setUserCart({ ...userCart })
  }

  const updateItem = ({
    id,
    name,
    price,
    quantity,
    itemOptions
  }) => {
    const key = getCartItemKey({
      id,
      name,
      price,
      itemOptions
    })
    
    setUserCart({
      ...userCart,
      [key]: {
        id,
        name,
        price,
        quantity,
        itemOptions
      }
    })
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <StoreContext.Provider
      value={{
        cart: userCart,
        addItem,
        updateItem,
        removeItem
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

const useCart = () => useContext(StoreContext)

export default useCart
