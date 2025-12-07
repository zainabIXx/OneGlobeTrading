import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import rawImg from "../assets/raw.jpg";
import bulkImg from "../assets/bul.jpg";
import indImg from "../assets/ind.jpg";
import cusImg from "../assets/cus.avif";
import intImg from "../assets/int.jpg";
import delimg from "../assets/del.jpg";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const services = [
    {
      title: "Raw Material Supply",
      description: "Premium quality raw materials sourced globally for manufacturing and industrial applications with consistent quality assurance.",
      image: rawImg,
    },
    {
      title: "Bulk Procurement",
      description: "Large-scale procurement services with competitive pricing and reliable supply chain management for your business needs.",
      image: bulkImg,
    },
    {
      title: "Industrial Product Sourcing",
      description: "Comprehensive sourcing solutions for industrial products including steel, plywood, and hardware components.",
      image: indImg,
    },
    {
      title: "Custom Manufacturing Assistance",
      description: "Expert guidance and support for custom manufacturing requirements with quality control at every step.",
      image: cusImg,
    },
    {
      title: "International Trade Support",
      description: "End-to-end international trade facilitation including documentation, compliance, and market navigation.",
      image: intImg,
    },
    {
      title: "Logistics & Delivery",
      description: "Efficient logistics coordination ensuring timely delivery of materials to your location with full tracking support.",
      image: delimg,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary" ref={sectionRef}>
      
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
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-900 {
          animation-delay: 0.9s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-1100 {
          animation-delay: 1.1s;
        }
        
        .delay-1200 {
          animation-delay: 1.2s;
        }
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <div className={`flex items-center gap-4 mb-6 ${isVisible ? 'animate-slideInLeft delay-100' : 'initial-hidden'}`}>
            <div className="line-accent-wide" />
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              What We Do
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-heading text-foreground leading-[1.1] mb-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'}`}>
            End-to-end{" "}
            <span className="italic text-primary">Trade Solutions</span>
          </h2>
          <p className={`font-body font-light text-muted-foreground text-base leading-relaxed ${isVisible ? 'animate-fadeInUp delay-300' : 'initial-hidden'}`}>
            A refined service framework engineered to optimize workflow, strengthen outcomes, and support every phase with professional precision.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group cursor-pointer ${isVisible ? `animate-fadeInUp delay-${400 + idx * 100}` : 'initial-hidden'}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-t border-border items-center">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-xs font-body tracking-wider text-muted-foreground">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4 flex items-center">
                  <h3 className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5 flex items-center">
                  <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-2 flex justify-end items-center">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ArrowDown className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Expandable Image */}
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-out
                  ${hoveredIndex === idx ? 'max-h-72 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20" />
                </div>
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className={`border-t border-border ${isVisible ? 'animate-fadeIn delay-1200' : 'initial-hidden'}`} />
        </div>
      </div>
    </section>
  );
};

export default Services;