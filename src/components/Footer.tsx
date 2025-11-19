import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left - EVOO Logo */}
        <div className="footer-logo">
          <Image src="/logos/cclogo1.png" alt="Footer logo" width={200} height={200} />
        </div>

        {/* Center - Join Our Team */}
        <div className="footer-center">
          <h3
            className="footer-heading"
            style={{
              color: '#7E884D',
              fontFamily: 'Aileron',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '35px',
            }}
          >
            JOIN OUR TEAM
          </h3>
          <p className="footer-email">E: info@cicchetti.com</p>
        </div>

        {/* Right - Follow Our Journey */}
        <div className="footer-right">
          <h3
            className="footer-heading"
            style={{
              color: '#7E884D',
              fontFamily: 'Aileron',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '35px',
            }}
          >
            FOLLOW OUR JOURNEY
          </h3>
          <div className="social-icons">
            <div className="social-group">
              <a href="#" className="social-link" aria-label="Instagram Delhi">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="social-group">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="social-group">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="social-group">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
        
           
          </div>
        </div>

        {/* Curved Arrow */}
      
      </div>
    </footer>
  );
}

