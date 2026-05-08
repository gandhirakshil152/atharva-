import { useEffect, useRef, useState } from "react";
import kaolinImg from "@/assets/kaolin-clay.png";
import ballClayImg from "@/assets/ball-clay.png";
import talcImg from "@/assets/talc.png";

const Portfolio = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const products = [
    { 
      image: kaolinImg, 
      title: "KAOLIN CLAY", 
      category: "RAW MATERIAL", 
      description: "Premium-grade kaolin (china clay) for ceramics, paper, paint, rubber & construction. High whiteness, fine particle size, chemically inert." 
    },
    { 
      image: ballClayImg, 
      title: "BALL CLAY", 
      category: "RAW MATERIAL", 
      description: "High-plasticity ball clay for ceramic tiles, sanitaryware & pottery. Excellent binding properties with superior green strength." 
    },
    { 
      image: talcImg, 
      title: "TALC", 
      category: "MINERAL", 
      description: "Industrial-grade talc powder for cosmetics, paint, plastics, ceramics & paper. Ultra-fine, soft, and chemically stable mineral." 
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 sm:mb-16 md:mb-20 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-minimal text-primary mb-3 sm:mb-4">OUR RANGE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural">
              Featured Products
            </h2>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto mt-5 sm:mt-6 shimmer-line" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`group bg-background border border-border rounded-2xl overflow-hidden hover-lift transition-all duration-700 shadow-sm ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 text-minimal bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-[10px]">
                    {product.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-white text-sm font-medium">Inquire Now →</span>
                  </div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-display font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
