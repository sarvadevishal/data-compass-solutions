import { DollarSign, Zap, Users, Database, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExecutiveSummary = () => {
  const metrics = [
    {
      icon: DollarSign,
      title: "Annual Cost Savings",
      value: 100,
      suffix: "K+",
      prefix: "$",
      description: "Eliminated legacy Salesforce + PostgreSQL + Heroku stack. Cut Redshift-to-PostgreSQL data pipeline costs. Migrated recursive CTEs back to Redshift.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      title: "Query Performance Boost",
      value: 10,
      suffix: "x",
      prefix: "",
      description: "Optimized Redshift workloads from 10+ minute queries to sub-minute response times. Zero downtime during migration.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      value: 7,
      suffix: "+",
      prefix: "",
      description: "Led distributed teams across US, India, and Canada. Delivered HIPAA-compliant healthcare systems and MLM data warehouses on time.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Database,
      title: "Near Real-Time Analytics",
      value: 1,
      suffix: "hr",
      prefix: "",
      description: "Moved from 12-24 hour data delays to hourly Redshift refreshes. Enabled same-day decision-making for executive dashboards.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const [counters, setCounters] = useState(metrics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          metrics.forEach((metric, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = metric.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= metric.value) {
                current = metric.value;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      id="executive-summary" 
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-80 h-80 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-foreground mb-6">
              The Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Real outcomes from real projects. No vanity metrics—just measurable business impact for Fortune 500 companies and high-growth startups.
            </p>
            <div className="w-32 h-1.5 bg-gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Metrics grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={metric.title}
                className="premium-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl ${metric.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>

                {/* Animated counter */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-heading font-black text-gradient-primary mb-2">
                    {metric.prefix}{counters[index]}{metric.suffix}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                    {metric.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="max-w-3xl mx-auto bg-card/50 border border-accent/20 rounded-2xl p-10 shadow-elegant">
              <p className="text-2xl font-heading font-bold text-foreground mb-4">
                Paying too much for slow analytics?
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Let's audit your data platform and find the bottlenecks costing you time and money.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white font-bold text-lg rounded-lg hover-lift shadow-glow group transition-all"
              >
                Book a Free Architecture Review
                <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
