// Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <h3>Education</h3>
      <ul className="education-list">
        <li>
          <h4>XYZ University</h4>
          <p>Bachelor of Science in Computer Science, 2021 - Present</p>
        </li>
        <li>
          <h4>ABC High School</h4>
          <p>High School Diploma, 2017 - 2021</p>
        </li>
      </ul>
      <h3>Experience</h3>
      <ul className="experience-list">
        <li>
          <h4>Software Development Intern</h4>
          <p>Company Name, Summer 2024</p>
          <p>Developed web applications using React and Node.js.</p>
        </li>
        <li>
          <h4>Teaching Assistant</h4>
          <p>XYZ University, 2023 - Present</p>
          <p>Assisted in teaching introductory programming courses.</p>
        </li>
      </ul>
      <h3>Skills</h3>
      <ul className="skill-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Python</li>
        <li>Java</li>
        <li>Data Structures and Algorithms</li>
        <li>Database Management</li>
      </ul>
    </section>
  );
};

export default Resume;
