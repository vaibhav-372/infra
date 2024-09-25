import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page/LandingMain.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import Admin from './Admin.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/project/:projectName" element={<ProjectDetails />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
