import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Data Warehousing & Architecture",
      skills: [
        { name: "Amazon Redshift", level: "Expert" },
        { name: "Data Warehouse Design", level: "Expert" },
        { name: "Dimensional Modeling", level: "Expert" },
      ],
    },
    {
      category: "ETL & Data Integration",
      skills: [
        { name: "Informatica Cloud", level: "Expert" },
        { name: "AWS Data Pipeline", level: "Advanced" },
        { name: "Fivetran", level: "Intermediate" },
        { name: "ETL Works", level: "Advanced" },
        { name: "SSIS", level: "Advanced" },
      ],
    },
    {
      category: "Programming & Query Languages",
      skills: [
        { name: "SQL", level: "Expert" },
        { name: "Python", level: "Intermediate" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, RDS, S3, Lambda, Glue)", level: "Advanced" },
        { name: "Git / GitHub", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Advanced" },
      ],
    },
    {
      category: "Business Intelligence",
      skills: [
        { name: "Power BI", level: "Advanced" },
        { name: "Looker", level: "Intermediate" },
        { name: "Data Visualization", level: "Advanced" },
      ],
    },
    {
      category: "Leadership & Soft Skills",
      skills: [
        { name: "Team Leadership (7-member)", level: "Expert" },
        { name: "Sprint Planning & Agile", level: "Expert" },
        { name: "Client Communication", level: "Expert" },
        { name: "Technical Mentorship", level: "Expert" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-accent text-accent-foreground";
      case "Advanced":
        return "bg-highlight text-highlight-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              The Tools I Master
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category}
                className="bg-card p-8 rounded-xl shadow-soft hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill.name}
                      className={`${getLevelColor(skill.level)} px-4 py-2 text-sm font-medium hover:scale-105 transition-transform`}
                    >
                      {skill.name}
                      {skill.level !== "Expert" && (
                        <span className="ml-2 opacity-70 text-xs">({skill.level})</span>
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
