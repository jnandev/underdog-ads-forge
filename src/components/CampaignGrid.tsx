import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, MessageCircle } from "lucide-react";

interface Campaign {
  id: string;
  title: string;
  brand: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    isPro?: boolean;
  };
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
  featured?: boolean;
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Nike Underdog Athletes",
    brand: "Nike",
    category: "Sports Marketing",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    author: {
      name: "Creative Rebels",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      isPro: true
    },
    stats: { views: 24500, likes: 892, comments: 156 }
  },
  {
    id: "2", 
    title: "Local Coffee Revolution",
    brand: "Brew & Bite",
    category: "Local Business",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    author: {
      name: "Urban Stories",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c5af?w=40&h=40&fit=crop&crop=face"
    },
    stats: { views: 18200, likes: 645, comments: 89 }
  },
  {
    id: "3",
    title: "Tech Startup Disruption",
    brand: "DataPup Analytics", 
    category: "B2B Tech",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    author: {
      name: "Digital Mavericks",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      isPro: true
    },
    stats: { views: 31800, likes: 1250, comments: 203 },
    featured: true
  },
  {
    id: "4",
    title: "Sustainable Fashion Fight",
    brand: "EcoThreads",
    category: "Fashion & Lifestyle",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    author: {
      name: "Green Creatives",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    stats: { views: 22100, likes: 776, comments: 134 }
  }
];

const CampaignGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Latest</span>{" "}
            <span className="text-primary">Campaigns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Vote for the most scrappy, strategic, and successful advertising campaigns 
            from underdogs who refused to stay down.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20">All</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Sports</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Tech</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Local Business</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Fashion</Badge>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div 
              key={campaign.id}
              className={`group cursor-pointer animate-fade-in ${
                campaign.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Campaign Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="vintage" size="sm" className="w-full">
                      Vote Now
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {campaign.category}
                    </Badge>
                  </div>
                </div>

                {/* Campaign Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {campaign.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {campaign.brand}
                      </p>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={campaign.author.avatar} 
                      alt={campaign.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        {campaign.author.name}
                      </span>
                      {campaign.author.isPro && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          PRO
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{campaign.stats.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{campaign.stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{campaign.stats.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignGrid;