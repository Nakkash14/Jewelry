// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   FaInstagram, FaFacebookF, FaPinterestP,
//   FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
// } from "react-icons/fa";
// import { motion, useInView } from 'framer-motion';
// import './Footer.css';

// const Footer = () => {
//   const [openSections, setOpenSections] = useState({
//     about: false,
//     help: false,
//     connect: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const footerRef = useRef(null);
//   const isInView = useInView(footerRef, { once: true });

//   return (
//     <footer className="footer" ref={footerRef}>
//       <div className="footer-container">
//         <hr />

//         {/* Brand & Newsletter */}
//         <motion.div
//           className="footer-brand-newsletter"
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="footer-brand">
//             <h2>Jewelry</h2>
//             <p>Exquisite craftsmanship for timeless beauty.</p>
//           </div>

//           <div className="footer-newsletter">
//             <h4>Stay Updated</h4>
//             <p>Get exclusive offers, new arrivals & updates.</p>
//             <form className="newsletter-form">
//               <input type="email" placeholder="Your email address" required />
//               <button type="submit">Subscribe</button>
//             </form>
//           </div>
//         </motion.div>

//         {/* Footer Links */}
//         <div className="footer-links">
//           {/* ABOUT */}
//           <motion.div
//             className="footer-column"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="footer-header mobile-only" onClick={() => toggleSection('about')}>
//               <h4>About Us</h4>
//               <span className="toggle-icon">{openSections.about ? '-' : '+'}</span>
//             </div>
//             <div className={`footer-links-list ${openSections.about ? 'open' : ''}`}>
//               <Link to="/about">Our Story</Link>
//               <Link to="/faq">FAQ</Link>
//             </div>
//           </motion.div>

//           {/* NEED HELP */}
//           <motion.div
//             className="footer-column"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <div className="footer-header mobile-only" onClick={() => toggleSection('help')}>
//               <h4>Need Help?</h4>
//               <span className="toggle-icon">{openSections.help ? '-' : '+'}</span>
//             </div>
//             <div className={`footer-links-list ${openSections.help ? 'open' : ''}`}>
//               <Link to="/contact">
//                 <FaPhoneAlt /> Contact Us
//               </Link>
//               <Link to="/support">
//                 <FaEnvelope /> Email Support
//               </Link>
//             </div>
//           </motion.div>

//           {/* CONNECT */}
//           <motion.div
//             className="footer-column"
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <div className="footer-header mobile-only" onClick={() => toggleSection('connect')}>
//               <h4>Connect</h4>
//               <span className="toggle-icon">{openSections.connect ? '-' : '+'}</span>
//             </div>
//             <div className={`footer-links-list ${openSections.connect ? 'open' : ''}`}>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram /> Instagram
//               </a>
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF /> Facebook
//               </a>
//               <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
//                 <FaPinterestP /> Pinterest
//               </a>
//               <p className="address">
//                 <FaMapMarkerAlt /> 123 Luxury Street, Paris
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <motion.div
//         className="footer-bottom"
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : {}}
//         transition={{ duration: 0.6, delay: 0.8 }}
//       >
//         <p>© 2025 Jewelry. All Rights Reserved.</p>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram, FaFacebookF, FaPinterestP,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
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
      [section]: !prev[section],
    }));
  };

  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        {/* <hr /> */}

        {/* Brand & Newsletter */}
        <motion.div
          className="footer-brand-newsletter"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h2>Jewelry</h2>
            <p>Exquisite craftsmanship for timeless beauty.</p>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get exclusive offers, new arrivals & updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="footer-links">
          {/* ABOUT US */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="footer-header mobile-only" onClick={() => toggleSection('about')}>
              <h4>About Us</h4>
              <span className="toggle-icon">{openSections.about ? '-' : '+'}</span>
            </div>
            <div className={`footer-links-list ${openSections.about ? 'open' : ''}`}>
              <Link to="/about">Our Story</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </motion.div>

          {/* NEED HELP */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>

          {/* CONNECT */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
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
          </motion.div>

          {/* OUR MISSION */}
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="footer-mission">
              <h4>Our Mission</h4>
              <p>
                At Jewelry, we believe that elegance is eternal. Our mission is to craft timeless pieces that celebrate individuality and sophistication.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <p>© 2025 Jewelry. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
