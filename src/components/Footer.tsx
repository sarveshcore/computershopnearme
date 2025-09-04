import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('heroTitle')}</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t('footerDescription')}
            </p>
            <p className="text-sm text-primary-foreground/60">
              Same-day solutions • All device types • Pay after repair
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              {[
                { name: t('about'), href: '#about' },
                { name: t('services'), href: '#services' },
                { name: t('graphics'), href: '#graphics' },
                { name: t('contact'), href: '#contact' }
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
            <h4 className="font-semibold mb-4">{t('ourServices')}</h4>
            <div className="space-y-2">
              {[
                t('computerRepairTitle'),
                t('webDesignTitle'),
                t('graphicDesignTitle'),
                t('customPCTitle'),
                t('tvRepairTitle'),
                t('notaryTitle')
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
              {t('copyright')}
            </div>
            
            <div className="flex items-center text-sm text-primary-foreground/60">
              <span>{t('madeWith')}</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm underline"
            >
              {t('backToTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;