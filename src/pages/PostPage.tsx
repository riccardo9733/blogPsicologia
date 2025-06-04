import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link'; // MUI Link
import Paper from '@mui/material/Paper'; // Optional for content container
import { getBlogPostById, BlogPost } from '../services/blogService';

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
          setError(null);
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
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h6" color="error">{error || 'Blog post not found.'}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/blog" underline="hover" color="inherit">
          Blog
        </Link>
        <Typography color="text.primary">{post.title}</Typography>
      </Breadcrumbs>

      <Paper elevation={0} sx={{ p: {xs: 1, sm: 2, md: 3}, backgroundColor: 'transparent' }}> {/* Optional wrapper */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
          {post.title}
        </Typography>
        {post.author && post.publishDate && (
          <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
            By {post.author} | Published on {post.publishDate}
          </Typography>
        )}

        {post.imageUrl && (
          <Box
            component="img"
            src={post.imageUrl}
            alt={post.title}
            sx={{
              width: '100%',
              maxHeight: { xs: 300, md: 450 },
              objectFit: 'cover',
              borderRadius: 1, // theme.shape.borderRadius
              mb: 3,
            }}
          />
        )}

        <Typography
          component="div"
          dangerouslySetInnerHTML={post.content ? { __html: post.content } : undefined }
          sx={{
            lineHeight: 1.7,
            fontSize: {xs: '1rem', md: '1.125rem'},
            // Basic styling for elements that might be in the HTML content
            '& h1': { my: 3, fontSize: '2.25rem', fontWeight: 'medium' },
            '& h2': { my: 2.5, fontSize: '1.875rem', fontWeight: 'medium' },
            '& h3': { my: 2, fontSize: '1.5rem', fontWeight: 'medium' },
            '& p': { mb: 1.5 },
            '& a': { color: 'primary.main', textDecoration: 'underline' },
            '& ul, & ol': { pl: 3, mb: 1.5 },
            '& li': { mb: 0.5 }
          }}
        />
      </Paper>
    </Box>
  );
};

export default PostPage;
