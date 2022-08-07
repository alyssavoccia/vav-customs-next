import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faArrowUpRightDots, faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className="section-title">What We Provide</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.itemsContainer}>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className='fa-2x' icon={faScrewdriverWrench} />
              </div>
              <p>Custom one-of-a-kind wood pieces. You can select from one of our pre-made pieces, or message us to create your dream item.</p>
            </div>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className='fa-2x' icon={faArrowUpRightDots} />
              </div>
              <p>High quality products require high quality materials. We source only the best raw materials to create our products.</p>
            </div>
            <div className={styles.item}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className='fa-2x' icon={faPeopleArrowsLeftRight} />
              </div>
              <p>Customer service you can count on. This is an investment and we want to ensure that you are getting your dream piece.</p>
            </div>
          </div>
          <div className={styles.shopInfo}>
            <div className={styles.shopInfoText}>
              <p className={styles.shopInfoTitle}>Want to see what goes on behind the scenes?</p>
              <p>See the shop setup, what tools I use, and what I recommend to get started!</p>
            </div>
            <Link href='#'>
              <a className='btn btn-primary'>Check out The Shop!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;