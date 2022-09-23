import BlogPostsGrid from '../components/BlogPostsGrid';
import styles from '../styles/Blog.module.css';

const blog = () => {
  return (
    <section className="page-section">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className="section-title">Blog</h1>
        </div>
        <BlogPostsGrid />
      </div>
    </section>
  )
}

export default blog;