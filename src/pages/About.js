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
            I’m a ServiceNow-focused IT professional with hands-on experience supporting IT Service Management (ITSM) functions, 
            including request fulfillment, incident analysis, and problem management.
          </p>
          <p>
            In my most current role, I build and enhance ServiceNow catalog and request solutions in DEV, supporting testing through 
            QA and UAT before production release. I work closely with stakeholders to translate requirements into clear, usable 
            request forms and structured workflows, with an emphasis on usability, consistency, and maintainability.
          </p>
          <p>
            Alongside platform work, I have a strong interest in automation and data processing. I’ve built an offline Python-based 
            pipeline to preprocess and sanitize ServiceNow incident data in restricted, privacy-conscious environments, preparing 
            datasets for downstream analysis and AI-assisted review. This experience has strengthened my approach to problem-solving, 
            data quality, and working within real-world security constraints.
          </p>
          <p>
            I enjoy roles that sit at the intersection of systems, process, and code — where thoughtful design and automation 
            can meaningfully improve how services are delivered and supported. I’m particularly interested in opportunities 
            related to ServiceNow development, ITSM platforms, and automation-focused IT or early-career software roles.
          </p>
        </div>
      </div>
      <img src={cover} alt="cover" className="cover-image" />
    </section>
  );
};

export default About;
