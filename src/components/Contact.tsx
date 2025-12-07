import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Message sent successfully! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@oneglobetrading.com" },
    { icon: Phone, label: "Phone", value: "+971 XX XXX XXXX" },
    { icon: MapPin, label: "Office", value: "Sharjah, UAE" },
    { icon: Clock, label: "Working Hours", value: "Mon–Sat, 8AM–5PM" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      
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
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
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
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: CONTACT DETAILS */}
          <div>
            <div className={`flex items-center gap-4 mb-6 ${isVisible ? 'animate-slideInLeft delay-100' : 'initial-hidden'}`}>
              <div className="line-accent-wide" />
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Contact Us
              </span>
            </div>

            <h2 className={`text-3xl md:text-4xl font-heading text-foreground leading-[1.1] mb-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'}`}>
              Get in Touch <span className="italic text-primary">With Us</span>
            </h2>

            <p className={`font-body font-light text-muted-foreground text-sm leading-relaxed mb-12 ${isVisible ? 'animate-fadeInUp delay-300' : 'initial-hidden'}`}>
              Whether you're looking for bulk material supply or customized manufacturing
              solutions, our team is ready to assist you.
            </p>

            <div className="space-y-10">
              {contactInfo.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 ${isVisible ? `animate-fadeInUp delay-${400 + idx * 100}` : 'initial-hidden'}`}>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-body font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className={`relative lg:mt-44 flex justify-center ${isVisible ? 'animate-slideInRight delay-300' : 'initial-hidden'}`}>
            <div className="relative bg-secondary/50 rounded-2xl p-10 md:p-12 hover:bg-secondary transition-colors duration-300 w-full max-w-md mx-auto">
              <div className="space-y-8">

                {/* NAME */}
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-border 
                  focus:outline-none focus:border-primary transition-colors 
                  font-body font-medium text-sm text-foreground 
                  placeholder:text-muted-foreground/70"
                  placeholder="Name *"
                />

                {/* EMAIL */}
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-border 
                  focus:outline-none focus:border-primary transition-colors 
                  font-body font-medium text-sm text-foreground 
                  placeholder:text-muted-foreground/70"
                  placeholder="Email Address *"
                />

                {/* MESSAGE */}
                <input
                  type="text"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent border-b border-border 
                  focus:outline-none focus:border-primary transition-colors 
                  font-body font-medium text-sm text-foreground 
                  placeholder:text-muted-foreground/70"
                  placeholder="Message *"
                />

                {/* BUTTON */}
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full md:w-3/4 max-w-md inline-flex items-center justify-center 
                    px-12 py-4 text-sm font-medium text-white bg-gray-500/30 
                    border border-white/40 rounded-full 
                    hover:bg-gray-500/40 hover:border-white/60 
                    transition-all duration-300 hover:scale-[1.02] 
                    backdrop-blur-sm"
                  >
                    Send Message
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;