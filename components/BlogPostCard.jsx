import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/BlogPostCard.module.css';

const BlogPostCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${blog.title.split(' ').join('-')}`}>
        <div className={styles.cardImg}>
          <Image src={`${blog.imgUrl}`} height='200' width='300' alt='Blog post cover' />
          {blog.category && <span className={`${styles.imgTag} ${styles[`${blog.category.toLowerCase()}`]}`}>{blog.category}</span>}
        </div>
      </Link>
      <div className={styles.cardBody}>
        <h2>{blog.title}</h2>
        <p>{blog.tagline}</p>
        <Link className={styles.cardBtn} href={`/blog/${blog.title.split(' ').join('-')}`}>Read More</Link>
      </div>
    </div>
  )
}

export default BlogPostCard;