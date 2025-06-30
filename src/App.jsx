import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './index.css';
import './css/Header.css';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Track mouse position
  const [flipped, setFlipped] = useState(false); // Track if the running man should be flipped

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY }); // Update mouse position
      setFlipped(e.clientX < position.x); // Flip if moving left
    };

    window.addEventListener('mousemove', handleMouseMove); // Add event listener

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Cleanup
    };
  }, [position.x]);

  return (
    <Router>
      <div>
        {/* Running Man Animation */}
        <div
          className={`running-man ${flipped ? 'flipped' : ''}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>

        {/* Header and Routes */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;