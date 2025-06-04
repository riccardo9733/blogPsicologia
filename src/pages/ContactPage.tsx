import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper'; // Optional for sectioning

const openingHoursData = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic will go here later
    console.log('Form submitted');
    // Potentially clear form or show a success message
  };

  return (
    <Box sx={{ py: { xs: 2, sm: 3 } }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        Contact Us
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 'sm', // Max width for the form
          mx: 'auto',    // Center the form
          '& .MuiTextField-root': { mb: 2 }, // Margin bottom for text fields
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
        <TextField label="Subject" variant="outlined" fullWidth required />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={5}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth // Make button full width of its container
          sx={{ py: 1.5, fontSize: '1rem' }}
        >
          Send Message
        </Button>
      </Box>

      <Box sx={{ maxWidth: 'sm', mx: 'auto', mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', mb: 3 }}>
          Opening Hours
        </Typography>
        <Paper elevation={1} sx={{ borderRadius: 2}}> {/* Optional: wrap List in Paper */}
          <List disablePadding>
            {openingHoursData.map((item, index) => (
              <React.Fragment key={item.day}>
                <ListItem sx={{ py: 1.5 }}>
                  <ListItemText
                    primary={item.day}
                    secondary={item.hours}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
                {index < openingHoursData.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default ContactPage;
