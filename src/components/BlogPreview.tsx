import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
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

  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12 sm:mb-16">
            <p className="text-minimal text-primary mb-3 sm:mb-4">INSIGHTS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-architectural mb-4">
              Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Expert insights on kaolin clay, ceramic raw materials, and industrial mineral markets from Atharva Enterprise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {previewPosts.map((post, i) => (
              <article 
                key={post.id} 
                className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-5">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
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
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                View All Articles →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
