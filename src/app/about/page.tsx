'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';
import AboutExperienceSection from '../../components/AboutExperienceSection';
import VisitUsSection from '../../components/VisitUsSection';
import Footer from '../../components/Footer';
import MobileAbout from '../../components/MobileAbout';

export default function AboutPage() {
  // State for reservation modal if needed by Navbar or other components
  // Although Navbar handles its own state, sometimes we might want to trigger it from elsewhere
  // For now, we'll just keep the structure simple
  
  return (
    <main className="about-page">
      <Navbar />
      
      {/* Desktop View */}
      <div className="hidden md:block">

        
        {/* Full Width Image Section */}
        <section className="about-image-section">
          <div className="about-image-container">
            <img 
              src="/abhero.jpg" 
              alt="About Cicchetti" 
              className="about-full-image mt-25"
            />
          </div>
        </section>
        
        <AboutExperienceSection />
        
        {/* USPs Strip */}
        <section className="usps-strip">
          <div className="usps-container">
            <div className="usp-item">
              <span className="usp-text">Everything made from Scratch</span>
            </div>
            <div className="usp-divider"></div>
            <div className="usp-item">
              <span className="usp-text">100% Vegetarian</span>
            </div>
            <div className="usp-divider"></div>
            <div className="usp-item">
              <span className="usp-text">Organic Locally sourced ingredients</span>
            </div>
            <div className="usp-divider"></div>
            <div className="usp-item">
              <span className="usp-text">Sustainable</span>
            </div>
          </div>
        </section>
        
        <VisitUsSection />
        
        <Footer />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileAbout />
      </div>
      
      <style jsx>{`
        .about-image-section {
          width: 100vw;
          height: 100vh; /* Full viewport height */
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .about-image-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .about-full-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </main>
  );
}
