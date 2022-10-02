import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import styles from '../styles/BlogSidebar.module.css';

const BlogSidebar = ({ category, currentBlog, blogPosts }) => {
  const [similarPosts, setSimilarPosts] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const relatedPosts = blogPosts.filter(blog => blog.category === category && blog.category && blog.title !== currentBlog);
    setSimilarPosts(relatedPosts.slice(0, 2));
    const newPosts = blogPosts.sort((a, b) => b.timestamp - a.timestamp);
    setRecentPosts(newPosts.slice(0, 2));
  }, [blogPosts, category, currentBlog]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Similar Posts</h3>
        {similarPosts && similarPosts.length > 0
          ? similarPosts.map(post => (
            <Link key={post.title} href={`/blog/${post.title.split(' ').join('-')}`}>
              <div>
                <p>{post.title}</p>
              </div>
            </Link>
          ))
          : <p>Currently no posts available.</p>
        }
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Recent Posts</h3>
        {recentPosts && recentPosts.length > 0
          ? recentPosts.map(post => (
            <Link className={styles.postLink} key={post.title} href={`/blog/${post.title.split(' ').join('-')}`}>
              <div className={styles.blogPost}>
                <h4 className={styles.postTitle}>{post.title}</h4>
                <p className={styles.postInfo}>{post.tagline}</p>
              </div>
            </Link>
          ))
          : <p>Currently no posts available.</p>
        }
      </div>
    </div>
  )
}

export default BlogSidebar;