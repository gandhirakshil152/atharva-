import { useEffect, useState } from "react";
import heroImage from "@/assets/blog-kaolin-uses.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `scale(1.15) translateY(${scrollY * 0.3}px)`
        }}
      />
      
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6" style={{ opacity }}>
        <div className={`transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-minimal text-white/70 mb-4 sm:mb-6 tracking-[0.3em] text-[10px] sm:text-xs">
            TRUSTED RAW MATERIAL SUPPLIER
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white text-architectural mb-6 sm:mb-8">
            Atharva
            <br />
            <span className="text-white/90 font-light">Enterprise</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed px-2">
            Premium quality Kaolin Clay, Ball Clay & Talc for your industrial needs. 
            Building trust, one shipment at a time.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 px-4 sm:px-0 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-full glow-pulse"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Products
          </Button>
          <Button 
            size="lg" 
            className="bg-white text-foreground hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-full shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
