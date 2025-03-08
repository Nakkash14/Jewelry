// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';  // Ensure this is linked correctly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <hr />
        {/* Brand and Newsletter Section */}
        <div className="footer-brand-newsletter">
          <div className="footer-brand">
            <h2>Your Jewelry Brand</h2>
            <p>Exquisite pieces crafted for elegance and timeless beauty.</p>
          </div>

          {/* Subscribe Section */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Join our newsletter for exclusive offers, news, and updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Us</h4>
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-column">
            <h4>Need Help?</h4>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest"></i> Pinterest
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 Your Jewelry Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;