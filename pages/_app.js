import 'bootstrap/dist/css/bootstrap.min.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import NavigationBar from '../components/NavigationBar'
import { CartContext } from '../store/cart/hook'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CartContext>
      <SSRProvider>
        <NavigationBar />
        <Component {...pageProps} />
      </SSRProvider>
    </CartContext>
  )
}