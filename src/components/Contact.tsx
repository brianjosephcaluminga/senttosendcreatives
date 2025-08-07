import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Clock, Send, Instagram, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@designpro.com",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "+1 (555) 123-4567",
      action: "Start Chat"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "Usually within 24 hours",
      action: "Learn More"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? I'm here to help with your next design project. 
              Let's discuss how we can work together to achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Start Your Project</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Type
                    </label>
                    <select className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select a service</option>
                      <option>Social Media Graphics</option>
                      <option>Book Cover Design</option>
                      <option>Email Templates</option>
                      <option>Video Editing</option>
                      <option>Brand Identity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full btn-hero">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 reveal">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <method.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">{method.title}</h3>
                        <p className="text-muted-foreground">{method.description}</p>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent">
                        {method.action}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">How long do projects take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Typical turnaround is 3-7 days depending on complexity and scope.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Do you offer revisions?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, I include up to 3 rounds of revisions in all packages.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">What's your pricing like?</h4>
                    <p className="text-sm text-muted-foreground">
                      Pricing varies by project. I'll provide a detailed quote after our consultation.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Follow My Work</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="group hover:border-accent hover:text-accent"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;