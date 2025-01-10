import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-container">
      {/* Left side: Sign In prompt */}
      <div className="signup-left">
        <h2>Already have an account?</h2>
        <p>Sign in and start shopping our exquisite jewelry collections.</p>
        <button className="signin-button">
          <a href="/signin" className="signin-link">Sign In</a>
        </button>
      </div>

      {/* Vertical divider */}
      <div className="divider"></div>

      {/* Right side: Sign Up form */}
      <div className="signup-right">
        <h1>Join Us</h1>
        <p>Sign up to become part of our exclusive jewelry community.</p>
        <form className="signup-form">
          <div className="form-group">
            <div className={`input-container ${formData.name ? 'filled' : ''}`}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Full Name</label>
            </div>
          </div>
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
          <div className="form-group">
            <div className={`input-container ${formData.confirmPassword ? 'filled' : ''}`}>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder=" "
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;