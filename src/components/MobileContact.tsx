'use client';

import React from 'react';
import Image from 'next/image';


export default function MobileContact() {
  return (
    <div className="bg-[#3d4424] relative w-full overflow-x-hidden min-h-screen pb-20">
      {/* Contact Form Section */}
      <section className="relative w-full px-6 pt-32 pb-16 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
           <h2 className="text-[35px] leading-[45px] text-[#e7e3e2] uppercase" style={{ fontFamily: "Aileron, sans-serif" }}>
            SEND A MESSAGE TO US
           </h2>
           <p className="text-[18px] leading-[28px] text-[rgba(231,227,226,0.7)] font-light" style={{ fontFamily: "Aileron, sans-serif" }}>
            Tell us how we can help. We aim to respond to all inquiries within 24 hours.
           </p>
           <div className="w-[100px] h-[1px] bg-[#E7E3E2]/30 mt-2"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-8 w-full">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                className="w-full bg-transparent border-b border-[#E7E3E2]/50 py-3 text-[#E7E3E2] placeholder-[#E7E3E2]/60 focus:outline-none focus:border-[#E7E3E2] transition-colors font-light text-[18px]"
                style={{ fontFamily: "Aileron, sans-serif" }}
                required
              />
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[#E7E3E2]/50 py-3 text-[#E7E3E2] placeholder-[#E7E3E2]/60 focus:outline-none focus:border-[#E7E3E2] transition-colors font-light text-[18px]"
                style={{ fontFamily: "Aileron, sans-serif" }}
                required
              />
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Subject of Inquiry" 
                className="w-full bg-transparent border-b border-[#E7E3E2]/50 py-3 text-[#E7E3E2] placeholder-[#E7E3E2]/60 focus:outline-none focus:border-[#E7E3E2] transition-colors font-light text-[18px]"
                style={{ fontFamily: "Aileron, sans-serif" }}
                required
              />
            </div>
            
            <div className="relative">
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-transparent border-b border-[#E7E3E2]/50 py-3 text-[#E7E3E2] placeholder-[#E7E3E2]/60 focus:outline-none focus:border-[#E7E3E2] transition-colors font-light text-[18px] resize-none"
                style={{ fontFamily: "Aileron, sans-serif" }}
                required
              ></textarea>
            </div>
            
            <div className="flex justify-start mt-4">
              <button 
                type="submit" 
                className="bg-[#E7E3E2] text-[#3d4424] py-3 px-12 text-[16px] font-medium uppercase hover:bg-white transition-all shadow-lg"
                style={{ fontFamily: "Aileron, sans-serif" }}
              >
                SUBMIT
              </button>
            </div>
        </form>
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
            <p className="text-[21px] text-white leading-[30px]" style={{ fontFamily: "Aileron, sans-serif" }}>
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

