import { useState, useContext } from 'react';
import Image from 'next/image';
import CartContext from '../../context/cart/CartContext';
import { addItemToCart, updateTotalItemsInCart } from '../../context/cart/cartActions.js';
import styles from '../../styles/Product.module.css';

const Product = (props) => {
  const { product, available } = props;
  const [quantity, setQuantity] = useState(1);
  const { dispatch, client, checkout } = useContext(CartContext);
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async () => {
    const newCheckoutObj = await addItemToCart(client, checkout, props.product.variants[0].id, quantity);
    dispatch({ type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: newCheckoutObj}});
    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: {items: totalItems}});
  };

  return (
    <div className={styles.product}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          {product.images.length > 0 ? <Image src={product.images[0].src} alt={`${product.title} product shot`} width={310} height={250} /> : null}
        </div>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{props.product.title}</h2>
          <span className={styles.cardPrice}>${product.variants[0].price.amount}</span>
          <p className={styles.cardDescription}>{product.description}</p>
          <div className={styles.cardBuy}>
            <label className={styles.cardBuyInfo}>
              Quantity: <input className={styles.cardQuantity} min='1' type='number' defaultValue={1} onChange={handleQuantityChange}></input>
            </label>
            <button disabled={!available} className={`${styles.cardBtn} ${available && styles.cardBtnBuy}`}onClick={handleSubmit}>
              {!available ? 'Sold Out' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;