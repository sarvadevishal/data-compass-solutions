import { Award, TrendingUp, Users, Star, Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Recognition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-gradient-accent">
        {count}{suffix}
      </span>
    );
  };

  const metrics = [
    { icon: TrendingUp, value: 10, suffix: "+", label: "Years of Experience", color: "text-accent" },
    { icon: Award, value: 500, suffix: "K", label: "Cost Savings Delivered", color: "text-highlight" },
    { icon: Users, value: 7, suffix: "+", label: "Team Members Led", color: "text-accent" },
    { icon: Star, value: 100, suffix: "+", label: "ETL Pipelines Built", color: "text-highlight" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Client Excellence Awards",
      description: "Recognized 3x for delivering complex data solutions with zero production defects",
      impact: "Excellence in Delivery"
    },
    {
      icon: Star,
      title: "Top Performer Reviews",
      description: "Consistent 'Exceeds Expectations' ratings across all performance cycles",
      impact: "Outstanding Performance"
    },
    {
      icon: Mic,
      title: "Tech Forum Speaker",
      description: "Internal presentations on Redshift Optimization & Cloud ETL Best Practices",
      impact: "Knowledge Leadership"
    },
    {
      icon: Users,
      title: "Mentor & Team Leader",
      description: "Guided 7+ engineers through career growth and technical mastery while leading sprint planning and code reviews",
      impact: "Team Development"
    },
  ];

  return (
    <section id="recognition" className="py-24 bg-gradient-hero relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-96 h-96 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Recognition & Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Delivering measurable value through technical excellence and innovation
          </p>
        </div>

        {/* Impact Metrics with Counter Animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="premium-card text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
              <div className="mb-2">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="premium-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center gap-2 text-highlight font-semibold">
                    <Star className="w-5 h-5 fill-current" />
                    <span>{achievement.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Quote */}
        <div className="mt-16 max-w-4xl mx-auto p-10 bg-gradient-card border border-accent/20 rounded-2xl animate-fade-in shadow-glow">
          <blockquote className="text-xl md:text-2xl font-quote italic text-foreground/90 text-center leading-relaxed">
            "As a Technical Architect, I lead a 7-member data engineering team focused on designing scalable solutions, planning Jira deliverables, conducting code reviews, and collaborating closely with clients."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
