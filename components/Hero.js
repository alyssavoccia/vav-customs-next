import Image from 'next/image';
import HeroLogo from '../static/HeroLogo.png';
import heroStyles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <Image src={HeroLogo} alt='VAV Customs Logo' />
    </section>
  )
}

export default Hero;