import { Badge } from "@/components/ui/badge";
import { Zap, Database, Building2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Zap,
      title: "High-Concurrency Redshift Optimization",
      challenge: "Analytics platform experiencing 2+ minute query delays during peak hours, blocking executive decision-making",
      solution: "Re-architected distribution keys, implemented workload management queues, optimized SORT keys and compression",
      impact: "40% latency reduction, 3x concurrent user capacity",
      businessImpact: "Enabled real-time executive dashboards supporting strategic decisions",
      metrics: ["40% faster queries", "3x users", "Zero downtime"],
      tech: ["Amazon Redshift", "SQL", "Performance Tuning", "WLM"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Database,
      title: "AS400 to Cloud Migration",
      challenge: "Legacy AS400 mainframe system preventing real-time analytics and blocking business agility",
      solution: "Designed event-driven ETL architecture with automated triggers, validation framework, and zero-downtime cutover",
      impact: "Real-time data availability, 70% reduction in processing time",
      businessImpact: "Enabled instant business insights, replacing next-day batch reporting",
      metrics: ["70% faster processing", "Real-time availability", "Zero data loss"],
      tech: ["Informatica Cloud", "AWS Data Pipeline", "Redshift", "AS400"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Building2,
      title: "Healthcare Data Extraction & Automation",
      challenge: "Complex healthcare data across members, claims, providers, and ICD codes requiring accurate HIPAA-compliant mapping",
      solution: "Built comprehensive ETL framework with automated data extraction, validation, and mapping across all healthcare entities using SQL Server and SSIS",
      impact: "Streamlined claim processing, automated data pipelines, improved data accuracy",
      businessImpact: "Reduced claim processing cycle time, improved audit compliance readiness",
      metrics: ["100% HIPAA compliant", "Automated validation", "Faster processing"],
      tech: ["SQL Server", "SSIS", "Healthcare Data", "HIPAA Compliance"],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Database,
      title: "Near Real-Time Data Replication with AWS DMS",
      challenge: "Business needed instant data availability from MySQL Aurora to Redshift for executive dashboards, but traditional ETL had 12-24 hour delays",
      solution: "Implemented AWS DMS for continuous replication from MySQL Aurora to Redshift, replacing batch ETL with near real-time data flow",
      impact: "Reduced data latency from 12-24 hours to under 1 hour, enabling same-day decision-making",
      businessImpact: "Executives gained instant visibility into sales performance, enrollment trends, and operational metrics",
      metrics: ["<1 hour latency", "Zero data loss", "24/7 uptime"],
      tech: ["AWS DMS", "MySQL Aurora", "Amazon Redshift", "CDC"],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Solutions That Made a Difference
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card p-8 rounded-xl shadow-medium hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${project.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon className={`w-8 h-8 ${project.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {project.title}
                </h3>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge:</p>
                    <p className="text-sm text-foreground/80">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Solution:</p>
                    <p className="text-sm text-foreground/80">{project.solution}</p>
                  </div>
                  <div className="p-4 bg-gradient-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-semibold text-white mb-2">Business Impact:</p>
                    <p className="text-sm font-bold text-white mb-3">{project.businessImpact}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span 
                          key={metric}
                          className="text-xs px-2 py-1 bg-white/20 rounded-full text-white font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
