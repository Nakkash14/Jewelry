// import React from 'react';
// import './HomePage.css';
// import { Link } from 'react-router-dom';
// import Ring from '../Images/Ring.jpeg';
// import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// import Necklace from '../Images/Necklace.jpeg';
// import Background_HomePage from '../Images/Background_HomePage.jpeg';

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${Background_HomePage})` }}
//       >
//         <div className="hero-content">
//           <h1>Elegance in Every Piece</h1>
//           <p>Explore our timeless collection of jewelry</p>
//           <Link to="/shop" className="cta-btn">Shop Now</Link>
//         </div>
//       </section>

//       {/* Jewelry Categories Section */}
//       <section className="jewelry-categories">
//         <h2>Jewelry Categories</h2>
//         <div className="category-list">
//           <div className="category-card">
//             <img src={Ring} alt="Rings" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Silver_Bracelet} alt="Bracelets" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Necklace} alt="Necklaces" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="about-us">
//         <h2>About Us</h2>
//         <p>We are a premier jewelry store offering a wide variety of exquisite pieces. Our mission is to provide timeless, high-quality jewelry for every occasion.</p>
//         <Link to="/about" className="cta-btn">Learn More</Link>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div>
//           <p>&copy; 2025 Jewelry Store. All Rights Reserved.</p>
//           <ul className="social-links">
//             <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
//             <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
//             <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



// import React from 'react';
// import './HomePage.css';
// import { Link } from 'react-router-dom';
// import Ring from '../Images/Ring.jpeg';
// import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// import Necklace from '../Images/Necklace.jpeg';
// import Background_HomePage from '../Images/Background_HomePage.jpeg';
// import CustomRing from '../Images/CustomRing.avif';
// import CustomBracelet from '../Images/CustomBracelet.webp';
// import CustomNecklace from '../Images/CustomNecklace.jpeg';

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${Background_HomePage})` }}
//       >
//         <div className="hero-content">
//           <h1>Elegance in Every Piece</h1>
//           <p>Explore our timeless collection of jewelry</p>
//           <Link to="/shop" className="cta-btn">Shop Now</Link>
//         </div>
//       </section>

//       {/* Jewelry Categories Section */}
//       <section className="jewelry-categories">
//         <h2>Jewelry Categories</h2>
//         <div className="category-list">
//           <div className="category-card">
//             <img src={Ring} alt="Rings" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Silver_Bracelet} alt="Bracelets" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
//             </div>
//           </div>
//           <div className="category-card">
//             <img src={Necklace} alt="Necklaces" />
//             <div className="category-btn-wrapper">
//               <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="recent-projects">
//         <h2>Recently Completed Projects</h2>
//         <div className="projects-list-wrapper">
//           <div className="projects-list">
      
//             <div className="project-card">
//               <img src={CustomRing} alt="Custom Diamond Ring" />
//               <h3>Elegant Custom Diamond Ring</h3>
//               <p>A stunning custom-made diamond ring set in 14K white gold, designed for timeless elegance.</p>
//             </div>

//             <div className="project-card">
//               <img src={CustomBracelet} alt="Handcrafted Silver Bracelet" />
//               <h3>Handcrafted Silver Bracelet</h3>
//               <p>This intricately designed bracelet features pure silver links, each crafted with precision.</p>
//             </div>

//             <div className="project-card">
//               <img src={CustomNecklace} alt="Gold Pendant Necklace" />
//               <h3>Gold Pendant Necklace</h3>
//               <p>A 10K gold pendant with a cultured freshwater pearl and a small blue sapphire accent.</p>
//             </div>

//             <div className="project-card">
//               <img src={Ring} alt="Custom Sapphire Gemstone Ring" />
//               <h3>Custom Sapphire Gemstone Ring</h3>
//               <p>Set in platinum, this deep blue sapphire ring is a perfect blend of sophistication and charm.</p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="about-us">
//         <h2>About Us</h2>
//          <p>We are a premier jewelry store offering a wide variety of exquisite pieces. Our mission is to provide timeless, high-quality jewelry for every occasion.</p>
//          <Link to="/about" className="cta-btn">Learn More</Link>
//        </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div>
//           <p>&copy; 2025 Jewelry Store. All Rights Reserved.</p>
//           <ul className="social-links">
//             <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
//             <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
//             <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;








