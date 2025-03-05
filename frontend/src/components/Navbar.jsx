import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  // Function to toggle the sidebar (hamburger menu)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle account dropdown
  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!isAccountDropdownOpen);
  };

  // Disable page scrolling when the sidebar or account dropdown is open
  useEffect(() => {
    if (isSidebarOpen || isAccountDropdownOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSidebarOpen, isAccountDropdownOpen]);

  // Close the sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close the account dropdown when a link is clicked
  const closeAccountDropdown = () => {
    setAccountDropdownOpen(false);
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
        </div>

        {/* Account Icon (Desktop Only) */}
        <div className="account-icon" onClick={toggleAccountDropdown}>
          <i className="fa fa-user"></i>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Account Dropdown (Desktop Only) */}
      <div className={`account-dropdown ${isAccountDropdownOpen ? 'active' : ''}`}>
        <div className="account-text">
          If you have an account with us, you can buy jewelry
        </div>
        <div className="account-buttons">
          <Link to="/signin" onClick={closeAccountDropdown}>
            <i className="fa fa-sign-in"></i> Sign In
          </Link>
          <Link to="/signup" onClick={closeAccountDropdown}>
            <i className="fa fa-user-plus"></i> Create Account
          </Link>
          <Link to="/userprofile" onClick={closeAccountDropdown}>
            <i className="fa fa-cogs"></i> Profile Settings
          </Link>
          <Link to="/logout" onClick={closeAccountDropdown}>
            <i className="fa fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/shop" onClick={closeSidebar}>Shop</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
          <li></li>
          <li><Link to="/userprofile" onClick={closeSidebar}>Profile Setings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;