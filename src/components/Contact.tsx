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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
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

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="bg-card p-8 rounded-xl shadow-soft">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href="https://www.linkedin.com/in/vishal-kumar-sarvade-95494989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                  >
                    <div className="p-3 bg-accent rounded-lg group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">LinkedIn Profile</p>
                      <p className="text-sm text-muted-foreground">Let's connect professionally</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:sarvade1.vishalkumar@gmail.com"
                    className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                  >
                    <div className="p-3 bg-secondary rounded-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-sm text-muted-foreground">sarvade1.vishalkumar@gmail.com</p>
                    </div>
                  </a>

                  <button 
                    onClick={() => toast({ title: "Resume download feature coming soon!" })}
                    className="flex items-center gap-4 p-4 bg-highlight/10 rounded-lg hover:bg-highlight/20 transition-colors group w-full text-left"
                  >
                    <div className="p-3 bg-highlight rounded-lg group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-highlight-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Download Resume</p>
                      <p className="text-sm text-muted-foreground">Get my full CV in PDF</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-accent p-8 rounded-xl text-accent-foreground text-center">
                <p className="text-sm font-medium mb-2">Open to New Opportunities</p>
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
