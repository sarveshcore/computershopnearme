import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/computer-shop-storefront.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-blue-50/20 to-purple-50/20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.7) saturate(1.1)",
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          {t('heroTitle')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-50">
          {t('heroTagline')}
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
        >
          {t('heroButton')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
