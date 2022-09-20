import { useState, useContext, useEffect } from 'react';
import CartContext from '../../context/cart/CartContext';
import Product from './Product';
import styles from '../../styles/Products.module.css'

const Products = ({ products }) => {
  let allProducts = products.map(product => {
    return (
      <Product 
        key={product.id.toString()}
        product={product}
        available={product.availableForSale}
      />
    )
  });

  return (
    <div className={styles.productsWrapper}>
      {allProducts}
    </div>
  )
}

export default Products