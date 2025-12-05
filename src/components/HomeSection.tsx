
import React from 'react';
import { Button } from '@/components/ui/button';
import '../App.css'
const HomeSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-portfolio-dark to-black opacity-90" />
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYyYzcuNzMyIDAgMTQgNi4yNjggMTQgMTRoMnptLTIgMGMwIDcuNzMyLTYuMjY4IDE0LTE0IDE0djJjOC45NCAwIDE2LTcuMDYgMTYtMTZoLTJ6bS0xNC0xNGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0aDJjMC04Ljk0LTcuMDYtMTYtMTYtMTZ2MnptMCAyOGMtNy43MzIgMC0xNC02LjI2OC0xNC0xNGgtMmMwIDguOTQgNy4wNiAxNiAxNiAxNnYtMnptMC0zMGMtOS45NCAwLTE4IDguMDYtMTggMThoMmMwLTcuNzMyIDYuMjY4LTE0IDE0LTE0djR6bS0xNiAxNmg0djRoLTRWMTh6bTUgNWMwIDYuMDc1IDQuOTI1IDExIDExIDExaDR2LTRoLTRjLTMuODY2IDAtNy0zLjEzNC03LTdoLTR6bTExIDEzYzYuMDc1IDAgMTEtNC45MjUgMTEtMTF2LTRoLTR2NGMwIDMuODY2LTMuMTM0IDctNyA3djR6TTcgN2g0djRIN1Y3em01IDVjMC0zLjg2NiAzLjEzNC03IDctN1Y1YzYuMDc1IDAgMTEgNC45MjUgMTEgMTFoLTRjMC0zLjg2Ni0zLjEzNC03LTctN1YxMnptNSAyM2g0djRoLTR2LTR6bTUgNWg0djRoLTR2LTR6bTAgMGMtMy44NjYgMC03LTMuMTM0LTctN2gtNGM2LjA3NSAwIDExIDQuOTI1IDExIDExdjR6bS03LTdWMzNoLTR2NHoiIGZpbGw9IiMwMTAyMDMiIGZpbGwtb3BhY2l0eT0iLjA0IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMCA3aDR2NEgwVjd6bTAgNWMwIDYuMDc1IDQuOTI1IDExIDExIDExaDR2LTRoLTRjLTMuODY2IDAtNy0zLjEzNC03LTdIMHptMCAwdjRoNHYtNEgwem0xMSAxNWMtNi4wNzUgMC0xMS00LjkyNS0xMS0xMWg0YzAgMy44NjYgMy4xMzQgNyA3IDd2NHpNMTIgNWMtMy44NjYgMC03IDMuMTM0LTcgN2g0YzAtMS42NTcgMS4zNDMtMyAzLTN2LTR6bS0xIDlWOWg0djVoLTR6IiBmaWxsPSIjMDEwMjAzIiBmaWxsLW9wYWNpdHk9Ii4wNCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center animate-fade-in">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Hello, I'm </span>
            <span className="text-portfolio-accent">Anush Raghav V</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-gray-300 font-light">
            Mechatronics Engineer | Embedded Systems & IoT Developer | Robotics & Automation Specialist | Tech Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about developing cutting-edge solutions in embedded systems, IoT, robotics, and automation. 
            Turning innovative ideas into reality through technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              onClick={scrollToContact}
              className="bg-portfolio-accent hover:bg-portfolio-light text-white px-6 py-2 rounded-md transition-all"
            >
              Contact Me
            </Button>
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              variant="outline" 
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          {/* Profile picture - will use placeholder until a real image is provided */}
          <div className="relative rounded-full overflow-hidden border-4 border-portfolio-accent h-64 w-64 md:h-80 md:w-80">
            <img 
              src="/public/Coat.png" 
              alt="Anush Raghav"     
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=600&auto=format&fit=crop";
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-portfolio-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;
