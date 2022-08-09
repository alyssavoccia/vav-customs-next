import styles from '../styles/BlogPostsGrid.module.css';

const BlogPostsGrid = () => {
  const blogPosts = [];

  return (
    <section className={styles.blogPosts}>
      {blogPosts.length > 0
        ? <h1>Blog Posts</h1>
        : <div className={styles.noItems}>
            <h2>There are currently no blogs available.</h2>
            <p>Please check back later!</p>
          </div>
      }
    </section>
  )
}

export default BlogPostsGrid;