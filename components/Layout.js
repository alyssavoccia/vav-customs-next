import MainNav from "./MainNav";
import layout from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <MainNav /> {/* FINISH NAV */}
      <main className={layout.mainContainer}>
        {children}
      </main>
    </>
  )
}

export default Layout;