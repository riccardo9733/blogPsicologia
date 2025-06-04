import { db } from '../firebaseConfig';
import { collection, getDocs, doc, getDoc, Timestamp } from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string; // For list view on BlogPage
  content: string; // Full content for PostPage, might be markdown or structured HTML
  imageUrl: string;
  author: string;
  publishDate: string; // Or Timestamp for better sorting/filtering
  // Optional: consider fields like 'createdAt', 'updatedAt' as Timestamps
}

const postsCollectionRef = collection(db, 'posts');

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const data = await getDocs(postsCollectionRef);
    const posts = data.docs.map((doc) => {
      const docData = doc.data();
      // Basic check if publishDate is a Timestamp object, then convert
      // This is a simplified example; more robust date handling might be needed
      let publishDateStr = docData.publishDate;
      if (docData.publishDate && typeof docData.publishDate.toDate === 'function') {
        publishDateStr = (docData.publishDate as Timestamp).toDate().toLocaleDateString();
      }

      return {
        ...docData,
        id: doc.id,
        publishDate: publishDateStr,
      } as BlogPost;
    });
    return posts;
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
};

export const getBlogPostById = async (postId: string): Promise<BlogPost | null> => {
  try {
    const postDocRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postDocRef);

    if (postSnap.exists()) {
      const postData = postSnap.data();
      let publishDateStr = postData.publishDate;
      if (postData.publishDate && typeof postData.publishDate.toDate === 'function') {
        publishDateStr = (postData.publishDate as Timestamp).toDate().toLocaleDateString();
      }

      return {
        ...postData,
        id: postSnap.id,
        publishDate: publishDateStr,
      } as BlogPost;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog post by ID:", error);
    return null;
  }
};
