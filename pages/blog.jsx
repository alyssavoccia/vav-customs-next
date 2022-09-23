import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
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
    const blogPostsRef = collection(db, 'blogPosts');
    const querySnap = await getDocs(blogPostsRef);

    const blogPosts = querySnap.docs.map(doc => {
      return doc.data();
    });

  return {
    props: {posts: JSON.parse(JSON.stringify(blogPosts)) || null}
  };
};

export default blog;