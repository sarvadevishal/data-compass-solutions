import { Award, Users, Zap, Target, Linkedin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Business-Driven Technical Strategy",
      description: "Reduced operational and architectural expenses by over 100K+ annually through targeted optimizations",
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Leading 7+ engineers across distributed teams to deliver enterprise solutions",
    },
    {
      icon: Zap,
      title: "Performance Excellence",
      description: "Achieving 10x improvement in query performance through zero-downtime optimization",
    },
    {
      icon: Target,
      title: "Measurable Business Impact",
      description: "Real-time analytics enabling instant decision-making for Fortune 500 clients",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-40 left-10 w-72 h-72 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="animate-slide-up">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-foreground font-semibold">Technical Architect and Big Data Engineer</span> specializing in delivering <span className="text-accent font-semibold">measurable business impact</span> through enterprise-scale data platforms. <span className="text-foreground font-semibold">I bridge business objectives with technical execution</span>, transforming complex data challenges into solutions that drive ROI and competitive advantage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With proven expertise in <span className="text-accent">cost optimization</span> (reducing expenses by over 100K+ annually), <span className="text-accent">performance excellence</span> (achieving 10x improvements), and <span className="text-accent">team leadership</span> (leading 7+ distributed engineers), I combine strategic thinking with hands-on technical depth using AWS Redshift, Informatica Cloud, and modern BI platforms.
                </p>
              </div>
            </div>

            {/* Highlights grid with premium styling */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="premium-card group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 bg-gradient-accent rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy quote with glassmorphism */}
            <div className="mt-20 p-12 glassmorphism border border-accent/30 rounded-3xl animate-fade-in shadow-xl hover:shadow-glow transition-all duration-500">
              <blockquote className="text-2xl md:text-3xl font-quote italic text-gradient-primary text-center leading-relaxed mb-8">
                "Exceptional data architecture isn't about technology alone — it's about understanding business challenges deeply and delivering solutions that drive measurable value at scale."
              </blockquote>
              <div className="flex justify-center mt-6">
                <a
                  href="https://www.linkedin.com/in/vishalkumarsarvade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full hover:scale-105 transition-all duration-300 shadow-glow text-white font-semibold"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
