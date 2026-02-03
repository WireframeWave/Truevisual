import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import CaseStudiesOverview from './components/CaseStudiesOverview';
import CaseStudyPage from './components/CaseStudyPage';
import ZEE5CaseStudy from './components/ZEE5CaseStudy';
import SwiggyCaseStudy from './components/SwiggyCaseStudy';
import YESBANKCaseStudy from './components/YESBANKCaseStudy';
import LifestyleCaseStudy from './components/LifestyleCaseStudy';
import DeleteAccount from './components/DeleteAccount';
import Copyright from './components/Copyright';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies" element={<CaseStudiesOverview />} />
        <Route path="/case-study/tata-play" element={<CaseStudyPage />} />
        <Route path="/case-study/zee5" element={<ZEE5CaseStudy />} />
        <Route path="/case-study/swiggy" element={<SwiggyCaseStudy />} />
        <Route path="/case-study/yes-bank" element={<YESBANKCaseStudy />} />
        <Route path="/case-study/lifestyle" element={<LifestyleCaseStudy />} />
        <Route path="/account-deletion" element={<DeleteAccount />} />
        <Route path="/delete-account" element={<Navigate to="/account-deletion" replace />} />
        <Route path="/copyright" element={<Copyright />} />
      </Routes>
    </Router>
  );
};

export default App;