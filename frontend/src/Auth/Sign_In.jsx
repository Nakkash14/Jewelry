import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signin-container">
      {/* Overlay to block content when sidebar is open */}
      <div className="overlay"></div>

      {/* Left side: Sign In form */}
      <div className="signin-left">
        <h1>Welcome Back</h1>
        <p>Sign in to access your account and explore exclusive jewelry.</p>
        <form className="signin-form">
          <div className="form-group">
            <div className={`input-container ${formData.email ? 'filled' : ''}`}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
          </div>
          <div className="form-group">
            <div className={`input-container ${formData.password ? 'filled' : ''}`}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>

      {/* Vertical divider */}
      <div className="divider"></div>

      {/* Right side: Sign Up prompt */}
      <div className="signin-right">
        <h2>New to Us?</h2>
        <p>Join our jewelry community and start shopping today!</p>
        <button className="signup-button">
          <a href="/signup" className="signup-link">Sign Up</a>
        </button>
      </div>
    </div>
  );
};

export default SignIn;