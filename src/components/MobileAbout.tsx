'use client';

import React from 'react';
import Image from 'next/image';

export default function MobileAbout() {
  return (
    <div className="bg-[#3b3f27] relative w-full overflow-x-hidden min-h-screen pb-20">
      {/* About Hero Section */}


      {/* Full Width Image Section */}
      <section className="relative w-full h-[400px] mt-[100px] z-0">
        <div className="relative w-full h-full">
          <Image
            src="/aboutbelow.jpg"
            alt="About Cicchetti"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Experience Content */}
      <section className="relative w-full px-6 py-16 flex flex-col gap-12 text-center z-10">
        {/* Intro Text */}
        <p
          className="text-[20px] leading-[30px] text-[rgba(231,227,226,0.7)]"
          style={{ fontFamily: "Aston, sans-serif" }}
        >
          At Cicchetti Italiano, we champion the philosophy of sustainable dining—food that is good for the environment and good for you.
        </p>

        {/* Our Concept */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/aboutexp1.jpg" 
              alt="Our sustainable concept" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[38px] leading-[48px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
              Our Concept
            </h2>
            <p className="text-[20px] leading-[30px] text-[rgba(231,227,226,0.7)]" style={{ fontFamily: "Aston, sans-serif" }}>
              Our 100% vegetarian menu is crafted with organic, locally sourced ingredients, supporting ethical farming and minimizing our carbon footprint. We partner with local dairies that uphold animal welfare and sustainability at every step. Every element on your plate is made from scratch—from breads and sauces to handcrafted cheeses. Our signature sourdough pizzas undergo a 72-hour fermentation for better digestion and a naturally complex flavor.
            </p>
          </div>
        </div>

        {/* USPs Strip */}
        <section className="relative w-full py-8 px-6 bg-[#3b3f27] border-y border-[#7e884d]/20">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-3 items-center w-full">
              <div className="text-center">
                <span className="text-[18px] text-white" style={{ fontFamily: "Aston, sans-serif" }}>Everything made from Scratch</span>
              </div>
              <div className="w-full h-[1px] bg-[#7e884d]/30"></div>
              <div className="text-center">
                <span className="text-[18px] text-white" style={{ fontFamily: "Aston, sans-serif" }}>100% Vegetarian</span>
              </div>
              <div className="w-full h-[1px] bg-[#7e884d]/30"></div>
              <div className="text-center">
                <span className="text-[18px] text-white" style={{ fontFamily: "Aston, sans-serif" }}>Organic Locally sourced ingredients</span>
              </div>
              <div className="w-full h-[1px] bg-[#7e884d]/30"></div>
              <div className="text-center">
                <span className="text-[18px] text-white" style={{ fontFamily: "Aston, sans-serif" }}>Sustainable</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Restaurant */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl">
            <Image 
              src="/aboutexp2.jpg" 
              alt="The restaurant ambiance" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[38px] leading-[48px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
              THE CHEF
            </h2>
            <p className="text-[20px] leading-[30px] text-[rgba(231,227,226,0.7)]" style={{ fontFamily: "Aston, sans-serif" }}>
              Chef Parth Gupta is a passionate culinary innovator dedicated to transforming plant-based dining with artistry, sustainability, and mindful balance. With world-class training from renowned institutions including Ecole Ducasse in Paris and Le Cordon Bleu in London, Parth combines international expertise with a deep commitment to ethical, sustainable cuisine that celebrates the natural flavors of vegetarian ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="relative w-full px-6 py-16 flex flex-col gap-8">
         <h2 className="text-[32px] leading-[32px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
            VISIT US
         </h2>

         {/* Phone */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>PHONE:</h3>
            <div className="flex flex-col gap-4">
               <div>
                  <p className="font-['Aston'] font-light text-[22px] leading-[28px] text-[rgba(231,227,226,0.9)] underline decoration-1 underline-offset-4 mb-1">
                    Cicchetti
                  </p>
                  <p className="font-['Aston'] font-light text-[20px] leading-[26px] text-[rgba(231,227,226,0.9)]">
                    +91 96505 69946
                  </p>
               </div>
              
            </div>
         </div>

         {/* Hours */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>HOURS:</h3>
            <div className="flex flex-col gap-2">
               {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <div key={day} className="flex justify-between max-w-[300px]">
                     <span className="font-['Aston'] font-light text-[20px] leading-[26px] text-[rgba(231,227,226,0.9)]">
                       {day}:
                     </span>
                     <span className="font-['Aston'] font-light text-[18px] leading-[24px] text-[rgba(231,227,226,0.9)]">
                       12-11 pm
                     </span>
                  </div>
               ))}
            </div>
         </div>

         {/* Address */}
         <div className="flex flex-col gap-4">
            <h3 className="text-[24px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>Visit Us:</h3>
            <p className="font-['Aston'] font-light text-[20px] leading-[28px] text-[rgba(231,227,226,0.9)]">
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
            <h3 className="text-[24px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>JOIN OUR TEAM</h3>
            <p className="text-[21px] text-white" style={{ fontFamily: "Aston, sans-serif" }}>E: info@cicchetti.com</p>
         </div>

         {/* Our Brands */}
         <div className="flex flex-col gap-4 items-center">
            <h3 className="text-[24px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>OUR BRANDS</h3>
            <div className="flex flex-col gap-3 items-center">
               <a 
                  href="https://bloomcafes.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[21px] text-white hover:text-[#7e884d] transition-colors"
                  style={{ fontFamily: "Aston, sans-serif" }}
               >
                  Bloom Cafe & Cakery
               </a>
               <a 
                  href="https://www.instagram.com/cicchetti.italiano?igsh=MWF4d2s2bzI1bGFtZg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[21px] text-white hover:text-[#7e884d] transition-colors"
                  style={{ fontFamily: "Aston, sans-serif" }}
               >
                  Cicchetti Italiano
               </a>
               <a 
                  href="https://www.instagram.com/thelavenderflavours?igsh=dHNtcmw0amZ5Znk4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[21px] text-white hover:text-[#7e884d] transition-colors"
                  style={{ fontFamily: "Aston, sans-serif" }}
               >
                  The Lavender Flavours
               </a>
               <a 
                  href="https://www.instagram.com/firenze.gelateria?igsh=MTFycjQwdW5ia213Ng==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[21px] text-white hover:text-[#7e884d] transition-colors"
                  style={{ fontFamily: "Aston, sans-serif" }}
               >
                  Firenze Gelateria & Caffè
               </a>
            </div>
         </div>

         {/* Follow Our Journey */}
         <div className="flex flex-col gap-6 items-center">
            <h3 className="text-[24px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>FOLLOW OUR JOURNEY</h3>
            <div className="flex gap-8 justify-center">
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-instagram"></i></a>
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-facebook-f"></i></a>
               <a href="#" className="text-white text-3xl hover:text-[#7e884d] transition-colors"><i className="fab fa-x-twitter"></i></a>
            </div>
         </div>
      </section>

      {/* Footer Credit */}
      <div className="w-full px-6 py-4 border-t border-[#7e884d]/20 text-center">
        <p className="text-[12px] text-white/50" style={{ fontFamily: "Aston, sans-serif", letterSpacing: '0.1em' }}>
          Design and Developed by Designncode
        </p>
      </div>
    </div>
  );
}

