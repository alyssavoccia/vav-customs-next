import { createContext, useReducer, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import blogReducer from './blogReducer';

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

  const [state, dispatch] = useReducer(blogReducer, blogPosts);

  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;