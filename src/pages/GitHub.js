// src/pages/GitHub.js
import React from 'react';

const GitHub = () => {
  return (
    <section id="github">
      <h2>GitHub Projects</h2>
      <ul className="project-list">
        <li>
          <h3>Personal Portfolio Website</h3>
          <p>A website to showcase my projects, skills, and contact information.</p>
          <a href="https://github.com/yourusername/portfolio">GitHub Repository</a>
        </li>
        <li>
          <h3>Chat Application</h3>
          <p>A real-time chat application using WebSocket and Node.js.</p>
          <a href="https://github.com/yourusername/chat-app">GitHub Repository</a>
        </li>
        <li>
          <h3>Todo List App</h3>
          <p>A simple and intuitive todo list application using React and Redux.</p>
          <a href="https://github.com/yourusername/todo-app">GitHub Repository</a>
        </li>
        <li>
          <h3>Machine Learning Model</h3>
          <p>A machine learning model to predict housing prices using Python and Scikit-learn.</p>
          <a href="https://github.com/yourusername/ml-model">GitHub Repository</a>
        </li>
      </ul>
    </section>
  );
};

export default GitHub;
