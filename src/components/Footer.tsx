const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <img src="/logowhite.png" alt="Atharva Enterprise" className="h-12 w-auto" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Your trusted partner for premium quality kaolin clay, ball clay, 
                talc, and industrial raw materials. Export-ready from India.
              </p>
            </div>
            
            <div>
              <h4 className="text-minimal text-white/40 mb-3 sm:mb-4">PRODUCTS</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                {["Kaolin Clay", "Ball Clay", "Talc", "Bulk Supply", "Export Services"].map(item => (
                  <li key={item} className="hover:text-white transition-colors duration-300 cursor-default">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-minimal text-white/40 mb-3 sm:mb-4">CONTACT</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>📧 kapil.pandya@atharvaenterpriseco.com</li>
                <li>📞 +91 9081774674</li>
                <li>📞 +91 6359255655</li>
                <li>Mon – Sat: 9:00 AM – 6:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Atharva Enterprise. All rights reserved. | Founded by Kapil Pandya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
