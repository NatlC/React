// src/pages/Home.js
import React from 'react';
// import summaryImage from '../images/summary.png';
// import technicalSkillsImage from '../images/technical-skills.png';
import educationImage from '../images/education logo.png';
import experienceFGFBrandsImage from '../images/fgf.jpg';
import experienceCityTorontoImage from '../images/toronto-logo.png';
import experienceBayviewGlenImage from '../images/bayview_glen_logo.png';
import experienceIdeologicalSystemsImage from '../images/idea.png';
import experienceQuadientCanadaImage from '../images/quadientLogo.png';
import projectsImage from '../images/ecofix_solutions.png';
import volunteerImage from '../images/ymcaLogo.png';
import projectsImage2 from '../images/Galaga.png';

const Home = () => {
  return (
    <div>
      {/* <section className="section-container">
        <img src={summaryImage} alt="Summary" className="section-image" />
        <div className="section-text">
          <h2>Summary of Qualifications</h2>
          <p>• One full year of IT service management experience resolving incidents within SLA’s such as Office 365 and business applications. Installed new and supported computers, printers, laptops, phones, and RF guns on different campus and remotely. Daily user account management.</p>
          <p>• Managed confidential company data through customized spreadsheet processing with barcode integration.</p>
          <p>• Demonstrated problem-solving skills by troubleshooting code using test cases, IDE tools, ChatGPT and Stack Overflow.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={technicalSkillsImage} alt="Technical Skills" className="section-image" />
        <div className="section-text">
          <h2>Technical Skills</h2>
          <p>• Computer Languages: Python, Java, C, Bash, HTML, CSS, JavaScript, React, Perl, PHP, MySQL, Asp and Ruby.</p>
          <p>• IT Tools: ServiceNow, Active Directory, Event Viewer, Reliability history, Performance Monitor.</p>
          <p>• Development Tools: GitHub, VSCode, Eclipse, SQL Developer, MySQL Workbench.</p>
          <p>• Microsoft Office Suite: Word, Excel, PowerPoint and Outlook.</p>
          <p>• Video Conference Tools: Teams, Zoom and Webex.</p>
        </div>
      </section> */}

      <section className="section-container">
        <img src={educationImage} alt="Education" className="section-image" />
        <div className="section-text">
          <h2>Education</h2>
          <p>• Bachelor of Science: Computer Science, Sept 2021 – Present, Toronto Metropolitan University (formerly Ryerson), Toronto, ON.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceFGFBrandsImage} alt="IT Help Desk Co-op, FGF Brands" className="section-image" />
        <div className="section-text">
          <h2>Work Experience</h2>
          <h3>IT Help Desk Co-op, FGF Brands, Toronto, ON, May 2023 – May 2024</h3>
          <p>• Diagnosed and resolved hardware and software issues for printers, laptops, phones including Office 365 applications and Windows operating system, utilizing reliability history and performance monitor and event viewer.</p>
          <p>• Utilized active directory to manage user account’s credentials and access permissions for folders, distribution lists and remote desktop connections.</p>
          <p>• Monitored, documented, and responded to requests and incidents within established service level agreements (SLAs) using ServiceNow.</p>
          <p>• Provided both on-site and remote support to users in North America.</p>
          <p>• Configured and migrated Android phones using Intune, including deploying applications via SCCM and monitoring them through Microsoft Azure.</p>
          <p>• Reached out to vendors for warranty support, arranged shipping, and scheduled appointments.</p>
          <p>• Conducted training sessions for end-users on new hardware and best practices.</p>
          <p>• Collaborated with different teams such as IT infrastructure team members to ensure consistent and reliable IT support services.</p>
          <p>• Implemented new office and warehouse expansion project coordinating with infrastructure, networking, procurement, IT project specialists, QA, and maintenance teams to successfully migrate resources from the acquired company, Wonderbrands.</p>
          <p>• User Testimonials: "Outstanding support and quick resolution of our technical issues. Nathan Chan's expertise and dedication have greatly improved our workflow." – Victoria Lau, QA, FGF brands.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceCityTorontoImage} alt="Education Assistant, City of Toronto" className="section-image" />
        <div className="section-text">
          <h3>Education Assistant, City of Toronto, Toronto, ON, May 2022 – Present</h3>
          <p>• Conduct heritage and history training including colonialism. Inspire and entertain visitors to discover the value of the museum.</p>
          <p>• Creatively prepare elementary students for school in the fall with new academic skills.</p>
          <p>• Plan and adapt timetables to different students' interests creatively and daily to promote highly engaged student participation.</p>
          <p>• Attend workshops for program planning – OBPE (Outcome Based Planning and Evaluation) – for future programs.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceBayviewGlenImage} alt="Counselor, Bayview Glen Summer Camp" className="section-image" />
        <div className="section-text">
          <h3>Counselor, Bayview Glen Summer Camp, Toronto, ON, Jul 2021 – Aug 2021</h3>
          <p>• Contact guardians by phone and precisely document guardians’ concerns and camper’s allergies and notify team members with precautions to maintain a safe workplace.</p>
          <p>• Enhanced and analyzed camper’s satisfaction by designing, leading and assigning tasks to staff to run engaging activities.</p>
          <p>• Managed camper’s security by taking attendance; advised the office of absent campers to ensure that the camp runs smoothly and without surprises.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceIdeologicalSystemsImage} alt="Assistant Service Desk Technician, Ideological Systems" className="section-image" />
        <div className="section-text">
          <h3>Assistant Service Desk Technician (Co-op), Ideological Systems, Markham, Feb 2020 – Mar 2020</h3>
          <p>• Customized user profiles, configured windows settings, and installed software for customers.</p>
          <p>• Troubleshooted customers' hardware and software by researching using both company best practices and internet research.</p>
          <p>• Maintained customer inventory in Excel; manipulated unorganized data by using Excel equations features.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceQuadientCanadaImage} alt="Warehouse Worker, Quadient Canada" className="section-image" />
        <div className="section-text">
          <h3>Warehouse Worker, Quadient Canada (formerly Neopost), Markham, ON, Jul 2019 – Aug 2019</h3>
          <p>• Inspected postage meter quality and keyed product numbers into Excel to maintain inventory for clients.</p>
          <p>• Assisted in corporate events by preparing materials for company use.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={volunteerImage} alt="Volunteer Experience" className="section-image" />
        <div className="section-text">
          <h2>Volunteer Experience</h2>
          <h3>Staff Assistant, YMCA, Unionville, ON, Jul 2016 – Jun 2017</h3>
          <p>• Instructed children on how to properly play sports to encourage a fun and safe environment.</p>
          <p>• Informed members of ongoing events at the front desk to promote the YMCA.</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-text">
          <h2>Awards</h2>
          <p>• Dean’s list (2023): 3.5+ GPA.</p>
          <p>• St Robert Catholic High School Academic Achievement Award for Church and Culture, HRE4M1 (2021): Highest grade in the course.</p>
          <p>• YMCA Volunteer Hall of Fame of the month award (2016): Best volunteer of the month.</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-text">
          <h2>Academic Projects</h2>
          <h3>Shopping Application, 2024</h3>
          <p>• Developed a shopping application using object-oriented Java with well-documented, efficient, scalable, reliable, and reusable functions and libraries.</p>
          <p>• Leveraged and followed software testing methodologies to ensure the new application runs efficiently and bug-free.</p>

          <h3>Arcade game Application, 2021</h3>
          <p>• Developed an interactive arcade-style game with storyboard, mockup, and prototype.</p>
          <p>• Lead bi-weekly team calls with agile project management to ensure development and testing complete on time with good quality and performance.</p>
        </div>
      </section>
    
      <section className="section-container projects-section">
        <a href="https://github.com/NatlC/Client-Reward-Engagement-Web-Portal" target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={projectsImage} alt="Academic Projects" className="section-image project-image-2" />
        </a>
        <a href="https://github.com/NatlC/Python-Galaga-Game-Dev" target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={projectsImage2} alt="Academic Projects" className="section-image project-image-2" />
        </a>
      </section>

    </div>
  );
};

export default Home;
