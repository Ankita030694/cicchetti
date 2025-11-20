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

const AboutExperienceSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for experience section animations
  const experienceSectionRef = useRef<HTMLElement>(null);
  const conceptImageRef = useRef<HTMLDivElement>(null);
  const restaurantImageRef = useRef<HTMLDivElement>(null);
  
  // Refs for scroll-driven text animation
  const revealSectionsRef = useRef<HTMLDivElement[]>([]);
  
  // Scroll-based transforms for image zoom
  const { scrollYProgress } = useScroll({
    target: experienceSectionRef,
    offset: ["start center", "end center"]
  });
  
  // Transform scroll progress to scale values (1.0 to 1.2, then stop at 1.2)
  const conceptImageScale = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.8, 1],
    [1, 1.2, 1.2, 1.2]
  );
  
  const restaurantImageScale = useTransform(
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
            {splitTextIntoWords("At Cicchetti Italiano, we champion the philosophy of sustainable dining—food that is good for the environment and good for you.")}
          </motion.p>
        
        {/* First subsection - Our Concept */}
        <motion.div 
          className="experience-subsection" 
          variants={staggerContainerVariants}
        >
          <motion.div 
            ref={conceptImageRef}
            className="experience-image"
            variants={slideInFromLeftVariants}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ 
              scale: conceptImageScale,
              transformOrigin: "center"
            }}
          >
            <img src="/aboutexp1.jpg" alt="Our sustainable concept" />
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
                Our Concept
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
              {splitTextIntoWords("Our 100% vegetarian menu is crafted with organic, locally sourced ingredients, supporting ethical farming and minimizing our carbon footprint. We partner with local dairies that uphold animal welfare and sustainability at every step. Every element on your plate is made from scratch—from breads and sauces to handcrafted cheeses. Our signature sourdough pizzas undergo a 72-hour fermentation for better digestion and a naturally complex flavor.")}
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Second subsection - The Restaurant */}
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
              THE RESTAURANT
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
              {splitTextIntoWords("Feel the warmth and charm of our space, perfect for cherished moments with family, romantic evenings, and solo culinary adventures.")}
            </motion.p>
          </motion.div>
          <motion.div 
            ref={restaurantImageRef}
            className="experience-image"
            variants={slideInFromRightVariants}
            style={{ 
              scale: restaurantImageScale,
              transformOrigin: "center"
            }}
          >
            <img src="/aboutexp2.jpg" alt="The restaurant ambiance" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  </div>
  );
};

export default AboutExperienceSection;
