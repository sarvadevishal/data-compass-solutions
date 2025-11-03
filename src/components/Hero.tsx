import { Button } from "@/components/ui/button";
import { Database, Cloud, BarChart3, Sparkles } from "lucide-react";
import heroImage from "@/assets/vishal-headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-highlight/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
                Transforming Complex Data into Strategic Business Assets
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                Hi, I'm Vishal Sarvade — a Technical Architect and Big Data Engineer who designs scalable data solutions that power smarter business decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>11+ years building enterprise data warehouses</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-accent" />
                <span>2TB+ data managed</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <span>Healthcare & MLM domain expert</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>

            {/* Tech icons */}
            <div className="flex flex-wrap gap-6 pt-8">
              {["AWS", "Redshift", "Power BI", "Informatica"].map((tech, index) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg text-primary-foreground font-medium text-sm hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-large hover-lift">
                <img 
                  src={heroImage} 
                  alt="Vishal Sarvade - Technical Architect and Big Data Engineer"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-accent/20 blur-3xl animate-glow-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
