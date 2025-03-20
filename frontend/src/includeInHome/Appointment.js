// import React, { useState } from "react";
// import TimePicker from "react-time-picker";
// import "./Appointment.css";
// import locationImage from "../Images/location.jpg";
// import appointmentImage from "../Images/appointment.jpg";

// const Appointment = () => {
//   const [time, setTime] = useState();

//   return (
//     <div className="appointment-booking">
//       {/* First Image and Location Details */}
//       <div className="location-section">
//         <img src={locationImage} alt="Jewelry Store" className="location-image" />
//         <div className="location-details">
//           <h2>Visit Our Store</h2>
//           <p>Choose a location to book an appointment and explore our jewelry collection.</p>

//           <div className="locations">
//             {/* Location 1 */}
//             <div className="location-item">
//               <h3>Jewelry Store - Downtown</h3>
//               <p>123 Main St, Downtown City</p>
//               <p>Phone: 123-456-7890</p>
//               <a href="https://www.google.com/maps?q=123+Main+St,+Downtown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
//             </div>

//             {/* Location 2 */}
//             <div className="location-item">
//               <h3>Jewelry Store - Uptown</h3>
//               <p>456 Uptown Ave, Uptown City</p>
//               <p>Phone: 987-654-3210</p>
//               <a href="https://www.google.com/maps?q=456+Uptown+Ave,+Uptown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Image and Schedule Section */}
//       <div className="schedule-section">
//         <img src={appointmentImage} alt="Book Appointment" className="schedule-image" />
//         <div className="schedule-details">
//           <h2>Book an Appointment</h2>
//           <p>Schedule a personalized consultation with one of our experts at the location of your choice.</p>

//           <form className="appointment-form">
//             <label>Choose Location:</label>
//             <select name="location" required>
//               <option value="downtown">Jewelry Store - Downtown</option>
//               <option value="uptown">Jewelry Store - Uptown</option>
//             </select>

//             <label>Choose Date:</label>
//             <input type="text" name="date" id="datepicker" className="datepicker" required />

//             <br /><br />
//             <label>Select Appointment Time:</label>
//             <TimePicker onChange={setTime} value={time} disableClock={true} format="HH:mm" className="time-picker" />

//             <br /><br />
//             <button type="submit">Confirm Appointment</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;






























import React, { useState, useEffect } from "react";
import "./Appointment.css";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import locationImage from "../Images/location.jpg";
import appointmentImage from "../Images/appointment.jpg";

// Available time slots
const availableTimes = ["9:00 AM", "10:30 AM", "11:15 AM", "11:30 AM", "1:00 PM", "2:45 PM", "4:00 PM"];

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    flatpickr("#datepicker", {
      dateFormat: "F j, Y",
      minDate: "today",
      disableMobile: true,
      onChange: (selectedDates) => {
        setSelectedDate(selectedDates[0]);
      },
    });
  }, []);

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">💎 Book a Private Jewelry Consultation</h1>
      <p className="appointment-subtitle">
        Schedule an exclusive session with our jewelry experts and discover timeless elegance.
      </p>

      {/* Store Locations Section
      <section className="location-section">
        <img src={locationImage} alt="Jewelry Store" className="location-image" />
        <div className="location-info">
          <h2>🏛️ Visit Our Luxury Boutique</h2>
          <p>Experience sophistication and personalized service with our expert jewelers.</p>

          <div className="locations">
            <div className="location-card">
              <h3>📍 Downtown Flagship Store</h3>
              <p>123 Luxury Ave, Downtown City</p>
              <p>☎️ 123-456-7890</p>
              <a href="https://www.google.com/maps?q=123+Luxury+Ave,+Downtown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
            </div>
            <div className="location-card">
              <h3>📍 Private Showroom - Uptown</h3>
              <p>456 Prestige St, Uptown City</p>
              <p>☎️ 987-654-3210</p>
              <a href="https://www.google.com/maps?q=456+Prestige+St,+Uptown+City" target="_blank" rel="noopener noreferrer">View on Map</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Boutique Locations Section */}
        <section className="location-section">
        <div className="location-info">
            <h2>🏛️ Visit Our Exclusive Boutiques</h2>
            <p>Immerse yourself in luxury and experience personalized service with our expert jewelers.</p>

            <div className="locations">
            {/* Location 1 */}
            <div className="location-card">
                <div className="location-icon">📍</div>
                <h3>Downtown Flagship Store</h3>
                <p>123 Luxury Ave, Downtown City</p>
                <p>☎️ 123-456-7890</p>
                <a href="https://www.google.com/maps?q=123+Luxury+Ave,+Downtown+City" target="_blank" rel="noopener noreferrer">
                View on Map
                </a>
            </div>

            {/* Location 2 */}
            <div className="location-card">
                <div className="location-icon">🏆</div>
                <h3>Private Showroom - Uptown</h3>
                <p>456 Prestige St, Uptown City</p>
                <p>☎️ 987-654-3210</p>
                <a href="https://www.google.com/maps?q=456+Prestige+St,+Uptown+City" target="_blank" rel="noopener noreferrer">
                View on Map
                </a>
            </div>
            </div>
        </div>

        <img src={locationImage} alt="Luxury Boutique" className="location-image" />
        </section>

      {/* Booking Form Section */}
      <section className="schedule-section">
        <img src={appointmentImage} alt="Luxury Appointment" className="schedule-image" />
        <div className="schedule-info">
          <h2>✨ Schedule Your Exclusive Appointment</h2>

          <form className="appointment-form">
            {/* Location Selection */}
            <label>Preferred Boutique:</label>
            <select name="location" required>
              <option value="downtown">Downtown Flagship Store</option>
              <option value="uptown">Private Showroom - Uptown</option>
            </select>

            {/* Date Picker */}
            <label>Choose a Date:</label>
            <input type="text" id="datepicker" className="datepicker" required />

            {/* Time Slot Selection */}
            <label>Pick a Time:</label>
            <div className="time-slot-wrapper">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  type="button"
                  className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <button type="submit" className="confirm-btn">Reserve My Consultation</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appointment;