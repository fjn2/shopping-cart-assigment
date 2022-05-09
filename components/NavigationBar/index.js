import useCart from '../../store/cart/hook'
import NavigationBarComponent from './Component'

const NavigationBar = () => {
  const { cart } = useCart()

  return (
    <NavigationBarComponent cartItemsCount={Object.keys(cart).length} />
  )
}

export default NavigationBar