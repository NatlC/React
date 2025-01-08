// src/components/Navigation.js
import React from 'react';
// import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/github">GitHub</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
};

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }

export default Navigation;

