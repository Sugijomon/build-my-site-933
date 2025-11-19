import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PerformanceStrategy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-accent/20 to-secondary/10 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Performance & Strategy
            </h1>
            <p className="text-xl text-muted-foreground">
              Strategic consulting to align your AI and learning initiatives with real business outcomes. We help you measure what matters.
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
                From Activity to Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You're running training programs. People are completing courses. But are you actually moving the needle on business outcomes?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most organizations measure learning activities (completions, satisfaction scores) rather than business impact (adoption, productivity, revenue). We help you shift from counting to measuring what actually matters.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl" />
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Approach</p>
              <h2 className="text-4xl font-bold mb-6">
                Strategy That Drives Results
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">AI Readiness Assessment</h3>
                    <p className="text-muted-foreground text-sm">Understand where you are and what's needed to move forward.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Outcomes-Based Planning</h3>
                    <p className="text-muted-foreground text-sm">Define success in business terms, then work backward to design the path.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Impact Measurement</h3>
                    <p className="text-muted-foreground text-sm">Track the metrics that matter: adoption rates, behavior change, business outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Change Management</h3>
                    <p className="text-muted-foreground text-sm">Because the best strategy fails without organizational buy-in and support.</p>
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
                Strategic Guidance That Works
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Comprehensive AI readiness assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Strategic roadmap aligned with business objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Impact measurement framework and dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Change management strategy and toolkit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Executive communication templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Ongoing consulting support to navigate challenges</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/10 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Strategic Impact?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a strategy that delivers measurable business results, not just completed training modules.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a Strategy Session
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceStrategy;
