import { Button } from "@/components/ui/button";
import { Database, Cloud, BarChart3, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/vishal-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-hero bg-gradient-mesh"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              {/* Impact statement */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full mb-6 animate-fade-in shadow-glow">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-sm text-white font-bold tracking-wide">$100K+ Annual Savings • 10x Performance Gains • Zero-Downtime Migrations</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.05] tracking-tight mb-6">
                <span className="text-gradient-primary animate-fade-in">Vishal Sarvade</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.15] mb-6">
                I Fix Expensive, Slow Data Platforms
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed max-w-2xl">
                Senior Technical Architect who eliminates cost bloat, speeds up analytics by 10x, and builds cloud data systems that scale without breaking.
              </p>
            </div>

            {/* Key highlights with animated icons */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-3 px-5 py-3 bg-card/80 border border-accent/30 rounded-lg hover-lift shadow-md">
                <Database className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '3s' }} />
                <span className="text-foreground font-semibold">10+ Years Building Enterprise Systems</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-card/80 border border-accent/30 rounded-lg hover-lift shadow-md">
                <Cloud className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '3.5s' }} />
                <span className="text-foreground font-semibold">AWS Redshift • Snowflake • Databricks</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-card/80 border border-accent/30 rounded-lg hover-lift shadow-md">
                <BarChart3 className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '4s' }} />
                <span className="text-foreground font-semibold">Led 7+ Engineering Teams</span>
              </div>
            </div>

            {/* CTAs with enhanced styling */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('executive-summary')}
                className="group bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-hover text-lg px-10 py-7 btn-ripple relative overflow-hidden font-bold"
                aria-label="View executive summary and key metrics"
              >
                <span className="relative z-10">See the Numbers</span>
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform relative z-10" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="glassmorphism border-2 border-accent/30 hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300 text-lg px-10 py-7 font-bold"
                aria-label="Contact Vishal Sarvade"
              >
                Let's Talk Architecture
              </Button>
            </div>

            {/* Tech stack badges with hover effects */}
            <div className="pt-4">
              <p className="text-sm text-foreground/80 mb-4 font-semibold tracking-wide uppercase">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {['AWS Redshift', 'Informatica Cloud', 'Power BI', 'Looker', 'SSIS'].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-5 py-2.5 bg-card/80 border border-border rounded-xl text-sm text-foreground font-medium hover:border-accent hover:bg-accent/5 hover:scale-105 transition-all duration-300 cursor-default shadow-soft hover:shadow-medium animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Image with premium 3D tilt effect */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Multi-layer animated glow effect */}
              <div className="absolute -inset-8 bg-gradient-primary opacity-20 rounded-3xl blur-3xl animate-glow-pulse"></div>
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              
              {/* Image container with 3D tilt */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-accent/40 shadow-xl tilt-3d glassmorphism">
                <img 
                  src={heroImage}
                  alt="Vishal Sarvade - Technical Architect & Big Data Engineer"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"></div>
                {/* Animated border glow */}
                <div className="absolute inset-0 border-2 border-transparent hover:border-accent/60 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
        <div className="w-8 h-12 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
