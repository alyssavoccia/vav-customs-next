import Image from 'next/image';
import HeroLogo from '../static/HeroLogo.png';
import heroStyles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.logoContainer}>
        <Image src={HeroLogo} alt='VAV Customs Logo' />
      </div>
    </section>
  )
}

export default Hero;