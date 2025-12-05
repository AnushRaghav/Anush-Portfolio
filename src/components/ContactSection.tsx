import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const animatedElements = useRef<HTMLElement[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        observer.observe(el);
        animatedElements.current.push(el as HTMLElement);
      });
    }

    return () => {
      if (animatedElements.current.length > 0) {
        animatedElements.current.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_7ne2t05";
    const templateID = "template_p2h0f1r";
    const publicKey = "x_3hXyjHPaq3vPB9U";

    emailjs.send(serviceID, templateID, {
     from_name: formData.name,        // Matches {{from_name}} in template
     from_email: formData.email,      // Matches {{from_email}}
     title: formData.subject,         // Matches {{title}}
     from_message: formData.message
    }, publicKey)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "I'll get back to you as soon as possible.",
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-portfolio-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto animate-on-scroll"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-on-scroll">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 animate-on-scroll">
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-400">+91 6374942049</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-400">anushraghav05@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-portfolio-accent/20 p-3 rounded-full text-portfolio-accent">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/in/anushraghav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-accent hover:underline"
                      >
                        linkedin.com/in/anushraghav
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={6}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-portfolio-accent hover:bg-portfolio-light text-white transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
