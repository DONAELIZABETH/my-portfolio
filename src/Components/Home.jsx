import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const add = 'Hello... I am';
  const mail = 'Dona Elizabeth Saji';
  const num = 'MERN Stack Developer';

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <img className="home-img" src="/img2.jpg" alt="Dona Elizabeth Saji" />
        <div className="head">
          <h3 className="home-heading3">{add}</h3>
          <h1 className="home-heading1">{mail}</h1>
          <h2 className="home-heading2">{num}</h2>
          <div className="buttons">
            <Link to="/Cv.pdf" target="_blank" download>
              <button className="downloadcv-button">Download CV</button>
            </Link>
            <Link to="/contact">
              <button className="contact-button">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
