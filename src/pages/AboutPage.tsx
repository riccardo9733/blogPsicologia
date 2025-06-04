import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'; // Optional for section grouping
import Divider from '@mui/material/Divider'; // For separating items

const experienceItems = [
  { term: "Licensed Psychologist", definition: "State Board of Psychology" },
  { term: "Neuropsychology Specialist", definition: "Certified by the National Institute of Neuropsychology" },
  { term: "Caregiver Support Expert", definition: "Certified by the Caregiver Support Network" },
];

const educationItems = [
  { term: "Ph.D. in Clinical Psychology", definition: "University of Serenity, 2013" },
  { term: "M.A. in Psychology", definition: "University of Serenity, 2010" },
  { term: "B.A. in Psychology", definition: "University of Serenity, 2008" },
];

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ py: 2 }}> {/* Overall page padding */}
      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, mb: 4, backgroundColor: 'transparent' }}> {/* Transparent paper, or remove Paper for no bg */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb:3 }}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: {xs: '1rem', md: '1.125rem'}, lineHeight: 1.7, textAlign: 'center', maxWidth: 'md', mx: 'auto' }}>
          I am a licensed psychologist with over 10 years of experience in neuropsychology, psychological support, and caregiver support. My approach is rooted in empathy and evidence-based practices, tailored to meet the unique needs of each individual and family I work with.
        </Typography>
      </Paper>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', mb: 2, textAlign:'center' }}>
          Experience
        </Typography>
        {experienceItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, px: {xs: 0, sm: 2} }}>
              <Typography variant="subtitle1" component="span" sx={{fontWeight: 'medium' }}>{item.term}</Typography>
              <Typography variant="body1" component="span" color="text.secondary" sx={{textAlign: 'right'}}>{item.definition}</Typography>
            </Box>
            {index < experienceItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', mb: 2, textAlign:'center' }}>
          Education
        </Typography>
        {educationItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, px: {xs: 0, sm: 2} }}>
              <Typography variant="subtitle1" component="span" sx={{fontWeight: 'medium'}}>{item.term}</Typography>
              <Typography variant="body1" component="span" color="text.secondary" sx={{textAlign: 'right'}}>{item.definition}</Typography>
            </Box>
            {index < educationItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>

      <Box>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium', mb: 2, textAlign:'center' }}>
          My Approach
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: {xs: '1rem', md: '1.125rem'}, lineHeight: 1.7, textAlign: 'justify', maxWidth: 'md', mx: 'auto' }}>
          My therapeutic approach is integrative, drawing from cognitive-behavioral, humanistic, and mindfulness-based techniques. I believe in fostering a collaborative and supportive environment where clients feel empowered to explore their challenges and achieve their goals. I am committed to providing compassionate care that promotes healing and personal growth.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
