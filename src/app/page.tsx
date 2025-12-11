'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ExperienceSection from '../components/ExperienceSection';
import VisitUsSection from '../components/VisitUsSection';
import MobileHome from '../components/MobileHome';

export default function Home() {
  return (
    <main>
      {/* Desktop View */}
      <div className="hidden md:block">
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
                fontFamily: '"Aston Script", cursive',
                fontSize: '35px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '65px'
                
              }}
            >
              Italy's Aperitivo Culture Reimagined in Delhi
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
        
        {/* THE EXPERIENCE Section */}
        <ExperienceSection />
        
         {/* Images & Video Section */}
         <section className="pasta-lab-section md:mx-20">
                  <h1 className="pasta-lab-heading"   style={{
                    color: "#FFFFFF",
                    fontFamily: "Deluce, sans-serif",
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
                      fontFamily: '"Aston Script", cursive',
                      fontSize: "30px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "45px",
                      maxWidth: "900px",
                      margin: "0 auto",
                      marginBottom: "40px"
                    }}
                  >
                    "I touch people's lives with what I do, and I love it."<br />
                    <span
                      style={{
                        color: "rgba(231, 227, 226, 0.70)",
                        fontFamily: "Aston, sans-serif",
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
            
            <h2
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Deluce, sans-serif",
                fontSize: "45px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "65px",
                textTransform: "uppercase"
              }}
            >
              In Media
            </h2>
            
            <div className="news-grid">
              {/* 1. Times Food Recommends */}
              <a
                href="https://recipes.timesofindia.com/articles/food-trips/tf-recommends-places-to-explore-in-delhi/ncr-this-weekend/articleshow/124312495.cms"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/1.jpeg" alt="Times Food Recommends" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    Times Food Recommends
                  </h3>
                  <p className="news-text">
                    Cicchetti Italiano offers a refined take on Italian cuisine with a 100% vegetarian menu, nestled in the heart of Khan Market.
                  </p>
                </div>
              </a>

              {/* 2. Deccan Chronicle - Guava */}
              <a
                href="https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/everybody-is-going-ga-ga-over-guava-1908114"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/2.jpeg" alt="Deccan Chronicle Guava" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    Deccan Chronicle
                  </h3>
                  <p className="news-text">
                    Everybody is going ga-ga over guava. Chefs are experimenting with pink and white guavas in various dishes and drinks.
                  </p>
                </div>
              </a>

              {/* 3. Hindustan Times - Vodka */}
              <a
                href="https://www.hindustantimes.com/htcity/htcity-high-spirits/international-vodka-day-how-chefs-are-relooking-at-the-spirit-beyond-drinks-101759395832808.html"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/3.jpeg" alt="Hindustan Times Vodka" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    Hindustan Times
                  </h3>
                  <p className="news-text">
                    International Vodka Day: How chefs are relooking at the spirit beyond drinks, integrating it into savory and sweet culinary creations.
                  </p>
                </div>
              </a>

              {/* 4. Curly Tales - Teachers' Day */}
              <a
                href="https://curlytales.com/india/food/ct-exclusive-on-teachers-day-indian-chefs-and-bartenders-thank-the-gurus-who-shaped-their-journeys/amp/"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/4.jpeg" alt="Curly Tales Teachers Day" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    Curly Tales
                  </h3>
                  <p className="news-text">
                    On Teachers' Day, Indian Chefs and Bartenders thank the Gurus who shaped their journeys and culinary philosophies.
                  </p>
                </div>
              </a>

              {/* 5. Deccan Chronicle - Summertime */}
              <a
                href="https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/summertime-culinary-ride-1879733"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/5.jpeg" alt="Deccan Chronicle Summertime" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    Deccan Chronicle
                  </h3>
                  <p className="news-text">
                    Summertime culinary ride: Exploring seasonal summer menus featuring fresh, vibrant ingredients perfect for the warmer months.
                  </p>
                </div>
              </a>

              {/* 6. Indian Express - Pasta */}
              <a
                href="https://indianexpress.com/article/lifestyle/food-wine/answered-why-italians-never-break-pasta-boiling-expert-9918120/"
                target="_blank"
                rel="noopener noreferrer"
                className="news-item"
              >
                <div className="news-image">
                  <img src="/6.jpeg" alt="Indian Express Pasta" />
                </div>
                <div className="news-content">
                  <h3
                    className="news-title"
                    style={{
                      color: "#FFF",
                      fontFamily: "Deluce, sans-serif",
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "40px",
                      marginTop: "0px"
                    }}
                  >
                    The Indian Express
                  </h3>
                  <p className="news-text">
                    Why Italians never break pasta before boiling: Experts explain the tradition and science behind keeping the strands whole.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
        
        {/* VISIT US Section */}
        <VisitUsSection />
        
        <Footer />
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileHome />
      </div>
    </main>
  );
}