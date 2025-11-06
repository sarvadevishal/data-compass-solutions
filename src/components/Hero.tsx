import { Button } from "@/components/ui/button";
import { Database, Cloud, BarChart3, ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/vishal-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-accent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-highlight rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/30 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4 animate-fade-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Technical Architect & Big Data Engineer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-gradient-accent">Vishal Sarvade</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground/90 leading-tight">
                Architecting Scalable Data Platforms That Drive Intelligent Business Decisions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Specializing in end-to-end data ecosystems, performance optimization, and analytics modernization with proven expertise in AWS, Redshift, and enterprise-scale data architecture.
              </p>
            </div>

            {/* Key highlights with animated icons */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border rounded-lg hover-lift">
                <Database className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '3s' }} />
                <span className="text-foreground font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border rounded-lg hover-lift">
                <Cloud className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '3.5s' }} />
                <span className="text-foreground font-medium">AWS & Cloud Expert</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border rounded-lg hover-lift">
                <BarChart3 className="w-6 h-6 text-accent animate-pulse" style={{ animationDuration: '4s' }} />
                <span className="text-foreground font-medium">BI & Analytics Leader</span>
              </div>
            </div>

            {/* CTAs with enhanced styling */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('experience')}
                className="group bg-gradient-accent hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-hover text-lg px-8 py-6"
              >
                Explore My Work
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300 text-lg px-8 py-6"
              >
                Let's Connect
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

          {/* Professional Image with premium effects */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -inset-2 bg-highlight/10 rounded-3xl blur-2xl"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-accent/40 shadow-large hover:shadow-hover transition-all duration-500 hover:scale-[1.02] hover:border-accent/60">
                <img 
                  src={heroImage}
                  alt="Vishal Sarvade - Technical Architect & Big Data Engineer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
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
