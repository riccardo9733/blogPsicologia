import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PsychologyIcon from '@mui/icons-material/Psychology'; // Example Icon for Neuropsychology
import FavoriteIcon from '@mui/icons-material/Favorite';   // Example Icon for Psychological Support
import GroupIcon from '@mui/icons-material/Group';        // Example Icon for Caregiver Support

// Hero Image URL (same as before)
const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuClsp8pb_FA2vtwGnbiA23IFnS5lovTj0NSaJ0hx6Eh2bkN_GrtTYvEoearZXsDj3G2B4Ul-U9XrxZlY9mVC9XEZ7NVOQVvitHBwZPtwb1gcoJwnMCWgY2ZAVFK8-tTTZMemsZx5wzdRWSnFyfDoNEHSaBIB_VDqlembZMgSO_t7V0mPQp2EXibGzYTAhDSAjEQvCTqU3dvSvC0xdAwE4gI76Xhcnnb3OJuuUY6g_QAnrNx3u9PTbeflyg2tJHBDyfh0rzH9v0QeHBp";

const services = [
  {
    title: "Neuropsychology",
    description: "Assessments and rehabilitation for cognitive functions.",
    icon: <PsychologyIcon fontSize="large" color="primary" />
  },
  {
    title: "Psychological Support",
    description: "Therapy for emotional and mental health challenges.",
    icon: <FavoriteIcon fontSize="large" color="primary" />
  },
  {
    title: "Caregiver Support",
    description: "Guidance and resources for those caring for loved ones.",
    icon: <GroupIcon fontSize="large" color="primary" />
  }
];

const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 300, sm: 400, md: 480 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 3,
          p: { xs: 2, sm: 3, md: 4 },
          color: 'common.white',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${heroImageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 1, // Consistent border radius
          mb: 4, // Margin bottom for spacing
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' } }}
        >
          Find Your Path to Inner Peace
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ maxWidth: 'md', fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' } }}
        >
          Welcome to Mindful Path, where we offer compassionate support for your mental well-being. Our services include neuropsychology, psychological support, and caregiver support.
        </Typography>
        <Button
          variant="contained"
          color="primary" // Or a custom color from theme
          size="large"
          component={RouterLink}
          to="/contact" // Or a dedicated "learn more" page
          sx={{ mt: 2, py: 1.5, px: 4, fontSize: {xs: '0.875rem', sm: '1rem'} }}
        >
          Learn More
        </Button>
      </Box>

      {/* Introductory Text Section (Optional, can be merged or kept separate) */}
      <Box sx={{ textAlign: 'center', my: 4, px: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Comprehensive Support for Your Mental Well-being
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 'lg', margin: '0 auto' }}>
          We offer a range of services tailored to your unique needs, including neuropsychological assessments, individual therapy, and support for caregivers.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ my: 5, px: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, height: '100%', textAlign: 'center' }}>
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'medium' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
