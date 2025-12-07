import { ArrowRight, ChevronDown } from "lucide-react";
import o3 from "../assets/o3.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 animate-fadeIn"
        style={{
          backgroundImage: `url(${o3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Ambient Blur Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mt-20">

          {/* Small Line Accent */}
          <div className="mb-4 initial-hidden animate-slideInLeft delay-100">
            <div className="line-accent-wide" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-black leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] initial-hidden animate-fadeInUp delay-200">
            One Globe
            <br />
            <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              Trading FZE
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-secondary/95 font-light italic mb-8 drop-shadow-lg max-w-2xl initial-hidden animate-fadeInUp delay-300">
            Your trusted partner in Global Commodities Trading and Logistics Solutions
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-32 initial-hidden animate-fadeInUp delay-400">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-900 bg-gray-100/90 rounded-full hover:bg-white transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-500/30 border border-white/40 rounded-full hover:bg-gray-500/40 hover:border-white/60 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">

            {/* Block 1 */}
            <div className="relative text-left flex flex-col justify-center pr-6 initial-hidden animate-scaleIn delay-500">
              <div className="text-3xl md:text-4xl font-heading text-secondary mb-2">
                2023
              </div>
              <p className="text-sm font-body font-light text-white/90">
                Established
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white/30" />
            </div>

            {/* Block 2 */}
            <div className="relative text-left flex flex-col justify-center px-6 initial-hidden animate-scaleIn delay-600">
              <div className="text-3xl md:text-4xl font-heading text-secondary mb-2">
                500+
              </div>
              <p className="text-sm font-body font-light text-white/90">
                Clients Served
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white/30" />
            </div>

            {/* Block 3 */}
            <div className="relative text-left flex flex-col justify-center px-6 initial-hidden animate-scaleIn delay-700">
              <div className="text-3xl md:text-4xl font-heading text-secondary mb-2">
                15+
              </div>
              <p className="text-sm font-body font-light text-white/90">
                Countries
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white/30" />
            </div>

            {/* Block 4 */}
            <div className="text-left flex flex-col justify-center pl-6 initial-hidden animate-scaleIn delay-800">
              <div className="text-3xl md:text-4xl font-heading text-secondary mb-2">
                98%
              </div>
              <p className="text-sm font-body font-light text-white/90">
                Satisfaction
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-xs font-light tracking-wider uppercase">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>

    </section>
  );
};

export default Hero;