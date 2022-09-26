import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from "next/image";
import { loadPosts } from "../../api/LoadPosts";
import BlogSidebar from "../../../components/BlogSidebar";
import styles from '../../../styles/BlogPost.module.css';

const BlogPost = (props) => {
  const blogPosts = props.posts;
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState(null);
  const [blogDate, setBlogDate] = useState(null);
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
      <Link href='/blog'><a className='btn btn-secondary'>Back to Blog Posts</a></Link>
      <div className={styles.blogPost}>
        <article className={styles.blogPostContent}>
          <div className={styles.blogPostHeader}>
            <h1 className={styles.blogPostTitle}>{blogPost.title}</h1>
            <span className={styles.blogPostInfo}>{blogPost.category} | </span>
          </div>
          <div className={styles.blogPostImg}>
            <Image src={blogPost.imgUrl} width={1200} height={500} objectFit='cover' alt="Blog post image" />
          </div>
          <div className={styles.blogPostMain}>
            <div className={styles.blogPostBody} dangerouslySetInnerHTML={{ __html: blogPost.body}}></div>
            <div className={styles.sidebar}>
              <BlogSidebar category={blogPost.category} currentBlog={blogPost.title} blogPosts={blogPosts} />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const blogPosts = await loadPosts();

  return {
    props: {posts: JSON.parse(JSON.stringify(blogPosts)) || null}
  };
};

export const getStaticPaths = async () => {
  const blogPosts = await loadPosts();

  const titles = blogPosts.map(post => {
    return post.title.split(' ').join('-');
  });

  const paths = titles.map(title => ({ params: {title}}));

  return {
    paths,
    fallback: false
  }
}

export default BlogPost;