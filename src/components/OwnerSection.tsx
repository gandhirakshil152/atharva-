import { useEffect, useRef, useState } from "react";
import ownerImg from "@/assets/owner-kapil.png";

const OwnerSection = () => {
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
    <section className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-minimal text-primary mb-3 sm:mb-4">LEADERSHIP</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural">
              Meet Our Founder
            </h2>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-5 sm:mt-6 shimmer-line" />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-border">
                  <img
                    src={ownerImg}
                    alt="Kapil Pandya - Founder & CEO of Atharva Enterprise"
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-md">
                  <p className="text-minimal text-[10px]">FOUNDER & CEO</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-architectural mb-4">
                Kapil Pandya
              </h3>
              <p className="text-minimal text-primary mb-6">FOUNDER & CEO, ATHARVA ENTERPRISE</p>

              {/* Quote */}
              <div className="border-l-4 border-primary/40 pl-6 mb-8">
                <p className="text-lg sm:text-xl text-muted-foreground italic leading-relaxed font-display">
                  "Quality is not just a standard — it's a promise we deliver with every shipment. 
                  At Atharva Enterprise, we build relationships that last generations."
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <h4 className="text-minimal text-foreground">OUR VISION</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted raw materials supplier, empowering manufacturers 
                  worldwide with premium-grade kaolin clay, ball clay, and talc — delivered with 
                  consistency, integrity, and a commitment to excellence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-primary">5+</p>
                  <p className="text-minimal text-muted-foreground text-[9px] mt-1">YEARS</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-primary">100+</p>
                  <p className="text-minimal text-muted-foreground text-[9px] mt-1">CLIENTS</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-primary">7+</p>
                  <p className="text-minimal text-muted-foreground text-[9px] mt-1">COUNTRIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
