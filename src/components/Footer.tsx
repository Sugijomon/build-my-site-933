import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Digidactics</h3>
            <p className="text-sm opacity-90">
              AI that actually gets used. Learning that actually sticks.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="opacity-90 hover:opacity-100 transition-opacity">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/ai-skills-training" className="opacity-90 hover:opacity-100 transition-opacity">
                  AI Skills Training
                </Link>
              </li>
              <li>
                <Link to="/services/learning-systems-design" className="opacity-90 hover:opacity-100 transition-opacity">
                  Learning Systems Design
                </Link>
              </li>
              <li>
                <Link to="/services/performance-strategy" className="opacity-90 hover:opacity-100 transition-opacity">
                  Performance & Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm opacity-90">
              Ready to transform your organization's approach to AI and learning?
            </p>
            <Link to="/contact">
              <button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-md transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} Digidactics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
