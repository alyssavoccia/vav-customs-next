import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartContext from "../context/cart/CartContext";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from '../static/mini-logo.png';
import styles from '../styles/MainNav.module.css';

const MainNav = () => {
  const { dispatch, totalItemsInCart } = useContext(CartContext);
  const [safari, setSafari] = useState(false);

  useEffect(() => {
    if (global.navigator.userAgent.toLowerCase().includes('safari')) {
      console.log('here')
      setSafari(true);
    }
  }, []);

  console.log();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logoWrapper}>
          <Link href='/' passHref><div><Image src={NavLogo} alt='VAV Customs Logo' /></div></Link>
        </div>
        <div>
          <ul className={styles.menu}>
            <li>
              <Link href='/#about'>About</Link>
            </li>
            <li>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li>
              <Link href='/the-shop'>The Shop</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/custom-build'>Custom Build</Link>
            </li>
            <li>
              <Link href='/store'>Store</Link>
            </li>
            <div className={styles.viewCart} onClick={() => dispatch({ type: 'OPEN_CART' })}>
              <FontAwesomeIcon className={styles.CartIcon} icon={faCartShopping} />
              <span className={`${styles.cartCount} ${safari && styles.safariCart}`}>{totalItemsInCart}</span>
            </div>
          </ul>
          <div className={styles.toggler}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav;