import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Laptop, Wrench } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Same-Day Solutions",
      description: "Quick, same-day solutions for urgent repairs"
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "All Device Types",
      description: "Hardware/software fixes for Laptops, All-in-Ones, Desktops, Windows & macOS"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Specialized Care",
      description: "Special maintenance for Apple devices and gaming computers"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Pay After Repair",
      description: "Only pay for the service after we have left your machine in optimal condition"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive computer repair solutions with a focus on speed, quality, and customer satisfaction. 
            Our experienced technicians are ready to handle any tech challenge you face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;