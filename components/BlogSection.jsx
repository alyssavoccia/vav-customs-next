import Link from 'next/link';
import styles from '../styles/BlogSection.module.css';

const BlogSection = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p className={styles.contentTextMain}>Interested in reading more?</p>
          <p>Check out my blog!</p>
        </div>
        <Link href='/blog'>
          <a className='btn btn-primary'>See Blog Posts</a>
        </Link>
      </div>
    </section>
  )
}

export default BlogSection;