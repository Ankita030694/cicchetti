'use client';

import React from 'react';

const VisitUsSection = () => {
  return (
    <section className="visit-us-section" style={{ fontFamily: 'Aston, sans-serif' }}>
      <div className="visit-us-container">
        <h2 className="visit-us-heading" style={{ fontFamily: 'Deluce, sans-serif' }}>VISIT US</h2>
        
        <div className="visit-us-content">
          {/* Left side - Contact Info */}
          <div className="visit-us-info">
            {/* Phone Section */}
            <div className="info-group">
              <h3 className="info-heading" style={{ fontFamily: 'Deluce, sans-serif', color: '#FFFFFF' }}>PHONE:</h3>
              <div className="info-item">
                <h4 className="location-name" style={{ fontFamily: 'Deluce, sans-serif' }}>Cicchetti</h4>
                <p className="contact-detail" style={{ fontFamily: 'Aston, sans-serif' }}>+91 96505 69946</p>
              </div>
            
              
            </div>

            {/* Hours Section */}
            <div className="info-group">
              <h3 className="info-heading" style={{ fontFamily: 'Deluce, sans-serif', color: '#FFFFFF' }}>HOURS:</h3>
              <div className="info-item">
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Monday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Tuesday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Wednesday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Thursday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Friday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Saturday: 12–11 pm</p>
                <p className="hours-detail" style={{ fontFamily: 'Aston, sans-serif' }}>Sunday: 12–11 pm</p>
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
                style={{border: 0, fontFamily: 'Aston, sans-serif'}}
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
  );
};

export default VisitUsSection;
