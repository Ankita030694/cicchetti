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
          background-color: #3d4424; /* Dark olive green from image */
          padding: 6rem 2rem;
          color: #E7E3E2;
          font-family: 'Aileron', sans-serif;
          margin-top: 80px; /* Space for fixed navbar */
        }

        .contact-form-container {
          max-width: 1200px;
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
            gap: 6rem;
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
          font-size: 2.5rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          color: #E7E3E2;
          display: inline-block;
          font-family: 'Aileron', sans-serif;
        }

        .contact-subtext {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(231, 227, 226, 0.7);
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .contact-divider {
          width: 100px;
          height: 1px;
          background-color: rgba(231, 227, 226, 0.3);
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
          gap: 2rem;
        }

        .form-group {
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(231, 227, 226, 0.5);
          padding: 0.75rem 0;
          color: #E7E3E2;
          font-size: 1rem;
          font-family: 'Aileron', sans-serif;
          font-weight: 300;
          transition: border-color 0.3s ease;
          outline: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(231, 227, 226, 0.6);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-bottom-color: #E7E3E2;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-submit-wrapper {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
        }

        .submit-btn {
          background-color: #E7E3E2;
          color: #3d4424;
          border: none;
          padding: 0.75rem 3rem;
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Aileron', sans-serif;
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
