import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Architect",
      company: "Grid Dynamics Holdings Inc",
      period: "Jan 2022 – Present",
      responsibilities: [
        "Architect enterprise-grade AWS Redshift data warehouses supporting multi-TB datasets",
        "Lead a 7-member engineering team through sprint planning, code reviews, and delivery",
        "Design and optimize Informatica Cloud ETL workflows for healthcare and MLM clients",
        "Drive data migration strategies from legacy systems (AS400) to modern cloud platforms",
        "Build Power BI dashboards translating complex data into executive-ready insights",
        "Act as technical liaison between clients, product teams, and engineering",
      ],
      achievement: "Reduced query latency by 40% through strategic Redshift optimization (DIST keys, SORT keys, VACUUM strategies)",
    },
    {
      title: "Senior Software Engineer",
      company: "Grid Dynamics Holdings Inc",
      period: "Jan 2020 – Jan 2022",
      responsibilities: [
        "Designed AWS Data Pipelines connecting PostgreSQL RDS to Redshift for real-time analytics",
        "Developed complex ETL processes using Informatica Cloud, ETL Works, and AS400 integrations",
        "Created automated data validation frameworks reducing manual QA time by 60%",
        "Led UAT phases with multiple client appreciations for communication and precision",
      ],
      achievement: "Delivered zero-defect ETL migration for 500M+ healthcare records",
    },
    {
      title: "Associate Technical Lead",
      company: "Grid Dynamics Holdings Inc",
      period: "Jan 2020 & Earlier",
      responsibilities: [
        "Designed Informatica Cloud mapping workflows from scratch",
        "Implemented Redshift performance tuning best practices (ANALYZE, VACUUM, compression)",
        "Built audit and reconciliation frameworks for data integrity validation",
        "Mentored junior engineers on SQL optimization and cloud architecture patterns",
      ],
      achievement: "Established ETL design standards adopted across the organization",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Where I've Made an Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

                  {/* Content card */}
                  <div className="md:ml-20 bg-card p-8 rounded-xl shadow-soft hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-secondary font-medium mb-2">
                          {exp.company}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-foreground/80">{resp}</p>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-highlight/10 border-l-4 border-highlight rounded">
                      <p className="text-sm font-medium text-highlight-foreground">
                        <span className="font-bold">Key Achievement:</span> {exp.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
