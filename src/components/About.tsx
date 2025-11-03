import { Database, Users, Building2, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, label: "Data Managed", value: "2TB+" },
    { icon: Database, label: "Data Warehouses Designed", value: "10+" },
    { icon: Users, label: "Team Members Led", value: "7" },
    { icon: Zap, label: "ETL Jobs Designed", value: "100+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              The Story Behind the Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Story content */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-slide-up">
            <p>
              I'm Vishal Sarvade, and for over a decade, I've been obsessed with one thing: turning messy, fragmented data into clear, actionable intelligence.
            </p>

            <p>
              My journey started in healthcare data systems, where precision isn't just important — it's life-critical. I learned early on that great data architecture isn't about fancy tools; it's about understanding business problems deeply and building solutions that scale.
            </p>

            <p>
              Today, as a Technical Architect at Grid Dynamics, I lead a team of 7 talented engineers, architecting end-to-end data pipelines across AWS Redshift, Informatica Cloud, and Power BI. We've migrated 2TB+ of enterprise data, designed warehouses from the ground up, and built ETL solutions that process millions of records daily.
            </p>

            <p>
              But what drives me isn't just the technical challenge — it's the impact. Whether it's helping healthcare providers make faster patient decisions or enabling MLM businesses to understand their distributor networks better, I build systems that matter.
            </p>

            <p className="font-medium text-primary">
              I believe in mentorship, continuous learning, and writing code that the next engineer will thank you for.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card p-6 rounded-xl shadow-soft hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
