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
//           <Link className="account-btn" to="/signin" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-sign-in"></i> Sign In
//           </Link>
//           <Link className="account-btn" to="/signup" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-user-plus"></i> Create Account
//           </Link>
//           <Link className="account-btn" to="/userProfile" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-cogs"></i> Profile
//           </Link>
//           <Link className="account-btn" to="/logout" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-sign-out-alt"></i> Logout
//           </Link>
//         </div>
//       </div>
//     </header>
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

//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/shop">Shop</Link></li>
//             <li><Link to="/collections">Collections</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         <div className="nav-right">
//           <input type="text" className="search-bar" placeholder="Search..." />
//           <div className="cart-icon">
//             <i className="fa fa-shopping-cart"></i>
//           </div>
//           <div className="account-icon" onClick={toggleAccountDropdown}>
//             <i className="fa fa-user"></i>
//           </div>
//           <div className="hamburger-menu" onClick={toggleSidebar}>
//             <span></span>
//             <span></span>
//             <span></span>
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
//           <Link className="account-btn" to="/signin" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-sign-in"></i> Sign In
//           </Link>
//           <Link className="account-btn" to="/signup" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-user-plus"></i> Create Account
//           </Link>
//           <Link className="account-btn" to="/userProfile" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-cogs"></i> Profile
//           </Link>
//           <Link className="account-btn" to="/logout" onClick={() => setAccountDropdownOpen(false)}>
//             <i className="fa fa-sign-out-alt"></i> Logout
//           </Link>
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
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleAccountDropdown = () => setAccountDropdownOpen(!isAccountDropdownOpen);
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);

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

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <div className="search-wrapper">
            <i className="fa fa-search search-icon-only" onClick={toggleSearchInput}></i>
            {/* {showSearchInput && (
              <input type="text" className="search-input" placeholder="Search..." autoFocus />
            )} */}
          </div>
          {/* <div className="cart-icon">
            <i className="fa fa-shopping-cart"></i>
          </div> */}
          <Link to="/cart" className="cart-icon">
            <i className="fa fa-shopping-cart"></i>
          </Link>
          <div className="account-icon" onClick={toggleAccountDropdown}>
            <i className="fa fa-user"></i>
          </div>
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {showSearchInput && (
        <form className="search-bar-container" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for jewelry..."
            className="search-bar-input"
          />
          <button type="submit" className="search-submit-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      )}

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
          <Link className="account-btn" to="/userprofile" onClick={() => setAccountDropdownOpen(false)}>
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
