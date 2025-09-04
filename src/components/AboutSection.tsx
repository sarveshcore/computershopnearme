import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Laptop, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/computer-shop-storefront.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: t('sameDayTitle'),
      description: t('sameDayDesc'),
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: t('allDevicesTitle'),
      description: t('allDevicesDesc'),
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: t('specializedTitle'),
      description: t('specializedDesc'),
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: t('payAfterTitle'),
      description: t('payAfterDesc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-blue-50/20 to-purple-50/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-blue-700">{t('happyCustomers')}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  24hr
                </div>
                <div className="text-sm text-purple-700">{t('responseTime')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Computer Shop Storefront"
                className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
