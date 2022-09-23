import { useState, useEffect, useContext } from "react";
import LineItem from './LineItem';
import CartContext from "../../context/cart/CartContext";
import styles from '../../styles/Cart.module.css';

const Cart = () => {
  const { dispatch, isCartOpen, totalItemsInCart, checkout } = useContext(CartContext);
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const openCheckout = () => {
    window.open(checkout.webUrl);
  };

  useEffect(() => {
    if (checkout) {
      const items = [];
      setLineItems(checkout.lineItems.map((line_item) => {
        return (
          <LineItem
            key={line_item.id.toString()}
            line_item={line_item}
          />
        );
      }));
      setLoading(false);
    }
  }, [checkout]);

  if (!loading) {
  return (
    <div className={`${styles.cart} ${isCartOpen && styles.cartOpen}`}>
      <header className={styles.cartHeader}>
        <h2>Your Cart</h2>
        <button onClick={() => dispatch({ type: 'CLOSE_CART'})} className={styles.cartClose}>×</button>
      </header>
      <ul className={styles.lineItems}>
        {lineItems}
      </ul>
      <footer className={styles.cartFooter}>
        <div className={styles.cartInfo}>
          <div className={`${styles.cartInfoTotal} ${styles.cartInfoSmall}`}>Taxes & Shipping</div>
          <div className={styles.cartInfoPricing}>
            <span>Determined at Checkout</span>
          </div>
        </div>
        <div className={styles.cartInfo}>
          <div className={`${styles.cartInfoTotal} ${styles.cartInfoSmall}`}>Subtotal</div>
          <div className={styles.cartInfoPricing}>
            <span className={styles.pricing}>$ {checkout.lineItemsSubtotalPrice.amount}</span>
          </div>
        </div>
        <button disabled={totalItemsInCart === 0} className={`${styles.cartCheckout} ${styles.button}`} onClick={openCheckout}>Checkout</button>
      </footer>
    </div>
  )
}
}

export default Cart;