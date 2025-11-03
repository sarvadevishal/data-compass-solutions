const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">Vishal Sarvade</h3>
              <p className="text-primary-foreground/80 text-sm">
                Technical Architect & Big Data Engineer specializing in scalable data solutions for enterprise clients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Core Expertise</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>AWS Redshift Architecture</li>
                <li>Informatica Cloud ETL</li>
                <li>Data Warehouse Design</li>
                <li>Healthcare & MLM Analytics</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Vishal Sarvade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
