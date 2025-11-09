import { BookOpen, Clock, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

const upcomingInsights = [
  {
    id: 1,
    title: "5 Redshift Optimization Techniques That Saved Us $500K",
    category: "Cost Optimization",
    readTime: "8 min",
    topics: ["Distribution Keys", "Sort Keys", "Workload Management", "Query Tuning"],
    status: "coming-soon",
  },
  {
    id: 2,
    title: "Zero-Downtime Database Migration: Lessons from AS400 to Cloud",
    category: "Cloud Migration",
    readTime: "10 min",
    topics: ["Migration Strategy", "Risk Management", "Parallel Running", "Rollback Plans"],
    status: "coming-soon",
  },
  {
    id: 3,
    title: "Building Cost-Effective ETL Pipelines: Producer-Consumer Pattern",
    category: "Architecture",
    readTime: "12 min",
    topics: ["Scalability", "Parallel Processing", "Error Handling", "Monitoring"],
    status: "coming-soon",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Knowledge Sharing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Technical Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical lessons from real-world data engineering challenges
          </p>
        </div>

        {/* Coming Soon Articles */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingInsights.map((insight, index) => (
            <div
              key={insight.id}
              className="premium-card p-6 hover-lift relative overflow-hidden group"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeIn 0.6s ease-out forwards',
              }}
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">
                  Coming Soon
                </Badge>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                {insight.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {insight.readTime}
                </span>
                <span>•</span>
                <span>{insight.category}</span>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2">
                {insight.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto premium-card p-8 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Get Notified When Articles Go Live
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm working on detailed technical articles sharing real-world data engineering insights.
            Sign up to be notified when they're published.
          </p>

          {/* Email Form Placeholder */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
            <button
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Notify Me
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            💡 Newsletter signup functionality coming soon. For now, connect via{" "}
            <a href="#contact" className="text-primary hover:underline">
              contact form
            </a>
          </p>
        </div>

        {/* Link to Medium/Dev.to placeholder */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Have a blog or publication?{" "}
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Connect your Medium
            </a>{" "}
            or{" "}
            <a
              href="https://dev.to/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Dev.to profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
