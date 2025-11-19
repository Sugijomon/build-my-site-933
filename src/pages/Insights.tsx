import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Insights = () => {
  const posts = [
    {
      category: "AI TRAINING",
      title: "Why Most AI Training Fails (And How to Fix It)",
      excerpt: "The problem isn't the technology—it's how we teach people to use it. Here's what actually works.",
      date: "March 15, 2024",
      author: "Team Digidactics",
      color: "accent"
    },
    {
      category: "LEARNING DESIGN",
      title: "Building Learning Systems That Scale",
      excerpt: "From pilot programs to organization-wide adoption: a framework that works.",
      date: "March 10, 2024",
      author: "Team Digidactics",
      color: "secondary"
    },
    {
      category: "STRATEGY",
      title: "The ROI of Human-Centered AI Implementation",
      excerpt: "Data-driven insights on why focusing on people delivers better business outcomes.",
      date: "March 5, 2024",
      author: "Team Digidactics",
      color: "accent"
    },
    {
      category: "AI TRAINING",
      title: "From Skeptic to Champion: The AI Adoption Journey",
      excerpt: "Understanding the psychology behind successful AI adoption in organizations.",
      date: "February 28, 2024",
      author: "Team Digidactics",
      color: "primary"
    },
    {
      category: "LEARNING DESIGN",
      title: "Microlearning Meets AI: A Perfect Match",
      excerpt: "How bite-sized learning content accelerates AI skill development.",
      date: "February 22, 2024",
      author: "Team Digidactics",
      color: "secondary"
    },
    {
      category: "STRATEGY",
      title: "Measuring What Matters in AI Training",
      excerpt: "Beyond completion rates: metrics that actually predict success.",
      date: "February 15, 2024",
      author: "Team Digidactics",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-primary-foreground pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Thoughts on AI, learning, and making technology work for humans.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
                <div className={`aspect-video bg-${post.color}/20`} />
                <CardContent className="p-6">
                  <span className={`inline-block bg-${post.color} text-${post.color}-foreground text-xs px-3 py-1 rounded-full mb-3`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link to="#" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold">
                    Read More <ChevronRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get our latest insights on AI, learning design, and organizational development delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
