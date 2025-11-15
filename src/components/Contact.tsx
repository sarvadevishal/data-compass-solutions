import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-96 h-96 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 border border-highlight/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Whether you're scaling your data infrastructure or optimizing existing systems, I bring proven expertise in delivering high-impact solutions that drive measurable business results.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Available for consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Open to new opportunities</span>
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Value Proposition */}
          <div className="mb-12 p-8 glassmorphism rounded-3xl border border-accent/30 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-gradient-primary mb-6 text-center">
              Best Suited For
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Data Platform Migrations",
                "Cloud Architecture Optimization",
                "Real-Time Analytics Implementation",
                "Technical Leadership & Mentorship",
              ].map((item, idx) => (
                <div 
                  key={item}
                  className="flex items-center gap-3 p-4 bg-accent/5 rounded-xl border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or challenge..."
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-hover text-lg py-7 btn-ripple"
                  aria-label="Submit contact form"
                >
                  Start the Conversation
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Share your challenge, and I'll outline how I can help
                </p>
              </form>
            </div>

            {/* Contact info with glassmorphism */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="glassmorphism p-10 rounded-3xl border border-accent/30">
                <h3 className="text-3xl font-heading font-bold text-gradient-primary mb-8">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/vishalkumarsarvade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 glassmorphism rounded-2xl hover:scale-105 transition-all duration-300 group border border-accent/30 hover:border-accent hover:shadow-glow"
                    aria-label="Visit LinkedIn profile"
                  >
                    <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">LinkedIn Profile</p>
                      <p className="text-sm text-muted-foreground">Let's connect professionally</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:sarvade1.vishalkumar@gmail.com"
                    className="flex items-center gap-4 p-6 glassmorphism rounded-2xl hover:scale-105 transition-all duration-300 group border border-highlight/30 hover:border-highlight hover:shadow-glow"
                    aria-label="Send email"
                  >
                    <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Email</p>
                      <p className="text-sm text-muted-foreground">sarvade1.vishalkumar@gmail.com</p>
                    </div>
                  </a>

                  <button 
                    onClick={() => toast({ title: "Resume download feature coming soon!" })}
                    className="flex items-center gap-4 p-6 glassmorphism rounded-2xl hover:scale-105 transition-all duration-300 group w-full text-left border border-secondary/30 hover:border-secondary hover:shadow-glow"
                    aria-label="Download resume"
                  >
                    <div className="p-4 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Download Resume</p>
                      <p className="text-sm text-muted-foreground">Get my full CV in PDF</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-primary p-10 rounded-3xl text-white text-center shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-500">
                <p className="text-sm font-bold mb-3 uppercase tracking-widest">Ready to Drive Impact</p>
                <p className="text-3xl font-heading font-black mb-4">
                  Let's Transform Your Data Infrastructure
                </p>
                <p className="text-sm opacity-90">
                  Delivering solutions that combine technical excellence with measurable business value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
