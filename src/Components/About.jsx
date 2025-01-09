import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-overlay"></div>
      <h4 className="about-heading4">Get to know <br /> more</h4>
      <h1 className="about-heading1">About Me</h1>
      <div className="about-content">
        <img className="about-img" src="/img1.jpg" alt="Profile" />
        <p className="about-paragraph">
          MERN Stack Web Designer and Developer with a strong aptitude for self-directed learning. Specializing in
          the creation of visually appealing, responsive, and accessible web applications, I prioritize high scalability
          and reliability. Committed to lifelong learning and embracing new challenges, I consistently seek
          opportunities for continuous growth and improvement.
        </p>
      </div>
    </div>
  );
};

export default About;
