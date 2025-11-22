'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileHome() {
  return (
    <div className="bg-[#3b3f27] relative w-full overflow-x-hidden min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/herobgcc.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(49,49,49,0.42)]" />
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="relative w-full max-w-[300px] aspect-[2/1]">
             <Image
              src="/logos/cclogo1.png"
              alt="Cicchetti Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
             <div className="w-[1px] h-12 bg-white/50"></div>
             <div className="w-2 h-2 border-b border-r border-white rotate-45"></div>
        </div>
      </section>

      {/* Pizza Section - Burrata Classico Pizza */}
     

      {/* Fruit Section */}
      <section 
        className="relative w-full py-16 px-8 flex flex-col items-center text-center overflow-hidden min-h-[100vh] justify-center"
        style={{
          background: 'linear-gradient(180deg, #3B3F27 0%, #3B3F27 77.89%, rgba(59, 63, 39, 0.91) 86.71%, rgba(59, 63, 39, 0.00) 100%)'
        }}
      >
        
        <div className="relative z-10 w-[194px] h-[194px] mb-6">
          <Image
            src="/ccfruit.png"
            alt="Fruit Art"
            fill
            className="object-contain"
          />
        </div>
        <p className="relative z-10 font-['Aileron'] font-light text-[25px] leading-[32px] text-[rgba(231,227,226,0.7)]">
          Italy’s Small-Plate Art, Reimagined in Delhi
        </p>

        {/* Bottom Blur Effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[150px] z-1 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, #3B3F27 13.05%, rgba(59, 63, 39, 0.8) 50%, rgba(59, 63, 39, 0.4) 80%, transparent 100%)',
            backdropFilter: 'blur(35.9px)',
            WebkitBackdropFilter: 'blur(35.9px)'
          }}
        />
      </section>

      <section className="relative w-full h-[338px]">
        <Image
          src="/pizza.png"
          alt="Burrata Classico Pizza"
          fill
          className="object-cover"
        />
      </section>

      {/* Welcome Text */}
      <section className="relative w-full px-6 pb-16 text-center mt-10">
       
        <p className="font-['Aileron'] font-light text-[20px] leading-[29px] text-[rgba(231,227,226,0.7)]">
          Welcome to Cicchetti Italiano — India’s first modern vegetarian cicchetti bar, where sharing plates meet thoughtful design, craft and clean indulgence.
        </p>
        <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg mt-10">
             <Image
                src="/rest.jpg"
                alt="Interior"
                fill
                className="object-cover"
             />
        </div>
      </section>

      {/* The Experience Section */}
      <section className="relative w-full px-6 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/aboutexp1.jpg" 
              alt="The Experience"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[35px] leading-[35px] text-[#e7e3e2] uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
              The Experience
            </h2>
            <p className="font-['Aileron'] font-light text-[20px] leading-[28px] text-[rgba(231,227,226,0.7)]">
              Cicchetti Italiano is more than just a restaurant—it’s an immersive dining experience rooted in the spirit of Venetian cicchetti culture, re-interpreted for a plant-forward world. Here, you’ll gather, share, indulge and linger—with friends, family, or a date—under an ambience designed to transport you.
            </p>
            <div className="w-[190px] h-[1px] bg-[#7E884D] mt-2"></div>
          </div>
        </div>

        {/* The Space Section */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/aboutexp2.jpg"
              alt="The Space"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[35px] leading-[35px] text-[#e7e3e2] uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
              THE SPACE
            </h2>
            <p className="font-['Aileron'] font-light text-[20px] leading-[28px] text-[rgba(231,227,226,0.7)]">
              Where Tuscan warmth meets modern Delhi. Featuring olive-green accents, terracotta tones and hand-painted murals, the interiors of Cicchetti Italiano blend authenticity with elegance. Textural walls echo vintage cutlery finishes; lighting shifts from bright and fresh by day to moody and golden by evening. The result is a home away from home—one built for conversation, sharing, lingering and delight.
            </p>
            <div className="w-[190px] h-[1px] bg-[#7E884D] mt-2"></div>
          </div>
        </div>
      </section>

      {/* The Chef Section */}
      <section className="relative w-full px-6 py-16 flex flex-col items-center text-center gap-8">
        <h2 className="font-['Aileron'] text-[35px] leading-[35px] text-[#e7e3e2] uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
          THE CHEF
        </h2>
        <div className="flex flex-col gap-4 text-[rgba(231,227,226,0.7)] font-['Aileron'] font-light text-[18px] leading-[28px]">
          <p className="italic text-[#e7e3e2] text-[22px]">“I touch people’s lives with what I do, and I love it.”</p>
          <p>
            Chef Parth Gupta is a visionary culinary artist redefining modern vegetarian dining through creativity, sustainability, and balance. Trained under Michelin-starred legends including Alain Ducasse in Paris and Arturo Granato in London, Parth brings global finesse to plant-forward cuisine.
          </p>
        </div>
        <div className="relative w-full aspect-[3/4] max-w-[400px] rounded-lg overflow-hidden mt-4">
           <Image
              src="/chef.jpg"
              alt="Chef Parth Gupta"
              fill
              className="object-cover"
            />
            
        </div>
        <div className="relative w-full aspect-[3/4] max-w-[400px] rounded-lg overflow-hidden mt-4">
                <video
                  src="/videocc.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                />
              </div>
      </section>

      {/* Under Chef Section */}
      <section className="relative w-full h-[338px] mt-10">
        <Image 
          src="/underchef.jpg" 
          alt="Chef" 
          fill
          className="object-cover"
        />
      </section>

      {/* News & More Section */}
      <section className="relative w-full px-6 py-16 flex flex-col items-center text-center gap-10">
          {/* Icon and Quote */}
          <div className="flex flex-col items-center gap-6">
            <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.3173C0 29.8765 11.256 37.1008 19.4936 43.5695C22.4 45.8503 25.2 48 28 48C30.8 48 33.6 45.8531 36.5064 43.5667C44.7468 37.1036 56 29.8765 56 16.3201C56 2.76376 40.6 -6.85842 28 6.17935C15.4 -6.85842 0 2.75819 0 16.3173Z" fill="white"/>
            </svg>
            <p className="font-['Aileron'] font-light text-[20px] leading-[39px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
            </p>
          </div>

          {/* Experts Heading */}
          <h2 className="text-[35px] leading-[45px] text-white uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
            What Experts are saying?
          </h2>

          {/* News Grid (Stacked for mobile) */}
          <div className="flex flex-col gap-12 w-full">
            {/* Guardian */}
            <a href="https://www.theguardian.com/food/2020/sep/13/jay-rayner-restaurant-review-delhi-house-cafe-manchester-there-is-a-lot-to-enjoy" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/ccfruit.png" alt="Review" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-[#d9c9b8]" style={{ fontFamily: "Aileron, sans-serif" }}>Lorem Ipsum Dolor Sit Amet</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aileron, sans-serif" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
            </a>

            {/* Confidentials */}
            <a href="https://confidentials.com/liverpool/a-look-inside-delhi-house-cafe" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/ccfruit.png" alt="Review" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-[#d9c9b8]" style={{ fontFamily: "Aileron, sans-serif" }}>Consectetur Adipiscing Elit</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aileron, sans-serif" }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
               </div>
            </a>

            {/* Echo */}
            <a href="https://www.liverpoolecho.co.uk/whats-on/food-drink-news/gallery/first-look-inside-royal-albert-29941494" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/ccfruit.png" alt="Review" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-[#d9c9b8]" style={{ fontFamily: "Aileron, sans-serif" }}>Sed Do Eiusmod Tempor</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aileron, sans-serif" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </a>
          </div>
      </section>

      {/* Visit Us Section */}
      <section className="relative w-full px-6 py-16 flex flex-col gap-8">
         <h2 className="text-[32px] leading-[32px] text-white uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
            VISIT US
         </h2>

         {/* Phone */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-[#7e884d]" style={{ fontFamily: "Aileron, sans-serif" }}>PHONE:</h3>
            <div className="flex flex-col gap-4 text-white" style={{ fontFamily: "Aileron, sans-serif" }}>
               <div>
                  <p className="text-[25px] underline decoration-1 underline-offset-4 mb-1">Cicchetti</p>
                  <p className="text-[21px]">+91 96505 69946</p>
               </div>
               <div>
                  <p className="text-[25px] underline decoration-1 underline-offset-4 mb-1">Bloom, Khan Market</p>
                  <p className="text-[21px]">9650018246</p>
               </div>
               <div>
                  <p className="text-[25px] underline decoration-1 underline-offset-4 mb-1">Bloom, Aurobindo</p>
                  <p className="text-[21px]">9650017910</p>
               </div>
            </div>
         </div>

         {/* Hours */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-[#7e884d]" style={{ fontFamily: "Aileron, sans-serif" }}>HOURS:</h3>
            <div className="flex flex-col gap-2 text-white" style={{ fontFamily: "Aileron, sans-serif" }}>
               {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <div key={day} className="flex justify-between max-w-[300px]">
                     <span className="text-[20px]">{day}:</span>
                     <span className="text-[18px]">12-11 pm</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Address */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-[#7e884d] uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>Visit Us:</h3>
            <p className="text-[21px] text-white font-['Aileron'] leading-[30px]">
               First Floor, 70, Khan Market, Rabindra Nagar, New Delhi, Delhi 110003
            </p>
         </div>

         {/* Map */}
         <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden mt-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0079612846316!2d77.22375697632192!3d28.59953797568281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f43e327ef1%3A0x27516e5e7a2471eb!2sCicchetti%20Italiano!5e0!3m2!1sen!2sin!4v1758954528545!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cicchetti Location"
                className="grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            />
         </div>
      </section>

      {/* Footer Info (Join Team / Follow) */}
      <section className="relative w-full px-6 py-16 pb-32 flex flex-col gap-10 border-t border-[#7e884d]/20 items-center text-center">
         {/* Join Our Team */}
         <div className="flex flex-col items-center">
            <Image src="/logos/cclogo1.png" alt="Footer logo" width={200} height={200} />
         </div>
         <div className="flex flex-col gap-4 items-center">
            <h3 className="text-[24px] text-[#7e884d]" style={{ fontFamily: "Aileron, sans-serif" }}>JOIN OUR TEAM</h3>
            <p className="text-[21px] text-white" style={{ fontFamily: "Aileron, sans-serif" }}>E: info@cicchetti.com</p>
         </div>

         {/* Follow Our Journey */}
         <div className="flex flex-col gap-6 items-center">
            <h3 className="text-[24px] text-[#7e884d]" style={{ fontFamily: "Aileron, sans-serif" }}>FOLLOW OUR JOURNEY</h3>
            <div className="flex gap-8 justify-center">
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-instagram"></i></a>
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-facebook-f"></i></a>
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-x-twitter"></i></a>
            </div>
         </div>
      </section>
    </div>
  );
}

