import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import GitHub from './GitHub';
import Resume from './Resume';
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Computer Science Portfolio</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/github">GitHub</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <footer>
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
