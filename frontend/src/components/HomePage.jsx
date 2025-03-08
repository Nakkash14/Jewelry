import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import flatpickr from 'flatpickr';
import TimePicker from 'react-time-picker';
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
import location from '../Images/location.jpg';
import appointmentImage from '../Images/appointment.jpg';

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
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const [time, setTime] = useState();
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

      {/* Appointment and location section */}
<div className="appointment-booking">
  {/* First Image and Location Details */}
  <div className="location-section">
    <img src={location} alt="Jewelry Store" className="location-image" />
    <div className="location-details">
      <h2>Visit Our Store</h2>
      <p>Choose a location to book an appointment and explore our jewelry collection.</p>
      
      <div className="locations">
        {/* Location 1 */}
        <div className="location-item">
          <h3>Jewelry Store - Downtown</h3>
          <p>123 Main St, Downtown City</p>
          <p>Phone: 123-456-7890</p>
          <a href="https://www.google.com/maps?q=123+Main+St,+Downtown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
        </div>

        {/* Location 2 */}
        <div className="location-item">
          <h3>Jewelry Store - Uptown</h3>
          <p>456 Uptown Ave, Uptown City</p>
          <p>Phone: 987-654-3210</p>
          <a href="https://www.google.com/maps?q=456+Uptown+Ave,+Uptown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
        </div>
      </div>
    </div>
  </div>

  {/* Second Image and Schedule Section */}
  <div className="schedule-section">
    <img src={appointmentImage} alt="Book Appointment" className="schedule-image" />
    <div className="schedule-details">
      <h2>Book an Appointment</h2>
      <p>Schedule a personalized consultation with one of our experts at the location of your choice.</p>
      
      <form className="appointment-form">
        <label>Choose Location:</label>
        <select name="location" required>
          <option value="downtown">Jewelry Store - Downtown</option>
          <option value="uptown">Jewelry Store - Uptown</option>
        </select>

        <label>Choose Date:</label>
        <input
          type="text"
          name="date"
          id="datepicker"
          className="datepicker"
          required
        />

      <br /><br />
      <label>Select Appointment Time:</label>
      <TimePicker
        onChange={setTime}
        value={time}
        disableClock={true}
        format="HH:mm"
        className="time-picker"
      />

{/* <label>Select Date & Time:</label>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeSelect
        dateFormat="Pp"
        className="datepicker"
        timeFormat="HH:mm"
        timeIntervals={15}
      /> */}

        {/* <label>Choose Time:</label>
        <select name="time" required>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
        </select> */}

        <br />
        <br />
        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  </div>
</div>

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
