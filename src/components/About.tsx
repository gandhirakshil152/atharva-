import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "YEARS EXPERIENCE", value: "5+" },
  { label: "HAPPY CLIENTS", value: "100+" },
  { label: "CITIES RETENTION", value: "98%" },
  { label: "TONS MONTHLY", value: "10K+" },
];

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-secondary relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-minimal text-primary mb-3 sm:mb-4">ABOUT US</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural mb-6 sm:mb-8">
                Built on Trust & Quality
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mb-6 sm:mb-8 shimmer-line" />
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Atharva Enterprise has been a leading supplier of premium ceramic 
                  raw materials for over 15 years. We specialize in clay, 
                  sanitary ware, and ceramic products.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Our commitment to quality and timely delivery has made us the preferred 
                  choice for builders, contractors, and architects across the region.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, i) => (
                  <div 
                    key={i}
                    className={`bg-background border border-border rounded-xl p-4 sm:p-6 text-center hover-lift transition-all duration-700 group shadow-sm ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                    <p className="text-minimal text-muted-foreground text-[9px] sm:text-[10px]">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                <h4 className="font-display font-semibold text-lg mb-3">Why Choose Us?</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {["Certified quality raw materials", "On-time bulk delivery across regions", "Competitive wholesale pricing", "Dedicated customer support"].map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${600 + i * 100}ms` }}>
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
