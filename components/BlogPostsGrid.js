import { useEffect, useState, useContext } from 'react';
import BlogContext from '../context/blog/BlogContext';
import BlogPostCard from './BlogPostCard';
import styles from '../styles/BlogPostsGrid.module.css';

const BlogPostsGrid = () => {
  const { blogPosts } = useContext(BlogContext);
  const [orderedBlogPosts, setOrderedBlogPosts] = useState(null);

  useEffect(() => {
    if (blogPosts) {
      setOrderedBlogPosts(blogPosts.sort((a, b) => b.timestamp - a.timestamp));
    }
  }, [blogPosts]);

  return (
    <section className={styles.blogPosts}>
      {orderedBlogPosts && orderedBlogPosts.length > 0
        ? <div>
            {orderedBlogPosts.map(blog => (
              <BlogPostCard key={blog.title} blog={blog} />
            ))}
          </div>
        : <div className={styles.noItems}>
            <h2>There are currently no blogs available.</h2>
            <p>Please check back later!</p>
          </div>
      }
    </section>
  )
}

export default BlogPostsGrid;