/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from './cartReducer';
import { client } from "../../utils/shopifyStore";
import { updateTotalItemsInCart } from "./CartActions";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    checkout: null,
    client: client,
    totalItemsInCart: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    dispatch({ type: 'CHECKOUT_FOUND', payload: checkout })
  };

  const updateCartItemsLength = async (checkout) => {
    const totalItems = await updateTotalItemsInCart(checkout);
    dispatch({ type: 'UPDATE_TOTAL_ITEMS_IN_CART', payload: {items: totalItems}});
  };

  const fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => { 
      dispatch({ type: 'CHECKOUT_FOUND', payload: checkout });
      updateCartItemsLength(checkout);
    });
  }

  useEffect(() => {
    if (localStorage.checkout_id) {
      fetchCheckout(localStorage.checkout_id);
    } else {
      createCheckout();
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;