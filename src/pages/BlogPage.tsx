import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // For loading state
import { getAllBlogPosts, BlogPost } from '../services/blogService';

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
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}> {/* Adjust minHeight as needed */}
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
        Blog
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 4, maxWidth: 'md', mx: 'auto' }}>
        Insights and articles on neuropsychology, psychological support, and caregiver well-being.
      </Typography>

      {posts.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', py: 5 }}>
          No blog posts found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {post.imageUrl && (
                  <CardMedia
                    component="img"
                    height="200" // Adjust height as needed
                    image={post.imageUrl}
                    alt={post.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{fontWeight: 'medium'}}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt || (post.content ? post.content.substring(0, 120) + '...' : '')}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-start', pt: 0, pb:1, px:1.5}}>
                  <Button
                    size="small"
                    component={RouterLink}
                    to={`/blog/${post.id}`}
                    variant="contained" // Make it more prominent
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BlogPage;