import React, { useState, useRef } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Ring from '../Images/Ring.jpeg';
import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
import Necklace from '../Images/Necklace.jpeg';
import Background_HomePage from '../Images/Background_HomePage.jpeg';
import CustomRing from '../Images/CustomRing.avif';
import CustomBracelet from '../Images/CustomBracelet.webp';
import CustomNecklace from '../Images/CustomNecklace.jpeg';

const faqs = [
  {
    question: "What materials do you use for your jewelry?",
    answer: "We use high-quality materials, including 14K and 18K gold, sterling silver, diamonds, and ethically sourced gemstones."
  },
  {
    question: "Can I request a custom jewelry design?",
    answer: "Yes! We specialize in custom jewelry. Contact us to discuss your ideas, and we will create a unique piece just for you."
  },
  {
    question: "How long does it take to create a custom order?",
    answer: "Custom jewelry typically takes 2-4 weeks, depending on the complexity of the design and material availability."
  },
  {
    question: "Do you offer a warranty on your jewelry?",
    answer: "Yes, all our jewelry comes with a 1-year warranty covering manufacturing defects."
  },
  {
    question: "How should I care for my jewelry?",
    answer: "We recommend cleaning your jewelry with a soft cloth and storing it in a dry place. Avoid exposure to chemicals and harsh environments."
  }
];

const HomePage = () => {
  // const [openIndex, setOpenIndex] = useState(null);
  // const faqRefs = useRef([]);

  // const toggleFAQ = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);

  // // Scroll smoothly to the selected FAQ item
  // setTimeout(() => {
  //   if (faqRefs.current[index]) {
  //     faqRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }, 300);

  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${Background_HomePage})` }}>
        <div className="hero-content">
          <h1>Elegance in Every Piece</h1>
          <p>Explore our timeless collection of jewelry</p>
          <Link to="/shop" className="cta-btn">Shop Now</Link>
        </div>
      </section>

      {/* Jewelry Categories Section */}
      <section className="jewelry-categories">
        <h2>Jewelry Categories</h2>
        <div className="category-list">
          <div className="category-card">
            <img src={Ring} alt="Rings" />
            <div className="category-btn-wrapper">
              <Link to="/shop/rings" className="category-btn">Explore Rings</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={Silver_Bracelet} alt="Bracelets" />
            <div className="category-btn-wrapper">
              <Link to="/shop/bracelets" className="category-btn">Explore Bracelets</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={Necklace} alt="Necklaces" />
            <div className="category-btn-wrapper">
              <Link to="/shop/necklaces" className="category-btn">Explore Necklaces</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Completed Projects */}
      <section className="recent-projects">
        <h2>Our Latest Projects</h2>
        <div className="projects-list-wrapper">
          <div className="projects-list">
            <div className="project-card">
              <img src={CustomRing} alt="Custom Diamond Ring" />
              <h3>Elegant Custom Diamond Ring</h3>
              <p>A stunning custom-made diamond ring set in 14K white gold, designed for timeless elegance.</p>
            </div>

            <div className="project-card">
              <img src={CustomBracelet} alt="Handcrafted Silver Bracelet" />
              <h3>Handcrafted Silver Bracelet</h3>
              <p>This intricately designed bracelet features pure silver links, each crafted with precision.</p>
            </div>

            <div className="project-card">
              <img src={CustomNecklace} alt="Gold Pendant Necklace" />
              <h3>Gold Pendant Necklace</h3>
              <p>A 10K gold pendant with a cultured freshwater pearl and a small blue sapphire accent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openQuestions.includes(index) ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
            </button>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default HomePage;
