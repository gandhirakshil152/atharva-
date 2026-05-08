import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (location.pathname === "/") {
        const sections = ["contact", "blog", "about", "services", "products"];
        let found = false;
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < 200) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
        if (!found) setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "PRODUCTS", id: "products" },
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "BLOG", id: "blog" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNav = (item: typeof navItems[0]) => {
    if (item.id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      scrollTo(item.id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm' 
        : 'bg-black/10 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
         <img 
  src="/logo.png" 
  alt="Atharva Enterprise" 
  className={`h-14 sm:h-16 md:h-[72px] w-auto transition-all duration-300 ${
    scrolled ? '' : 'brightness-110'
  }`}
/>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => handleNav(item)} 
              className={`text-minimal transition-colors duration-300 relative ${
                scrolled 
                  ? activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  : activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0'
              }`} />
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className={`md:hidden ${scrolled ? '' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </Button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNav(item)}
                className={`block text-minimal transition-colors duration-300 ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
