import { Award, Star, Mic, Users } from "lucide-react";

const Recognition = () => {
  const achievements = [
    {
      icon: Award,
      title: "Client Excellence Awards",
      subtitle: "3x Winner",
      description: "Recognized for delivering complex data solutions with zero production defects",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Star,
      title: "Top Performer Reviews",
      subtitle: "Consistent Excellence",
      description: "Consistent 'Exceeds Expectations' ratings across performance cycles",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Mic,
      title: "Tech Forum Speaker",
      subtitle: "Knowledge Sharing",
      description: "Internal presentations on Redshift Optimization & Cloud ETL Best Practices",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Mentor & Leader",
      subtitle: "Team Development",
      description: "Guided 7 engineers through career growth and technical mastery",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section id="recognition" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Moments That Matter
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Achievements grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="bg-card p-6 rounded-xl shadow-soft hover-lift hover-glow text-center animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-full ${achievement.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm font-semibold text-accent mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
