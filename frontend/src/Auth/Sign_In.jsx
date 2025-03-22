import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="auth-wrapper">
      <div className="auth-card sign-in">
        <div className="content">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your luxury experience.</p>
          <form className="form">
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
            <button type="submit" className="btn gold">Sign In</button>
          </form>
        </div>
      </div>

      <div className="auth-card sign-up">
        <div className="content">
          <h2>New Here?</h2>
          <p>Join us and discover timeless beauty.</p>
          <a href="/signup" className="btn outline">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
