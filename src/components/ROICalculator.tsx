import { Calculator, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyCost: 50000,
    dataSources: 10,
    teamSize: 5,
  });

  const [showResults, setShowResults] = useState(false);

  // Conservative estimate based on proven track record
  const optimizationRate = 0.40; // 40% cost reduction (proven in case studies)
  const efficiencyGain = 0.75; // 75% time reduction

  const calculations = {
    currentAnnual: inputs.monthlyCost * 12,
    optimizedAnnual: inputs.monthlyCost * 12 * (1 - optimizationRate),
    annualSavings: inputs.monthlyCost * 12 * optimizationRate,
    monthlySavings: inputs.monthlyCost * optimizationRate,
    timeRecovery: inputs.teamSize * 40 * 4 * efficiencyGain, // hours/month
    complexityFactor: inputs.dataSources > 15 ? "High" : inputs.dataSources > 5 ? "Medium" : "Low",
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section id="roi-calculator" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Calculator className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">ROI Estimator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Based on proven results: 40% average cost reduction and 75% faster processing
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="premium-card p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Your Current Setup
              </h3>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <Label htmlFor="monthlyCost" className="text-sm font-medium">
                    Current Monthly Data Infrastructure Cost ($)
                  </Label>
                  <Input
                    id="monthlyCost"
                    type="number"
                    min="1000"
                    step="1000"
                    value={inputs.monthlyCost}
                    onChange={(e) =>
                      setInputs({ ...inputs, monthlyCost: parseInt(e.target.value) || 0 })
                    }
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Include cloud costs, tools, and infrastructure
                  </p>
                </div>

                <div>
                  <Label htmlFor="dataSources" className="text-sm font-medium">
                    Number of Data Sources
                  </Label>
                  <Input
                    id="dataSources"
                    type="number"
                    min="1"
                    max="100"
                    value={inputs.dataSources}
                    onChange={(e) =>
                      setInputs({ ...inputs, dataSources: parseInt(e.target.value) || 0 })
                    }
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Databases, APIs, SaaS platforms, files
                  </p>
                </div>

                <div>
                  <Label htmlFor="teamSize" className="text-sm font-medium">
                    Data Engineering Team Size
                  </Label>
                  <Input
                    id="teamSize"
                    type="number"
                    min="1"
                    max="50"
                    value={inputs.teamSize}
                    onChange={(e) =>
                      setInputs({ ...inputs, teamSize: parseInt(e.target.value) || 0 })
                    }
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Full-time engineers managing data pipelines
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Calculate Potential Savings
                </Button>
              </form>
            </div>

            {/* Results */}
            <div
              className={`premium-card p-8 transition-all duration-500 ${
                showResults ? "opacity-100 scale-100" : "opacity-50 scale-95"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-primary" />
                Your Optimization Potential
              </h3>

              {showResults ? (
                <div className="space-y-6">
                  {/* Annual Savings */}
                  <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                    <p className="text-sm text-muted-foreground mb-1">Projected Annual Savings</p>
                    <p className="text-4xl font-bold text-primary mb-2">
                      ${calculations.annualSavings.toLocaleString()}
                    </p>
                    <p className="text-sm text-foreground/70">
                      ${calculations.monthlySavings.toLocaleString()}/month
                    </p>
                  </div>

                  {/* Comparison Table */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                      <span className="text-sm font-medium">Current Annual Cost</span>
                      <span className="text-lg font-bold text-foreground">
                        ${calculations.currentAnnual.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-sm font-medium">Optimized Annual Cost</span>
                      <span className="text-lg font-bold text-primary">
                        ${calculations.optimizedAnnual.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <p className="text-xs text-muted-foreground mb-1">Time Recovered</p>
                      <p className="text-2xl font-bold text-foreground">
                        {calculations.timeRecovery.toLocaleString()}h
                      </p>
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <p className="text-xs text-muted-foreground mb-1">Complexity</p>
                      <p className="text-2xl font-bold text-foreground">
                        {calculations.complexityFactor}
                      </p>
                      <p className="text-xs text-muted-foreground">migration risk</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3">
                      These estimates are based on proven results from similar engagements.
                    </p>
                    <a href="#contact">
                      <Button className="w-full" variant="default">
                        Let's Discuss Implementation →
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <p className="text-center">
                    Fill in your details and click calculate to see your potential savings
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-3xl mx-auto">
            * Estimates based on average results from 10+ enterprise data engineering projects. Actual
            savings vary based on current infrastructure, data complexity, and implementation scope.
            Schedule a consultation for a detailed assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
