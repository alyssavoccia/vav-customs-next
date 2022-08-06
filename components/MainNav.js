import Image from "next/image";
import Link from "next/link";
import NavLogo from '../static/mini-logo.png';
import CartIcon from '../static/shopping-cart.png';
import navStyles from '../styles/MainNav.module.css';

const MainNav = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.navbarContent}>
        <div className={navStyles.logoWrapper}>
          <Link href='/'><Image src={NavLogo} alt='VAV Customs Logo' /></Link>
        </div>
        <div>
          <ul className={navStyles.menu}>
            <li>
              <Link href='/#about'>About</Link>
            </li>
            <li>
              <Link href='/#about'>Gallery</Link>
            </li>
            <li>
              <Link href='/#about'>The Shop</Link>
            </li>
            <li>
              <Link href='/#about'>Blog</Link>
            </li>
            <li>
              <Link href='/#about'>Custom Build</Link>
            </li>
            <li>
              <Link href='/#about'>Store</Link>
            </li>
            <div className={navStyles.viewCart}>
              <Image src={CartIcon} alt='Shopping cart icon' />
              <span className={navStyles.cartCount}>1</span>
            </div>
          </ul>
          <div className={navStyles.mobileIcon}>
            <div className={navStyles.line1}></div>
            <div className={navStyles.line2}></div>
            <div className={navStyles.line3}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav;