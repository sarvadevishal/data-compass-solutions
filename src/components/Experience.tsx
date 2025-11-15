import { Briefcase, CheckCircle2, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Grid Dynamics Inc, USA",
      period: "Jan 2024 – Present",
      title: "Technical Architect",
      keyAchievement: "Leading enterprise-scale data modernization initiatives",
      responsibilities: [
        "Driving data engineering modernization delivering cost optimization and performance excellence for Fortune 500 clients",
        "Architecting next-generation cloud data platforms with focus on scalability, real-time analytics, and measurable ROI",
        "Tuning Amazon Redshift for performance and scalability through schema optimization, indexing, and workload management improvements",
        "Leading architecture reviews, POC validations, and technical mentorship for distributed engineering teams",
        "Collaborating with business and product teams to translate functional requirements into robust data architecture designs",
      ],
    },
    {
      company: "NextSphere Technologies Inc, USA",
      period: "Jan 2020 – Dec 2023",
      title: "Senior Software Engineer → Associate Technical Architect → Technical Architect",
      client: "Forever Living Products (FLP)",
      keyAchievement: "$100K annual savings + 10x performance improvement",
      responsibilities: [
        "Delivered $100K in annual cost savings by consolidating complex multi-platform architecture into unified AWS Redshift solution",
        "Achieved 10x performance improvement by migrating aggregation logic from PostgreSQL to Redshift (10 hours → 1 hour runtime)",
        "Architected Redshift Data Sharing across 3 production clusters enabling real-time analytics for executive decision-making",
        "Led zero-downtime DC2 to RA3 migration enabling near real-time data propagation across enterprise systems",
        "Implemented Zero-ETL integration replacing traditional AWS DMS pipelines, enabling instant insights from MySQL Aurora",
        "Delivered AWS DMS migration frameworks enabling seamless, low-downtime transitions between heterogeneous database environments",
        "Drove BI transformation delivering executive dashboards (Sales Performance, Enrollment) with semantic modeling",
        "Established data quality, validation, and auditing processes ensuring integrity and traceability across all data layers",
        "Led 7-member distributed engineering team through agile sprints, code reviews, and technical mentorship",
        "Directed offshore production support teams, overseeing SLAs, release cycles, and proactive incident management",
      ],
      achievements: [
        {
          title: "Cost Optimization",
          impact: "$100K annual savings through architecture simplification",
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
      keyAchievement: "Architected enterprise MLM data warehouse from legacy AS400",
      responsibilities: [
        "Delivered comprehensive MLM Data Warehouse Solution migrating legacy AS400 to modern cloud architecture",
        "Led technical evaluation of 5 enterprise ETL platforms, selecting optimal Informatica Cloud + Redshift stack",
        "Designed and implemented enterprise-scale data pipelines using Informatica Cloud to extract, transform, and load data efficiently from multiple business systems",
        "Architected and developed 100+ production-grade ETL jobs using scalable Producer-Consumer mesh pattern",
        "Built and optimized ETL workflows that automate cross-platform data movement while maintaining high reliability and throughput",
        "Managed Informatica Cloud Secure Agent configuration and Redshift integration pipelines, ensuring stable, high-volume operations",
        "Partnered with customers and project managers to finalize technical specifications and deployment strategies",
        "Established enterprise-wide ETL design patterns and best practices adopted across multiple business units",
      ],
    },
    {
      company: "NextSphere Technologies India Pvt Ltd",
      period: "Mar 2014 – Jan 2020",
      title: "Associate Software Engineer → Software Engineer → Senior Software Engineer → Associate Technical Lead",
      client: "HealthAxis",
      keyAchievement: "Delivered HIPAA-compliant healthcare data warehouse",
      responsibilities: [
        "Architected and delivered enterprise Data Warehouse for Claims Module processing professional and institutional claims",
        "Built automated HIPAA-compliant data ingestion pipelines with SSIS, SFTP integration, and CSV validation",
        "Implemented intelligent data quality logic with good/bad record segregation improving audit compliance cycles",
        "Delivered complex healthcare data extraction and mapping across members, providers, vendors, and ICD-10 codes",
        "Engineered AWS Data Pipelines for consistent data flow from PostgreSQL to Redshift with near-real-time synchronization",
        "Designed and implemented data auditing and lineage frameworks to provide visibility and governance across all environments",
        "Developed comprehensive validation framework ensuring data integrity and regulatory compliance",
        "Recognized by clients for accuracy, transparency, and proactive resolution during requirement, testing, and deployment phases",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-80 h-80 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Career Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Animated Timeline */}
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-highlight rounded-full hidden sm:block shadow-glow"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={`${exp.company}-${exp.period}`}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Animated timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background hidden sm:block shadow-glow animate-pulse" style={{ animationDuration: '2s' }}></div>

                  {/* Content card with premium styling */}
                  <div className="sm:ml-0 md:ml-20 premium-card group">
                    {/* Key Achievement Badge */}
                    {exp.keyAchievement && (
                      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent rounded-full shadow-glow">
                        <TrendingUp className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-bold">{exp.keyAchievement}</span>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-5 mb-6">
                      <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-accent font-semibold text-lg mb-2">
                          {exp.company}
                        </div>
                        {exp.client && (
                          <div className="text-sm text-muted-foreground/80 mb-1">
                            Client: <span className="font-medium">{exp.client}</span>
                          </div>
                        )}
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground leading-relaxed">{resp}</p>
                        </div>
                      ))}
                    </div>

                    {/* Achievements with enhanced styling */}
                    {exp.achievements && (
                      <div className="grid md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="p-5 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2 mb-2">
                              <achievement.icon className="w-5 h-5 text-accent" />
                              <h4 className="font-semibold text-sm text-foreground">{achievement.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{achievement.impact}</p>
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
