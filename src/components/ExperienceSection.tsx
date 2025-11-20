'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VanishingText from './VanishingText';

// Helper function to split text into words
const splitTextIntoWords = (text: string) => {
  return text.split(' ').map((word, index, array) => (
    <span key={index} className="reveal-word">
      {word}
      {index < array.length - 1 && ' '}
    </span>
  ));
};

const ExperienceSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
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
  
  // Animation variants
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

      // Handle scroll-driven text reveal animation
      const viewportHeight = window.innerHeight;

      revealSectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        const animationStartPoint = viewportHeight; 
        const animationEndPoint = viewportHeight * 0.5; 
        const animationRange = animationStartPoint - animationEndPoint;
        
        let progress = 0;
        if (rect.top <= animationStartPoint && rect.top >= animationEndPoint) {
          progress = (animationStartPoint - rect.top) / animationRange;
        } else if (rect.top < animationEndPoint) {
          progress = 1; 
        }
        
        progress = Math.max(0, Math.min(1, progress));
        
        // Update word opacity based on progress
        const wordElements = section.querySelectorAll('.reveal-word');
        wordElements.forEach((wordEl, wordIndex) => {
          const element = wordEl as HTMLElement;
          const totalWords = wordElements.length;
          
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
  </div>
  );
};

export default ExperienceSection;
