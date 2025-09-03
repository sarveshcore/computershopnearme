import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const businessHours = [
    { day: "Monday", hours: "11:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "11:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "11:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "11:00 AM - 6:00 PM" },
    { day: "Friday", hours: "11:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "11:30 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      content: "909-421-4401",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      content: "contact@computershopnearme.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      content: "18156 Valley Blvd Unit 8, Bloomington, CA 92316",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section - Business Hours and Contact Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span
                      className={
                        schedule.closed ? "text-red-600 font-medium" : ""
                      }
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="h-px bg-red-700/30"></div>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-red-700">{info.icon}</span>
                  <span className="text-sm">{info.content}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it-support">IT Support</SelectItem>
                    <SelectItem value="computer-repair">
                      Computer Repair
                    </SelectItem>
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="graphic-design">
                      Graphic Design
                    </SelectItem>
                    <SelectItem value="custom-pc">Custom PC Builds</SelectItem>
                    <SelectItem value="tv-repair">TV Repair</SelectItem>
                    <SelectItem value="notary">Notary Services</SelectItem>
                  </SelectContent>
                </Select>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Message"
                    className="min-h-[120px] resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <div className="text-right text-sm text-muted-foreground">
                    {formData.message.length} of 500
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Follow Us Section */}
          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-white font-bold text-lg">f</span>
              </a>

              {/* Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
