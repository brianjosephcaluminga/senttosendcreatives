import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Star, Users } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe Creative Suite", "Figma", "Canva", "After Effects", 
    "Premiere Pro", "DaVinci Resolve", "Typography", "Brand Identity",
    "Motion Graphics", "Social Media Design"
  ];

  const stats = [
    { icon: Palette, value: "200+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Video, value: "100+", label: "Videos Edited" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Passionate About Visual Storytelling
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 5 years of experience in graphic design and video editing, I help brands and individuals 
              create stunning visuals that capture attention and drive engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 reveal">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  My journey began with a simple love for creating beautiful things. What started as a hobby 
                  quickly evolved into a passion for helping businesses and creators tell their stories through 
                  compelling visual design.
                </p>
                <p className="text-foreground leading-relaxed">
                  I specialize in creating cohesive brand experiences across digital platforms, from eye-catching 
                  social media graphics to professional book covers and engaging video content that resonates 
                  with your target audience.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 reveal">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;