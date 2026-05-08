import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Services = () => {
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

  const services = [
    { number: "01", title: "KAOLIN CLAY", description: "Premium-grade china clay for ceramics, paper, paint, rubber & construction industries. High whiteness and fine particle size.", icon: "⚪" },
    { number: "02", title: "BALL CLAY", description: "High-plasticity ball clay for ceramic tiles, sanitaryware, pottery & refractory products. Excellent green strength.", icon: "🟤" },
    { number: "03", title: "TALC", description: "Industrial-grade talc powder for cosmetics, paint, plastics, ceramics & pharmaceutical applications.", icon: "💎" },
    { number: "04", title: "BULK SUPPLY & EXPORT", description: "Reliable bulk supply and international logistics for large-scale manufacturing. Export-ready with quality certifications.", icon: "🚛" },
  ];

  const handleInquiry = (productName: string) => {
    const subject = encodeURIComponent(`Inquiry about ${productName} - Atharva Enterprise`);
    const body = encodeURIComponent(
      `Dear Kapil Pandya,\n\nI am interested in ${productName} from Atharva Enterprise.\n\nPlease share details regarding:\n- Available grades and specifications\n- Pricing for bulk orders\n- Delivery timelines\n- Minimum order quantity\n\nLooking forward to your response.\n\nBest regards`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=kapil.pandya@atharvaenterpriseco.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-secondary relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 sm:mb-16 md:mb-20 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-minimal text-primary mb-3 sm:mb-4">WHAT WE OFFER</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural">
              Our Products & Services
            </h2>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-5 sm:mt-6 shimmer-line" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-background border border-border rounded-2xl p-6 sm:p-8 hover-lift transition-all duration-700 relative overflow-hidden ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">{service.icon}</div>
                  <span className="text-minimal text-primary/60 font-medium">
                    {service.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-semibold mt-2 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                    {service.description}
                  </p>
                  <Button 
                    size="sm"
                    className="w-full rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-semibold"
                    onClick={() => handleInquiry(service.title)}
                  >
                    Send Inquiry →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
