import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>&copy; {new Date().getFullYear()} Aditya (Ruben) Prasad</div>
        <a
          href="https://github.com/adi-pr/cv-application"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: 'white' }} className="rotate-on-hover"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
