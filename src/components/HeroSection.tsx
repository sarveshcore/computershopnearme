import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/computer-shop-storefront.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Computer Shop Near Me
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Have a question or need a repair? Our skilled team is ready to assist you with all your computer needs. 
          Contact us today for fast and reliable service!
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-elegant"
        >
          Get Help Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;