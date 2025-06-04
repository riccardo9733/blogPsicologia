import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage'; // Import ServicesPage
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import PrivacyPolicyPage
import TermsOfServicePage from './pages/TermsOfServicePage'; // Import TermsOfServicePage
import Layout from './components/Layout';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<PostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} /> {/* Add route for ServicesPage */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* Add route for PrivacyPolicyPage */}
          <Route path="/terms-of-service" element={<TermsOfServicePage />} /> {/* Add route for TermsOfServicePage */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
