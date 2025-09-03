import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Computer Shop Near Me</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for computer repair, web design, and tech solutions. 
              Fast, reliable service with guaranteed satisfaction.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Same-day solutions • All device types • Pay after repair
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Graphics', href: '#graphics' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <div className="space-y-2">
              {[
                'Computer Repair',
                'Web Design',
                'Graphic Design',
                'Custom PC Builds',
                'TV Repair',
                'Notary Services'
              ].map((service) => (
                <div
                  key={service}
                  className="text-primary-foreground/80 text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2025 Computer Shop Near Me. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-primary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              <span>for our customers</span>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm underline"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;