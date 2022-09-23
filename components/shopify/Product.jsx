import { useState, useContext } from 'react';
import Image from 'next/image';
import CartContext from '../../context/cart/CartContext';
import { addItemToCart, updateTotalItemsInCart } from '../../context/cart/CartActions';
import styles from '../../styles/Product.module.css';

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch, client, checkout } = useContext(CartContext);
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(props.product)
    const newCheckoutObj = await addItemToCart(client, checkout, props.product.variants[0].id, quantity);
    dispatch({ type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: newCheckoutObj}});
    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: {items: totalItems}});
  };

  return (
    <div className={styles.product}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          {props.product.images.length > 0 ? <Image src={props.product.images[0].src} alt={`${props.product.title} product shot`} layout='fill' objectFit='contain' /> : null}
        </div>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{props.product.title}</h2>
          <span className={styles.cardPrice}>${props.product.variants[0].price}</span>
          <p className={styles.cardDescription}>{props.product.description}</p>
          <div className={styles.cardBuy}>
            <label className={styles.cardBuyInfo}>
              Quantity: <input className={styles.cardQuantity} min='1' type='number' defaultValue={1} onChange={handleQuantityChange}></input>
            </label>
            <button disabled={!props.available} className={`${styles.cardBtn} ${props.available && styles.cardBtnBuy}`}onClick={handleSubmit}>
              {!props.available ? 'Sold Out' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;