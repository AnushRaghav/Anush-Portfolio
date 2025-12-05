import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AUTOMATIC BLOW MOULDING MACHINE",
    description:
      "A completely automated machine for making water bottles by heating PET preforms and molding them, replacing semi-automatic systems in industries.",
    image: "public/machine.png",
    videoLink: "https://www.youtube.com/embed/sV1QQmk4h04",
    technologies: [
      "Automation",
      "Industrial Design",
      "Thermal Control",
      "Mechanical Engineering",
    ],
  },
  {
    id: 2,
    title: "AI robot",
    description:
  "A compact AI-powered tabletop robot with voice control, touch interface, and sensor-based navigation for tasks like movement, reminders, and local music playback.",
    image: "public/robot.jpg",
    videoLink: "https://www.youtube.com/embed/sV1QQmk4h04",
    technologies: [
       "Voice Recognition",
       "Artificial Intelligence",
       "Motor Control",
       "Human-Computer Interaction",
       "Sensor Integration",
       "Embedded Systems",
    ],
  },
  {
    id: 3,
    title: "Design Projects",
    description:
      "High-quality 3D models created with precision and creativity, blending realistic details with functional design. Each model is developed using professional software, optimized for visualization, prototyping, or production, and tailored to meet both aesthetic and technical requirements.",
    image: "public/Designer.png",
    videoLink: "src/components/design.html",
    technologies: [
      "fusion 360",
      "solidworks",
      "3D Modeling",      
    ],
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
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
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto animate-on-scroll"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto animate-on-scroll">
            Explore my projects that showcase my skills in Mechatronics Engineering, Embedded Systems, IoT, and Automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-gray-800/70 border-gray-700 overflow-hidden flex flex-col hover:shadow-lg hover:shadow-portfolio-accent/20 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Dynamic image height, fills top */}
              <div className="overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text content fits below */}
              <CardContent className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-portfolio-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex justify-end">
                <Button
                  variant="default"
                  className="bg-portfolio-accent hover:bg-portfolio-light text-white flex items-center space-x-2"
                  onClick={() => window.open(project.videoLink, "_blank")}
                >
                  <span>{(() => {
                    switch (project.id) {
                      case 1:
                        return "Watch Video";
                      case 2:
                        return "Robot Link";
                      case 3:
                        return "Design Page";
                      default:
                        return "Link";
                      }
                      })()}
                  </span>
                  <ExternalLink size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
