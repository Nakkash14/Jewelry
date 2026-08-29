import React from "react";
import { Link } from "react-router-dom";
import Ring from '../Images/Ring.jpeg';
import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
import Necklace from '../Images/Necklace.jpeg';
import "./JewelryCategories.css";

const JewelryCategories = () => {
  return (
    <section className="jewelry-categories">
      <div className="jewelry-header">
        <h2>Jewelry Categories</h2>
        <p className="jewelry-subheading">Timeless pieces designed for elegance and grace</p>
        <div className="gold-divider"></div>
      </div>

      <div className="category-list">
        <div className="category-card">
          <img src={Ring} alt="Rings" />
          <div className="category-info">
            <h3>Rings</h3>
            <p>Elegant designs to mark every milestone.</p>
            <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
          </div>
        </div>

        <div className="category-card">
          <img src={Silver_Bracelet} alt="Bracelets" />
          <div className="category-info">
            <h3>Bracelets</h3>
            <p>Subtle sparkle for your everyday luxury.</p>
            <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
          </div>
        </div>

        <div className="category-card">
          <img src={Necklace} alt="Necklaces" />
          <div className="category-info">
            <h3>Necklaces</h3>
            <p>Graceful pieces to complement any look.</p>
            <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryCategories;