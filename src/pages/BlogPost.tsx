import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-32 text-center">
          <h1 className="text-4xl font-display text-architectural mb-8">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline" className="rounded-full">← Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-minimal text-primary hover:text-primary/80 transition-colors mb-10">
              ← BACK TO BLOG
            </Link>
            
            <div className="mb-8">
              <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-3 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-architectural mb-6">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            <div className="w-full h-72 sm:h-96 mb-12 overflow-hidden rounded-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) return `<h1 class="text-3xl font-display text-foreground mb-6 mt-10">${line.substring(2)}</h1>`;
                      if (line.startsWith('## ')) return `<h2 class="text-2xl font-display text-foreground mb-4 mt-8">${line.substring(3)}</h2>`;
                      if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold text-foreground mb-3 mt-6">${line.substring(4)}</h3>`;
                      if (line.startsWith('- **') && line.endsWith('**')) return `<li class="ml-6 mb-2"><strong class="text-foreground">${line.substring(4, line.length - 2)}</strong></li>`;
                      if (line.startsWith('- ')) return `<li class="ml-6 mb-2">${line.substring(2)}</li>`;
                      if (line.trim() === '') return '<br>';
                      if (line.startsWith('**') && line.endsWith('**')) return `<p class="mb-4"><strong class="text-foreground">${line.substring(2, line.length - 2)}</strong></p>`;
                      return `<p class="mb-4">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
            
            {/* Author */}
            <div className="mt-16 pt-8 border-t border-border flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-display text-xl font-bold">KP</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{post.author}</h3>
                <p className="text-sm text-muted-foreground">Atharva Enterprise</p>
              </div>
            </div>
            
            {/* Related */}
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-display text-architectural mb-8">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(rp => (
                    <Link key={rp.id} to={`/blog/${rp.id}`} className="group">
                      <div className="overflow-hidden rounded-xl mb-4">
                        <img src={rp.image} alt={rp.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <h4 className="font-display font-semibold group-hover:text-primary transition-colors">{rp.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{rp.date} • {rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back buttons */}
            <div className="mt-16 flex flex-wrap gap-4 justify-center">
              <Link to="/blog">
                <Button variant="outline" className="rounded-full px-6 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                  ← All Articles
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="rounded-full px-6 border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                  ← Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
