import React, { useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import flatpickr from 'flatpickr';
// import TimePicker from 'react-time-picker';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/flatpickr.min.css";
import Ring from '../Images/Ring.jpeg';
import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
import Necklace from '../Images/Necklace.jpeg';
import Background_HomePage from '../Images/Background_HomePage.jpeg';
import CustomRing from '../Images/CustomRing.avif';
import CustomBracelet from '../Images/CustomBracelet.webp';
import CustomNecklace from '../Images/CustomNecklace.jpeg';
// import location from '../Images/location.jpg';
// import appointmentImage from '../Images/appointment.jpg';
import TestimonialsPage from '../includeInHome/Testimonials';
import FAQPage from '../includeInHome/FAQ';
import BestProjects from '../includeInHome/BestProjects';
import Appointment from '../includeInHome/Appointment';

const HomePage = () => {
  // const [time, setTime] = useState();
  // const [date, setDate] = useState(new Date());

  useEffect(() => {
    flatpickr("#datepicker", {
      dateFormat: "Y-m-d",
      minDate: "today",
      locale: "en",
      theme: "light"
    });

    flatpickr("#timepicker", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      minDate: "today",
      theme: "light"
    });
  }, []);

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

    <Appointment />

    <BestProjects />

    <FAQPage />

    <TestimonialsPage />
    </div>
  );
};

export default HomePage;