import { Award, Users, Zap, Target, Linkedin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Cost Architecture",
      description: "Eliminated $100K+ annually by decommissioning Salesforce, PostgreSQL, and legacy AWS Data Pipelines",
    },
    {
      icon: Users,
      title: "Distributed Teams",
      description: "Led 7+ engineers across US, India, Canada—delivering HIPAA-compliant healthcare and MLM systems on time",
    },
    {
      icon: Zap,
      title: "Zero-Downtime Migrations",
      description: "Migrated Redshift workloads from 10+ minute queries to sub-60 second response times without downtime",
    },
    {
      icon: Target,
      title: "Real-Time Analytics",
      description: "Moved healthcare dashboards from 24-hour delays to 1-hour refresh cycles using recursive CTEs in Redshift",
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
            <h2 className="text-5xl md:text-6xl font-heading font-black text-foreground mb-6">
              Why Companies Hire Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            {/* Bio */}
            <div className="animate-slide-up">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Most data platforms are <span className="text-foreground font-bold">too slow, too expensive, and built by teams who've never seen production at scale</span>. I fix that.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Over the past decade, I've architected data systems for <span className="text-accent font-bold">Fortune 500 healthcare companies, multi-level marketing enterprises, and high-growth SaaS platforms</span>. My focus: <span className="text-foreground font-bold">eliminate waste, speed up queries, and build infrastructure that doesn't need constant babysitting</span>.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I specialize in <span className="text-accent">AWS Redshift modernization</span>, <span className="text-accent">zero-downtime migrations</span>, and <span className="text-accent">real-time analytics</span> using tools like Informatica Cloud, Tableau, and Looker. If your data team is spending more time firefighting than building, we should talk.
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
            <div className="relative mt-16">
              <div className="absolute inset-0 bg-gradient-accent opacity-5 rounded-2xl blur-xl"></div>
              <blockquote className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-10 shadow-elegant">
                <p className="text-2xl font-quote italic text-foreground leading-relaxed mb-6">
                  "Most data platforms fail because teams overcomplicate things. My philosophy: <span className="text-accent font-bold">ship fewer tools, optimize relentlessly, and build systems that don't wake you up at 3 AM</span>."
                </p>
                <footer className="text-base font-bold text-accent">
                  — Vishal Sarvade
                </footer>
              </blockquote>
              <div className="flex justify-center mt-8">
                <a
                  href="https://www.linkedin.com/in/vishalkumarsarvade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-accent rounded-full hover:scale-105 transition-all duration-300 shadow-glow text-white font-bold text-lg"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Let's Connect on LinkedIn</span>
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
