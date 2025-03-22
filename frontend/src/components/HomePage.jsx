import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
// import flatpickr from 'flatpickr';
// import TimePicker from 'react-time-picker';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/flatpickr.min.css";
// import Ring from '../Images/Ring.jpeg';
// import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// import Necklace from '../Images/Necklace.jpeg';
import Background_HomePage from '../Images/Background_HomePage.jpeg';
// import CustomRing from '../Images/CustomRing.avif';
// import CustomBracelet from '../Images/CustomBracelet.webp';
// import CustomNecklace from '../Images/CustomNecklace.jpeg';
// import location from '../Images/location.jpg';
// import appointmentImage from '../Images/appointment.jpg';
import TestimonialsPage from '../includeInHome/Testimonials';
import FAQPage from '../includeInHome/FAQ';
import BestProjects from '../includeInHome/BestProjects';
import Appointment from '../includeInHome/Appointment';
import RecentProjects from '../includeInHome/RecentProjects';
import JewelryCategories from '../includeInHome/JewelryCategories';

const HomePage = () => {
  // const [time, setTime] = useState();
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   flatpickr("#datepicker", {
  //     dateFormat: "Y-m-d",
  //     minDate: "today",
  //     locale: "en",
  //     theme: "light"
  //   });

  //   flatpickr("#timepicker", {
  //     enableTime: true,
  //     noCalendar: true,
  //     dateFormat: "H:i",
  //     minDate: "today",
  //     theme: "light"
  //   });
  // }, []);

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

    <JewelryCategories />

    <RecentProjects />

    <Appointment />

    <BestProjects />

    <FAQPage />

    <TestimonialsPage />
    </div>
  );
};

export default HomePage;