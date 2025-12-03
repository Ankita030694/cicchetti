'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* Left Side - Heading */}
        <div className="contact-form-left">
          <div className="contact-icon-wrapper">
          </div>
          <h2 className="contact-heading">
            SEND A MESSAGE TO US
          </h2>
          <p className="contact-subtext">
            Tell us how we can help. We aim to respond to all inquiries within 24 hours.
          </p>
          <div className="contact-divider"></div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-right">
          <form className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                id="fullName" 
                placeholder="Your Full Name" 
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                placeholder="Email Address" 
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                placeholder="Subject of Inquiry" 
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                placeholder="Your Message" 
                className="form-textarea"
                rows={4}
                required
              ></textarea>
            </div>
            
            <div className="form-submit-wrapper">
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-form-section {
          background-color: #3B3F27;
          padding: 6rem 1rem;
          color: #E7E3E2;
          font-family: 'Aston', sans-serif;
          margin-top: 80px; /* Space for fixed navbar */
        }

        .contact-form-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        @media (min-width: 768px) {
          .contact-form-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 4rem;
          }
        }

        /* Left Side Styles */
        .contact-form-left {
          flex: 1;
          max-width: 500px;
        }

        .contact-icon-wrapper {
          margin-bottom: 1rem;
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: #0ea5e9; /* Blue color */
          color: white;
          font-weight: bold;
          border-radius: 4px;
          font-family: sans-serif;
        }

        .contact-heading {
          font-size: 3rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          color: #E7E3E2;
          display: inline-block;
          font-family: 'Deluce', sans-serif;
          letter-spacing: 0.5px;
          font-size: 2.7rem !important;
        }

        .contact-subtext {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #E7E3E2;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .contact-divider {
          width: 100px;
          height: 1px;
          background-color: #E7E3E2;
        }

        /* Right Side Styles */
        .contact-form-right {
          flex: 1;
          width: 100%;
          max-width: 500px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #E7E3E2;
          padding: 1.25rem 0;
          color: #E7E3E2;
          font-size: 1.15rem;
          font-family: 'Aston', sans-serif;
          font-weight: 300;
          transition: border-color 0.3s ease;
          outline: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #E7E3E2;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-bottom-color: #E7E3E2;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .submit-btn {
          background-color: #E7E3E2;
          color: #3B3F27;
          border: none;
          padding: 1rem 3.5rem;
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Aston', sans-serif;
        }

        .submit-btn:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
