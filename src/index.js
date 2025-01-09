// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const handleScroll = () => {
  const sections = document.querySelectorAll('.section-container');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.8;
    if (sectionTop < triggerBottom) {
      section.classList.add('scroll-in');
    }
  });
};

window.addEventListener('scroll', handleScroll);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
