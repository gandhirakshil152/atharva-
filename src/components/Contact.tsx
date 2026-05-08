import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=kapil.pandya@atharvaenterpriseco.com&su=${subject}&body=${body}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: "📧", label: "EMAIL", value: "sales@atharvaenterpriseco.com", href: "mailto:sales@atharvaenterpriseco.co" },
    { icon: "📱", label: "Atharva Enterprise", value: "+91 6359255655", href: "tel:+916359255655" },
    { icon: "📍", label: "WAREHOUSE", value: "101, Parshavnath Complex,Morbi Highway, Near Shiv Car Rental,Morbi – 363642, Gujarat, India", href: undefined },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
            <div>
              <p className="text-minimal text-primary mb-3 sm:mb-4">GET IN TOUCH</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural mb-4">
                Let's Build
                <br />
                Together
              </h2>
              <div className="w-16 h-0.5 bg-primary/40 mb-8 sm:mb-10 shimmer-line" />
              
              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${300 + i * 150}ms` }}>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-1">{item.label}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-base sm:text-lg hover:text-primary transition-colors duration-300">
                          {item.value}
                        </a>
                      ) : (
                        <address className="text-base sm:text-lg not-italic whitespace-pre-line">{item.value}</address>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`bg-secondary border border-border rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">Request a Quote</h3>
              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                {[
                  { label: "YOUR NAME", type: "text", placeholder: "Enter your name", name: "name" },
                  { label: "PHONE NUMBER", type: "tel", placeholder: "Enter your phone", name: "phone" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-minimal text-muted-foreground mb-2 block">{field.label}</label>
                    <input 
                      name={field.name}
                      type={field.type}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="text-minimal text-muted-foreground mb-2 block">MESSAGE</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Describe your requirements..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className={`w-full py-5 sm:py-6 text-sm sm:text-base font-medium rounded-xl transition-all duration-500 ${
                    submitted 
                      ? 'bg-green-600 text-white hover:bg-green-600' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {submitted ? '✓ Inquiry Sent!' : 'Send Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
