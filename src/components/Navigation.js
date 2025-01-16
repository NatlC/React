import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pdfResume from '../assets/2025 Nathan chan resume.pdf'; // Adjust the path to your PDF file
import './Navigation.css'; // Ensure you have a corresponding CSS file

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={toggleDropdown}>
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <a href={pdfResume} target="_blank" rel="noopener noreferrer">Resume</a> {/* Link to the PDF resume */}
        <a href="https://www.linkedin.com/in/nathanl-chan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/NatlC" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
};

export default Navigation;
