/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import bottomImage from '../static/about-me.jpg';
import topImage from '../static/about-me2.jpg';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageStack}>
          <Image className={styles.topImage} src={topImage} alt='Photo of Vince' />
          <Image className={styles.bottomImage} src={bottomImage} alt='Photo of Vince on a boat' />
        </div>
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <h2 className='section-title'>Hey, I'm Vince</h2>
          </div>
          <p>Vince lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </section>
  )
}

export default About;