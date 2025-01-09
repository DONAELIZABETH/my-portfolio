import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading1">Contact</h2>
      <p className="contact-heading4">Feel free to reach out to me via any of the platforms below:</p>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://wa.me/918078476637" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/dona-elizabeth-saji" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/DONAELIZABETH" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

    
    </section>
  );
};

export default Contact;
