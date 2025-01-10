import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      {/* Left side: SignIn form */}
      <div className="signin-left">
        <h1>Welcome Back</h1>
        <p>Sign in to explore timeless jewelry collections.</p>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="remember" /> Remember Me
            </label>
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
          <p className="forgot-password">
            <a href="/reset-password">Forgot your password?</a>
          </p>
        </form>
      </div>

      {/* Vertical divider */}
      <div className="divider"></div>

      {/* Right side: Register button */}
      <div className="signin-right">
        <h2>Don't have an account?</h2>
        <p>Join us and explore our luxury jewelry collections.</p>
        <button className="register-button">
          <a href="/signup" className="register-link">Register Now</a>
        </button>
      </div>
    </div>
  );
};

export default SignIn;