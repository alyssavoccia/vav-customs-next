import MainNav from "./MainNav";
import layout from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <div className={layout.mainContainer}>
        {children}
      </div>
    </>
  )
}

export default Layout;