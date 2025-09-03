import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GraphicsSection from '@/components/GraphicsSection';
import CustomersSection from '@/components/CustomersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GraphicsSection />
      <CustomersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
