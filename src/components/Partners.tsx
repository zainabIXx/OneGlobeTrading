import React from "react";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/Logo4.png";

const Partners: React.FC = () => {
  const partners = [
    { name: "Abdullah Salim Masood Technical Service", logo: logo1 },
    { name: "Highland Trading FZE LLC", logo: logo2 },
    { name: "SAT", logo: logo3 },
    { name: "Najmat Al Zahra Steel", logo: logo4 },
  ];

  return (
    <section id="partners" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Centered Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mb-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
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
        <div className="flex items-center justify-center gap-4 mt-12">
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
