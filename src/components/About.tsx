import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const cards = [
    {
      title: "Who We Are",
      description:
        "One Globe Trading FZE is a trusted supplier of commercial plywood, steel sheets, and industrial raw materials across the region. We combine global sourcing with reliable logistics to ensure smooth, efficient delivery for businesses of all sizes.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide high-quality commercial plywood and steel sheets to businesses and industries, offering reliable and cost-effective solutions backed by exceptional customer service. We aim to build long-term partnerships founded on trust, efficiency, and consistent product excellence.",
    },
    {
      title: "Our Vision",
      description:
        "To become the leading trading company recognized for providing exceptional quality and innovative material solutions in the plywood and steel industry. We aspire to expand globally while staying committed to our values of integrity, reliability, and sustainability.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      
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
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl mb-12">
          <div className={`flex items-center gap-4 mb-6 ${isVisible ? 'animate-slideInLeft delay-100' : 'initial-hidden'}`}>
            <div className="line-accent-wide" />
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              About Us
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-heading text-foreground leading-[1.1] mb-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'}`}>
            Building Trust Through{" "}
            <span className="italic text-primary">Quality & Service</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors duration-300 ${isVisible ? `animate-scaleIn delay-${300 + (idx + 1) * 100}` : 'initial-hidden'}`}
            >
              <h3 className="text-xl font-heading text-foreground mb-3">{card.title}</h3>
              <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;