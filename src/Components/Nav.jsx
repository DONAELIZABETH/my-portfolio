import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark-mode';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <h1 className="logo">Dona Elizabeth Saji</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/certification">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Nav;
