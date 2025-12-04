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
          <video
            src="/hero-vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
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
        <p className="relative z-10 font-light text-[25px] leading-[36px] text-[rgba(231,227,226,0.7)]" style={{ fontFamily: '"Aston Script", cursive', lineHeight: '55px' }}>
          Italy's Small-Plate Art, Reimagined in Delhi
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
       
        <p className="font-['Aston'] font-light text-[20px] leading-[29px] text-[rgba(231,227,226,0.7)]">
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
            <h2 className="text-[35px] leading-[35px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
              The Experience
            </h2>
            <p className="font-['Aston'] font-light text-[20px] leading-[28px] text-[rgba(231,227,226,0.7)]">
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
            <h2 className="text-[35px] leading-[35px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
              THE SPACE
            </h2>
            <p className="font-['Aston'] font-light text-[20px] leading-[28px] text-[rgba(231,227,226,0.7)]">
              Where Tuscan warmth meets modern Delhi. Featuring olive-green accents, terracotta tones and hand-painted murals, the interiors of Cicchetti Italiano blend authenticity with elegance. Textural walls echo vintage cutlery finishes; lighting shifts from bright and fresh by day to moody and golden by evening. The result is a home away from home—one built for conversation, sharing, lingering and delight.
            </p>
            <div className="w-[190px] h-[1px] bg-[#7E884D] mt-2"></div>
          </div>
        </div>
      </section>

      {/* The Chef Section */}
      <section className="relative w-full px-6 py-16 flex flex-col items-center text-center gap-8">
        <h2 className="font-['Deluce'] text-[35px] leading-[35px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
          THE CHEF
        </h2>
        <div className="flex flex-col gap-8 text-[rgba(231,227,226,0.7)] font-['Aston'] font-light text-[18px] leading-[28px]">
          <p className="text-[#e7e3e2] text-[25px] leading-[36px] font-normal" style={{ fontFamily: '"Aston Script", cursive' }}>"I touch people's lives with what I do, and I love it."</p>
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
        

          {/* Experts Heading */}
          <h2 className="text-[35px] leading-[45px] text-white uppercase" style={{ fontFamily: "Deluce, sans-serif" }}>
            What Experts are saying?
          </h2>

          {/* News Grid (Stacked for mobile) */}
          <div className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-8 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* 1. Times Food Recommends */}
            <a href="https://recipes.timesofindia.com/articles/food-trips/tf-recommends-places-to-explore-in-delhi/ncr-this-weekend/articleshow/124312495.cms" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/1.jpeg" alt="Times Food Recommends" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>Times Food Recommends</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>Cicchetti Italiano offers a refined take on Italian cuisine with a 100% vegetarian menu, nestled in the heart of Khan Market.</p>
               </div>
            </a>

            {/* 2. Deccan Chronicle - Guava */}
            <a href="https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/everybody-is-going-ga-ga-over-guava-1908114" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/2.jpeg" alt="Deccan Chronicle Guava" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>Deccan Chronicle</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>Everybody is going ga-ga over guava. Chefs are experimenting with pink and white guavas in various dishes and drinks.</p>
               </div>
            </a>

            {/* 3. Hindustan Times - Vodka */}
            <a href="https://www.hindustantimes.com/htcity/htcity-high-spirits/international-vodka-day-how-chefs-are-relooking-at-the-spirit-beyond-drinks-101759395832808.html" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/3.jpeg" alt="Hindustan Times Vodka" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>Hindustan Times</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>International Vodka Day: How chefs are relooking at the spirit beyond drinks, integrating it into savory and sweet culinary creations.</p>
               </div>
            </a>

            {/* 4. Curly Tales - Teachers' Day */}
            <a href="https://curlytales.com/india/food/ct-exclusive-on-teachers-day-indian-chefs-and-bartenders-thank-the-gurus-who-shaped-their-journeys/amp/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/4.jpeg" alt="Curly Tales Teachers Day" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>Curly Tales</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>On Teachers' Day, Indian Chefs and Bartenders thank the Gurus who shaped their journeys and culinary philosophies.</p>
               </div>
            </a>

            {/* 5. Deccan Chronicle - Summertime */}
            <a href="https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/summertime-culinary-ride-1879733" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/5.jpeg" alt="Deccan Chronicle Summertime" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>Deccan Chronicle</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>Summertime culinary ride: Exploring seasonal summer menus featuring fresh, vibrant ingredients perfect for the warmer months.</p>
               </div>
            </a>

            {/* 6. Indian Express - Pasta */}
            <a href="https://indianexpress.com/article/lifestyle/food-wine/answered-why-italians-never-break-pasta-boiling-expert-9918120/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 min-w-[85vw] snap-center">
               <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image src="/6.jpeg" alt="Indian Express Pasta" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-[25px] text-white" style={{ fontFamily: "Deluce, sans-serif" }}>The Indian Express</h3>
                  <p className="font-light text-[18px] text-white/90" style={{ fontFamily: "Aston, sans-serif" }}>Why Italians never break pasta before boiling: Experts explain the tradition and science behind keeping the strands whole.</p>
               </div>
            </a>
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
                  href="https://www.instagram.com/bloomcafes?igsh=NDF4aDlrbnh6b2Fn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[21px] text-white hover:text-[#7e884d] transition-colors"
                  style={{ fontFamily: "Aston, sans-serif" }}
               >
                  Bloom
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
    </div>
  );
}

