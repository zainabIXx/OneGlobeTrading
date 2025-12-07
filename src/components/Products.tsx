import { useEffect, useRef, useState } from "react";
import a from "../assets/block_pallets.png";
import b from "../assets/double_face_pallets.png";
import c from "../assets/stringer_pallets.png";
import d from "../assets/double_wing_pallets.png";
import e from "../assets/wooden_spools.png";
import f from "../assets/drums.png";
import g from "../assets/solid_deck_pallets.png";
import h from "../assets/custom_wooden_crates.png";
import i from "../assets/wooden_pallet_collars.png";
import j from "../assets/ht_export_pallets.png";
import k from "../assets/heavy_duty_wooden_reels.png";
import l from "../assets/plywood_sheets.png";
import aa from "../assets/aa.png";
import bb from "../assets/bb.png";
import cc from "../assets/cc.png";
import dd from "../assets/cdd.png";
import ee from "../assets/ee.png";
import ff from "../assets/ff.png";
import gg from "../assets/gg.png";
import hh from "../assets/hh.png";
import ii from "../assets/ii.png";
import jj from "../assets/jj.png";
import kk from "../assets/kk.png";
import ll from "../assets/ll.png";
import aaa from "../assets/aaa.png";
import bbb from "../assets/bbb.png";
import ccc from "../assets/ccc.png";
import ddd from "../assets/ddd.png";
import eee from "../assets/eee.png";
import fff from "../assets/fff.png";
import ggg from "../assets/ggg.png";
import hhh from "../assets/hhh.png";
import iii from "../assets/iii.png";
import jjj from "../assets/jjj.png";
import kkk from "../assets/kkk.png";
import lll from "../assets/lll.png";

const Products = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const categoryRefs = useRef([]);
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>([]);

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

  useEffect(() => {
    const observers = categoryRefs.current.map((ref, idx) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCategories((prev) => {
                const newState = [...prev];
                newState[idx] = true;
                return newState;
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px",
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (categoryRefs.current[idx]) {
          observer.unobserve(categoryRefs.current[idx]);
        }
      });
    };
  }, []);

  const categories = [
    {
      title: "Wooden Products",
      products: [
        { name: "Block pallets", image: a },
        { name: "Stringer pallets", image: c },
        { name: "Heat-treated pallets", image: j },
        { name: "Heavy-Duty Reels", image: k },
        { name: "Pallet Collars", image: i },
        { name: "Plywood sheets", image: l },
      ]
    },
    {
      title: "Hardware & Tools",
      products: [
        { name: "Screws", image: aaa },
        { name: "Nails", image: bbb },
        { name: "Bolts & nuts", image: ddd },
        { name: "Flat washers", image: eee },
        { name: "Construction Anchors", image: fff },
        { name: "Rivets", image: ggg },
      ]
    },
    {
      title: "Steel Products",
      products: [
        { name: "Mild Steel sheets", image: aa },
        { name: "Mild Steel plates", image: bb},
        { name: "Mild Steel channels", image: cc },
        { name: "Mild Steel angles", image: dd },
        { name: "Mild Steel beams", image: ee },
        { name: "Mild Steel pipes and tubes", image: ff },
        { name: "Galvanized Iron Sheets", image: gg },
        { name: "Galvanized Iron Coils", image: hh },
        { name: "Galvanized Iron Pipes & Tubes", image: ii },
        { name: "Steel Reinforcement Bars", image: jj },
        { name: "Steel Wire & Wire Rods", image: kk },
        { name: "Stainless Steel Sheets & Coils", image:ll },
      ]
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      
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
              Product Categories
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-heading text-foreground leading-[1.1] mb-4 ${isVisible ? 'animate-fadeInUp delay-200' : 'initial-hidden'}`}>
            Premium Quality{" "}
            <span className="italic text-primary">Materials</span>
          </h2>
          <p className={`font-body font-light text-muted-foreground text-base leading-relaxed ${isVisible ? 'animate-fadeInUp delay-300' : 'initial-hidden'}`}>
            A curated collection of industrial-grade materials, meticulously selected to meet the highest standards of quality and performance.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, catIdx) => (
            <div 
              key={catIdx}
              ref={(el) => (categoryRefs.current[catIdx] = el)}
            >
              {/* Category Header */}
              <div className={`mb-12 border-t border-border pt-8 ${visibleCategories[catIdx] ? 'animate-fadeInUp delay-100' : 'initial-hidden'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-body tracking-wider text-muted-foreground">
                    0{catIdx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-heading text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
                {category.products.map((product, idx) => (
                  <div 
                    key={idx} 
                    className={`group ${visibleCategories[catIdx] ? `animate-scaleIn delay-${200 + idx * 100}` : 'initial-hidden'}`}
                  >
                    {/* Square Image */}
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-4 border border-border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </div>
                    
                    {/* Product Name */}
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;