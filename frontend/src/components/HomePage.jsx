// import React from 'react';
// import './HomePage.css';
// import { Link } from 'react-router-dom';
// // import flatpickr from 'flatpickr';
// // import TimePicker from 'react-time-picker';
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "flatpickr/dist/flatpickr.min.css";
// // import Ring from '../Images/Ring.jpeg';
// // import Silver_Bracelet from '../Images/Silver_Bracelet.jpeg';
// // import Necklace from '../Images/Necklace.jpeg';
// import Background_HomePage from '../Images/Background_HomePage.jpeg';
// // import CustomRing from '../Images/CustomRing.avif';
// // import CustomBracelet from '../Images/CustomBracelet.webp';
// // import CustomNecklace from '../Images/CustomNecklace.jpeg';
// // import location from '../Images/location.jpg';
// // import appointmentImage from '../Images/appointment.jpg';
// import TestimonialsPage from '../includeInHome/Testimonials';
// import FAQPage from '../includeInHome/FAQ';
// import BestProjects from '../includeInHome/BestProjects';
// import Appointment from '../includeInHome/Appointment';
// import RecentProjects from '../includeInHome/RecentProjects';
// import JewelryCategories from '../includeInHome/JewelryCategories';
// import CustomerReviews from '../includeInHome/CustomerReview';

// const HomePage = () => {
//   // const [time, setTime] = useState();
//   // const [date, setDate] = useState(new Date());

//   // useEffect(() => {
//   //   flatpickr("#datepicker", {
//   //     dateFormat: "Y-m-d",
//   //     minDate: "today",
//   //     locale: "en",
//   //     theme: "light"
//   //   });

//   //   flatpickr("#timepicker", {
//   //     enableTime: true,
//   //     noCalendar: true,
//   //     dateFormat: "H:i",
//   //     minDate: "today",
//   //     theme: "light"
//   //   });
//   // }, []);

//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section className="hero" style={{ backgroundImage: `url(${Background_HomePage})` }}>
//         <div className="hero-content">
//           <h1>Elegance in Every Piece</h1>
//           <p>Explore our timeless collection of jewelry</p>
//           <Link to="/shop" className="cta-btn">Shop Now</Link>
//         </div>
//       </section>

//     <JewelryCategories />

//     <RecentProjects />

//     <Appointment />

//     <BestProjects />

//     <FAQPage />

//     <TestimonialsPage />

//     <CustomerReviews />
//     </div>
//   );
// };

// export default HomePage;




import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';

import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/flatpickr.min.css";

import Background_HomePage from '../Images/Background_HomePage.jpeg';

import TestimonialsPage from '../includeInHome/Testimonials';
import FAQPage from '../includeInHome/FAQ';
import BestProjects from '../includeInHome/BestProjects';
import Appointment from '../includeInHome/Appointment';
import RecentProjects from '../includeInHome/RecentProjects';
import JewelryCategories from '../includeInHome/JewelryCategories';
import CustomerReviews from '../includeInHome/CustomerReview';

const animationSettings = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, amount: 0.3 },
};

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${Background_HomePage})` }}
      >
        <div className="hero-content">
          <h1>Elegance in Every Piece</h1>
          <p>Explore our timeless collection of jewelry</p>
          <Link to="/shop" className="cta-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Animated Sections */}
      <motion.div {...animationSettings}>
        <JewelryCategories />
      </motion.div>

      <motion.div {...animationSettings}>
        <RecentProjects />
      </motion.div>

      <motion.div {...animationSettings}>
        <Appointment />
      </motion.div>

      <motion.div {...animationSettings}>
        <BestProjects />
      </motion.div>

      <motion.div {...animationSettings}>
        <FAQPage />
      </motion.div>

      <motion.div {...animationSettings}>
        <TestimonialsPage />
      </motion.div>

      <motion.div {...animationSettings}>
        <CustomerReviews />
      </motion.div>
    </div>
  );
};

export default HomePage;