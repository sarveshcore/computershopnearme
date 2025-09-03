import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "Call us for immediate assistance",
      action: "tel:+1234567890",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "info@computershopnearme.com",
      action: "mailto:info@computershopnearme.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      content: "Visit our shop for in-person service",
      action:
        "https://www.google.com/maps/place/COMPUTER+SHOP+NEAR+ME/@34.078021,-117.4230335,21z/data=!4m8!3m7!1s0x80c34cd58a9cf5e9:0xea1072f21657dd7d!8m2!3d34.0707415!4d-117.4080525!9m1!1b1!16s%2Fg%2F11c52rjl9t!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      action: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Star className="w-6 h-6" />,
      name: "Google Reviews",
      url: "https://www.google.com/maps/place/COMPUTER+SHOP+MI+FAMILIA+LATINA/@34.0695354,-117.4106135,15z/data=!4m8!3m7!1s0x80c34cd58a9cf5e9:0xea1072f21657dd7d!8m2!3d34.0707527!4d-117.4080445!9m1!1b1!16s%2Fg%2F11c52rjl9t!5m1!1e1?authuser=0&entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
      color: "text-yellow-500",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/computershopnearme",
      color: "text-blue-600",
    },
    {
      icon: <Star className="w-6 h-6" />,
      name: "Yelp",
      url: "https://www.yelp.com/biz/computer-shop-near-me-bloomington",
      color: "text-red-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to get your tech issues resolved? Contact us today for fast
            and reliable service. We're here to help with all your computer
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Textarea
                  name="message"
                  placeholder="Describe your tech issue or service needed..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow & Review Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="flex items-center space-x-2"
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={social.color}>{social.icon}</span>
                        <span>{social.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Message */}
            <Card className="bg-accent/10 border-accent">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-accent mb-2">Remember</h3>
                <p className="text-sm">
                  You only pay for our service after we have left your machine
                  in optimal condition!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
