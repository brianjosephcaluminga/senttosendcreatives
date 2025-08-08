import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Eye } from "lucide-react";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioBooks from "@/assets/portfolio-books.jpg";
import portfolioEmails from "@/assets/portfolio-emails.jpg";
import portfolioPosters from "@/assets/portfolio-posters.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "YouTube Channel Branding",
      category: "videos",
      image: portfolioSocial,
      description: "Complete YouTube channel package including intro animations, thumbnails, and video editing for tech content creator.",
      tags: ["Video Editing", "Motion Graphics", "Thumbnails"]
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "social",
      image: portfolioSocial,
      description: "Complete social media strategy and content for lifestyle brand including posts, stories, and carousel designs.",
      tags: ["Instagram", "Content Strategy", "Brand Design"]
    },
    {
      id: 3,
      title: "Short-form Video Content",
      category: "videos",
      image: portfolioPosters,
      description: "Engaging short-form videos for TikTok and Instagram Reels with dynamic transitions and effects.",
      tags: ["Short-form", "TikTok", "Instagram Reels"]
    },
    {
      id: 4,
      title: "Book Cover Collection",
      category: "designs",
      image: portfolioBooks,
      description: "Fantasy and romance book covers with compelling typography and mystical illustrations.",
      tags: ["Book Design", "Typography", "Illustration"]
    },
    {
      id: 5,
      title: "Email Newsletter Series",
      category: "designs",
      image: portfolioEmails,
      description: "Responsive email templates for e-commerce brand with high conversion rates and brand consistency.",
      tags: ["Email Design", "HTML", "Conversion"]
    },
    {
      id: 6,
      title: "Brand Identity Package",
      category: "social",
      image: portfolioSocial,
      description: "Complete brand identity with social media templates, style guide, and content strategy.",
      tags: ["Branding", "Social Media Management", "Style Guide"]
    },
    {
      id: 7,
      title: "Promotional Video Campaign",
      category: "videos",
      image: portfolioPosters,
      description: "High-converting promotional videos for product launches with motion graphics and compelling storytelling.",
      tags: ["Promotional Video", "Motion Graphics", "Product Launch"]
    },
    {
      id: 8,
      title: "Course Cover Designs",
      category: "designs",
      image: portfolioBooks,
      description: "Professional course cover designs for online learning platform with modern typography and visual hierarchy.",
      tags: ["Course Design", "Education", "Typography"]
    },
    {
      id: 9,
      title: "Instagram Growth Strategy",
      category: "social",
      image: portfolioSocial,
      description: "Complete Instagram management including content planning, hashtag strategy, and engagement optimization.",
      tags: ["Instagram Growth", "Content Planning", "Analytics"]
    }
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "videos", label: "Videos" },
    { id: "designs", label: "Designs" },
    { id: "social", label: "Social Media" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Recent Work & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a selection of my latest projects across different design disciplines, 
              showcasing creativity and attention to detail.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-accent hover:bg-accent/90" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 portfolio-item reveal">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="portfolio-overlay flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <div className="space-y-4">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 reveal">
            <Button variant="outline" size="lg" className="btn-outline-glow">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;