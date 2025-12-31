import React, { useEffect, useState } from 'react';
import bannerImage1 from '../images/glacier2.jpg';
import bannerImage2 from '../images/miguel-a-amutio-mIwrx5WitFA-unsplash.jpg';
import bannerImage3 from '../images/mosharraf-hossain-4oihEi2cPPA-unsplash.jpg';
import educationImage from '../images/education logo.png';
import experienceFGFBrandsImage from '../images/fgf.jpg';
import experienceCityTorontoImage from '../images/toronto-logo.png';
import newestexperienceCityTorontoImage from '../images/ai-toronto-logo.png'
import experienceBayviewGlenImage from '../images/bayview_glen_logo.png';
import experienceIdeologicalSystemsImage from '../images/idea.png';
import experienceQuadientCanadaImage from '../images/quadientLogo.png';
import projectsImage from '../images/ecofix_solutions.png';
import volunteerImage from '../images/ymcaLogo.png';
import projectsImage2 from '../images/Galaga.png';
import hoverSound from '../sounds/clickTrim.mp3';
import './Home.css';

const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [bannerImage1, bannerImage2, bannerImage3];
  
  useEffect(() => {
    const setBannerHeight = () => {
      const banner = document.querySelector('.banner-container');
      banner.style.height = `${window.innerHeight}px`;
    };

    setBannerHeight();
    window.addEventListener('resize', setBannerHeight);

    return () => {
      window.removeEventListener('resize', setBannerHeight);
    };
  }, []);

  useEffect(() => {
    if (!isMobileDevice()) {
      const bannerImage = document.querySelector('.banner-image');
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);

      const svgNamespace = "http://www.w3.org/2000/svg";
      const svgElement = document.createElementNS(svgNamespace, "svg");
      svgElement.setAttribute("width", "0");
      svgElement.setAttribute("height", "0");

      const filterElement = document.createElementNS(svgNamespace, "filter");
      filterElement.setAttribute("id", "distortion-filter");

      const turbulence = document.createElementNS(svgNamespace, "feTurbulence");
      turbulence.setAttribute("type", "turbulence");
      turbulence.setAttribute("baseFrequency", "0.02");
      turbulence.setAttribute("numOctaves", "2");
      turbulence.setAttribute("result", "turbulence");

      const displacement = document.createElementNS(svgNamespace, "feDisplacementMap");
      displacement.setAttribute("in", "SourceGraphic");
      displacement.setAttribute("in2", "turbulence");
      displacement.setAttribute("scale", "20");

      filterElement.appendChild(turbulence);
      filterElement.appendChild(displacement);
      svgElement.appendChild(filterElement);
      document.body.appendChild(svgElement);

      const moveCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        const banner = document.querySelector('.banner-container');
        const { top, bottom, left, right } = banner.getBoundingClientRect();

        if (x >= left && x <= right && y >= top && y <= bottom) {
          cursor.style.display = 'block';
          if (bannerImage) {
            bannerImage.style.filter = `url(#distortion-filter)`;
            turbulence.setAttribute("baseFrequency", `${x / window.innerWidth * 0.05} ${y / window.innerHeight * 0.05}`);
          }
        } else {
          cursor.style.display = 'none';
          if (bannerImage) {
            bannerImage.style.filter = 'none';
          }
        }
      };

      document.addEventListener('mousemove', moveCursor);

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        document.body.removeChild(cursor);
        document.body.removeChild(svgElement);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const enableAudioPlayback = () => {
      const handleMouseEnter = () => {
        const audio = new Audio(hoverSound);
        audio.play();
      };

      const sectionContainers = document.querySelectorAll('.section-container');
      sectionContainers.forEach((section) => {
        section.addEventListener('mouseenter', handleMouseEnter);
      });

      document.removeEventListener('click', enableAudioPlayback); // Remove event listener after first click

      return () => {
        sectionContainers.forEach((section) => {
          section.removeEventListener('mouseenter', handleMouseEnter);
        });
      };
    };

    // Add event listener to enable audio playback on first user interaction (click)
    document.addEventListener('click', enableAudioPlayback);

    return () => {
      document.removeEventListener('click', enableAudioPlayback); // Ensure cleanup of event listener
    };
  }, []);

  return (
    <div>
      <section className="banner-container">
        <img src={images[currentImage]} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1 className="banner-name">Nathan Chan</h1>
          <p className="banner-description">Aspiring Computer Scientist & Web Developer</p>
        </div>
      </section>
      
      <section className="section-container">
        <img src={educationImage} alt="Education" className="section-image" />
        <div className="section-text">
          <h2>Education</h2>
          <p>• Bachelor of Science: Computer Science, Sept 2021 – Present, Toronto Metropolitan University (formerly Ryerson), Toronto, ON.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceCityTorontoImage} alt="IT Trainee, COT" className="section-image" />
        <div className="section-text">
          <h3>IT Trainee - Request and Incident management (ITSM), City of Toronto, Toronto, ON, May 2025 – Dec 2025</h3>
            <h4>ServiceNow Catalog &amp; Development</h4>
              <p>• Built and delivered ServiceNow catalog items end-to-end, standardizing request intake and reducing manual handling through structured variables, workflows, and approval processes.</p>
              <p>• Developed ServiceNow request solutions in DEV, documenting work through Agile stories and packaging changes into update sets to support controlled promotion through QA and UAT prior to production deployment.</p>
              <p>• Designed user-friendly ServiceNow request forms by collaborating with cross-functional stakeholders to translate business requirements into clear, usable solutions, reducing friction during request submission.</p>
              <p>• Authored and maintained Business Requirements Documents (BRDs), leading stakeholder meetings, reviews, and demos to refine requirements and iteratively improve catalog items.</p>

              <h4>Incident Analytics &amp; Automation</h4>
              <p>• Analyzed ServiceNow incident data using Excel (PivotTables, Power Query) to identify recurring issues and trends, supporting the creation of knowledge base articles and problem records.</p>
              <p>• Built an offline Python-based data processing pipeline to preprocess high-volume ServiceNow incident data, automating manual ticket review while operating in restricted, no-outbound-connectivity environments to enable privacy-conscious handling and LLM-ready datasets.</p>
        </div>
      </section>

      <section className="section-container">
        <img src={experienceFGFBrandsImage} alt="IT Help Desk Co-op, FGF Brands" className="section-image" />
        <div className="section-text">
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
        <div className="section-text project-text">
          <h2>Academic Projects</h2>
          <h3>Shopping Application, 2024</h3>
          <p>• Developed a shopping application using object-oriented Java with well-documented, efficient, scalable, reliable, and reusable functions and libraries.</p>
          <p>• Leveraged and followed software testing methodologies to ensure the new application runs efficiently and bug-free.</p>
          <a href="https://github.com/NatlC/Client-Reward-Engagement-Web-Portal" target="_blank" rel="noopener noreferrer" className="project-link">
            <img src={projectsImage} alt="Academic Projects" className="project-image-1" />
          </a>
        </div>
        <div className="section-text project-text2">
          <h3>Arcade Game Application, 2021</h3>
          <p>• Developed an interactive arcade-style game with storyboard, mockup, and prototype.</p>
          <p>• Lead bi-weekly team calls with agile project management to ensure development and testing complete on time with good quality and performance.</p>
          <a href="https://github.com/NatlC/Python-Galaga-Game-Dev" target="_blank" rel="noopener noreferrer" className="project-link">
            <img src={projectsImage2} alt="Academic Projects" className="project-image-2" />
          </a>
        </div>
    </section>
    
    </div>
  );
};

export default Home;