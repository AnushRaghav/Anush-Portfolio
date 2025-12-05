
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: "Embedded Systems", level: 75 },
  { name: "IoT Development", level: 67 },
  { name: "Robotics", level: 80 },
  { name: "Automation", level: 85 },
  { name: "Electronic Analysis", level: 90 },
  { name: "R&D", level: 80 },
];

const AboutSection = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-portfolio-dark to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-accent">Education & Experience</h3>
            {/* education*/}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-2">Education</h4>
              {/*B.tech*/}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h5 className="text-lg font-medium text-portfolio-accent">B.Tech in Mechatronics Engineering</h5>
                      <p className="text-gray-400">Sri Manakula Vinayagar Engineering College (SMVEC)</p>
                      <p className="text-gray-500">Expected graduation: 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/*B.voc*/}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h5 className="text-lg font-medium text-portfolio-accent">B.VOC in Mechatronics</h5>
                      <p className="text-gray-400">VIT</p>
                      <p className="text-gray-500">2019-2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/*Dipoloma*/}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h5 className="text-lg font-medium text-portfolio-accent">Diploma in Mechatronics</h5>
                      <p className="text-gray-400">NTTF</p>
                      <p className="text-gray-500">2019-2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Work Experience*/}
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Work Experience</h4>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h5 className="text-lg font-medium text-portfolio-accent">CMM Inspector and Calibration Technician</h5>
                      <p className="text-gray-400">Addison</p>
                      <p className="text-gray-500">July 2022 - July 2023</p>
                      <ul className="list-disc list-inside text-gray-400 mt-2">
                        <li>Performed precision measurements and calibrations</li>
                        <li>Ensured quality control standards were met</li>
                        <li>Maintained and calibrated measurement equipment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-accent">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-portfolio-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4 text-portfolio-accent">Personal Statement</h3>
              <p className="text-gray-300 leading-relaxed">
                As a Mechatronics Engineering student, I am deeply passionate about the intersection of mechanical, electronic, and computer systems. 
                I am constantly exploring emerging technologies and developing new skills to stay at the forefront of innovation.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                My goal is to create intelligent systems that solve real-world problems through the integration of hardware and software. 
                I am particularly interested in the development of IoT devices, robotics applications, and automated systems that can enhance efficiency and improve lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
