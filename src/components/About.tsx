import { Award, Users, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Enterprise Expertise",
      description: "Architecting data platforms for Fortune 500 companies",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams of 7+ engineers",
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing systems for speed, scale, and reliability",
    },
    {
      icon: Target,
      title: "Business Impact",
      description: "Delivering measurable ROI through data modernization",
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="animate-slide-up">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-foreground font-semibold">Technical Architect and Big Data Engineer</span> with extensive experience building enterprise-scale data platforms that simplify analytics and accelerate decision-making. My focus is on designing robust, cost-efficient, and high-performance solutions using <span className="text-accent">Amazon Redshift</span>, <span className="text-accent">Informatica Cloud</span>, <span className="text-accent">AWS Data Services</span>, <span className="text-accent">Power BI</span>, and <span className="text-accent">Looker</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the years, I've led cross-functional teams, modernized complex data architectures, and delivered measurable impact through innovation, optimization, and hands-on engineering leadership. I believe in combining technology and teamwork to create systems that truly empower businesses.
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

            {/* Philosophy quote with premium styling */}
            <div className="mt-16 p-10 bg-gradient-card border border-accent/30 rounded-2xl animate-fade-in shadow-glow hover:shadow-hover transition-all duration-500">
              <blockquote className="text-xl md:text-2xl font-quote italic text-foreground/90 text-center leading-relaxed">
                "Great data architecture isn't about fancy tools — it's about understanding business problems deeply and building solutions that scale."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
