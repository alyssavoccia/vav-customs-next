import MainNav from "./MainNav";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <MainNav /> {/* FINISH NAV */}
      <main className={styles.mainContainer}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;