import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  // Function to toggle the sidebar (mobile menu)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle the account menu (desktop)
  const toggleAccountMenu = () => {
    setAccountMenuOpen(!isAccountMenuOpen);
  };

  // Close the sidebar or account menu when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
    setAccountMenuOpen(false);
  };

  // Close the account menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.account-icon') === null && event.target.closest('.account-dropdown') === null) {
        setAccountMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
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

        {/* Hamburger Menu (Visible only on mobile/tablet) */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Account Icon (Visible only on desktop) */}
        <div className="account-icon" onClick={toggleAccountMenu}>
          <i className="fas fa-user"></i>
        </div>

        {/* Account Dropdown Menu (Visible only on desktop) */}
        <div className={`account-dropdown ${isAccountMenuOpen ? 'active' : ''}`}>
          <Link to="/signin" onClick={closeSidebar}>Sign In</Link>
          <Link to="/signup" onClick={closeSidebar}>Sign Up</Link>
        </div>
      </nav>

      {/* Sidebar Menu (Only visible on mobile/tablet when hamburger menu is clicked) */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/shop" onClick={closeSidebar}>Shop</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;