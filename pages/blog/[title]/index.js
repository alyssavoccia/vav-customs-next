import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from "next/image";
import BlogContext from "../../../context/blog/BlogContext";
import styles from '../../../styles/BlogPost.module.css';

const BlogPost = () => {
  const { blogPosts } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState(null);
  let {query} = useRouter();

  useEffect(() => {
    if (blogPosts && Object.keys(query).length !== 0) {
      const currentTitle = query.title.indexOf('-') === -1 ? query.title : query.title.split('-').join(' ');
      const currentBlog = blogPosts.filter(item => item.title === currentTitle);
      setBlogPost(currentBlog[0]);

      if (blogPost) {
        setLoading(false);
      }
    }
  }, [blogPost, blogPosts, query]);

  if (loading) {
    return <p>Loading blog post</p>
  }

  return (
    <section className={`${styles.container} page-section`}>
      <Link className='btn btn-secondary' href='/blog'>Back to Blog Posts</Link>
      <div className={styles.blogPost}>
        <article className={styles.blogPostContent}>
          <div className={styles.blogPostHeader}>
            <h1 className={styles.blogPostTitle}>{blogPost.title}</h1>
            <span className={styles.blogPostInfo}>{blogPost.category} | {blogPost.timestamp.toDate().toDateString()}</span>
            <div className={styles.blogPostImg}>
              <Image src={blogPost.imgUrl} width={600} height={350} alt="Blog post image" />
            </div>
          </div>
          <div className={styles.contentBody} dangerouslySetInnerHTML={{ __html: blogPost.body}}></div>
        </article>
      </div>
    </section>
  )
}

export default BlogPost;