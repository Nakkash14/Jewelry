// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./BestProjects.css";

// // Import images for best projects
// import BestProject1 from "../Images/CustomRing.avif";
// import BestProject2 from "../Images/CustomBracelet.webp";
// import BestProject3 from "../Images/CustomNecklace.jpeg";

// const bestProjects = [
//   {
//     title: "Elegant Diamond Ring",
//     description: "14K white gold with a premium-cut diamond for timeless beauty.",
//     image: BestProject1,
//   },
//   {
//     title: "Handcrafted Silver Bracelet",
//     description: "Pure silver with intricate links crafted to perfection.",
//     image: BestProject2,
//   },
//   {
//     title: "Gold Pendant Necklace",
//     description: "10K gold pendant with a cultured freshwater pearl.",
//     image: BestProject3,
//   },
//   {
//     title: "Luxury Platinum Band",
//     description: "Timeless platinum wedding band with a minimalist design.",
//     image: BestProject1,
//   },
// ];

// const BestProjects = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
//   };

//   return (
//     <section className="best-projectss">
//       <h2>Our Best Creations</h2>
//       <p className="project-subtitlee">Exquisite craftsmanship in every piece.</p>
      
//       <div className="scroll-wrapperr">
//         <button className="scroll-btnn leftt" onClick={scrollLeft}>
//           <FaChevronLeft />
//         </button>

//         <div className="scroll-containerr" ref={scrollRef}>
//           <div className="project-gridd">
//             {bestProjects.map((project, index) => (
//               <motion.div 
//                 key={index} 
//                 className="project-cardd"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className="image-containerr">
//                   <img src={project.image} alt={project.title} className="project-imagee" />
//                   <div className="overlayy">
//                     <div className="overlay-contentt">
//                       <h3>{project.title}</h3>
//                       <p>{project.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <button className="scroll-btnn rightt" onClick={scrollRight}>
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default BestProjects;




import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  {
    title: "Luxury Platinum Band",
    description: "Timeless platinum wedding band with a minimalist design.",
    image: BestProject1,
  },
];

const BestProjects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="best-projects-section">
      <h2>Our Best Creations</h2>
      <p className="best-project-subtitle">Exquisite craftsmanship in every piece.</p>
      
      <div className="best-scroll-wrapper">
        <button className="best-scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="best-scroll-container" ref={scrollRef}>
          <div className="best-project-grid">
            {bestProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className="best-project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="best-image-container">
                  <img src={project.image} alt={project.title} className="best-project-image" />
                  <div className="best-overlay">
                    <div className="best-overlay-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <button className="best-scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default BestProjects;