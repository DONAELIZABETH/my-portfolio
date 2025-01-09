import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer',
      role: 'Intern',
      company: 'Mashuptech, Infopark Technology Business Center',
      duration: 'Sept 2024 - Present',
      description:
        'Collaborated on building scalable full-stack web applications using MongoDB, Express, React, and Node.js. Focused on creating responsive user interfaces and API integrations.',
    },
    {
      title: 'Python Developer',
      role: 'Intern',
      company: 'Data Py (Remote)',
      duration: 'May 2024 - sept 2024',
      description:
        'Developed Python scripts for data analysis and automation tasks. Worked on REST API development and backend logic enhancements.',
    }
  ];

  return (
    <div className="experience">
      <h4 className="experience-heading4">Career Journey</h4>
      <h1 className="experience-heading1">Experience</h1>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h2 className="experience-title">
            <FaBriefcase /> {exp.title}
          </h2>
          <h3 className="experience-role">{exp.role} | {exp.company}</h3>
          <h4 className="experience-duration">{exp.duration}</h4>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
