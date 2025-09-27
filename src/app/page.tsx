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

        // Calculate progress based on how much of the tall .reveal-section has been scrolled past.
        // Progress starts when the top of the section is at the top of the viewport (rect.top <= 0).
        // The total scrollable distance is the section's height minus the viewport's height.
        const scrollableDistance = sectionHeight - viewportHeight;
        
        // As we scroll down, rect.top becomes negative. We use this to calculate progress.
        const progress = Math.max(0, Math.min(1, (-rect.top) / scrollableDistance));
        
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
          <p className="fruit-text" style={{ marginTop: '1.5rem', marginBottom: '5rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      
      {/* Horizontal slide reveal image section */}
      <section 
        className="horizontal-slide-section"
        style={{
          '--scroll-progress': sectionProgress
        } as React.CSSProperties & { '--scroll-progress': number }}
      >
        <div className="horizontal-slide-container">
          <div 
            className="horizontal-slide-image"
            style={{
              '--scroll-progress': sectionProgress
            } as React.CSSProperties & { '--scroll-progress': number }}
          >
            <img src="/herobg.jpg" alt="Delhi House Café ambiance" />
          </div>
        </div>
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
              Heading
            </motion.h2>
            <motion.p 
              className="experience-intro" 
              variants={textRevealVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {splitTextIntoWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")}
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
              >
                <VanishingText threshold={0.35} staggerDelay={20}>
                  Heading
                </VanishingText>
              </motion.h3>
              <motion.p 
                className="experience-text" 
                variants={textRevealVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {splitTextIntoWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")}
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
              >
                <VanishingText threshold={0.35} staggerDelay={20}>
                  Heading
                </VanishingText>
              </motion.h3>
              <motion.p 
                className="experience-text" 
                variants={textRevealVariants}
              >
                {splitTextIntoWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.")}
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
              <img src="/food.jpg" alt="Delicious Indian cuisine" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      </div>
      
      {/* Images & Video Section */}
      <section className="pasta-lab-section md:mx-20">
        <h1 className="pasta-lab-heading">LOREM IPSUM DOLOR</h1>
        <div className="pasta-lab-container">
          {/* Video left, image right */}
          <div className="pasta-lab-images">
            <div className="pasta-lab-image">
              <video
                src="/vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="pasta-lab-video"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
            </div>
            <div className="pasta-lab-image">
              <img src="/wait.jpg" alt="Image 2" />
            </div>
          </div>
        </div>
      </section>
      
      {/* NEWS & MORE Section */}
      <section className="news-section">
        <div className="news-container">
          <h2 className="news-heading">LOREM & IPSUM</h2>
          
          <div className="news-grid">
            {/* Guardian Review Article */}
            <a href="https://www.theguardian.com/food/2020/sep/13/jay-rayner-restaurant-review-delhi-house-cafe-manchester-there-is-a-lot-to-enjoy" target="_blank" rel="noopener noreferrer" className="news-item">
              <div className="news-image">
                <img src="/ccfruit.png" alt="Delhi House Cafe Manchester review" />
              </div>
              <div className="news-content">
                <h3 className="news-title">Lorem Ipsum Dolor Sit Amet</h3>
                <p className="news-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </a>
            
            {/* Confidentials Liverpool Article */}
            <a href="https://confidentials.com/liverpool/a-look-inside-delhi-house-cafe" target="_blank" rel="noopener noreferrer" className="news-item">
              <div className="news-image">
                <img src="/ccfruit.png" alt="Delhi House Cafe Liverpool opening" />
              </div>
              <div className="news-content">
                <h3 className="news-title">Consectetur Adipiscing Elit</h3>
                <p className="news-text">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                </p>
              </div>
            </a>
            
            {/* Liverpool Echo Article */}
            <a href="https://www.liverpoolecho.co.uk/whats-on/food-drink-news/gallery/first-look-inside-royal-albert-29941494" target="_blank" rel="noopener noreferrer" className="news-item">
              <div className="news-image">
                <img src="/ccfruit.png" alt="First look inside Royal Albert Dock restaurant" />
              </div>
              <div className="news-content">
                <h3 className="news-title">Sed Do Eiusmod Tempor</h3>
                <p className="news-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* VISIT US Section */}
      <section className="visit-us-section">
        <div className="visit-us-container">
          <h2 className="visit-us-heading">VISIT US</h2>
          
          <div className="visit-us-content">
            {/* Left side - Contact Info */}
            <div className="visit-us-info">
              {/* Phone Section */}
              <div className="info-group">
                <h3 className="info-heading">PHONE:</h3>
                <div className="info-item">
                  <h4 className="location-name">Cicchetti</h4>
                  <p className="contact-detail">+91 96505 69946</p>
                </div>
                <div className="info-item">
                  <h4 className="location-name">Bloom, Khan Market</h4>
                  <p className="contact-detail">9650018246</p>
                </div>
                <div className="info-item">
                  <h4 className="location-name">Bloom, Aurobindo</h4>
                  <p className="contact-detail">9650017910</p>
                </div>
              </div>

              {/* Hours Section */}
              <div className="info-group">
                <h3 className="info-heading">HOURS:</h3>
                <div className="info-item">
                  <p className="hours-detail">Monday: 12–11 pm</p>
                  <p className="hours-detail">Tuesday: 12–11 pm</p>
                  <p className="hours-detail">Wednesday: 12–11 pm</p>
                  <p className="hours-detail">Thursday: 12–11 pm</p>
                  <p className="hours-detail">Friday: 12–11 pm</p>
                  <p className="hours-detail">Saturday: 12–11 pm</p>
                  <p className="hours-detail">Sunday: 12–11 pm</p>
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
                  style={{border: 0}}
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