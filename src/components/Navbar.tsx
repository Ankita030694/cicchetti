'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const CurlyDivider: React.FC = () => (
  <Image 
    src="/divider.png" 
    alt="Divider" 
    width={10} 
    height={10}
    className="navbar-divider"
    priority
  />
);

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isReservationPopupOpen, setIsReservationPopupOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar always visible
      setIsVisible(true);

      // Track if user has scrolled at all for blur effect
      setHasScrolled(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openReservationPopup = () => {
    setIsReservationPopupOpen(true);
  };

  const closeReservationPopup = () => {
    setIsReservationPopupOpen(false);
  };

  // Prevent body scroll when popup is open and handle iframe navigation
  useEffect(() => {
    if (isReservationPopupOpen) {
      document.body.style.overflow = 'hidden';
      
      // Add message listener for iframe communication
      const handleMessage = (event: MessageEvent) => {
        // Handle messages from OpenTable iframe
        if (event.origin.includes('opentable.co.uk')) {
          console.log('OpenTable iframe message:', event.data);
          
          // If OpenTable tries to navigate, we can handle it here
          if (event.data && typeof event.data === 'object') {
            if (event.data.type === 'navigation' || event.data.action === 'redirect') {
              // Prevent external navigation by not allowing it
              event.preventDefault();
              return false;
            }
          }
        }
      };

      window.addEventListener('message', handleMessage);
      
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isReservationPopupOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''} ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Mobile Layout */}
        <div className="navbar-mobile flex w-full items-center justify-between px-6 py-4 md:hidden">
          {/* Mobile Logo */}
          <div className="navbar-mobile-logo relative w-[92px] h-[43px]">
            <Link href="/">
              <Image 
                src="/logos/cclogo1.png" 
                alt="Cicchetti" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile Burger Menu */}
          <button 
            className="mobile-menu-toggle border-none bg-transparent p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          {/* Bottom Divider Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
        </div>

        {/* Desktop Layout */}
        <div className="navbar-desktop hidden md:flex">
          {/* Left - Make a Reservation */}
          <div className="navbar-left">
            <button className="reservation-btn" onClick={openReservationPopup}>
              MAKE A RESERVATION
            </button>
          </div>
          
          {/* Center - Cicchetti Logo */}
          <div className="navbar-center">
            <Link href="/">
              <Image 
                src="/logos/cclogo1.png" 
                alt="Cicchetti" 
                width={150} 
                height={24}
                className="navbar-logo"
                priority
              />
            </Link>
          </div>
          
          {/* Right - Navigation with Curly Dividers */}
          <div className="navbar-right">
            <Link href="/about" className="nav-btn">ABOUT US</Link>
            <CurlyDivider />
            <button className="nav-btn">NEW & MORE</button>
            <CurlyDivider />
            <Link href="/contact" className="nav-btn">CONTACT</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {/* Top Navbar Section */}
          <div className="mobile-menu-navbar">
            <div className="mobile-menu-logo">
             
            </div>
            <button 
              className="mobile-menu-close -mt-4 mr-1"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mobile-menu-content">
            <Link 
              href="/" 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <div className="mobile-menu-divider"></div>
            <Link 
              href="/about" 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <div className="mobile-menu-divider"></div>
            <Link 
              href="/contact" 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
            <div className="mobile-menu-divider"></div>

            {/* Contact Information Section */}
            <div className="mobile-contact-section">
              <div className="mobile-contact-info">
                <div className="mobile-contact-group">
                  <p className="mobile-contact-label">PHONE:</p>
                  <p className="mobile-contact-value">+91 9650569946</p>
                </div>
                <div className="mobile-contact-group">
                  <p className="mobile-contact-label">VISIT US:</p>
                  <p className="mobile-contact-value">First Floor, 70, Khan Market, Rabindra Nagar, New Delhi, Delhi 110003</p>
                </div>
                <div className="mobile-contact-group">
                  <p className="mobile-contact-label">HOURS:</p>
                  <div className="mobile-hours-content">
                    <p className="mobile-contact-value">Monday - Sunday</p>
                    <p className="mobile-contact-hours">12.00 noon - 10.30 PM</p>
                  </div>
                </div>
              </div>
              <div className="mobile-social-icons">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="Twitter"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-icon"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Popup Modal */}
      {isReservationPopupOpen && (
        <div className="reservation-popup-overlay" onClick={closeReservationPopup}>
          <div className="reservation-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="reservation-popup-header">
              <h2>Make a Reservation</h2>
              <button 
                className="reservation-popup-close" 
                onClick={closeReservationPopup}
                aria-label="Close reservation popup"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="reservation-widget-container">
              <iframe 
                src="https://www.opentable.co.uk/booking/restref/availability?rid=227751&lang=en-GB&color=1&dark=false&embed=true&iframe=true&otSource=Restaurant%20website"
                width="100%"
                height="500"
                frameBorder="0"
                title="OpenTable Reservation Widget"
                allowTransparency={true}
                allow="payment; camera; microphone; geolocation"
                referrerPolicy="no-referrer-when-downgrade"
                id="opentable-reservation-iframe"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;