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
        { name: "AWS DMS", level: "Expert" },
        { name: "ETL Works", level: "Advanced" },
        { name: "AWS Glue", level: "Advanced" },
        { name: "AWS Data Pipeline", level: "Advanced" },
        { name: "SSIS", level: "Advanced" },
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
      title: "Collaboration & Architecture",
      skills: [
        { name: "Architecture Design", level: "Expert" },
        { name: "Code Review", level: "Expert" },
        { name: "Technical Mentorship", level: "Advanced" },
        { name: "Sprint Planning & Agile", level: "Advanced" },
        { name: "Cross-Team Collaboration", level: "Advanced" },
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

  // Signature skills with proof
  const signatureSkills = [
    {
      name: "AWS Cloud Architecture",
      proof: "Reduced infrastructure costs by 40% through serverless optimization",
      level: 95,
      icon: Cloud,
    },
    {
      name: "Big Data Engineering",
      proof: "Processing 10M+ events/day in real-time with zero-downtime architecture",
      level: 95,
      icon: Database,
    },
    {
      name: "Data Migration",
      proof: "2M+ records migrated with zero data loss and ahead of schedule delivery",
      level: 90,
      icon: Database,
    },
    {
      name: "ETL Pipeline Architecture",
      proof: "Built 100+ production ETL pipelines using AWS DMS, ETL Works, and Informatica Cloud",
      level: 95,
      icon: Cloud,
    },
    {
      name: "Performance Optimization",
      proof: "Achieved 10x improvement in query performance (10 hours → 1 hour)",
      level: 95,
      icon: BarChart3,
    },
    {
      name: "Business Intelligence",
      proof: "Designed executive dashboards driving strategic decisions for Fortune 500 clients",
      level: 85,
      icon: BarChart3,
    },
    {
      name: "ETL Development",
      proof: "Built 100+ production-grade data pipelines with automated validation and monitoring",
      level: 95,
      icon: GitBranch,
    },
  ];

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
              Proven expertise in delivering enterprise-scale data platforms with measurable business impact
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Signature Skills Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold text-gradient-primary mb-4">
                Core Expertise with Proven Results
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key capabilities that have driven success across Fortune 500 enterprise implementations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {signatureSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="premium-card group animate-scale-in p-8"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs px-3 py-1 rounded-full font-bold bg-accent text-accent-foreground">
                          Expert
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {skill.proof}
                      </p>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.05}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

                {/* Interactive skills list with bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skill.name}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground text-sm font-medium group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill"
                          style={{ 
                            width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : '60%',
                            animationDelay: `${(index * 0.1) + (skillIdx * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional competencies with glassmorphism */}
          <div className="mt-16 p-12 glassmorphism rounded-3xl border border-accent/30 animate-fade-in shadow-xl hover:shadow-glow transition-all duration-500">
            <h3 className="text-3xl font-heading font-bold text-gradient-primary mb-8 text-center">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Architecture Design',
                'Performance Tuning',
                'Zero-Downtime Migration',
                'BI Transformation',
                'Cost Optimization',
                'Agile Leadership',
                'Stakeholder Communication',
                'Technical Mentorship',
              ].map((strength, idx) => (
                <span 
                  key={strength}
                  className="px-5 py-2.5 bg-accent/10 border border-accent/30 rounded-xl text-sm text-foreground font-medium hover:bg-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  aria-label={`Competency: ${strength}`}
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
