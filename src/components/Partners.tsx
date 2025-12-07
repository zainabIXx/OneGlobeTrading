import React, { useEffect, useRef, useState } from "react";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/Logo4.png";

const Partners: React.FC = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const partners = [
    { name: "Abdullah Salim Masood Technical Service", logo: logo1 },
    { name: "Highland Trading FZE LLC", logo: logo2 },
    { name: "SAT", logo: logo3 },
    { name: "Najmat Al Zahra Steel", logo: logo4 },
  ];

  return (
    <section id="partners" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      
      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Centered Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ${isVisible ? `animate-scaleIn delay-${100 + idx * 100}` : 'initial-hidden'}`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom Label */}
        <div className={`flex items-center justify-center gap-4 mt-12 ${isVisible ? 'animate-fadeInUp delay-500' : 'initial-hidden'}`}>
          <div className="line-accent-wide" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Our Partners
          </span>
          <div className="line-accent-wide" />
        </div>
      </div>
    </section>
  );
};

export default Partners;