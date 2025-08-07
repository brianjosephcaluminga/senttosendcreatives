import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-creative-workspace.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Creative workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Creative Visual Designer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-raleway font-bold leading-tight text-foreground">
            <span className="block">SentToSend Creatives</span>
            <span className="block bg-gradient-to-r from-accent to-creative bg-clip-text text-transparent">
              Content that Connects. Visuals that Inspire.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Helping brands communicate clearly through creative visuals, meaningful content, and thoughtful strategy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-6"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-glow text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-creative/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;