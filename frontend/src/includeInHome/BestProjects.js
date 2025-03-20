import React from "react";
import { motion } from "framer-motion";
import "./BestProjects.css";

// Import images for best projects
import BestProject1 from "../Images/CustomRing.avif";
import BestProject2 from "../Images/CustomBracelet.webp";
import BestProject3 from "../Images/CustomNecklace.jpeg";

const bestProjects = [
  {
    title: "Elegant Diamond Ring",
    description: "14K white gold with a premium-cut diamond for timeless beauty.",
    image: BestProject1,
  },
  {
    title: "Handcrafted Silver Bracelet",
    description: "Pure silver with intricate links crafted to perfection.",
    image: BestProject2,
  },
  {
    title: "Gold Pendant Necklace",
    description: "10K gold pendant with a cultured freshwater pearl.",
    image: BestProject3,
  },
];

const BestProjects = () => {
  return (
    <section className="best-projects">
      <h2>Our Best Creations</h2>
      <p className="project-subtitle">Exquisite craftsmanship in every piece.</p>
      <div className="project-grid">
        {bestProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestProjects;