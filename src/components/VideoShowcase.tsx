import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Brand Promo Video",
      duration: "1:30",
      views: "15.2K",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&crop=center",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Dynamic promotional video for tech startup featuring motion graphics and compelling storytelling.",
      tags: ["Motion Graphics", "Branding", "Corporate"]
    },
    {
      id: 2,
      title: "Social Media Compilation",
      duration: "2:15",
      views: "22.8K",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop&crop=center",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Engaging social media video content designed for maximum reach and engagement across platforms.",
      tags: ["Social Media", "Short Form", "Viral"]
    },
    {
      id: 3,
      title: "Product Launch Video",
      duration: "3:45",
      views: "31.5K",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop&crop=center",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Professional product launch video with cinematic quality and attention-grabbing visuals.",
      tags: ["Product Video", "Cinematic", "Commercial"]
    },
    {
      id: 4,
      title: "Educational Content",
      duration: "5:20",
      views: "18.9K",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop&crop=center",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Educational video content with clear explanations and engaging visual aids for online learning.",
      tags: ["Educational", "Explainer", "Tutorial"]
    }
  ];

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideo(videoId);
  };

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Video Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Video Editing Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From promotional videos to social media content, explore my video editing work 
              that brings stories to life through compelling visuals and seamless editing.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {videos.map((video, index) => (
              <Card key={video.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 reveal">
                <div className="relative aspect-video overflow-hidden">
                  {playingVideo === video.id ? (
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="lg"
                          className="bg-white text-primary hover:bg-white/90"
                          onClick={() => handlePlayVideo(video.id)}
                        >
                          <Play className="w-6 h-6 mr-2" />
                          Play Video
                        </Button>
                      </div>
                      
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                              <Clock className="w-3 h-3" />
                              {video.duration}
                            </div>
                            <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                              <Eye className="w-3 h-3" />
                              {video.views}
                            </div>
                          </div>
                          <Button 
                            size="sm"
                            variant="secondary"
                            className="bg-black/50 hover:bg-black/70 text-white border-0"
                            onClick={() => handlePlayVideo(video.id)}
                          >
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center reveal">
            <Card className="bg-gradient-accent border-0 text-white p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need Professional Video Content?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                From concept to final cut, I'll help you create video content that engages your audience 
                and delivers your message with impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Discuss Video Project
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Reel
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;