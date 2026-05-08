import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [subEmail, setSubEmail] = useState("");
  const [subDone, setSubDone] = useState(false);
  
  const categories = ["ALL", "RAW MATERIALS", "CERAMICS", "BUSINESS", "MARKET TRENDS"];
  
  const filteredPosts = activeCategory === "ALL" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    const subject = encodeURIComponent("New Blog Subscriber - Atharva Enterprise");
    const body = encodeURIComponent(
      `Dear Kapil Pandya,\n\nA new visitor has subscribed to the Atharva Enterprise blog newsletter.\n\nSubscriber Email: ${subEmail}\n\nThey are interested in receiving updates about:\n- Kaolin Clay market insights\n- Ball Clay & Talc product updates\n- Industry news and trends\n\nPlease add them to the mailing list.\n\nBest regards,\nAtharva Enterprise Website`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=kapil.pandya@atharvaenterpriseco.com&su=${subject}&body=${body}`, '_blank');
    setSubDone(true);
    setSubEmail("");
    setTimeout(() => setSubDone(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-minimal text-primary hover:text-primary/80 transition-colors mb-8">
              ← BACK TO HOME
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-architectural mb-6">
              INSIGHTS
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Expert insights on kaolin clay, ceramic raw materials, and industrial mineral markets 
              from Atharva Enterprise — India's trusted raw materials supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 sm:gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs sm:text-sm tracking-wider font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative overflow-hidden rounded-xl mb-5">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-[10px] text-white font-semibold tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-[11px] text-muted-foreground space-x-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                      <h2 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-block text-minimal text-primary pt-2">
                        READ MORE →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-minimal text-primary mb-3">STAY UPDATED</p>
            <h2 className="text-3xl sm:text-4xl font-display text-architectural mb-4">
              Subscribe for Updates
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest market insights, product updates, and industry news from Atharva Enterprise.
            </p>
            {subDone ? (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <p className="text-primary font-medium">✓ Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-12 rounded-full px-6 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <Button type="submit" className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="py-12 text-center">
        <Link to="/">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
            ← Back to Home
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
