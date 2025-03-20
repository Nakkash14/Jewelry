import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css'; 

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    help: false,
    connect: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle between open and closed
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <hr />

        {/* Brand & Newsletter */}
        <div className="footer-brand-newsletter">
          <div className="footer-brand">
            <h2>Jewelry</h2>
            <p>Exquisite craftsmanship for timeless beauty.</p>
          </div>

          {/* Subscribe Section */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get exclusive offers, new arrivals & updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          {/* ABOUT US (Collapsible on Mobile) */}
          <div className="footer-column">
            <div className="footer-header mobile-only" onClick={() => toggleSection('about')}>
              <h4>About Us</h4>
              <span className="toggle-icon">{openSections.about ? '-' : '+'}</span>
            </div>
            <div className={`footer-links-list ${openSections.about ? 'open' : ''}`}>
              <Link to="/about">Our Story</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          {/* NEED HELP (Collapsible on Mobile) */}
          <div className="footer-column">
            <div className="footer-header mobile-only" onClick={() => toggleSection('help')}>
              <h4>Need Help?</h4>
              <span className="toggle-icon">{openSections.help ? '-' : '+'}</span>
            </div>
            <div className={`footer-links-list ${openSections.help ? 'open' : ''}`}>
              <Link to="/contact">
                <FaPhoneAlt /> Contact Us
              </Link>
              <Link to="/support">
                <FaEnvelope /> Email Support
              </Link>
            </div>
          </div>

          {/* CONNECT (Collapsible on Mobile) */}
          <div className="footer-column">
            <div className="footer-header mobile-only" onClick={() => toggleSection('connect')}>
              <h4>Connect</h4>
              <span className="toggle-icon">{openSections.connect ? '-' : '+'}</span>
            </div>
            <div className={`footer-links-list ${openSections.connect ? 'open' : ''}`}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF /> Facebook
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaPinterestP /> Pinterest
              </a>
              <p className="address">
                <FaMapMarkerAlt /> 123 Luxury Street, Paris
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Jewelry. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
