import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      text: "One Globe Trading has been our trusted partner for over a year, consistently demonstrating exceptional professionalism and reliability. Their steel products are of the highest quality, and their commitment to timely delivery has made working with them seamless and dependable. We value their dedication and the strong partnership we have built together in the region.",
    },
    {
      name: "Priya Sharma",
      text: "Exceptional service from start to finish. Their team takes the time to understand our specific requirements and consistently delivers high-quality products on schedule. Their professionalism, reliability, and attention to detail make them an excellent choice, especially for bulk orders. We highly recommend their services to anyone seeking a dependable partner.",
    },
    {
      name: "Mohammed Hassan",
      text: "The outstanding quality of plywood, combined with highly competitive pricing, makes One Globe Trading our preferred supplier. Their professional team communicates clearly and efficiently, ensuring smooth transactions every time. Their reliability and dedication to meeting our requirements have made them a trusted partner for all our projects.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Testimonial Display */}
        <div className="relative min-h-[240px] flex items-center justify-center mb-8">
          {/* Large Static White Quotation Marks */}
          <div className="absolute left-8 top-0 text-[180px] leading-none text-primary font-serif select-none pointer-events-none">
            ❝
          </div>
          <div className="absolute right-8 bottom-0 text-[180px] leading-none text-primary font-serif select-none pointer-events-none">
            ❞
          </div>

          {/* Changing Quote Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-12 py-4">
            <p className="font-body font-light text-muted-foreground text-base leading-relaxed mb-6 transition-opacity duration-300">
              {testimonials[currentIndex].text}
            </p>
            <p className="font-body font-light text-base leading-relaxed" style={{ color: 'hsl(var(--primary))' }}>
              {testimonials[currentIndex].name}
            </p>
          </div>
        </div>

        {/* Bottom Label with Lines */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="line-accent-wide" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Testimonials
          </span>
          <div className="line-accent-wide" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;