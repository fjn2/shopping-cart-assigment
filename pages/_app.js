import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import NavigationBar from '../components/NavigationBar'
import { CartContext } from '../store/cart/hook'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Product Catalog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartContext>
        <SSRProvider>
          <NavigationBar />
          <Component {...pageProps} />
        </SSRProvider>
      </CartContext>
    </>
  )
}