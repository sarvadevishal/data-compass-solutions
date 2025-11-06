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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
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

            {/* Highlights grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-colors animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="mt-12 p-8 bg-gradient-subtle rounded-xl border border-accent/20 animate-fade-in">
              <blockquote className="text-xl font-quote italic text-foreground/90 text-center">
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
