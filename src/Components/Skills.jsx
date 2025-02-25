import React from 'react';
import { FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h4 className="skills-heading4">My Core</h4>
      <h1 className="skills-heading1">Skills</h1>

      <div className="skills-technical">
        <h2 className="skills-title">
          <FaTools /> Technical Skills
        </h2>
        <div className="skills-list">
          <h3 className="skills-category">Languages:</h3>
          <ul className="skills-items">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Basics of C programming,Python</li>
             <li>SQL</li>

          </ul>

          <h3 className="skills-category">Libraries & Frameworks:</h3>
          <ul className="skills-items">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>Bootstrap </li>
            
          </ul>

          <h3 className="skills-category">Tools & Platforms:</h3>
          <ul className="skills-items">
            <li>GitHub</li>
            <li>Jira</li>
            <li>Netify</li>
            <li>Power BI</li>
            <li>Vercel</li>
            <li>VSCode</li>
          </ul>
        </div>
      </div>

      <div className="skills-soft">
        <h2 className="skills-title">
          <FaTools /> Soft Skills
        </h2>
        <div className="skills-list">

          <ul className="skills-items">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Quick Learning</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
