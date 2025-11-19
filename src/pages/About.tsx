import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-secondary/10 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            About Digidactics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where AI expertise meets learning science to create solutions people actually want to use.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Our Story</p>
              <h2 className="text-4xl font-bold mb-6">
                Hi! We're on a mission to make AI accessible.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded on the belief that the best technology is technology people actually use, Digidactics bridges the gap between cutting-edge AI capabilities and real-world application.
                </p>
                <p>
                  We've seen too many organizations invest in AI tools that end up gathering digital dust. The problem isn't the technology—it's how we introduce it to people. That's where we come in.
                </p>
                <p>
                  With backgrounds in learning science, instructional design, and AI implementation, we bring a unique perspective: We understand both the technology and the humans who need to use it.
                </p>
                <p className="text-foreground font-semibold italic">
                  Our approach is simple: Make learning engaging, make implementation practical, and make results measurable.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-6xl font-bold text-primary">D</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">
                    Human-Centered
                    <br />
                    AI Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical First</h3>
              <p className="text-muted-foreground">
                No buzzwords, no fluff. Just practical solutions that work in the real world.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-muted-foreground">
                We measure success by adoption rates and business outcomes, not completion certificates.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Human-Centered</h3>
              <p className="text-muted-foreground">
                Technology serves people, not the other way around. Always.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-muted/30 rounded-2xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-accent text-sm uppercase tracking-wider mb-4">Experience</p>
              <h2 className="text-4xl font-bold mb-6">
                Years of expertise in both worlds
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team combines deep expertise in artificial intelligence, learning science, instructional design, and organizational development. We've worked with organizations ranging from innovative startups to Fortune 500 companies, always with the same goal: making technology work for humans, not the other way around.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-xl text-foreground">
                "The best AI implementation is one where people forget they're using AI—because it just works."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transform how your organization approaches AI and learning? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
