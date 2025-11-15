import { ArrowRight, CheckCircle2, FileText, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Eliminating Legacy Stack Costs",
    subtitle: "Streamlined Ecosystem & Reduced Operational Overhead",
    client: "Enterprise MLM Platform",
    industry: "Multi-Level Marketing",
    timeline: "4 months",
    teamSize: "5 engineers",
    challenge:
      "Multiple redundant systems (Salesforce, PostgreSQL, Heroku) created unnecessary complexity, maintenance burden, and recurring licensing costs across the data ecosystem.",
    solution:
      "Executed strategic decommissioning of legacy platforms, consolidating functionality into a unified AWS-based architecture, eliminating multiple layers of infrastructure and licensing fees.",
    approach: [
      "Conducted comprehensive dependency mapping across all systems",
      "Designed migration strategy to preserve critical business logic",
      "Implemented phased decommissioning with validation gates",
      "Consolidated data flows into streamlined AWS architecture",
    ],
    results: [
      { metric: "100K+ Savings", detail: "Annual reduction in costs" },
      { metric: "3 Systems Removed", detail: "Salesforce, PostgreSQL, Heroku" },
      { metric: "Zero Data Loss", detail: "Seamless migration execution" },
      { metric: "Simplified Stack", detail: "Reduced operational complexity" },
    ],
    techStack: ["AWS Redshift", "Informatica Cloud", "Python", "SQL"],
    lessonsLearned: [
      "Comprehensive dependency mapping prevents migration surprises",
      "Strategic consolidation delivers long-term operational efficiency",
      "Phased approach reduces risk in complex decommissioning projects",
    ],
    testimonialSnippet:
      "The team's systematic approach to decommissioning legacy systems was exceptional. Clean execution with zero business disruption.",
  },
  {
    id: 2,
    title: "Migrating Recursive Aggregations to Redshift",
    subtitle: "Near Real-Time Analytics Through Architecture Simplification",
    client: "Fortune 500 Healthcare Provider",
    industry: "Healthcare Analytics",
    timeline: "3 months",
    teamSize: "4 engineers",
    challenge:
      "Complex multi-system workflow required pulling data from Redshift to PostgreSQL via AWS Data Pipeline, writing intermediate files to S3, running recursive aggregations in PostgreSQL, then sending results back through Data Pipeline and S3 to Redshift. This caused 12-24 hour delays and significant infrastructure costs.",
    solution:
      "Leveraged Redshift's new recursive CTE support to eliminate the entire PostgreSQL + Data Pipeline + S3 workflow, running aggregations directly in Redshift every hour for near real-time visibility.",
    approach: [
      "Evaluated Redshift recursive CTE capabilities for complex hierarchical queries",
      "Redesigned aggregation logic to run natively in Redshift",
      "Eliminated external dependencies (PostgreSQL, Data Pipeline, S3 staging)",
      "Implemented hourly refresh schedule for continuous data updates",
    ],
    results: [
      { metric: "12-24h → 1h", detail: "Near real-time analytics delivery" },
      { metric: "80% Cost Reduction", detail: "Eliminated pipeline & storage costs" },
      { metric: "Zero External Deps", detail: "Removed PostgreSQL dependency" },
      { metric: "Simplified Stack", detail: "Single-platform solution" },
    ],
    techStack: ["AWS Redshift", "SQL", "Recursive CTEs", "AWS Data Pipeline (removed)"],
    lessonsLearned: [
      "Platform feature updates can eliminate entire architectural layers",
      "Simplification often delivers both cost and performance benefits",
      "Native solutions reduce operational complexity and failure points",
    ],
    testimonialSnippet:
      "Outstanding technical insight. The migration eliminated complexity while delivering faster analytics—a rare win-win outcome.",
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
