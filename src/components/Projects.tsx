import { Badge } from "@/components/ui/badge";
import { Zap, Database, Building2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Zap,
      title: "High-Concurrency Redshift Optimization",
      challenge: "Analytics platform experiencing 2+ minute query delays during peak hours",
      solution: "Re-architected distribution keys, implemented workload management, optimized SORT keys",
      impact: "40% latency reduction, 3x concurrent user capacity",
      tech: ["Amazon Redshift", "SQL", "Performance Tuning"],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Database,
      title: "AS400 to Cloud Migration",
      challenge: "Legacy AS400 mainframe system blocking real-time analytics",
      solution: "Designed event-driven ETL architecture with automated triggers and validation",
      impact: "Real-time data availability, 70% reduction in processing time",
      tech: ["Informatica Cloud", "AWS Data Pipeline", "Redshift"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Building2,
      title: "Healthcare Data Extraction & Automation",
      challenge: "Complex healthcare data across members, professionals, institutional claims, vendors, providers, and ICD codes requiring accurate mapping",
      solution: "Involved in healthcare data extraction and mapping logics for members, professional, institutional claims, vendors, providers, ICD codes. Extensive coding on SQL Server, SSIS packages, and automation workflows",
      impact: "Streamlined healthcare data processing, automated claim data pipelines, improved data accuracy and processing efficiency",
      tech: ["SQL Server", "SSIS", "Healthcare Data", "Automation"],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
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
                  <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Impact:</p>
                    <p className="text-sm font-bold text-primary">{project.impact}</p>
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
