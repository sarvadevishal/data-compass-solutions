import { Quote, Star } from "lucide-react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    id: 1,
    quote: "Vishal consistently exceeded expectations in requirement gathering, testing, and deployment phases. His accuracy and transparency throughout the project lifecycle were exceptional.",
    client: "Senior Program Manager",
    company: "Fortune 500 Healthcare Client",
    project: "HIPAA-Compliant Data Pipeline",
    metrics: ["Zero Data Loss", "100% Compliance"],
    rating: 5,
  },
  {
    id: 2,
    quote: "Outstanding technical leadership and delivery excellence. Vishal's proactive approach to problem-solving and clear communication made complex migrations seamless.",
    client: "VP of Data Engineering",
    company: "Global MLM Enterprise",
    project: "AS400 Legacy Migration",
    metrics: ["$500K Saved", "3-Month Early"],
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Quote className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Client Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients who've experienced measurable business impact
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="premium-card p-8 hover-lift hover-glow group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-6">
                <Quote className="w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="pt-6 border-t border-border/50">
                <div className="mb-4">
                  <p className="font-semibold text-foreground mb-1">
                    {testimonial.client}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>

                {/* Project Badge */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {testimonial.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground">
            Want to add your success story?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Let's collaborate
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
