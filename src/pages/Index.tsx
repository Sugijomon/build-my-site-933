import { Link } from "react-router-dom";
import { Brain, Layers, TrendingUp, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-20">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            AI that actually gets used.
            <br />
            <span className="text-primary">Learning that actually sticks.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We help organizations bridge the gap between AI potential and practical application through human-centered learning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="text-lg px-8">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-wider mb-2">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine AI expertise with learning science to create solutions that people actually want to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Skills Training</h3>
                <p className="text-muted-foreground mb-6">
                  Practical, hands-on training that turns AI skeptics into confident users through real-world application.
                </p>
                <Link to="/services/ai-skills-training" className="text-primary hover:text-primary/80 inline-flex items-center gap-2">
                  Learn More <ChevronRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Learning Systems Design</h3>
                <p className="text-muted-foreground mb-6">
                  We design learning ecosystems that stick—from onboarding to continuous development.
                </p>
                <Link to="/services/learning-systems-design" className="text-primary hover:text-primary/80 inline-flex items-center gap-2">
                  Learn More <ChevronRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Performance & Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic consulting to align your AI initiatives with real business outcomes and measurable impact.
                </p>
                <Link to="/services/performance-strategy" className="text-primary hover:text-primary/80 inline-flex items-center gap-2">
                  Learn More <ChevronRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold">What They Say</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl italic text-foreground mb-6">
                  "Working with Digidactics transformed how our team approaches AI. The training was practical, engaging, and immediately applicable. Within weeks, we saw measurable improvements in adoption and confidence."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Maria Schmidt</p>
                    <p className="text-sm text-muted-foreground">Learning & Development Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-wider mb-2">From Our Blog</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Thoughts on AI, learning, and making technology work for humans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-primary/10" />
              <CardContent className="p-6">
                <span className="inline-block bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full mb-3">
                  AI TRAINING
                </span>
                <h3 className="text-xl font-bold mb-2">Why Most AI Training Fails (And How to Fix It)</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The problem isn't the technology—it's how we teach people to use it. Here's what actually works.
                </p>
                <Link to="/insights" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold">
                  Read More <ChevronRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-secondary/20" />
              <CardContent className="p-6">
                <span className="inline-block bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full mb-3">
                  LEARNING DESIGN
                </span>
                <h3 className="text-xl font-bold mb-2">Building Learning Systems That Scale</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  From pilot programs to organization-wide adoption: a framework that works.
                </p>
                <Link to="/insights" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold">
                  Read More <ChevronRight size={14} />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-accent/20" />
              <CardContent className="p-6">
                <span className="inline-block bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full mb-3">
                  STRATEGY
                </span>
                <h3 className="text-xl font-bold mb-2">The ROI of Human-Centered AI Implementation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Data-driven insights on why focusing on people delivers better business outcomes.
                </p>
                <Link to="/insights" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold">
                  Read More <ChevronRight size={14} />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/insights">
              <Button variant="outline" size="lg">
                View All Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's talk about how we can help your organization unlock the real potential of AI through better learning.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
