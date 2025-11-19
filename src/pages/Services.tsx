import { Link } from "react-router-dom";
import { Brain, Layers, TrendingUp, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core offerings designed to transform how your organization approaches AI and learning.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Skills Training</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transform your team from AI-curious to AI-confident with practical, hands-on training programs that focus on real-world application and measurable outcomes.
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Customized training programs for all skill levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hands-on workshops with real use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Post-training support and resources</span>
                  </li>
                </ul>
                <Link to="/services/ai-skills-training">
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors font-semibold">
                    Learn More
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                  <Layers className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Learning Systems Design</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build comprehensive learning ecosystems that scale across your organization. From onboarding to continuous development, we design systems that actually stick.
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>End-to-end learning journey mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scalable content development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Learning platform selection and implementation</span>
                  </li>
                </ul>
                <Link to="/services/learning-systems-design">
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors font-semibold">
                    Learn More
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Performance & Strategy</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Strategic consulting to ensure your AI and learning initiatives deliver real business results. We help you measure what matters and optimize for impact.
                </p>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI readiness assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Learning impact measurement frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Change management support</span>
                  </li>
                </ul>
                <Link to="/services/performance-strategy">
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-colors font-semibold">
                    Learn More
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Not sure which service is right for you?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your challenges and goals. We'll help you find the right approach.
          </p>
          <Link to="/contact">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md transition-colors text-lg font-semibold">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
