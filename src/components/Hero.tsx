import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-16">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-primary"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-primary"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Campaign of the Day */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-orange-accent rounded-full"></div>
          <span className="text-sm text-muted-foreground">Campaign of the Day</span>
          <span className="text-sm font-medium">Jan 6, 2025</span>
          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Score 9.2 of 10</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="block text-foreground">WE ARE THE</span>
          <span className="block text-primary bg-gradient-to-r from-primary to-orange-accent bg-clip-text text-transparent animate-glow">
            UNDERDOGS®
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
          Where scrappy meets strategic. We turn underestimated brands into 
          <span className="text-primary font-semibold"> market leaders</span> through 
          bold advertising that bites back.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-orange-accent" />
              <span className="text-2xl font-bold text-primary">347%</span>
            </div>
            <p className="text-sm text-muted-foreground">Avg. ROI Increase</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="h-5 w-5 text-orange-accent" />
              <span className="text-2xl font-bold text-primary">120+</span>
            </div>
            <p className="text-sm text-muted-foreground">Underdog Brands</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="h-5 w-5 text-orange-accent" />
              <span className="text-2xl font-bold text-primary">98%</span>
            </div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <Button variant="hero" size="lg" className="group">
            View Our Pack
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="vintage" size="lg">
            Submit Your Campaign
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;