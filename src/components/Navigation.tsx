
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update navbar style on scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-portfolio-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-blue-500 text-3xl font-bold tracking-tight border border-blue-500">
          <img src="public/11.png" alt="Logo"className="w-20 h-20 object-contain"/>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-portfolio-accent relative",
                  activeSection === sectionId 
                    ? "text-portfolio-accent" 
                    : "text-white"
                )}
              >
                {item}
                {activeSection === sectionId && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-portfolio-accent rounded-full" />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Mobile navigation - hamburger menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-portfolio-dark shadow-lg rounded-md py-2 border border-gray-700">
          {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 text-white hover:text-portfolio-accent"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
