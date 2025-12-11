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
              color: '#FFFFFF',
              fontFamily: 'Deluce, sans-serif',
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

        {/* Third Column - Our Brands */}
        <div className="footer-right">
          <h3
            className="footer-heading"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Deluce, sans-serif',
              fontSize: '25px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '35px',
            }}
          >
            OUR BRANDS
          </h3>
          <div className="footer-brands">
            <a 
              href="https://bloomcafes.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              Bloom Cafe & Cakery
            </a>
            <a 
              href="https://www.instagram.com/cicchetti.italiano?igsh=MWF4d2s2bzI1bGFtZg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              Cicchetti Italiano
            </a>
            <a 
              href="https://www.instagram.com/thelavenderflavours?igsh=dHNtcmw0amZ5Znk4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              The Lavender Flavours
            </a>
            <a 
              href="https://www.instagram.com/firenze.gelateria?igsh=MTFycjQwdW5ia213Ng==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              Firenze Gelateria & Caffè
            </a>
          </div>
        </div>

        {/* Right - Follow Our Journey */}
        <div className="footer-right">
          <h3
            className="footer-heading"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Deluce, sans-serif',
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

