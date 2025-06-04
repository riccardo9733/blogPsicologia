import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import AdbIcon from '@mui/icons-material/Adb'; // Example icon - Omitting for now as per plan

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const footerNavItems = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          {/* <AdbIcon sx={{ mr: 1 }} /> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', mr: 2 }}>
            Mindful Path
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Button
            component={RouterLink}
            to="/contact" // Assuming "Book Appointment" goes to contact
            variant="outlined"
            sx={{ my: 1, mx: 1.5, color: 'white', borderColor: 'white', '&:hover': {borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)'} }}
          >
            Book Appointment
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 1 }}>
            {footerNavItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                sx={{ mx: 1 }}
                variant="text"
                color="primary"
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary">
            {'© '}
            {new Date().getFullYear()}{' '}
            Mindful Path. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
