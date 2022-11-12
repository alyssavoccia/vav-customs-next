import Image from 'next/image';
import HeroLogo from '../static/HeroLogo.png';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image className={styles.logo} src={HeroLogo} alt='VAV Customs Logo' />
    </section>
  )
}

export default Hero;