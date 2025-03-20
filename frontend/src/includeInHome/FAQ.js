import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "What materials do you use for your jewelry?",
    answer:
      "We use high-quality materials, including 14K and 18K gold, sterling silver, diamonds, and ethically sourced gemstones.",
  },
  {
    question: "Can I request a custom jewelry design?",
    answer:
      "Yes! We specialize in custom jewelry. Contact us to discuss your ideas, and we will create a unique piece just for you.",
  },
  {
    question: "How long does it take to create a custom order?",
    answer:
      "Custom jewelry typically takes 2-4 weeks, depending on the complexity of the design and material availability.",
  },
  {
    question: "Do you offer a warranty on your jewelry?",
    answer:
      "Yes, all our jewelry comes with a 1-year warranty covering manufacturing defects.",
  },
  {
    question: "How should I care for my jewelry?",
    answer:
      "We recommend cleaning your jewelry with a soft cloth and storing it in a dry place. Avoid exposure to chemicals and harsh environments.",
  },
];

const FAQPage = () => {
  const [openQuestions, setOpenQuestions] = useState([]); // Allows multiple open FAQs

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Close it if it's already open
        : [...prev, index] // Open it if it's not
    );
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-subtitle">Find answers to common questions about our jewelry.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            layout
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="faq-header" onClick={() => toggleQuestion(index)}>
              <h3 className="faq-question">{faq.question}</h3>
              {openQuestions.includes(index) ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
            </button>

            <AnimatePresence>
              {openQuestions.includes(index) && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;