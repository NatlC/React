import React from 'react';
import { Link } from 'react-router-dom';
import pdfResume from '../assets/2025 Nathan chan resume.pdf'; // Adjust the path to your PDF file

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <a href={pdfResume} target="_blank" rel="noopener noreferrer">Resume</a> {/* Link to the PDF resume */}
      <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/NatlC" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
  );
};

export default Navigation;
