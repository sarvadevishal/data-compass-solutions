import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

const certifications = [
  {
    category: "Education",
    icon: GraduationCap,
    items: [
      {
        title: "Bachelor of Engineering (Computer Science)",
        institution: "Your University Name",
        year: "YYYY",
        status: "completed",
        description: "Foundation in software engineering, algorithms, and data structures",
      },
      // Placeholder for user to add
      {
        title: "Add your degree or certification here",
        institution: "Institution Name",
        year: "Year",
        status: "placeholder",
        description: "Description of your educational achievement",
      },
    ],
  },
  {
    category: "Professional Certifications",
    icon: Award,
    items: [
      {
        title: "AWS Certified Solutions Architect",
        institution: "Amazon Web Services",
        year: "YYYY",
        status: "placeholder",
        description: "Cloud architecture design and best practices",
      },
      {
        title: "Add your certifications here",
        institution: "Certifying Body",
        year: "Year",
        status: "placeholder",
        description: "Relevant professional certification details",
      },
    ],
  },
  {
    category: "Continuous Learning",
    icon: TrendingUp,
    items: [
      {
        title: "Advanced Data Engineering Patterns",
        institution: "Platform/Course Provider",
        year: "In Progress",
        status: "learning",
        description: "Modern data architecture and real-time streaming",
      },
      {
        title: "Add courses you're taking",
        institution: "Learning Platform",
        year: "Current",
        status: "placeholder",
        description: "Skills you're actively developing",
      },
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">
              Credentials & Learning
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous investment in expertise and industry-recognized credentials
          </p>
        </div>

        {/* Certifications Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {certifications.map((category, idx) => (
            <div
              key={idx}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-4 ml-6 border-l-2 border-border/50 pl-8">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`premium-card p-6 hover-lift group relative ${
                      item.status === "placeholder"
                        ? "border-dashed opacity-60 hover:opacity-100"
                        : ""
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[41px] top-8 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>
                      <Badge
                        variant={
                          item.status === "completed"
                            ? "default"
                            : item.status === "learning"
                            ? "secondary"
                            : "outline"
                        }
                        className="shrink-0"
                      >
                        {item.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note for placeholder items */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            💡 Dashed cards indicate placeholders - update with your credentials
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
