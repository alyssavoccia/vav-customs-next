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
  const [active, setActive] = useState(styles.menu);
  const [mobileIcon, setMobileIcon] = useState(styles.toggler);

  useEffect(() => {
    if (global.navigator.userAgent.toLowerCase().includes('safari')) {
      setSafari(true);
    }
  }, []);

  const navToggle = () => {
    if (window.innerWidth < 769) {
      active === styles.menu ? setActive(`${styles.menu} ${styles.menuActive}`) : setActive(styles.menu)
    }
    // Icon toggle
    mobileIcon === styles.toggler ? setMobileIcon(`${styles.toggler} ${styles.toggle}`) : setMobileIcon(styles.toggler)
  };

  console.log();
  return (
    <nav className={styles.navbar}>
      <Link href='/' passHref><div><Image className={styles.logo} src={NavLogo} alt='VAV Customs Logo' /></div></Link>
      <div className={styles.linksCart}>
        <ul className={active}>
          <li>
            <Link onClick={navToggle} href='/#about'>About</Link>
          </li>
          <li>
            <Link onClick={navToggle} href='/#gallery'>Gallery</Link>
          </li>
          <li>
            <Link onClick={navToggle} href='/the-shop'>The Shop</Link>
          </li>
          <li>
            <Link onClick={navToggle} href='/blog'>Blog</Link>
          </li>
          <li>
            <Link onClick={navToggle} href='/custom-build'>Custom Build</Link>
          </li>
          <li>
            <Link onClick={navToggle} href='/store'>Store</Link>
          </li>
        </ul>
        <div className={styles.viewCart} onClick={() => dispatch({ type: 'OPEN_CART' })}>
          <FontAwesomeIcon className={styles.CartIcon} icon={faCartShopping} />
          <span className={`${styles.cartCount} ${safari && styles.safariCart}`}>{totalItemsInCart}</span>
        </div>
        <div onClick={navToggle} className={mobileIcon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav;