import { useState, useEffect } from 'react';
import Product from './Product';
import styles from '../../styles/Products.module.css';

const Products = ({ products, selectedProducts }) => {
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {
    switch (selectedProducts) {
      case 'all':
        setShowProducts(products);
        break;
      case 'woodwork':
        setShowProducts(products.filter(product => product.productType === 'woodwork'));
        break;
      case 'custom':
        setShowProducts(products.filter(product => product.productType === 'custom'));
        break;
      case 'plans':
        setShowProducts(products.filter(product => product.productType === 'plans'));
        break;
      case 'tools':
        setShowProducts(products.filter(product => product.productType === 'tools'));
        break;
      case 'apparel':
        setShowProducts(products.filter(product => product.productType === 'apparel'));
        break;
      case 'accessories':
        setShowProducts(products.filter(product => product.productType === 'accessories'));
        break;
      default:
        setShowProducts(products);
    }
  }, [products, selectedProducts]);

  let allProducts = showProducts.map(product => {
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

export default Products;