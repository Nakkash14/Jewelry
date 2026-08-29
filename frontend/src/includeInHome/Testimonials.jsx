import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Absolutely stunning jewelry! The craftsmanship is top-notch. I love my custom diamond ring!",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Lee",
    review: "My wife adored the bracelet I got for her. Excellent customer service!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Emily Carter",
    review: "Great quality and design. I highly recommend this jewelry store.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "David Brown",
    review: "Amazing collection! The gold necklace I bought is elegant and well-crafted.",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    name: "Sarah Johnson",
    review: "Absolutely stunning jewelry! The craftsmanship is top-notch. I love my custom diamond ring!",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Lee",
    review: "My wife adored the bracelet I got for her. Excellent customer service!",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Emily Carter",
    review: "Great quality and design. I highly recommend this jewelry store.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "David Brown",
    review: "Amazing collection! The gold necklace I bought is elegant and well-crafted.",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <h1>Customer Testimonials</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
            <p className="testimonial-text">"{testimonial.review}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
      {/* <div className="back-home">
        <Link to="/" className="home-btn">Back to Home</Link>
      </div> */}
    </div>
  );
};

export default TestimonialsPage;