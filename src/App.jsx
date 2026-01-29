import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SimulationBasics from './pages/SimulationBasics';
import LearningHub from './pages/LearningHub';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router basename="/simulation_hub">
      <div className="app-wrapper" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Placeholder routes for now */}
            <Route path="/about" element={<About />} />
            <Route path="/basics" element={<SimulationBasics />} />
            <Route path="/learning" element={<LearningHub />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer style={{
          padding: '60px 0',
          backgroundColor: 'var(--primary-deep)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container">
            <p>© 2026 Simulation Hub - Simulate. Understand. Innovate.</p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="https://www.facebook.com/mat.Simulation.Hub/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
