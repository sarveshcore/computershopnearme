import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Image, Monitor, Paintbrush, Layout } from 'lucide-react';

const GraphicsSection = () => {
  const portfolioItems = [
    {
      icon: <Layout className="w-16 h-16 text-primary" />,
      title: "Web Design Portfolio",
      description: "Modern, responsive websites that deliver exceptional user experiences"
    },
    {
      icon: <Paintbrush className="w-16 h-16 text-primary" />,
      title: "Brand Identity",
      description: "Complete branding solutions including logos, color schemes, and visual guidelines"
    },
    {
      icon: <Image className="w-16 h-16 text-primary" />,
      title: "Digital Graphics",
      description: "Custom illustrations, banners, and digital artwork for all your marketing needs"
    },
    {
      icon: <Monitor className="w-16 h-16 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that prioritize functionality and aesthetics"
    }
  ];

  return (
    <section id="graphics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Graphics Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our creative design work that brings ideas to life. From web design to brand identity, 
            we create visuals that make an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-dashed border-muted">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted p-8 rounded-lg border-2 border-dashed border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-primary">Portfolio Coming Soon</h3>
            <p className="text-muted-foreground">
              We're currently updating our portfolio with our latest design work. 
              Check back soon to see examples of our creative projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;