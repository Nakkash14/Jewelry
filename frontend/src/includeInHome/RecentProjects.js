import React, { useRef } from "react";
import "./RecentProjects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images
import CustomRing from "../Images/CustomRing.avif";
import CustomBracelet from "../Images/CustomBracelet.webp";
import CustomNecklace from "../Images/CustomNecklace.jpeg";

const projects = [
  {
    title: "Elegant Custom Diamond Ring",
    description: "A stunning custom-made diamond ring set in 14K white gold, designed for timeless elegance.",
    image: CustomRing,
  },
  {
    title: "Handcrafted Silver Bracelet",
    description: "This intricately designed bracelet features pure silver links, each crafted with precision.",
    image: CustomBracelet,
  },
  {
    title: "Gold Pendant Necklace",
    description: "A 10K gold pendant with a cultured freshwater pearl and a small blue sapphire accent.",
    image: CustomNecklace,
  },
  {
    title: "Elegant Custom Diamond Ring",
    description: "A stunning custom-made diamond ring set in 14K white gold, designed for timeless elegance.",
    image: CustomRing,
  },
  {
    title: "Handcrafted Silver Bracelet",
    description: "This intricately designed bracelet features pure silver links, each crafted with precision.",
    image: CustomBracelet,
  },
  {
    title: "Gold Pendant Necklace",
    description: "A 10K gold pendant with a cultured freshwater pearl and a small blue sapphire accent.",
    image: CustomNecklace,
  }
];

const RecentProjects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="recent-projects">
      <h2>Our Latest Projects</h2>
      <p className="section-subtitle">Discover our latest handcrafted jewelry collections.</p>
      
      <div className="projects-list-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="projects-list" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;