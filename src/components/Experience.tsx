import { Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Grid Dynamics Inc, USA",
      period: "Jan 2024 – Present",
      title: "Technical Architect",
      responsibilities: [
        "Leading data engineering modernization and ETL pipeline optimization initiatives across cloud data platforms",
        "Designing next-generation data architecture strategies for scalability, performance, and cost efficiency",
        "Collaborating with global teams to deliver advanced data pipeline automation, Redshift performance tuning, and BI integrations",
        "Driving architecture reviews, proof-of-concept validations, and technical mentoring",
      ],
    },
    {
      company: "NextSphere Technologies Inc, USA",
      period: "Jan 2020 – Dec 2023",
      title: "Senior Software Engineer → Associate Technical Architect → Technical Architect",
      client: "Forever Living Products (FLP)",
      responsibilities: [
        "Simplified complex Salesforce + PostgreSQL + Heroku setup into unified AWS Redshift architecture",
        "Reduced annual licensing cost by $500K through strategic AWS-native consolidation",
        "Migrated aggregation logic from PostgreSQL to Redshift, cutting runtime from 10 hours to 1 hour",
        "Implemented Redshift Data Sharing across three production clusters (Producer, Looker BI Consumer, FLP360 Consumer)",
        "Led migration from DC2 to RA3 instances, enabling near real-time data propagation",
        "Replaced AWS DMS pipelines with Zero-ETL integration for real-time MySQL Aurora to Redshift sync",
        "Led BI modernization: designed Looker dashboards and Power BI migration POC",
        "Built executive dashboards: Sales Performance and Enrollment Summary with semantic modeling",
        "Led 7-member data engineering team through sprint planning, code reviews, and client collaboration",
      ],
      achievements: [
        {
          title: "Cost Optimization",
          impact: "$500K annual savings through architecture simplification",
          icon: TrendingUp,
        },
        {
          title: "Performance Boost",
          impact: "90% reduction in aggregation runtime (10 hours → 1 hour)",
          icon: TrendingUp,
        },
        {
          title: "Real-Time Analytics",
          impact: "Zero-ETL integration enabling instant insights",
          icon: TrendingUp,
        },
      ],
    },
    {
      company: "NextSphere Technologies Inc, USA (Transition Project)",
      period: "Jan 2019 – Jan 2020",
      title: "Associate Technical Lead",
      client: "Forever Living Products",
      responsibilities: [
        "Architected the MLM Data Warehouse Solution integrating AS400 and Amazon Redshift",
        "Evaluated multiple ETL tools: Skyvia, Matillion, Talend, Informatica Cloud, and Snowflake",
        "Standardized on Informatica Cloud + Amazon Redshift for optimal performance and scalability",
        "Developed 100+ Informatica jobs using Producer-Consumer mesh architecture",
        "Established modular, scalable ETL design patterns adopted across the organization",
      ],
    },
    {
      company: "NextSphere Technologies India Pvt Ltd",
      period: "Mar 2014 – Jan 2020",
      title: "Associate Software Engineer → Software Engineer → Senior Software Engineer → Associate Technical Lead",
      client: "HealthAxis",
      responsibilities: [
        "Designed and developed Data Warehouse for Claims Module (Professional & Institutional Claims)",
        "Built automated data ingestion pipelines using SSIS with CSV file validation from SFTP",
        "Implemented good/bad record segregation logic improving data quality for client review cycles",
        "Extensive healthcare data extraction and mapping for members, providers, vendors, and ICD codes",
        "Developed comprehensive data validation logic ensuring data integrity and audit compliance",
        "Extensive coding on SQL Server stored procedures, SSIS packages, and automation workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Career Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden sm:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={`${exp.company}-${exp.period}`}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden sm:block"></div>

                  {/* Content card */}
                  <div className="sm:ml-0 md:ml-20 bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-accent font-semibold mb-2">
                          {exp.company}
                        </div>
                        {exp.client && (
                          <div className="text-sm text-muted-foreground mb-1">
                            Client: {exp.client}
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{resp}</p>
                        </div>
                      ))}
                    </div>

                    {/* Achievements (if any) */}
                    {exp.achievements && (
                      <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                            <div className="flex items-center gap-2 mb-2">
                              <achievement.icon className="w-4 h-4 text-accent" />
                              <h4 className="font-semibold text-sm text-foreground">{achievement.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground">{achievement.impact}</p>
                          </div>
                        ))}
                      </div>
                    )}
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
