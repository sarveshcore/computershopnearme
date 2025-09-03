import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Computer, Globe, Palette, Cpu, Tv, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Computer className="w-12 h-12 text-primary" />,
      title: "Computer Repair",
      description: "Fast and reliable troubleshooting for all your tech issues. We handle hardware and software problems with expertise."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Web Design",
      description: "Clean, professional website creation that ensures a user-friendly experience and modern design."
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Graphic Design",
      description: "Turn your ideas into stunning visuals with our professional graphic design services tailored to your needs."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Custom PC Builds",
      description: "Personalized systems built to your specifications, ensuring every detail meets your computing needs."
    },
    {
      icon: <Tv className="w-12 h-12 text-primary" />,
      title: "TV Repair",
      description: "Professional television repair services to get your entertainment system back up and running."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Notary Services",
      description: "Convenient notary services for your important documents and legal paperwork needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of services to keep your technology running smoothly. 
            Our skilled technicians are equipped to handle various issues with professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
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