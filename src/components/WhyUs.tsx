import { useEffect, useRef, useState } from "react";
import { Check, Shield, Truck, Package, Users, Sparkles } from "lucide-react";

const WhyUs = () => {
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

  const reasons = [
    { icon: Shield, title: "Reliable & Consistent Quality", description: "Rigorous quality control at every step" },
    { icon: Sparkles, title: "Competitive Pricing", description: "Best value without compromising quality" },
    { icon: Truck, title: "Fast Delivery & Logistics", description: "Timely delivery with full tracking" },
    { icon: Package, title: "Wide Product Range", description: "Comprehensive industrial materials" },
    { icon: Users, title: "Customized Solutions", description: "Tailored to your specific needs" },
    { icon: Check, title: "Exceptional Service", description: "Dedicated support team for you" },
  ];

  const delayClasses = ['delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800', 'delay-900'];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-secondary" ref={sectionRef}>
      
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
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className={`flex items-center gap-4 mb-6 ${isVisible ? 'animate-slideInLeft delay-100' : 'initial-hidden'}`}>
            <div className="line-accent-wide" />
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-heading text-foreground leading-[1.1] mb-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'}`}>
            Why Clients <span className="italic text-primary">Trust Us</span>
          </h2>
          <p className={`font-body font-light text-muted-foreground text-base leading-relaxed ${isVisible ? 'animate-fadeInUp delay-300' : 'initial-hidden'}`}>
            We've built our reputation on delivering excellence through quality products, competitive pricing, and exceptional service.
          </p>
        </div>

        {/* Reasons Grid - Minimal with borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className={`group p-8 border-r border-b border-border hover:bg-background/50 transition-all duration-300 ${isVisible ? `animate-scaleIn ${delayClasses[idx]}` : 'initial-hidden'}`}
            >
              <div className="mb-6">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;