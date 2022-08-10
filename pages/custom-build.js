/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CustomBuild.module.css';

const CustomBuild = () => {
  const onChange = () => {

  };

  return (
    <>
      <section className="page-section">
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className="section-title">Custom Build</h1>
          </div>
          <p className={styles.description}>Have a custom build that you're looking for? Fill out the form below to get started!</p>
          <Link href='/#gallery'>
            <a className={styles.galleryLink}>Check out my work</a>
          </Link>
          <form className={styles.form}>
            <input className={styles.formInput} type='text' id='name' name='user_name' placeholder='Name' />
            <input className={styles.formInput} type='email' id='email' name='email' placeholder='Email' />
            <textarea className={styles.formInput} rows='5' id='message' name='message' placeholder='Message' />
            <label className={styles.imageLabel}>Have some inspiration? <span className={styles.smallText}>(2 file max)</span></label>
            <input type='file' className={styles.fileInput} id='images' max='2' accept='.jpg,.png,.jpeg' multiple onChange={onChange} />
            <button type='submit' className={`${styles.formButton} btn btn-primary`}>Submit</button>
          </form>
        </div>
      </section>
      <section className={styles.whyBlock}>
        <h2 className={styles.whyBlockTitle}>Why Custom?</h2>
        <div className={styles.whyBlockSection}>
          <div className={styles.whyBlockImage}>
            <Image src='/static/grid-images/table1.jpg' width='400px' height='400px' objectFit='cover' alt='Custom wood coffee table' />
          </div>
          <div className={styles.whyBlockText}>
            <h3>Uniquely Yours</h3>
            <p className={styles.whyBlockP}>If you're not looking for a pre-made piece, this option allows you to order a fully custom piece exactly how you want. This means no two pieces will be the same, giving you a unique piece for your home. The options are endless as you are able to specify type of wood and duotone, and specifications to name a few. Have a picture of a piece of furniture or item that you want to draw inspiration from? You are able to upload it and tell us why you like it and how you want it incorporated into your piece!</p>
          </div>
        </div>
        <div className={styles.whyBlockSection}>
          <div className={`${styles.whyBlockText} ${styles.moveBottom}`}>
            <h3>More Options for pieces</h3>
            <p className={styles.whyBlockP}>Our store offers a wide variety of pre-made peieces, however, you might not find exactly what you're looking for. A custom order allows us to create pieces that you wouldn't otherwise find in our store because they are a specialized item.</p> {/* Work on! */}
          </div>
          <div className={styles.whyBlockImage}>
            <Image src='/static/grid-images/vanity1.jpg' width='400px' height='400px' objectFit='cover' objectPosition='left' alt='Custom wood vanity in the bathroom' />
          </div>
        </div>
        <div className={styles.whyBlockSection}>
          <div className={styles.whyBlockImage}>
            <Image src='/static/grid-images/bathroom1.jpg' width='400px' height='400px' objectFit='cover' alt='Custom wooden bathroom set with vanity and mirror' />
          </div>
          <div className={styles.whyBlockText}>
            <h3>Matching Wood Sets</h3>
            <p className={styles.whyBlockP}>Are you working on a DIY project redoing a part of your house? Custom orders allow us to create matching sets to help you complete your project! You're able to receive pieces of the same style to seamlessly fit together, completing your space.</p> {/* Work on! */}
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomBuild;