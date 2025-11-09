import { ArrowRight, CheckCircle2, FileText, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "MLM Data Warehouse Transformation",
    subtitle: "$500K Annual Cost Reduction",
    client: "Fortune 500 MLM Enterprise",
    industry: "Multi-Level Marketing",
    timeline: "9 months",
    teamSize: "7 engineers",
    challenge:
      "Legacy AS400 system causing $2M annual operational costs, 10-hour batch processing, and inability to support real-time analytics for executive decision-making.",
    solution:
      "Architected modern cloud data warehouse on AWS Redshift with Informatica Cloud ETL, implementing 100+ production-grade pipelines using scalable Producer-Consumer pattern.",
    approach: [
      "Evaluated 5 enterprise ETL platforms with detailed TCO analysis",
      "Designed scalable mesh architecture enabling parallel processing",
      "Implemented zero-downtime migration with rollback capability",
      "Established enterprise-wide design patterns and governance",
    ],
    results: [
      { metric: "75% Cost Reduction", detail: "$500K annual savings achieved" },
      { metric: "90% Faster Processing", detail: "10h → 1h batch window" },
      { metric: "Zero Downtime", detail: "Seamless production cutover" },
      { metric: "100+ ETL Jobs", detail: "Production-ready pipelines" },
    ],
    techStack: ["AWS Redshift", "Informatica Cloud", "Python", "SQL", "AS400"],
    lessonsLearned: [
      "Early stakeholder alignment critical for enterprise migrations",
      "Parallel running systems reduce cutover risk significantly",
      "Design patterns accelerate team productivity and consistency",
    ],
    testimonialSnippet:
      "Outstanding technical leadership and delivery excellence. Vishal's proactive approach made complex migrations seamless.",
  },
  {
    id: 2,
    title: "Real-Time Healthcare Analytics Platform",
    subtitle: "HIPAA-Compliant Zero-Latency Data Pipeline",
    client: "Major Healthcare Provider",
    industry: "Healthcare",
    timeline: "6 months",
    teamSize: "5 engineers",
    challenge:
      "Manual data processing causing 48-hour delays in critical healthcare analytics. Compliance risks from inconsistent data quality and lack of audit trails.",
    solution:
      "Built automated HIPAA-compliant data ingestion pipelines with intelligent validation, real-time synchronization, and comprehensive audit framework.",
    approach: [
      "Designed AWS Data Pipeline for PostgreSQL to Redshift flow",
      "Implemented good/bad record segregation for quality control",
      "Built data lineage and audit framework for compliance",
      "Created automated testing for ICD-10 code validation",
    ],
    results: [
      { metric: "48h → Real-Time", detail: "Instant analytics availability" },
      { metric: "100% Compliance", detail: "Zero audit findings" },
      { metric: "Zero Data Loss", detail: "Validated quality framework" },
      { metric: "75% Manual Reduction", detail: "Automated validations" },
    ],
    techStack: ["AWS Data Pipeline", "PostgreSQL", "Redshift", "SSIS", "Python"],
    lessonsLearned: [
      "Compliance-first design saves costly refactoring later",
      "Automated quality checks more reliable than manual review",
      "Audit trails essential for regulated industry trust",
    ],
    testimonialSnippet:
      "Vishal's accuracy and transparency throughout the project lifecycle were exceptional. Zero data loss achieved.",
  },
];

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <FileText className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Deep Dive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Featured Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Detailed walkthroughs of complex transformations and measurable business impact
          </p>
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="premium-card overflow-hidden hover-lift"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeIn 0.6s ease-out forwards',
              }}
            >
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      {study.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">{study.client}</Badge>
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="secondary">{study.timeline}</Badge>
                      <Badge variant="secondary">{study.teamSize}</Badge>
                    </div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary shrink-0" />
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                      Challenge
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                      Solution
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Details */}
              {expandedId === study.id && (
                <div className="px-8 pb-8 pt-4 border-t border-border/50 animate-fade-in">
                  {/* Approach */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Technical Approach
                    </h4>
                    <ul className="space-y-2">
                      {study.approach.map((step, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Lessons Learned */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Key Lessons Learned
                    </h4>
                    <ul className="space-y-2">
                      {study.lessonsLearned.map((lesson, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-foreground/80 italic"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-foreground/80 italic">
                      "{study.testimonialSnippet}"
                    </p>
                  </div>
                </div>
              )}

              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(study.id)}
                className="w-full px-8 py-4 border-t border-border/50 flex items-center justify-center gap-2 text-primary hover:bg-primary/5 transition-colors"
              >
                <span className="font-medium">
                  {expandedId === study.id ? "Show Less" : "Read Full Case Study"}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    expandedId === study.id ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground mb-4">
            Want to create similar results for your organization?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Start the Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
