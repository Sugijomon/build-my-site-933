import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const LearningSystemsDesign = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-secondary/20 to-primary/10 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Learning Systems Design
            </h1>
            <p className="text-xl text-muted-foreground">
              Build comprehensive learning ecosystems that scale. From onboarding to continuous development, we design systems that stick.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Content Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <p className="text-accent text-sm uppercase tracking-wider mb-4">The Challenge</p>
              <h2 className="text-4xl font-bold mb-6">
                Beyond One-Off Training
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A single training session isn't enough. People forget, contexts change, and new team members arrive. You need a learning system—not just learning events.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most organizations cobble together disconnected training materials, LMS content, and documentation. The result? Information overload, frustrated learners, and knowledge that doesn't stick or scale.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Approach</p>
              <h2 className="text-4xl font-bold mb-6">
                Integrated Learning Ecosystems
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Journey Mapping</h3>
                    <p className="text-muted-foreground text-sm">We map the complete learning journey from awareness to mastery.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Modal Content</h3>
                    <p className="text-muted-foreground text-sm">Videos, interactive modules, job aids, coaching—the right format for each learning moment.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Just-in-Time Learning</h3>
                    <p className="text-muted-foreground text-sm">Resources available exactly when and where people need them.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Design</h3>
                    <p className="text-muted-foreground text-sm">Systems that work for 50 people or 5,000, today and as you grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-sm uppercase tracking-wider mb-4">What You Get</p>
              <h2 className="text-4xl font-bold mb-6">
                A Complete Learning Architecture
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Comprehensive learning needs analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>End-to-end learning journey design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Content strategy and development roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Technology platform recommendations and implementation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Content creation (or guidance for your team)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Measurement and optimization framework</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build a Learning System?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's design a learning ecosystem that scales with your organization and drives lasting change.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningSystemsDesign;
