
import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-portfolio-accent">Anush Raghav V</h2>
            <p className="mt-2 max-w-md">
              Mechatronics Engineer specializing in embedded systems, IoT, robotics, and automation solutions.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="tel:+916374942049" className="p-2 rounded-full bg-gray-800 hover:bg-portfolio-accent hover:text-white transition-colors">
              <Phone size={20} />
            </a>
            <a href="mailto:anushraghav05@gmail.com" className="p-2 rounded-full bg-gray-800 hover:bg-portfolio-accent hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/anushraghav" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-portfolio-accent hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} AR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
