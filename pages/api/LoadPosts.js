import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

export async function loadPosts() {
  const blogPostsRef = collection(db, 'blogPosts');
  const q = query(blogPostsRef, orderBy('timestamp', 'desc'));
  const querySnap = await getDocs(q);

  const blogPosts = querySnap.docs.map(doc => {
    return doc.data();
  });

  return blogPosts;
};