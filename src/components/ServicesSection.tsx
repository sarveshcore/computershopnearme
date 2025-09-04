import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Computer, Globe, Palette, Cpu, Tv, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Computer className="w-12 h-12 text-primary" />,
      title: t('computerRepairTitle'),
      description: t('computerRepairDesc'),
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: t('webDesignTitle'),
      description: t('webDesignDesc'),
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: t('graphicDesignTitle'),
      description: t('graphicDesignDesc'),
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: t('customPCTitle'),
      description: t('customPCDesc'),
    },
    {
      icon: <Tv className="w-12 h-12 text-primary" />,
      title: t('tvRepairTitle'),
      description: t('tvRepairDesc'),
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: t('notaryTitle'),
      description: t('notaryDesc'),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-background via-purple-50/30 to-blue-50/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-blue-500"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
