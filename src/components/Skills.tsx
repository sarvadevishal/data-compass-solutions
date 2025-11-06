import { Database, Cloud, BarChart3, Code, GitBranch, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Warehousing & Architecture",
      skills: [
        { name: "Amazon Redshift", level: "Expert" },
        { name: "Data Warehouse Design", level: "Expert" },
        { name: "Dimensional Modeling", level: "Expert" },
        { name: "SQL Server", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL Aurora", level: "Advanced" },
      ],
    },
    {
      icon: Cloud,
      title: "ETL & Data Integration",
      skills: [
        { name: "Informatica Cloud", level: "Expert" },
        { name: "AWS Data Pipeline", level: "Advanced" },
        { name: "SSIS", level: "Advanced" },
        { name: "AWS Glue", level: "Advanced" },
        { name: "Zero-ETL Integration", level: "Advanced" },
        { name: "Fivetran", level: "Intermediate" },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Analytics",
      skills: [
        { name: "Power BI", level: "Advanced" },
        { name: "Looker BI", level: "Advanced" },
        { name: "Data Visualization", level: "Expert" },
        { name: "Dashboard Design", level: "Expert" },
        { name: "Semantic Modeling", level: "Advanced" },
      ],
    },
    {
      icon: Code,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (S3, EC2, Lambda)", level: "Advanced" },
        { name: "AWS API Gateway", level: "Intermediate" },
        { name: "Git / GitHub", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Intermediate" },
      ],
    },
    {
      icon: GitBranch,
      title: "Programming & Query Languages",
      skills: [
        { name: "SQL", level: "Expert" },
        { name: "Python", level: "Intermediate" },
        { name: "Stored Procedures", level: "Expert" },
        { name: "Performance Tuning", level: "Expert" },
      ],
    },
    {
      icon: Users,
      title: "Leadership & Soft Skills",
      skills: [
        { name: "Team Leadership", level: "Expert" },
        { name: "Sprint Planning & Agile", level: "Advanced" },
        { name: "Client Communication", level: "Expert" },
        { name: "Technical Mentorship", level: "Advanced" },
        { name: "Code Review", level: "Expert" },
        { name: "Architecture Design", level: "Expert" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-accent text-accent-foreground";
      case "Advanced":
        return "bg-accent/70 text-accent-foreground";
      case "Intermediate":
        return "bg-accent/40 text-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-40 w-72 h-72 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive toolkit for building enterprise-scale data platforms
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Skills grid with premium cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="premium-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <span className="text-muted-foreground text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core strengths summary with premium styling */}
          <div className="mt-16 p-10 bg-gradient-card rounded-2xl border border-accent/30 animate-fade-in shadow-glow hover:shadow-hover transition-all duration-500">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
              Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Data Architecture',
                'ETL Development',
                'Performance Tuning',
                'BI Transformation',
                'Cloud Migration',
                'Team Leadership',
                'Stakeholder Communication',
              ].map((strength, idx) => (
                <span 
                  key={strength}
                  className="px-5 py-2.5 bg-accent/10 border border-accent/30 rounded-xl text-sm text-foreground font-medium hover:bg-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
