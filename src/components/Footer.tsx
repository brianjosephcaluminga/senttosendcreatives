import { Button } from "@/components/ui/button";
import { Palette, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Social Media Graphics',
    'Book Cover Design',
    'Email Templates',
    'Video Editing',
    'Brand Identity'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-creative rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-accent rounded-xl">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DesignPro</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Freelance graphic designer and video editor passionate about creating compelling visuals 
              that tell your story and captivate your audience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:border-accent"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="text-primary-foreground/80">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">hello@designpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">Remote Worldwide</span>
              </div>
            </div>
            
            <Button 
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 DesignPro. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <button className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow z-40"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;