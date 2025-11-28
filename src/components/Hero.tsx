import React from 'react';
import Image from 'next/image';
const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Full-screen video background */}
      <video
        className="hero-video"
        src="/hero-vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: 'rgba(49, 49, 49, 0.42)',
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="hero-overlay"></div>
      
      {/* Centered content */}
      <div className="hero-content">
       <Image src="/logos/cclogo1.png" alt="Hero background" width={700} height={700} />
        <div className="hero-divider"></div>
      </div>
    </div>
  );
};

export default Hero;