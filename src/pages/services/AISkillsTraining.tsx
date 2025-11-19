import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AISkillsTraining = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/10 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              AI Skills Training
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your team from AI-curious to AI-confident with practical, hands-on training that drives real adoption.
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
                Why Traditional Training Doesn't Work
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You've invested in AI tools. Your team has access to the latest technology. But adoption rates are disappointing, and people keep falling back to their old ways of working.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The problem? Traditional training treats AI like any other software—when it's fundamentally different. People need to understand not just how to use AI tools, but when to use them, how to evaluate results, and how to integrate them into their workflow.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl" />
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Approach</p>
              <h2 className="text-4xl font-bold mb-6">
                Hands-On, Practical, Real-World
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Customized to Your Context</h3>
                    <p className="text-muted-foreground text-sm">We use your actual use cases and workflows—not generic examples.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Practice-Based Learning</h3>
                    <p className="text-muted-foreground text-sm">Participants work on real problems during training, not after.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Progressive Skill Building</h3>
                    <p className="text-muted-foreground text-sm">From basics to advanced techniques, tailored to each learner's pace.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm">Training doesn't end when the workshop does—we provide resources and support.</p>
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
                Training Programs That Drive Results
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Pre-training assessment to understand current skill levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Customized curriculum based on your team's needs and use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Interactive workshops with hands-on practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Post-training resources and job aids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Follow-up sessions to address challenges and celebrate wins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span>Measurement framework to track adoption and impact</span>
                </li>
              </ul>
            </div>
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/10 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Team?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's talk about how we can design a training program that drives real adoption and measurable results.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISkillsTraining;
