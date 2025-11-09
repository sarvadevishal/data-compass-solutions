import { Code2, Database, FileCode } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";

const codeExamples = [
  {
    id: 1,
    title: "Redshift Performance Optimization",
    language: "SQL",
    icon: Database,
    category: "Performance Tuning",
    description: "Schema optimization with distribution keys and sort keys for 90% query improvement",
    code: `-- Optimized table design for analytical workloads
CREATE TABLE sales_fact (
  sale_id BIGINT IDENTITY(1,1),
  customer_id INT DISTKEY,     -- Distribution key for join optimization
  sale_date DATE SORTKEY,      -- Sort key for date-range queries
  product_id INT,
  amount DECIMAL(10,2),
  region VARCHAR(50)
)
DISTSTYLE KEY
COMPOUND SORTKEY(sale_date, customer_id);

-- Efficient aggregation with date partitioning
SELECT 
  DATE_TRUNC('month', sale_date) as month,
  region,
  SUM(amount) as total_sales,
  COUNT(DISTINCT customer_id) as unique_customers
FROM sales_fact
WHERE sale_date >= DATEADD(month, -6, CURRENT_DATE)
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC;`,
    impact: "Reduced query time from 45s to 4s on 500M row table",
  },
  {
    id: 2,
    title: "ETL Error Handling Framework",
    language: "Python",
    icon: Code2,
    category: "Data Quality",
    description: "Production-grade error handling with audit logging and alerting",
    code: `import logging
from typing import Dict, List, Any
from datetime import datetime

class ETLAuditLogger:
    """
    Enterprise ETL audit framework for data quality tracking
    Used across 100+ production pipelines
    """
    
    def __init__(self, pipeline_name: str, s3_bucket: str):
        self.pipeline_name = pipeline_name
        self.s3_bucket = s3_bucket
        self.start_time = datetime.utcnow()
        self.metrics = {
            'records_processed': 0,
            'records_failed': 0,
            'errors': []
        }
    
    def log_batch(self, success: int, failed: int, errors: List[Dict]):
        """Log batch processing results"""
        self.metrics['records_processed'] += success
        self.metrics['records_failed'] += failed
        self.metrics['errors'].extend(errors)
        
        # Real-time alerting for critical failures
        failure_rate = failed / (success + failed) if (success + failed) > 0 else 0
        if failure_rate > 0.05:  # Alert if >5% failure
            self._send_alert(f"High failure rate: {failure_rate:.2%}")
    
    def finalize(self) -> Dict[str, Any]:
        """Generate final audit report"""
        duration = (datetime.utcnow() - self.start_time).total_seconds()
        
        audit_report = {
            'pipeline': self.pipeline_name,
            'timestamp': self.start_time.isoformat(),
            'duration_seconds': duration,
            'metrics': self.metrics,
            'status': 'SUCCESS' if self.metrics['records_failed'] == 0 else 'PARTIAL'
        }
        
        # Persist to S3 for compliance
        self._save_to_s3(audit_report)
        return audit_report`,
    impact: "Enabled 100% audit traceability across all ETL pipelines",
  },
  {
    id: 3,
    title: "Architecture Diagram Placeholder",
    language: "Architecture",
    icon: FileCode,
    category: "System Design",
    description: "Real-world data architecture patterns (diagram coming soon)",
    code: `# Real-World Architecture Examples
# (Visual diagrams to be added with your specific implementations)

## Zero-ETL Integration Pattern
- Source: MySQL Aurora
- Target: Amazon Redshift
- Latency: Near real-time (<5 min)
- Benefits: Eliminated data duplication, reduced costs by 40%

## Producer-Consumer Mesh Pattern  
- 100+ parallel ETL jobs
- Dynamic load balancing
- Fault tolerance with retry logic
- Result: 90% faster processing (10h → 1h)

## Data Quality Framework
- Pre-validation layer
- Good/bad record segregation  
- Automated audit trails
- Compliance-ready logging

---

💡 Add your architecture diagrams here:
- Data flow diagrams
- Before/After system designs  
- Network topology
- Security architecture`,
    impact: "Placeholder for visual architecture documentation",
  },
];

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(codeExamples[0].id);

  const activeExample = codeExamples.find((ex) => ex.id === activeTab) || codeExamples[0];

  return (
    <section id="code-showcase" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Code2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Deep Dive</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Code & Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real production code patterns and architecture decisions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {codeExamples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => setActiveTab(example.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === example.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-foreground/70 hover:bg-muted"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.5s ease-out forwards',
                }}
              >
                <div className="flex items-center gap-2">
                  <example.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{example.title}</span>
                  <span className="sm:hidden">{example.language}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="premium-card overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="p-6 border-b border-border/50 bg-muted/30">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {activeExample.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeExample.description}
                  </p>
                </div>
                <Badge variant="secondary">{activeExample.category}</Badge>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <pre className="p-6 overflow-x-auto bg-slate-950 text-slate-50 text-sm leading-relaxed">
                <code>{activeExample.code}</code>
              </pre>
              
              {/* Copy button placeholder */}
              <button
                className="absolute top-4 right-4 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
                onClick={() => navigator.clipboard.writeText(activeExample.code)}
              >
                Copy
              </button>
            </div>

            {/* Impact */}
            <div className="p-6 border-t border-border/50 bg-primary/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <activeExample.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Business Impact</p>
                  <p className="text-sm text-muted-foreground">{activeExample.impact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Link Placeholder */}
          <div className="mt-8 text-center p-6 premium-card">
            <p className="text-muted-foreground mb-3">
              💡 Want to see more code samples and architecture diagrams?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium"
              >
                <Code2 className="w-4 h-4" />
                View GitHub Profile
              </a>
              <p className="text-xs text-muted-foreground self-center">
                (Update with your GitHub link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;
