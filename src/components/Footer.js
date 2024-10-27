// Footer.js
import React from 'react';
import './Footer.css'; // Import custom CSS for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section 1: Brand or About */}
        <div className="footer-section about">
          <h3>CocoClarity</h3>
          <p>
            Elevating efficiency and sustainability in coconut oil manufacturing with innovative strategies and solutions.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Information */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:researchcoco@gmail.com">researchcoco@gmail.com</a></p>
          <p>Phone: +94 77 456 3866</p>
          <p>Location: 123 Coconut Lane, Colombo, Sri Lanka</p>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 CocoClarity. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
