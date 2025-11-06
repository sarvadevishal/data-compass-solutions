import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, FileText } from "lucide-react";
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
              Let's Collaborate on Scalable Data Engineering Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to discuss your next data challenge? Whether you're scaling your data infrastructure, optimizing performance, or building from scratch — I'd love to connect.
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
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

                <Button type="submit" size="lg" className="w-full bg-gradient-accent hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-hover text-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact info with premium styling */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="premium-card">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/vishal-kumar-sarvade-95494989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-accent/10 rounded-xl hover:bg-accent/20 transition-all duration-300 group border border-accent/20 hover:border-accent/40"
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
                    className="flex items-center gap-4 p-5 bg-highlight/10 rounded-xl hover:bg-highlight/20 transition-all duration-300 group border border-highlight/20 hover:border-highlight/40"
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
                    className="flex items-center gap-4 p-5 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-all duration-300 group w-full text-left border border-secondary/20 hover:border-secondary/40"
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

              <div className="bg-gradient-accent p-8 rounded-2xl text-white text-center shadow-glow hover:shadow-hover transition-all duration-500">
                <p className="text-sm font-medium mb-2 uppercase tracking-wide">Open to New Opportunities</p>
                <p className="text-2xl font-heading font-bold">
                  Let's Transform Your Data Infrastructure
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
