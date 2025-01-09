// // // HomePage.js
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const HomePage = () => {
// //   return (
// //     <div>
// //       <h2>Welcome to Our Jewelry Store</h2>
      
// //       {/* Link for navigating to Sign In page */}
// //       <Link to="/signin">
// //         <button>Go to Sign In</button>
// //       </Link>
      
// //       {/* Link for navigating to Sign Up page */}
// //       <Link to="/signup">
// //         <button>Go to Sign Up</button>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default HomePage;








// ////////////////

// // import React from 'react';
// // import './HomePage.css';
// // import { Link } from 'react-router-dom';
// // import Ring from '../Images/Ring.jpeg';
// // import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// // import Necklace from '../Images/Necklace.jpeg';
// // import Background_HomePage from '../Images/Background_HomePage.jpeg';

// // const HomePage = () => {
// //   return (
// //     <div className="homepage">
// //       {/* Navigation Menu */}
// //       <nav className="navbar">
// //         <div className="logo">
// //           <h1>Jewelry Store</h1>
// //         </div>
// //         <ul className="nav-links">
// //           <li><Link to="/shop">Shop</Link></li>
// //           <li><Link to="/about">About</Link></li>
// //           <li><Link to="/contact">Contact</Link></li>
// //           <li><Link to="/signin">Sign In</Link></li>
// //         </ul>
// //       </nav>

// //       {/* Hero Section */}
// //       <section
// //         className="hero"
// //         style={{ backgroundImage: `url(${Background_HomePage})` }}  // Dynamically set background image
// //       >
// //         <div className="hero-content">
// //           <h1>Elegance in Every Piece</h1>
// //           <p>Discover timeless beauty with our exquisite collection</p>
// //           <Link to="/shop" className="cta-btn">Shop Now</Link>
// //         </div>
// //       </section>

// //       {/* Jewelry Categories Section */}
// //       <section className="jewelry-categories">
// //         <h2>Browse Our Categories</h2>
// //         <div className="category-list">
// //           <div className="category-card">
// //             <img src={Ring} alt="Rings" />
// //             <h3>Rings</h3>
// //             <div className="category-btn-wrapper">
// //               <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
// //             </div>
// //           </div>

// //           <div className="category-card">
// //             <img src={Necklace} alt="Necklaces" />
// //             <h3>Necklaces</h3>
// //             <div className="category-btn-wrapper">
// //               <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
// //             </div>
// //           </div>

// //           <div className="category-card">
// //             <img src={Silver_Bracelet} alt="Bracelets" />
// //             <h3>Bracelets</h3>
// //             <div className="category-btn-wrapper">
// //               <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Us Section */}
// //       <section className="about-us">
// //         <h2>About Us</h2>
// //         <p>We are passionate about bringing high-quality, elegant jewelry to our customers. Our jewelry is crafted to perfection with timeless designs.</p>
// //         <Link to="/about" className="cta-btn">Learn More</Link>
// //       </section>

// //       {/* Contact Us Section */}
// //       <section className="contact-us">
// //         <h2>Get in Touch</h2>
// //         <p>If you have any questions or inquiries, don't hesitate to reach out to us. We're here to help!</p>
// //         <Link to="/contact" className="cta-btn">Contact Us</Link>
// //       </section>

// //       {/* Footer Section */}
// //       <footer className="footer">
// //         <div className="social-links">
// //           <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
// //           <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
// //           <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
// //         </div>
// //         <p>&copy; 2025 Jewelry Store. All Rights Reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default HomePage;

// /////////////////

// import React, { useState } from 'react';
// import './HomePage.css';
// import { Link } from 'react-router-dom';
// import Ring from '../Images/Ring.jpeg';
// import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// import Necklace from '../Images/Necklace.jpeg';
// import Background_HomePage from '../Images/Background_HomePage.jpeg';

// const HomePage = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="homepage">
//       {/* Navigation Menu */}
//       <nav className="navbar">
//         <div className="logo">
//           <h1>Jewelry Store</h1>
//           <div>
//             {/* Navigation Links */}
//             <ul>
//               <li><a href="#home">Home</a></li>
//               <li><a href="#about">About</a></li>
//               <li><a href="#services">Services</a></li>
//               <li><a href="#contact">Contact</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Hamburger Menu (Only visible on mobile/tablet) */}
//         <div className="hamburger-menu" onClick={toggleSidebar}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </nav>

//       {/* Sidebar Menu (Only visible on mobile/tablet when hamburger menu is clicked) */}
//       <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/shop">Shop</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/signin">Sign In</Link></li>
//         </ul>
//       </div>

//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${Background_HomePage})` }}
//       >
//         <div className="hero-content">
//           <h1>Elegance in Every Piece</h1>
//           <p>Explore our timeless collection of jewelry</p>
//           <Link to="/shop" className="cta-btn">Shop Now</Link>
//         </div>
//       </section>

//       {/* Jewelry Categories Section */}
//       <section className="jewelry-categories">
//         <h2>Jewelry Categories</h2>
//         <div className="category-list">
//           <div className="category-card">
//             <img src={Ring} alt="Rings" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Silver_Bracelet} alt="Bracelets" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Necklace} alt="Necklaces" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="about-us">
//         <h2>About Us</h2>
//         <p>We are a premier jewelry store offering a wide variety of exquisite pieces. Our mission is to provide timeless, high-quality jewelry for every occasion.</p>
//         <Link to="/about" className="cta-btn">Learn More</Link>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div>
//             <p>&copy; 2025 Jewelry Store. All Rights Reserved.</p>
//             <ul className="social-links">
//                 <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
//                 <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
//                 <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
//             </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


////////////////////////////



import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Ring from '../Images/Ring.jpeg';
import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
import Necklace from '../Images/Necklace.jpeg';
import Background_HomePage from '../Images/Background_HomePage.jpeg';

const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="homepage">
      {/* Navigation Menu */}
      <nav className="navbar">
        <div className="logo">
          <h1>Jewelry Store</h1>
        </div>

        {/* Navigation Links (Visible only on desktop) */}
        <div className="nav-links">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign In</Link>
        </div>

        {/* Hamburger Menu (Visible only on mobile/tablet) */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Sidebar Menu (Only visible on mobile/tablet when hamburger menu is clicked) */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${Background_HomePage})` }}
      >
        <div className="hero-content">
          <h1>Elegance in Every Piece</h1>
          <p>Explore our timeless collection of jewelry</p>
          <Link to="/shop" className="cta-btn">Shop Now</Link>
        </div>
      </section>

      {/* Jewelry Categories Section */}
      <section className="jewelry-categories">
        <h2>Jewelry Categories</h2>
        <div className="category-list">
          <div className="category-card">
            <img src={Ring} alt="Rings" />
            <div className="category-btn-wrapper">
              <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={Silver_Bracelet} alt="Bracelets" />
            <div className="category-btn-wrapper">
              <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={Necklace} alt="Necklaces" />
            <div className="category-btn-wrapper">
              <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>We are a premier jewelry store offering a wide variety of exquisite pieces. Our mission is to provide timeless, high-quality jewelry for every occasion.</p>
        <Link to="/about" className="cta-btn">Learn More</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div>
            <p>&copy; 2025 Jewelry Store. All Rights Reserved.</p>
            <ul className="social-links">
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
