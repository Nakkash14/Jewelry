import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found-page" aria-labelledby="not-found-heading">
      <div className="not-found-card">
        <p className="not-found-code">404</p>
        <h1 id="not-found-heading" className="not-found-title">
          Page Not Found
        </h1>
        <p className="not-found-text">
          The page you are looking for does not exist or is no longer available.
        </p>
        <Link to="/" className="not-found-home-link">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
