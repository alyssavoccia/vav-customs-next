import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/BlogPostCard.module.css';

const BlogPostCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <Link href='#'>
        <div className={styles.cardImg}>
          <Image src={`${blog.imgUrl}`} height='200px' width='300px' alt='Blog post cover' />
          {blog.category && <span className={`${styles.imgTag} ${styles[`${blog.category.toLowerCase()}`]}`}>{blog.category}</span>}
        </div>
      </Link>
      <div className={styles.cardBody}>
        <h2>{blog.title}</h2>
        <p>{blog.tagline}</p>
        <Link href='#'><a className={styles.cardBtn}>Read More</a></Link>
      </div>
    </div>
  )
}

export default BlogPostCard;