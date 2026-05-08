import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("New Newsletter Subscriber - Atharva Enterprise");
    const body = encodeURIComponent(
      `Dear Kapil Pandya,\n\nA new visitor has subscribed to the Atharva Enterprise newsletter.\n\nSubscriber Email: ${email}\n\nThey are interested in receiving updates about:\n- Kaolin Clay, Ball Clay & Talc product updates\n- Market insights and industry news\n- New product offerings and bulk pricing\n\nPlease add them to the mailing list.\n\nBest regards,\nAtharva Enterprise Website`
    );
    
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=kapil.pandya@atharvaenterpriseco.com&su=${subject}&body=${body}`,
      '_blank'
    );
    
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-16 sm:py-20 bg-primary/5 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-minimal text-primary mb-3">STAY UPDATED</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-architectural mb-4">
            Subscribe for Updates
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest market insights, product updates, and industry news from Atharva Enterprise.
          </p>

          {submitted ? (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in">
              <p className="text-primary font-medium">✓ Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 rounded-full px-6 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Button 
                type="submit" 
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
