// src/pages/About.js
import React from 'react';
import './About.css';
import profileImage from '../images/budgetMe.png';
import cover from '../images/Nathan_Album_Cover.jpg';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <img src={profileImage} alt="Me" className="profile-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Fourth-year Computer Science Co-op student at TMU. As an IT Technician for one year,
            I diagnosed hardware and software issues, managed user accounts, monitored SLAs, 
            trained users, and collaborated with infrastructure and procurement for expansion projects.
          </p>
          <p>
            Proficient in programming languages: Python, Java, and C. Web development languages: 
            HTML, CSS, Bootstrap, Javascript, Jquery, Perl, PHP, MySQL, Classic ASP, Python/CGI, and Ruby/CGI. 
            Adobe Photoshop.
          </p>
          <p>
            I am always learning new technologies and contributing to the industry.
          </p>
        </div>
      </div>
      <img src={cover} alt="cover" className="cover-image" />
    </section>
  );
};

export default About;
