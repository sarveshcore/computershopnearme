import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CustomersSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Exceptional service! They fixed my laptop the same day and it's running better than ever. Highly recommend!",
      service: t('computerRepairTitle')
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Built me a custom gaming PC that exceeded all my expectations. Professional work and great prices.",
      service: t('customPCTitle')
    },
    {
      name: "Emily Chen",
      rating: 5,
      text: "They designed a beautiful website for my business. The team was responsive and delivered exactly what I wanted.",
      service: t('webDesignTitle')
    }
  ];

  const stats = [
    { number: "5+", label: t('yearsExperience') },
    { number: "1000+", label: t('devicesRepaired') },
    { number: "98%", label: t('customerSatisfaction') },
    { number: "24hr", label: t('responseTimeHours') }
  ];

  return (
    <section id="customers" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('customersTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('customersDescription')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-background shadow-sm">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-primary mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="bg-background p-8 rounded-lg border-2 border-dashed border-primary/30">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-primary">{t('reviewsComingSoon')}</h3>
            <p className="text-muted-foreground">
              {t('reviewsComingSoonDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;