import MainNav from "./MainNav";
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <MainNav /> {/* FINISH NAV */}
      <main className={styles.mainContainer}>
        {children}
      </main>
    </>
  )
}

export default Layout;