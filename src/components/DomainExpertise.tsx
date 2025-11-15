import { Heart, TrendingUp } from "lucide-react";

const DomainExpertise = () => {
  const domains = [
    {
      icon: Heart,
      title: "Healthcare Data Systems",
      description: "Delivered HIPAA-compliant data warehouse processing millions of patient records, claims, and clinical data. Enabled healthcare providers to improve patient outcomes through data-driven insights while maintaining strict regulatory compliance and audit readiness.",
      impact: "Improved data quality and reduced claim processing time",
      industries: "Healthcare, Insurance",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: TrendingUp,
      title: "Multi-Level Marketing (MLM) Analytics",
      description: "Architected real-time distributor network analytics and commission systems delivering $100K+ in annual savings. Enabled executive decision-making through instant insights into sales hierarchy, performance metrics, and compensation calculations across global operations.",
      impact: "$100K cost savings + real-time decision-making",
      industries: "Direct Sales, E-commerce",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section id="domains" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Technical Specializations with Business Context
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Deep domain expertise delivering measurable business outcomes in complex industries
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Domain cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {domains.map((domain, index) => (
              <div 
                key={domain.title}
                className="bg-card p-8 rounded-xl shadow-medium hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl ${domain.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className={`w-8 h-8 ${domain.color}`} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {domain.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {domain.description}
                </p>
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">Business Impact:</span>
                    <span className="text-xs text-accent font-medium">{domain.impact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">Industries:</span>
                    <span className="text-xs text-foreground">{domain.industries}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total data volume */}
          <div className="text-center animate-fade-in">
            <div className="inline-block bg-accent/10 px-8 py-4 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Total Data Volume Managed</p>
              <p className="text-4xl font-heading font-bold text-gradient-accent">
                2TB+
              </p>
              <p className="text-sm text-muted-foreground mt-1">across both domains</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
