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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card sign-up">
        <div className="content">
          <h2>Create Account</h2>
          <p>Join our exclusive jewelry community and indulge in timeless elegance.</p>
          <form className="form">
            <div className={`input-group ${formData.name ? "filled" : ""}`}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Full Name</label>
            </div>
            <div className={`input-group ${formData.email ? "filled" : ""}`}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email Address</label>
            </div>
            <div className={`input-group ${formData.password ? "filled" : ""}`}>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <div className={`input-group ${formData.confirmPassword ? "filled" : ""}`}>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <label>Confirm Password</label>
            </div>
            <button type="submit" className="btn gold">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="auth-card redirect">
        <div className="content">
          <h2>Already a member?</h2>
          <p>Sign in to access your account and continue shopping.</p>
          <a href="/signin" className="btn outline">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;