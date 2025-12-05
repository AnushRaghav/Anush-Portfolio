
import React, { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    title: "Embedded Systems Development",
    description: "Custom embedded solutions for automation, control systems, and monitoring devices using microcontrollers and IoT technologies.",
    icon: "circuit-board"
  },
  {
    id: 2,
    title: "IoT Implementation",
    description: "End-to-end IoT solutions from hardware integration to cloud connectivity, data visualization, and remote monitoring capabilities.",
    icon: "wifi"
  },
  {
    id: 3,
    title: "Robotics & Automation",
    description: "Design and implementation of robotic systems and automated solutions for industrial and consumer applications.",
    icon: "robot"
  },
  {
    id: 4,
    title: "Electronic Analysis",
    description: "Comprehensive analysis and troubleshooting of electronic circuits, PCB design review, and system optimization.",
    icon: "activity"
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedElements = useRef<HTMLElement[]>([]);

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

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-portfolio-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">My Services</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto animate-on-scroll"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-on-scroll">
            Professional services focused on automation, embedded systems, and IoT applications to help bring your technical ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon mb-6 text-portfolio-accent">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-portfolio-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to render SVG icons
function getIcon(name: string) {
  switch (name) {
    case 'circuit-board':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M8 18v-7.5a1.5 1.5 0 0 1 3 0V18" />
          <path d="M11 13.5h6.5a1.5 1.5 0 0 1 0 3H11" />
          <path d="M6 6h12" />
        </svg>
      );
    case 'wifi':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1" />
        </svg>
      );
    case 'robot':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      );
    case 'activity':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
}

export default ServicesSection;
