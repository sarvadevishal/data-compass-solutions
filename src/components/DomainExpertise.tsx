import { Heart, TrendingUp } from "lucide-react";

const DomainExpertise = () => {
  const domains = [
    {
      icon: Heart,
      title: "Healthcare Data Systems",
      description: "Built HIPAA-compliant data pipelines processing patient records, claims data, and clinical analytics. Expertise in handling sensitive healthcare data with precision, security, and regulatory compliance.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: TrendingUp,
      title: "Multi-Level Marketing (MLM) Analytics",
      description: "Architected distributor network analytics, commission calculations, and sales hierarchy tracking systems. Designed warehouses supporting complex MLM business logic and real-time performance dashboards.",
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
              Industries I Understand Deeply
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Domain cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {domains.map((domain, index) => (
              <div 
                key={domain.title}
                className="bg-card p-8 rounded-xl shadow-medium hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl ${domain.bgColor} mb-6`}>
                  <domain.icon className={`w-8 h-8 ${domain.color}`} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {domain.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {domain.description}
                </p>
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
