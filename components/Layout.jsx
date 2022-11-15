import { useRouter } from "next/router";
import MainNav from "./MainNav";
import AdminNavbar from './admin/AdminNavbar';
import Footer from "./Footer";
import Cart from "./shopify/Cart";
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {!router.pathname.includes('/admin') && <MainNav />}
      {router.pathname.includes('/admin/') && <AdminNavbar />}
      <main className={!router.pathname.includes('admin') ? styles.mainContainer : styles.adminContainer}>
        {children}
      </main>
      {!router.pathname.includes('/admin') && <Footer />}
      <Cart />
    </>
  )
}

export default Layout;