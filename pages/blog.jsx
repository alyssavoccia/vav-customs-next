import { loadPosts } from "./api/LoadPosts";
import BlogPostsGrid from '../components/BlogPostsGrid';
import styles from '../styles/Blog.module.css';

const blog = (props) => {
  return (
    <section className="page-section">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className="section-title">Blog</h1>
        </div>
        <BlogPostsGrid posts={props.posts} />
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const blogPosts = await loadPosts();

  return {
    props: {posts: JSON.parse(JSON.stringify(blogPosts)) || null},
    revalidate: 10
  };
};

export default blog;