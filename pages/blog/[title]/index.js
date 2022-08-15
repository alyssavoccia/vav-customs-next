import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import BlogContext from "../../../context/blog/BlogContext";
import styles from '../../../styles/BlogPost.module.css';

const BlogPost = () => {
  const { blogPosts } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState(null);
  let {query} = useRouter();

  useEffect(() => {
    if (blogPosts && Object.keys(query).length !== 0) {
      console.log(query)
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
    <section>
      <Link href='/blog'>Back to Blog Posts</Link>
      <div>
        <article>
          <div>
            <h1>{blogPost.title}</h1>
            <span>{blogPost.category} | {blogPost.timestamp.toDate().toDateString()}</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogPost;