// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Disable page scrolling when the sidebar is open
//   useEffect(() => {
//     if (isSidebarOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//   }, [isSidebarOpen]);

//   // Close the sidebar when a link is clicked
//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="navbar-container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="logo">
//           <h1>Jewelry Store</h1>
//         </div>

//         {/* Navigation Links (Visible only on desktop) */}
//         <div className="nav-links">
//           <Link to="/" onClick={closeSidebar}>Home</Link>
//           <Link to="/shop" onClick={closeSidebar}>Shop</Link>
//           <Link to="/about" onClick={closeSidebar}>About</Link>
//           <Link to="/contact" onClick={closeSidebar}>Contact</Link>
//           <Link to="/signin" onClick={closeSidebar}>Sign In</Link>
//           <Link to="/signup" onClick={closeSidebar}>Sign Up</Link>
//         </div>

//         {/* Hamburger Menu (Visible only on mobile/tablet) */}
//         <div className="hamburger-menu" onClick={toggleSidebar}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </nav>

//       {/* Sidebar Menu (Only visible on mobile/tablet when hamburger menu is clicked) */}
//       <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
//           <li><Link to="/shop" onClick={closeSidebar}>Shop</Link></li>
//           <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
//           <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
//           <li><Link to="/signin" onClick={closeSidebar}>Sign In</Link></li>
//           <li><Link to="/signup" onClick={closeSidebar}>Sign Up</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Disable page scrolling when the sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen]);

  // Close the sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h1>Jewelry Store</h1>
        </div>

        {/* Navigation Links (Visible only on desktop) */}
        <div className="nav-links">
          <Link to="/" onClick={closeSidebar}>Home</Link>
          <Link to="/shop" onClick={closeSidebar}>Shop</Link>
          <Link to="/about" onClick={closeSidebar}>About</Link>
          <Link to="/contact" onClick={closeSidebar}>Contact</Link>
          <Link to="/signin" onClick={closeSidebar}>Sign In</Link>
          <Link to="/signup" onClick={closeSidebar}>Sign Up</Link>
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
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/shop" onClick={closeSidebar}>Shop</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
          <li><Link to="/signin" onClick={closeSidebar}>Sign In</Link></li>
          <li><Link to="/signup" onClick={closeSidebar}>Sign Up</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;