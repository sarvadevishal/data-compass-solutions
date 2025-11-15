import { DollarSign, Zap, Users, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExecutiveSummary = () => {
  const metrics = [
    {
      icon: DollarSign,
      title: "Cost Optimization",
      value: 100,
      suffix: "K+",
      prefix: "$",
      description: "Reduced operational and architectural expenses annually through targeted optimizations",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      title: "Performance Excellence",
      value: 10,
      suffix: "x",
      prefix: "",
      description: "Faster data processing through architecture optimization",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Team Leadership",
      value: 7,
      suffix: "+",
      prefix: "",
      description: "Engineers led across distributed teams and time zones",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Database,
      title: "Real-Time Analytics",
      value: 0,
      suffix: "",
      prefix: "",
      description: "Zero-ETL serverless architectures for instant insights",
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              What I Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Turning complex data challenges into scalable, cost-effective solutions that drive measurable business impact
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
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
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <span className="text-foreground font-semibold">I bridge business objectives with technical execution</span>, delivering solutions that not only solve today's challenges but scale for tomorrow's growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
