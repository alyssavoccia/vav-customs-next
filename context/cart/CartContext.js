import { createContext, useContext, useEffect, useReducer, useState } from "react";
import {initialState } from './cartReducer';
import cartReducer from "./cartReducer";
// import { client } from "../../utils/shopifyStore";
// import Client from "shopify-buy";
import { client } from "../../utils/shopifyStore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    client: {},
    totalItemsInCart: 0
  };
  const [cart, setCart] = useState(initialState);

  useEffect(() => {
    // Check if the user has visited the site before
    // If not, creates checkout
    if (!localStorage.getItem('userCart')) {
      // Dispatch client to state
      dispatch({ type: 'CLIENT_CREATED', payload: client});
      setCart(prevState => ({...prevState, client: client}));
      // Set up checkout
      client.checkout.create().then(res => {
        dispatch({ type: 'CHECKOUT_FOUND', payload: res});
        setCart(prevState => ({...prevState, checkout: res}));
      });

      localStorage.setItem('userCart', JSON.stringify(cart));
    }

    // if (cart !== initialState) {
    //   localStorage.setItem('userCart', JSON.stringify(cart));
    // }
  }, [cart]);

  const [state, dispatch] = useReducer(cartReducer, cart === initialState ? initialState : cart);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('userCart'));
    if (cartData) {
      setCart(cartData);
      setCart(prevState => ({...prevState, client: client}));
      // Dispatch client to state
      dispatch({ type: 'UPDATE_USER_CART', payload: cart});
    }
  }, [state]);

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(state));
  }, [state]);

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