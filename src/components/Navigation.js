// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import pdfResume from '../assets/2025 Nathan chan resume.pdf'; // Adjust the path to your PDF file

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <a href={pdfResume} target="_blank" rel="noopener noreferrer">Resume</a> {/* Link to the PDF resume */}
    </nav>
  );
};

export default Navigation;
