import MainNav from "./MainNav";
import Footer from "./Footer";
import Cart from "./shopify/Cart";
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {

  return (
    <>
      <MainNav />
      <main className={styles.mainContainer}>
        {children}
      </main>
      <Footer />
      <Cart />
    </>
  )
}

export default Layout;