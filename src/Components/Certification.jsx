import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './Certification.css';

const Certification = () => {
  return (
    <div className="certification">
      <h4 className="certification-heading4">Achieved Excellence In</h4>
      <h1 className="certification-heading1">Certifications</h1>

      <div className="certification-container">
        {/* AWS Cloud Computing Certification */}
        <div className="certification-box">
          <h3 className="certification-box-heading">
            <FaCertificate /> AWS Cloud Computing
          </h3>
          <div className="certification-item">
            <h3 className="certification-title">
              Cognizant Foundation Program - Tech4all by Cognizant Foundation
              <br />
              <br />
              Implemented by ICT ACADAEMY
            </h3>
          </div>
          {/* View Certificate Button */}
          <div className="buttons">
            <Link to="/aws.pdf" target="_blank">
              <button className="view-certificate-button">View Certificate</button>
            </Link>
          </div>
        </div>

        {/* Machine Learning with Python Certification */}
        <div className="certification-box">
          <h3 className="certification-box-heading">
            <FaCertificate /> Machine Learning with Python
          </h3>
          <div className="certification-item">
            <h3 className="certification-title">
              Datapy
            </h3>
          </div>
          {/* View Certificate Button */}
          <div className="buttons">
            <Link to="/datapy.pdf" target="_blank">
              <button className="view-certificate-button">View Certificate</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
