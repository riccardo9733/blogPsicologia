import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPostById, BlogPost } from '../services/blogService'; // Adjusted path

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError("Post ID is missing.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const fetchedPost = await getBlogPostById(postId);
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null); // Clear previous errors if found
        } else {
          setError('Blog post not found.');
          setPost(null); // Ensure post is null if not found
        }
      } catch (err) {
        console.error(`Error fetching post ${postId}:`, err);
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">Loading post...</div>;
  }

  if (error) {
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">Error: {error}</div>;
  }

  if (!post) {
    // This case should ideally be covered by the error state from the fetchPost logic if not found
    return <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">Blog post not found.</div>;
  }

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap gap-2 p-4">
        <Link className="text-[#47569e] text-base font-medium leading-normal" to="/blog">Blog</Link>
        <span className="text-[#47569e] text-base font-medium leading-normal">/</span>
        <span className="text-[#0d0f1c] text-base font-medium leading-normal">{post.title}</span>
      </div>
      <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">{post.title}</h2>
      {post.author && post.publishDate && (
        <p className="text-[#47569e] text-sm font-normal leading-normal pb-3 pt-1 px-4">By {post.author} | Published on {post.publishDate}</p>
      )}
      {post.imageUrl && (
        <div className="flex w-full grow bg-[#f8f9fc] @container py-3">
          <div className="w-full gap-1 overflow-hidden bg-[#f8f9fc] @[480px]:gap-2 aspect-[3/2] flex">
            <div
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
              style={{ backgroundImage: `url("${post.imageUrl}")` }}
            ></div>
          </div>
        </div>
      )}
      {/* Displaying content. If content is HTML, dangerouslySetInnerHTML is one option.
          If it's plain text with intentional newlines, use whitespace-pre-wrap.
          If it's markdown, a markdown parser would be needed.
          For now, assuming content might have HTML or preserved newlines. */}
      <div className="text-[#0d0f1c] text-base font-normal leading-normal pb-3 pt-1 px-4 whitespace-pre-wrap" dangerouslySetInnerHTML={post.content ? { __html: post.content } : undefined}></div>
    </div>
  );
};

export default PostPage;
