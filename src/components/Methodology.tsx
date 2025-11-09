import { ArrowRight, CheckCircle2, Lightbulb, Rocket, Settings, TrendingUp, Users } from "lucide-react";

const processSteps = [
  {
    phase: "Discovery",
    icon: Lightbulb,
    duration: "1-2 weeks",
    activities: [
      "Stakeholder interviews and requirements gathering",
      "Current state assessment and pain point analysis",
      "Success metrics and KPI definition",
      "Technical feasibility and risk evaluation",
    ],
    deliverables: ["Requirements document", "Architecture proposal", "Project roadmap"],
  },
  {
    phase: "Design",
    icon: Settings,
    duration: "2-3 weeks",
    activities: [
      "Solution architecture and data flow design",
      "Technology stack selection with TCO analysis",
      "Security, compliance, and governance planning",
      "Prototype development and POC validation",
    ],
    deliverables: ["Architecture diagrams", "Design specifications", "POC results"],
  },
  {
    phase: "Build",
    icon: Rocket,
    duration: "8-16 weeks",
    activities: [
      "Agile development in 2-week sprints",
      "Daily standups and weekly stakeholder demos",
      "Continuous integration and automated testing",
      "Code reviews and quality assurance",
    ],
    deliverables: ["Production-ready pipelines", "Documentation", "Test reports"],
  },
  {
    phase: "Optimize",
    icon: TrendingUp,
    duration: "2-4 weeks",
    activities: [
      "Performance tuning and cost optimization",
      "Load testing and scalability validation",
      "Monitoring and alerting setup",
      "Knowledge transfer and training",
    ],
    deliverables: ["Performance benchmarks", "Runbooks", "Training materials"],
  },
  {
    phase: "Scale",
    icon: Users,
    duration: "Ongoing",
    activities: [
      "Production support and incident response",
      "Feature enhancements and iterations",
      "Capacity planning and optimization",
      "Continuous improvement and innovation",
    ],
    deliverables: ["SLA reports", "Enhancement roadmap", "Best practices"],
  },
];

const collaborationPrinciples = [
  {
    title: "Transparent Communication",
    description: "Weekly status reports, real-time Slack/Teams collaboration, and proactive risk flagging",
  },
  {
    title: "Agile Delivery",
    description: "2-week sprints with demo-driven feedback, ensuring continuous value delivery",
  },
  {
    title: "Quality First",
    description: "Automated testing, peer code reviews, and comprehensive documentation as standard",
  },
  {
    title: "Business Focus",
    description: "Every technical decision tied to business outcomes and ROI metrics",
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Process & Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            How I Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that balances speed, quality, and business impact
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20 hover-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className="premium-card p-5 hover-lift">
                    <h3 className="text-xl font-bold text-foreground mb-1 text-center">
                      {step.phase}
                    </h3>
                    <p className="text-xs text-primary font-medium mb-4 text-center">
                      {step.duration}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {step.activities.slice(0, 2).map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        Key Deliverables:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {step.deliverables.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-8 w-8 h-8 text-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collaboration Principles */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Collaboration Principles
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {collaborationPrinciples.map((principle, index) => (
              <div
                key={index}
                className="premium-card p-6 hover-lift"
                style={{
                  animationDelay: `${500 + index * 100}ms`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {principle.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "900ms" }}>
          <p className="text-muted-foreground mb-4">
            Ready to start your transformation journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Let's Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
