import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="projects-heading4">Explore My</h4>
      <h1 className="projects-heading1">Projects</h1>

      {/* Connect+ Project */}
      <div className="projects-connect-plus">
        <h2 className="project-title">
          <FaProjectDiagram /> Connect+
        </h2>
        <h3 className="project-description">
          Connect+ is a dynamic web application designed to enhance student learning. It provides a range of features including community forums, private messaging, and video conferencing, creating a nurturing environment that promotes academic achievement and prioritizes accessibility.
        </h3>
      </div>

      {/* Vitamin Deficiency Detection Project */}
      <div className="projects-vitamin-detection">
        <h2 className="project-title">
          <FaProjectDiagram /> Vitamin Deficiency Detection
        </h2>
        <h3 className="project-description">
          A non-invasive approach employs machine learning to analyze images of the eyes, lips, tongue, and nails to detect vitamin deficiencies. This method could serve as a cost-effective and accessible alternative to conventional blood tests for screening purposes.
        </h3>
        <ul className="project-details">
          <li>Developed a Flask-based web application that integrates image classification and clustering functionalities for efficient image processing.</li>
          <li>Implemented a user authentication system with registration and login features, allowing secure access for image uploads.</li>
          <li>Utilized a TensorFlow-based pre-trained model to classify images, enabling accurate prediction of labels such as vitamin deficiencies after preprocessing and normalization.</li>
          <li>Leveraged technologies like Flask, TensorFlow, OpenCV, Matplotlib, and MySQL to build a robust system that combines machine learning and web development for accurate image insight.</li>
        </ul>
      </div>

      {/* Movie Listing App Project */}
      <div className="projects-movie-listing">
        <h2 className="project-title">
          <FaProjectDiagram /> Movie Listing App
        </h2>
        <h3 className="project-description">
          Built a dynamic and responsive web application using React.js, allowing users to search and explore movies via the OMDb API.
        </h3>
        <ul className="project-details">
          <li>Integrated advanced features like pagination, real-time search validation, and dynamic routing for movie details using React Router.</li>
          <li>Designed a Favorites management system leveraging localStorage, enabling users to save and access preferred movies persistently across sessions.</li>
          <li>Optimized application performance and user experience through efficient API calls, error handling, and mobile-first responsive design.</li>
          <li>Deployed the application on Netlify, ensuring seamless access and cross-device compatibility.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
