import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, BlogPost } from '../services/blogService'; // Adjusted path

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getAllBlogPosts();
        setPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError('Failed to load blog posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">Loading posts...</div>;
  }

  if (error) {
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">No blog posts found.</div>;
  }

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#121217] tracking-light text-[32px] font-bold leading-tight">Blog</p>
          <p className="text-[#656a86] text-sm font-normal leading-normal">Insights and articles on neuropsychology, psychological support, and caregiver well-being.</p>
        </div>
      </div>

      {posts.map((post) => (
        <div className="p-4 @container" key={post.id}>
          <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
            {post.imageUrl && (
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @xl:w-1/3 @xl:aspect-square" // Adjusted for better layout
                style={{ backgroundImage: `url("${post.imageUrl}")` }}
              ></div>
            )}
            <div className={`flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 ${post.imageUrl ? '@xl:px-4' : ''}`}>
              <p className="text-[#121217] text-lg font-bold leading-tight tracking-[-0.015em]">{post.title}</p>
              <div className="flex items-end gap-3 justify-between">
                <p className="text-[#656a86] text-base font-normal leading-normal">
                  {post.excerpt || (post.content ? post.content.substring(0, 150) + '...' : '')} {/* Show excerpt or truncated content */}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#3e58da] text-white text-sm font-medium leading-normal whitespace-nowrap" // Added whitespace-nowrap
                  >
                    <span className="truncate">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
