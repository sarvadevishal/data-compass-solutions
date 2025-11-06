import { Button } from "@/components/ui/button";
import { Database, Cloud, BarChart3, ChevronDown } from "lucide-react";
import heroImage from "@/assets/vishal-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Hi, I'm Vishal Sarvade — <span className="text-accent">Architecting Scalable Data Platforms</span> That Drive Intelligent Business Decisions.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Technical Architect & Big Data Engineer specializing in end-to-end data ecosystems, performance optimization, and analytics modernization.
              </p>
            </div>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">AWS & Cloud Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">BI & Analytics Leader</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('experience')}
                className="group"
              >
                Explore My Work
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Tech stack badges */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3 font-medium">Core Technologies:</p>
              <div className="flex flex-wrap gap-3">
                {['AWS Redshift', 'Informatica Cloud', 'Power BI', 'Looker', 'SSIS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl"></div>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 shadow-large">
                <img 
                  src={heroImage}
                  alt="Vishal Sarvade - Technical Architect & Big Data Engineer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
