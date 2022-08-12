import { createContext, useReducer, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogPostsRef = collection(db, 'blogPosts');
      const querySnap = await getDocs(blogPostsRef);

      setBlogPosts(querySnap.docs.map(doc => {
        return doc.data();
      }));
    };

    fetchBlogPosts();
  }, []);

  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;