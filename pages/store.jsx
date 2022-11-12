import { useState, useEffect } from 'react';
import { client } from '../utils/shopifyStore';
import styles from '../styles/Store.module.css';
import Products from '../components/shopify/Products';

const Store = (props) => {
  const [selected, setSelected] = useState('all');
  const allProducts = props.products
  // console.log(props)

  const list = [
    {
      id: 'all',
      title: 'All'
    },
    {
      id: 'woodwork',
      title: 'Woodwork'
    },
    {
      id: 'custom',
      title: 'Custom Pieces'
    },
    {
      id: 'plans',
      title: 'Plans'
    },
    {
      id: 'tools',
      title: 'Tools'
    },
    {
      id: 'apparel',
      title: 'Apparel'
    },
    {
      id: 'accessories',
      title: 'Accessories'
    }
  ];

  return (
    <section className="page-section">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className="section-title">Store</h1>
        </div>
        <ul className={styles.categories}>
          {list.map(item => (
            <li key={item.title} className={`${item.id === selected && styles.active}`} onClick={() => setSelected(item.id)}>{item.title}</li>
          ))}
        </ul>
        <Products products={allProducts} selectedProducts={selected} />
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const products = await client.product.fetchAll();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  };
};

export default Store;