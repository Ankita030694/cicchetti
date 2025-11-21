'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ExperienceSection from '../components/ExperienceSection';
import VisitUsSection from '../components/VisitUsSection';

export default function Home() {
  const [showReservationModal, setShowReservationModal] = useState(false);

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
      <ExperienceSection />
      
       {/* Images & Video Section */}
       <section className="pasta-lab-section md:mx-20">
        <h1 className="pasta-lab-heading"   style={{
                  color: "#E7E3E2",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "50px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "65px",
                  textTransform: "uppercase",
                  marginTop: "40px"
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
      <VisitUsSection />
      
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