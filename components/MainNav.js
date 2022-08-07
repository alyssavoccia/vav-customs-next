import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <Link href='#about'>About</Link>
            </li>
            <li>
              <Link href='#!'>Gallery</Link>
            </li>
            <li>
              <Link href='#!'>The Shop</Link>
            </li>
            <li>
              <Link href='#!'>Blog</Link>
            </li>
            <li>
              <Link href='#!'>Custom Build</Link>
            </li>
            <li>
              <Link href='#!'>Store</Link>
            </li>
            <div className={navStyles.viewCart}>
              <FontAwesomeIcon className={navStyles.CartIcon} icon={faCartShopping} />
              <span className={navStyles.cartCount}>1</span>
            </div>
          </ul>
          <div className={navStyles.toggler}>
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