'use client';

import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <div className="about-hero-section">
      {/* Background Gradient */}
      <div className="about-hero-bg"></div>
      
      {/* Centered Content */}
      <div className="about-hero-content">
        <Image 
          src="/ccfruit.png" 
          alt="Cicchetti Fruit" 
          width={300} 
          height={300}
          className="about-hero-image"
          priority
        />
      </div>
      
      {/* Blurred Bottom Effect */}
      <div className="about-hero-blur-bottom"></div>
      
      <style jsx>{`
        .about-hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        .about-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #3B3F27 0%, #3B3F27 90%, rgba(59, 63, 39, 0) 100%);
          z-index: 1;
        }
        
        .about-hero-content {
          z-index: 10;
          position: relative;
        }
        
        .about-hero-blur-bottom {
          position: absolute;
          bottom: -50px;
          left: -10%;
          width: 120%;
          height: 150px;
          background: #3B3F27;
          filter: blur(50px);
          z-index: 5;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default AboutHero;
