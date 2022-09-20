import { CartProvider } from '../context/cart/CartContext';
import { BlogProvider } from '../context/blog/BlogContext';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <BlogProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BlogProvider>
    </CartProvider>
  )
}

export default MyApp;