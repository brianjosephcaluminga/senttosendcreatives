import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Monitor, Video, Zap } from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      title: "Design Tools",
      icon: Monitor,
      gradient: "gradient-primary",
      tools: [
        { name: "Adobe Photoshop", rating: 5 },
        { name: "Canva", rating: 5 },
        { name: "Figma", rating: 5 },
        { name: "Adobe Illustrator", rating: 2, note: "(Basic)" }
      ]
    },
    {
      title: "Video Tools", 
      icon: Video,
      gradient: "gradient-accent",
      tools: [
        { name: "Adobe Premiere Pro", rating: 5 },
        { name: "CapCut", rating: 5 },
        { name: "Adobe After Effects", rating: 2, note: "(Basic)" },
        { name: "Descript", rating: 2, note: "(Basic)" },
        { name: "Audacity", rating: 3, note: "(Intermediate)" }
      ]
    },
    {
      title: "Productivity & AI Tools",
      icon: Zap,
      gradient: "gradient-subtle",
      tools: [
        { name: "ChatGPT", rating: 5 },
        { name: "Grammarly", rating: 5 },
        { name: "Trello, Notion, Google Suite", rating: 0, note: "– familiar with coordination and file organization" }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section id="tools" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Tools & Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-raleway font-bold mb-6 text-primary">
              My Creative Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proficient in industry-standard tools and emerging technologies to deliver exceptional results.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 group reveal">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-raleway font-semibold text-primary mb-2">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <span className="text-foreground font-medium">
                          {tool.name}
                        </span>
                        {tool.note && (
                          <span className="text-muted-foreground text-sm ml-2">
                            {tool.note}
                          </span>
                        )}
                      </div>
                      {tool.rating > 0 && (
                        <div className="text-sm">
                          {renderStars(tool.rating)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;