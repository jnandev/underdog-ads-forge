import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/264c4ce7-4184-429a-bdb2-d5e3afc3d82a.png" 
            alt="Underdog Ads" 
            className="h-8 w-8 animate-glow"
          />
          <span className="text-xl font-bold text-primary">UNDERDOG</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#campaigns" className="text-foreground hover:text-primary transition-colors">
            Campaigns
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Search and CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-card border border-border rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground w-32"
            />
          </div>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;