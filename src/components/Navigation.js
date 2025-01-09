// src/components/Navigation.js
// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <a href="https://www.linkedin.com/in/nathanl-chan/overlay/1735796127893/single-media-viewer/?profileId=ACoAADlZSjYBCcpr5Fs6s2rUr7DKhKfPTM3jb_g" target="_blank" rel="noopener noreferrer">Resume</a>
    </nav>
  );
};

export default Navigation;
