// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Our Jewelry Store</h2>
      
      {/* Link for navigating to Sign In page */}
      <Link to="/signin">
        <button>Go to Sign In</button>
      </Link>
      
      {/* Link for navigating to Sign Up page */}
      <Link to="/signup">
        <button>Go to Sign Up</button>
      </Link>
    </div>
  );
};

export default HomePage;