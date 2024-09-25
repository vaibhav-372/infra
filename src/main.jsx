import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LandingPage from './landing-page/LandingMain.jsx';
import './index.css';
import ProjectDetails from './ProjectDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<App />} />
        <Route path="/project/:projectName" element={<ProjectDetails />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
