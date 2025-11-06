import { Award, Star, Mic, Users } from "lucide-react";

const Recognition = () => {
  const recognitions = [
    {
      icon: Award,
      title: "Client Excellence Awards",
      description: "Recognized 3x for delivering complex data solutions with zero production defects",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      icon: Star,
      title: "Top Performer Reviews",
      description: "Consistent 'Exceeds Expectations' ratings across all performance cycles",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Mic,
      title: "Tech Forum Speaker",
      description: "Internal presentations on Redshift Optimization & Cloud ETL Best Practices",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Users,
      title: "Mentor & Leader",
      description: "Guided 7+ engineers through career growth and technical mastery",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
  ];

  return (
    <section id="recognition" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Recognition & Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Moments that reflect commitment to excellence and team development
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Recognition grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div 
                key={recognition.title}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-xl ${recognition.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <recognition.icon className={`w-8 h-8 ${recognition.color}`} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {recognition.title}
                </h3>
                <p className="text-muted-foreground">
                  {recognition.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership quote */}
          <div className="mt-16 p-8 bg-background rounded-xl border border-accent/20 animate-fade-in">
            <blockquote className="text-xl font-quote italic text-foreground/90 text-center">
              "As a Technical Architect, I lead a 7-member data engineering team focused on designing scalable solutions, planning Jira deliverables, conducting code reviews, and collaborating closely with clients."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
