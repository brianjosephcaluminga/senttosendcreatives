import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Star, Users } from "lucide-react";

const About = () => {
  const skills = [
    "Premiere Pro", "After Effects", "CapCut", "Descript", 
    "Photoshop", "Figma", "Canva", "ChatGPT", "Grammarly",
    "Typography", "Brand Identity", "Motion Graphics", "Social Media Management"
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
            <h2 className="text-4xl md:text-5xl font-raleway font-bold mb-6 text-primary">
              Hi, I'm Brian Joseph Caluminga
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Digital Creative Specialist combining design, storytelling, and strategy to produce compelling brand content.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 reveal">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I am a Digital Creative Specialist who combines design, storytelling, and strategy to produce compelling brand content. My expertise includes visual design—such as social media graphics, email layouts, book covers, and thumbnails—as well as both long-form and short-form video editing. I also focus on content planning for digital platforms like YouTube, Instagram, and TikTok.
                </p>
                <p className="text-foreground leading-relaxed">
                  My work emphasizes the creation of high-converting, engaging visuals that are anchored by a strong design sense and brand consistency. With growing experience in social media management and digital marketing, I understand how to deliver content that is not only visually appealing but also performs effectively.
                </p>
                <p className="text-foreground leading-relaxed">
                  I utilize tools like Premiere Pro, After Effects, CapCut, Descript, Photoshop, Figma, and Canva, alongside platforms like ChatGPT and Grammarly, to execute ideas from concept to final publication. I believe in using creativity as a tool to connect, communicate, and inspire.
                </p>
              </div>

              {/* Faith Quote */}
              <div className="bg-secondary/50 p-6 rounded-xl border-l-4 border-accent">
                <p className="text-foreground italic text-center">
                  "I seek not my own will but the will of Him who sent me." — John 5:30
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-raleway font-semibold mb-4 text-primary">Skills & Tools</h3>
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