'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import VisitUsSection from '../../components/VisitUsSection';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Navbar />
      
      <ContactForm />
      
      <VisitUsSection />
      
      <Footer />
      
      <style jsx>{`
        .contact-page {
          background-color: #3d4424;
          min-height: 100vh;
        }
      `}</style>
    </main>
  );
}
