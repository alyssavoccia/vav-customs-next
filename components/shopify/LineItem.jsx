import { useContext } from 'react';
import Image from 'next/image';
import { updateTotalItemsInCart, updateQuantityInCart, removeLineItemInCart } from '../../context/cart/cartActions';
import CartContext from '../../context/cart/CartContext';
import styles from '../../styles/LineItem.module.css';

const LineItem = (props) => {
  const { dispatch, client, checkout } = useContext(CartContext);

  const updateTotalItems = async (newCheckoutObj) => {
    const totalItems = await updateTotalItemsInCart(newCheckoutObj);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: {items: totalItems}});
  }

  const decrementQuantity = async (lineItemId) => {
    const updatedQuantity = props.line_item.quantity - 1;
    const updatedCheckoutObj = await updateQuantityInCart(client, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: updatedCheckoutObj} });
    updateTotalItems(updatedCheckoutObj);
  };

  const incrementQuantity = async (lineItemId) => {
    const updatedQuantity = props.line_item.quantity + 1;
    const updatedCheckoutObj = await updateQuantityInCart(client, checkout, lineItemId, updatedQuantity);
    dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: updatedCheckoutObj} });
    updateTotalItems(updatedCheckoutObj);
  };

  const removeLineItem = async (lineItemId) => {
    const updatedCheckoutObj = await removeLineItemInCart(client, checkout, lineItemId);
    dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: updatedCheckoutObj} });
    updateTotalItems(updatedCheckoutObj);
  }
  return (
    <li className={styles.lineItem}>
      <div className={styles.lineItemImg}>
        {props.line_item.variant.image && <Image src={props.line_item.variant.image.src} alt={`${props.line_item.title} product shot`} layout='fill' objectFit='contain' />}
      </div>
      <div className={styles.lineItemContent}>
        <div className={styles.contentRow}>
          <span className={styles.lineItemTitle}>{props.line_item.title}</span>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.quantityContainer}>
            <button className={styles.quantityUpdate} onClick={() => decrementQuantity(props.line_item.id)}>-</button>
            <span className={styles.quantity}>{props.line_item.quantity}</span>
            <button className={styles.quantityUpdate} onClick={() => incrementQuantity(props.line_item.id)}>+</button>
          </div>
          <span className={styles.price}>
            $ {(props.line_item.quantity * props.line_item.variant.price.amount).toFixed(2)}
          </span>
          <button className={styles.remove} onClick={() => removeLineItem(props.line_item.id)}>×</button>
        </div>
      </div>
    </li>
  )
}

export default LineItem;