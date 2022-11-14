import Image from 'next/image';
import theShop from '../static/theShop.jpg';
import styles from '../styles/TheShop.module.css';

const TheShop = () => {
  return (
    <section className='page-section'>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className="section-title">The Shop</h1>
        </div>
        <div className={styles.content}>
          <Image src={theShop} alt='Different woodworking tools hanging on the wall.' />
          <div className={styles.favorites}>
            <div className={styles.favoritesTitleContainer}>
              <h2 className='section-subtitle'>Tools in the Shop</h2>
            </div>
            
          </div>
          <div className={styles.recommendations}>
            <div className={styles.recommendationsTitleContainer}>
              <h2 className='section-subtitle'>Other Tools I Recommend</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheShop;