import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, BookOpen, Mail, Video, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: "Social Media Graphics",
      description: "Eye-catching posts, stories, and carousel designs that boost engagement and brand awareness across all platforms.",
      features: ["Instagram Posts & Stories", "Facebook Covers", "Twitter Headers", "LinkedIn Banners", "Pinterest Pins"],
      gradient: "from-pink-500 to-violet-500"
    },
    {
      icon: BookOpen,
      title: "Book Cover Design",
      description: "Professional book covers that capture your story's essence and stand out in the marketplace.",
      features: ["Fiction & Non-fiction", "E-book Covers", "Print Ready Files", "Multiple Formats", "Revision Rounds"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Templates",
      description: "Custom email designs that drive conversions and keep your audience engaged with your brand.",
      features: ["Newsletter Design", "Promotional Emails", "Welcome Series", "HTML Coding", "Mobile Responsive"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services that bring your content to life with engaging storytelling.",
      features: ["YouTube Videos", "Social Media Clips", "Promotional Videos", "Motion Graphics", "Color Grading"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              What I Can Do For You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, I offer comprehensive design services that help your brand 
              stand out in today's competitive digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-500 overflow-hidden reveal">
                <CardHeader className="relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center reveal">
            <Card className="bg-gradient-primary border-0 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                I'm here to help you achieve your creative goals.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;