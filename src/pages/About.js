// src/pages/About.js
import React from 'react';
import profileImage from '../images/budgetMe.png';

const About = () => {
  return (
    <section id="about" className="about-container">
      <img src={profileImage} alt="Me" className="profile-image" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>Fourth-year Computer Science Co-op student at TMU.</p>
        <p>As an IT Technician for one year, I diagnosed hardware and software issues, managed user accounts, monitored SLAs, trained users, and collaborated with infrastructure and procurement for expansion projects.</p>
        <p>Proficient in programming languages: Python, Java, and C.</p>
        <p>Web development languages: HTML, CSS, Bootstrap, Javascript, Jquery, Perl, PHP, MySQL, Classic ASP, Python/CGI, and Ruby/CGI. Adobe Photoshop</p>
        <p>I am always learning new technologies and contributing to the industry.</p>
      </div>
    </section>
  );
};

export default About;
