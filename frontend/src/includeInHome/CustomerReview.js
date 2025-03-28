import React, { useState } from "react";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, title, comment });
    setRating(0);
    setTitle("");
    setComment("");
    setShowForm(false);
  };

  return (
    <div className="review-wrapper">
      <h2 className="review-title">Customer Reviews</h2>

      <div className="review-summary">
        <div className="stars-text">
          <div className="stars-display">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star filled">★</span>
            ))}
          </div>
          <p className="no-reviews">Be the first to write a review</p>
        </div>

        <button
          className="action-btn"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Cancel review" : "Write a review"}
        </button>
      </div>

      <div className={`review-form-wrapper ${showForm ? "open" : ""}`}>
        <form className="review-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Write a review</h3>

          <div className="form-group">
            <label>Rating</label>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < (hover ?? rating) ? "filled" : ""}`}
                  onClick={() => setRating(i + 1)}
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(null)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Review Title</label>
            <input
              type="text"
              placeholder="Give your review a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Review</label>
            <textarea
              placeholder="Write your comments here"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReview;
