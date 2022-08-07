import Image from 'next/image';
import HeroLogo from '../static/HeroLogo.png';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <Image src={HeroLogo} alt='VAV Customs Logo' />
      </div>
    </section>
  )
}

export default Hero;