import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Brand Campaigns",
    description: "Bold storytelling that transforms unknown brands into household names through strategic narrative building.",
    features: ["Brand Identity", "Campaign Strategy", "Multi-channel Execution"],
    color: "text-orange-accent"
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results and maximum ROI for underdog businesses.",
    features: ["PPC Management", "Conversion Optimization", "Analytics & Reporting"],
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Guerrilla Marketing",
    description: "Unconventional tactics that create buzz and viral moments without the big agency budgets.",
    features: ["Viral Campaigns", "Street Marketing", "Influencer Partnerships"],
    color: "text-orange-accent"
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Rapid experimentation across marketing channels to identify scalable growth opportunities.",
    features: ["A/B Testing", "User Acquisition", "Retention Strategies"],
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Creating loyal brand communities that turn customers into passionate advocates and ambassadors.",
    features: ["Social Strategy", "Content Creation", "Community Management"],
    color: "text-orange-accent"
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Breakthrough creative concepts that cut through the noise and make your brand impossible to ignore.",
    features: ["Creative Direction", "Content Strategy", "Brand Positioning"],
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Pack</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Services for</span>{" "}
            <span className="text-primary">Every Fight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From scrappy startups to established brands ready to disrupt, 
            we've got the arsenal to help you compete with the big dogs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-card border border-border ${service.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Unleash Your Brand?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Every underdog has their day. Let's make yours unforgettable with 
            campaigns that bite back harder than the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Campaign
            </Button>
            <Button variant="vintage" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;