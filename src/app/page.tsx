'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, isPrimaryPointer } from 'framer-motion';
import Image from 'next/image';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import VanishingText from '../components/VanishingText';

// Helper function to split text into word spans
const splitTextIntoWords = (text: string) => {
  return text.split(' ').map((word, index, array) => (
    <span key={index} className="reveal-word">
      {word}
      {index < array.length - 1 && ' '}
    </span>
  ));
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [showReservationModal, setShowReservationModal] = useState(false);
  
  // Refs for experience section animations
  const experienceSectionRef = useRef<HTMLElement>(null);
  const restaurantImageRef = useRef<HTMLDivElement>(null);
  const foodImageRef = useRef<HTMLDivElement>(null);
  
  // Refs for scroll-driven text animation
  const revealSectionsRef = useRef<HTMLDivElement[]>([]);
  
  // Scroll-based transforms for image zoom
  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start center", "end center"]
  });
  
  // Transform scroll progress to scale values (1.0 to 1.2, then stop at 1.2)
  // Start zooming only when the section is visible
  const restaurantImageScale = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.8, 1],
    [1, 1.2, 1.2, 1.2]
  );
  
  const foodImageScale = useTransform(
    scrollYProgress,
    [0.5, 0.8, 1, 1],
    [1, 1.2, 1.2, 1.2]
  );
  
  // Enhanced animation variants for experience section elements
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    }
  };

  const slideInFromLeftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  };

  const slideInFromRightVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  };
  
  const staggerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  useEffect(() => {
    // Initialize reveal sections
    const sections = document.querySelectorAll('.reveal-section');
    revealSectionsRef.current = Array.from(sections) as HTMLDivElement[];

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Get the fruit section element to calculate when slide should start
      const fruitSection = document.querySelector('.fruit-section') as HTMLElement;
      
      if (fruitSection) {
        // Calculate animation trigger points
        const sectionStart = fruitSection.offsetTop - window.innerHeight;
        const sectionEnd = fruitSection.offsetTop + fruitSection.offsetHeight;
        const animationDistance = sectionEnd - sectionStart;
        
        // Calculate progress based on scroll position
        if (currentScrollY >= sectionStart && currentScrollY <= sectionEnd) {
          const progress = Math.max(0, Math.min(1, (currentScrollY - sectionStart) / animationDistance));
          setSectionProgress(progress);
        } else if (currentScrollY < sectionStart) {
          setSectionProgress(0);
        } else {
          setSectionProgress(1);
        }
      }

      // Handle scroll-driven text reveal animation
      const viewportHeight = window.innerHeight;

      revealSectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;

        // Start animation earlier - when section is still visible in viewport
        // Animation starts when section top is at viewport height (earlier trigger)
        // Animation completes when section top reaches middle of viewport (viewportHeight * 0.5)
        const animationStartPoint = viewportHeight; // Start when section top is at bottom of viewport
        const animationEndPoint = viewportHeight * 0.5; // Complete when section top is at middle of viewport
        const animationRange = animationStartPoint - animationEndPoint;
        
        // Calculate progress: 0 when section top is at viewportHeight, 1 when at viewportHeight * 0.5
        // This means animation starts sooner and completes when text is in middle of page
        let progress = 0;
        if (rect.top <= animationStartPoint && rect.top >= animationEndPoint) {
          progress = (animationStartPoint - rect.top) / animationRange;
        } else if (rect.top < animationEndPoint) {
          progress = 1; // Fully filled when section top is at or past middle of viewport
        }
        
        progress = Math.max(0, Math.min(1, progress));
        
        // Update word opacity based on progress
        const wordElements = section.querySelectorAll('.reveal-word');
        wordElements.forEach((wordEl, wordIndex) => {
          const element = wordEl as HTMLElement;
          const totalWords = wordElements.length;
          
          // Map the overall section progress to individual word progress.
          const wordProgressStart = wordIndex / totalWords;
          const wordProgressEnd = (wordIndex + 1) / totalWords;
          
          const wordProgress = Math.max(0, Math.min(1, 
            (progress - wordProgressStart) / (wordProgressEnd - wordProgressStart)
          ));
          
          const opacity = 0.2 + (wordProgress * 0.8);
          element.style.opacity = opacity.toString();
        });
      });
    };
    
    // Use throttled scroll handling for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <main>
      <Hero />
      
      {/* Fruit section with SVG and text */}
      <section className="fruit-section">
        <div className="fruit-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src="/ccfruit.png" alt="Delhi House Café" width={200} height={200} />
          <p
            className="fruit-text"
            style={{
              marginTop: '1.5rem',
              marginBottom: '5rem',
              color: 'rgba(231, 227, 226, 0.70)',
              textAlign: 'center',
              fontFamily: 'Aileron',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: '39px'
            }}
          >
            Italy’s Small-Plate Art, Reimagined in Delhi
          </p>
        </div>
      </section>
      
      {/* Pizza section */}
      <section className="pizza-section">
        <Image 
          src="/pizza.png" 
          alt="Cicchetti Pizza" 
          fill
          className="pizza-image"
          priority
        />
      </section>
      
      {/* THE EXPERIENCE Section */}
      <div className="reveal-section">
        <motion.section 
          ref={experienceSectionRef}
          className="experience-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
        >
          <motion.div className="experience-container" variants={staggerContainerVariants}>
            <motion.h2 
              className="experience-heading" 
              variants={fadeInUpVariants}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >

            </motion.h2>
            <motion.p 
              className="experience-intro" 
              variants={textRevealVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {splitTextIntoWords("Welcome to Cicchetti Italiano — India’s first modern vegetarian cicchetti bar, where sharing plates meet thoughtful design, craft and clean indulgence.")}
            </motion.p>
          
          {/* First subsection - Image left, text right */}
          <motion.div 
            className="experience-subsection" 
            variants={staggerContainerVariants}
          >
            <motion.div 
              ref={restaurantImageRef}
              className="experience-image"
              variants={slideInFromLeftVariants}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ 
                scale: restaurantImageScale,
                transformOrigin: "center"
              }}
            >
              <img src="/rest.jpg" alt="Restaurant ambiance" />
            </motion.div>
            <motion.div 
              className="experience-content"
              variants={slideInFromRightVariants}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h3 
                className="experience-subheading" 
                variants={textRevealVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  color: "#E7E3E2",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "65px",
                  textTransform: "uppercase"
                }}
              >
                <VanishingText threshold={0.35} staggerDelay={20}>
                  The Experience
                </VanishingText>
              </motion.h3>
              <motion.p 
                className="experience-text" 
                variants={textRevealVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  color: "rgba(231, 227, 226, 0.70)",
                  fontFamily: "Aileron",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "39px"
                }}
              >
                {splitTextIntoWords("Cicchetti Italiano is more than just a restaurant—it's an immersive dining experience rooted in the spirit of Venetian cicchetti culture, re-interpreted for a plant-forward world. Here, you'll gather, share, indulge and linger—with friends, family, or a date—under an ambience designed to transport you.")}
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Second subsection - Text left, image right */}
          <motion.div 
            className="experience-subsection" 
            variants={staggerContainerVariants}
          >
            <motion.div 
              className="experience-content"
              variants={slideInFromLeftVariants}
            >
              <motion.h3 
                className="experience-subheading" 
                variants={textRevealVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  color: "#E7E3E2",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "65px",
                  textTransform: "uppercase"
                }}
              >
                <VanishingText threshold={0.35} staggerDelay={20}>
                THE SPACE
                </VanishingText>
              </motion.h3>
              <motion.p 
                className="experience-text" 
                variants={textRevealVariants}
                style={{
                  color: "rgba(231, 227, 226, 0.70)",
                  fontFamily: "Aileron",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "39px"
                }}
              >
                {splitTextIntoWords("Where Tuscan warmth meets modern Delhi. Featuring olive-green accents, terracotta tones and hand-painted murals, the interiors of Cicchetti Italiano blend authenticity with elegance. Textural walls echo vintage cutlery finishes; lighting shifts from bright and fresh by day to moody and golden by evening. The result is a home away from home—one built for conversation, sharing, lingering and delight. ")}
              </motion.p>
            </motion.div>
            <motion.div 
              ref={foodImageRef}
              className="experience-image"
              variants={slideInFromRightVariants}
              style={{ 
                scale: foodImageScale,
                transformOrigin: "center"
              }}
            >
              <img src="/1cc.png" alt="Delicious Indian cuisine" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
       {/* Images & Video Section */}
       <section className="pasta-lab-section md:mx-20">
        <h1 className="pasta-lab-heading"   style={{
                  color: "#E7E3E2",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "65px",
                  textTransform: "uppercase"
                }}>THE CHEF</h1>
                <p
                  style={{
                    color: "#E7E3E2",
                    textAlign: "center",
                    fontFamily: "Aileron, sans-serif",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "39px",
                    maxWidth: "900px",
                    margin: "0 auto",
                    marginBottom: "40px"
                  }}
                >
                  “I touch people’s lives with what I do, and I love it.”<br />
                  <span
                    style={{
                      color: "rgba(231, 227, 226, 0.70)",
                      fontFamily: "Aileron, sans-serif",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 300,
                      lineHeight: "39px"
                    }}
                  >
                    Chef Parth Gupta is a visionary culinary artist redefining modern vegetarian dining through creativity, sustainability, and balance. Trained under Michelin-starred legends including Alain Ducasse in Paris and Arturo Granato in London, Parth brings global finesse to plant-forward cuisine.
                  </span>
                </p>
        <div className="pasta-lab-container">
          {/* Video left, image right */}
          <div className="pasta-lab-images">
            <div className="pasta-lab-image">
              <video
                src="/videocc.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="pasta-lab-video"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className="pasta-lab-image">
              <img src="/chef.jpg" alt="Image 2" />
            </div>
          </div>
        </div>
      </section>
      </div>
      
      {/* Under Chef section */}
      <section className="pizza-section" style={{ marginTop: '100px' }}>
        <Image 
          src="/underchef.jpg" 
          alt="Chef" 
          fill
          className="pizza-image"
          priority
        />
      </section>
      
      {/* NEWS & MORE Section */}
      <section className="news-section">
        <div className="news-container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.3173C0 29.8765 11.256 37.1008 19.4936 43.5695C22.4 45.8503 25.2 48 28 48C30.8 48 33.6 45.8531 36.5064 43.5667C44.7468 37.1036 56 29.8765 56 16.3201C56 2.76376 40.6 -6.85842 28 6.17935C15.4 -6.85842 0 2.75819 0 16.3173Z" fill="white"/>
            </svg>
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Aileron",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "39px",
                maxWidth: "700px",
                margin: "0 auto",
                marginTop: "40px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
            </p>
          </div>
          <h2
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Aileron",
              fontSize: "45px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "65px",
              textTransform: "uppercase"
            }}
          >
            What Experts are saying?
          </h2>
          
          <div className="news-grid">
            {/* Guardian Review Article */}
            <a
              href="https://www.theguardian.com/food/2020/sep/13/jay-rayner-restaurant-review-delhi-house-cafe-manchester-there-is-a-lot-to-enjoy"
              target="_blank"
              rel="noopener noreferrer"
              className="news-item"
            >
              <div className="news-image">
                <img src="/ccfruit.png" alt="Delhi House Cafe Manchester review" />
              </div>
              <div className="news-content">
                <h3
                  className="news-title"
                  style={{
                    color: "#FFF",
                    fontFamily: "Aileron",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </h3>
                <p className="news-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>

            {/* Confidentials Liverpool Article */}
            <a
              href="https://confidentials.com/liverpool/a-look-inside-delhi-house-cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="news-item"
            >
              <div className="news-image">
                <img src="/ccfruit.png" alt="Delhi House Cafe Liverpool opening" />
              </div>
              <div className="news-content">
                <h3
                  className="news-title"
                  style={{
                    color: "#FFF",
                    fontFamily: "Aileron",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Consectetur Adipiscing Elit
                </h3>
                <p className="news-text">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                </p>
              </div>
            </a>

            {/* Liverpool Echo Article */}
            <a
              href="https://www.liverpoolecho.co.uk/whats-on/food-drink-news/gallery/first-look-inside-royal-albert-29941494"
              target="_blank"
              rel="noopener noreferrer"
              className="news-item"
            >
              <div className="news-image">
                <img src="/ccfruit.png" alt="First look inside Royal Albert Dock restaurant" />
              </div>
              <div className="news-content">
                <h3
                  className="news-title"
                  style={{
                    color: "#FFF",
                    fontFamily: "Aileron",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Sed Do Eiusmod Tempor
                </h3>
                <p className="news-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* VISIT US Section */}
      <section className="visit-us-section" style={{ fontFamily: 'Aileron' }}>
        <div className="visit-us-container">
          <h2 className="visit-us-heading" style={{ fontFamily: 'Aileron' }}>VISIT US</h2>
          
          <div className="visit-us-content">
            {/* Left side - Contact Info */}
            <div className="visit-us-info">
              {/* Phone Section */}
              <div className="info-group">
                <h3 className="info-heading" style={{ fontFamily: 'Aileron' }}>PHONE:</h3>
                <div className="info-item">
                  <h4 className="location-name" style={{ fontFamily: 'Aileron' }}>Cicchetti</h4>
                  <p className="contact-detail" style={{ fontFamily: 'Aileron' }}>+91 96505 69946</p>
                </div>
                <div className="info-item">
                  <h4 className="location-name" style={{ fontFamily: 'Aileron' }}>First Floor, 70, Khan Market, Rabindra Nagar, New Delhi, Delhi 110003
                  </h4>
                  <p className="contact-detail" style={{ fontFamily: 'Aileron' }}>9650018246</p>
                </div>
                
              </div>

              {/* Hours Section */}
              <div className="info-group">
                <h3 className="info-heading" style={{ fontFamily: 'Aileron' }}>HOURS:</h3>
                <div className="info-item">
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Monday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Tuesday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Wednesday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Thursday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Friday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Saturday: 12–11 pm</p>
                  <p className="hours-detail" style={{ fontFamily: 'Aileron' }}>Sunday: 12–11 pm</p>
                </div>
              </div>
            </div>

            {/* Right side - Google Maps */}
            <div className="visit-us-map">
              <div className="map-container">
                {/* Example: Cicchetti Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0079612846316!2d77.22375697632192!3d28.59953797568281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f43e327ef1%3A0x27516e5e7a2471eb!2sCicchetti%20Italiano!5e0!3m2!1sen!2sin!4v1758954528545!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{border: 0, fontFamily: 'Aileron'}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cicchetti Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Mobile Reservation Overlay */}
      <div className="mobile-reservation-overlay">
        <button 
          className="mobile-reservation-btn"
          onClick={() => setShowReservationModal(true)}
        >
          <i className="fas fa-calendar-alt"></i>
          <span>Reserve Table</span>
        </button>
      </div>

     
      
    </main>
  );
}