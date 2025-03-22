// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

//   // Function to toggle the sidebar (hamburger menu)
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Function to toggle account dropdown
//   const toggleAccountDropdown = () => {
//     setAccountDropdownOpen(!isAccountDropdownOpen);
//   };

//   // Disable page scrolling when the sidebar or account dropdown is open
//   useEffect(() => {
//     if (isSidebarOpen || isAccountDropdownOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//   }, [isSidebarOpen, isAccountDropdownOpen]);

//   // Close the sidebar when a link is clicked
//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   // Close the account dropdown when a link is clicked
//   const closeAccountDropdown = () => {
//     setAccountDropdownOpen(false);
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
//           <Link to="/shop" onClick={closeSidebar}>Personalize</Link>
//           <Link to="/about" onClick={closeSidebar}>Story</Link>
//           <Link to="/contact" onClick={closeSidebar}>Contact</Link>
//           <Link to="#" onClick={closeSidebar}>Categories</Link>
//         </div>

//         {/* Account Icon (Desktop Only) */}
//         <div className="account-icon" onClick={toggleAccountDropdown}>
//           <i className="fa fa-user"></i>
//         </div>

//         {/* Hamburger Menu (Mobile Only) */}
//         <div className="hamburger-menu" onClick={toggleSidebar}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </nav>

//       {/* Account Dropdown (Desktop Only) */}
//       <div className={`account-dropdown ${isAccountDropdownOpen ? 'active' : ''}`}>
//         <div className="account-text">
//           If you have an account with us, you can buy jewelry
//         </div>
//         <div className="account-buttons">
//           <Link to="/signin" onClick={closeAccountDropdown}>
//             <i className="fa fa-sign-in"></i> Sign In
//           </Link>
//           <Link to="/signup" onClick={closeAccountDropdown}>
//             <i className="fa fa-user-plus"></i> Create Account
//           </Link>
//           <Link to="/userprofile" onClick={closeAccountDropdown}>
//             <i className="fa fa-cogs"></i> Profile Settings
//           </Link>
//           <Link to="/logout" onClick={closeAccountDropdown}>
//             <i className="fa fa-sign-out-alt"></i> Logout
//           </Link>
//         </div>
//       </div>

//       {/* Sidebar Menu (Mobile) */}
//       <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
//           <li><Link to="/shop" onClick={closeSidebar}>Shop</Link></li>
//           <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
//           <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
//           <li></li>
//           <li><Link to="/userprofile" onClick={closeSidebar}>Profile Setings</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;













































// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
//   const toggleAccountDropdown = () => setAccountDropdownOpen(!isAccountDropdownOpen);

//   useEffect(() => {
//     if (isSidebarOpen || isAccountDropdownOpen) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//   }, [isSidebarOpen, isAccountDropdownOpen]);

//   return (
//     <header className="navbar-container">
//       <nav className="navbar">
//         <div className="nav-left">
//           <div className="logo">
//             <h1>Jewelry</h1>
//           </div>
//         </div>

//         <div className="nav-right">
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/shop">Shop</Link></li>
//             <li><Link to="/collections">Collections</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>

//           <div className="nav-icons">
//             <div className="account-icon" onClick={toggleAccountDropdown}>
//               <i className="fa fa-user"></i>
//             </div>
//             <div className="hamburger-menu" onClick={toggleSidebar}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar (Mobile Menu) */}
//       <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
//           <li><Link to="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link></li>
//           <li><Link to="/collections" onClick={() => setSidebarOpen(false)}>Collections</Link></li>
//           <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
//         </ul>
//       </div>

//       {/* Account Dropdown */}
//       <div className={`account-dropdown ${isAccountDropdownOpen ? 'active' : ''}`}>
//         <div className="account-menu">
//           <p>Welcome to Jewelry</p>
//           <Link to="/signin" onClick={() => setAccountDropdownOpen(false)}>Sign In</Link>
//           <Link to="/signup" onClick={() => setAccountDropdownOpen(false)}>Create Account</Link>
//           <Link to="/profile" onClick={() => setAccountDropdownOpen(false)}>Profile</Link>
//           <Link to="/logout" onClick={() => setAccountDropdownOpen(false)}>Logout</Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


























import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleAccountDropdown = () => setAccountDropdownOpen(!isAccountDropdownOpen);

  useEffect(() => {
    if (isSidebarOpen || isAccountDropdownOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen, isAccountDropdownOpen]);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <h1>Jewelry</h1>
          </div>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-icons">
            <div className="account-icon" onClick={toggleAccountDropdown}>
              <i className="fa fa-user"></i>
            </div>
            <div className="hamburger-menu" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setSidebarOpen(false)}>Shop</Link></li>
          <li><Link to="/collections" onClick={() => setSidebarOpen(false)}>Collections</Link></li>
          <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Account Dropdown */}
      <div className={`account-dropdown ${isAccountDropdownOpen ? 'active' : ''}`}>
        <div className="account-menu">
          <p>Welcome to Jewelry</p>
          <Link className="account-btn" to="/signin" onClick={() => setAccountDropdownOpen(false)}>
            <i className="fa fa-sign-in"></i> Sign In
          </Link>
          <Link className="account-btn" to="/signup" onClick={() => setAccountDropdownOpen(false)}>
            <i className="fa fa-user-plus"></i> Create Account
          </Link>
          <Link className="account-btn" to="/userProfile" onClick={() => setAccountDropdownOpen(false)}>
            <i className="fa fa-cogs"></i> Profile
          </Link>
          <Link className="account-btn" to="/logout" onClick={() => setAccountDropdownOpen(false)}>
            <i className="fa fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;