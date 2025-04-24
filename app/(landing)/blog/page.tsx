"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Clock, Calendar, ChevronRight, ArrowUpRight, BookOpen } from "lucide-react";

interface BlogCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date?: string;
  readTime?: string;
  author?: string;
  featured?: boolean;
  size: "large" | "medium" | "small";
  color?: "blue" | "purple" | "green" | "orange" | "yellow" | "red" | "default";
  type: "article" | "feature";
}

// Sample blog content data
const BLOG_CONTENT: BlogCard[] = [
  {
    id: "research-engine",
    title: "Research Engine",
    description: "Our AI-powered legal research engine helps you find relevant cases, statutes, and legal documents in seconds, saving hours of manual research time.",
    image: "/api/placeholder/800/500",
    category: "Featured Product",
    featured: true,
    size: "large",
    color: "blue",
    type: "feature"
  },
  {
    id: "case-analytics",
    title: "Case Analytics",
    description: "Turn complex case data into actionable insights with our intuitive analytics dashboard. Track outcomes, identify patterns, and make data-driven decisions.",
    image: "/api/placeholder/500/350",
    category: "Featured Product",
    size: "medium",
    color: "purple",
    type: "feature"
  },
  {
    id: "legal-translation",
    title: "Legal Translation",
    description: "Translate legal documents with precision across multiple languages while maintaining proper legal terminology and context-specific meaning.",
    image: "/api/placeholder/500/350",
    category: "Featured Product",
    size: "medium",
    color: "green",
    type: "feature"
  },
  {
    id: "document-drafting",
    title: "Document Drafting",
    description: "Create flawless legal documents with our AI-assisted drafting tool that ensures compliance, reduces errors, and streamlines your workflow.",
    image: "/api/placeholder/500/350",
    category: "Featured Product",
    size: "medium",
    color: "orange",
    type: "feature"
  },
  {
    id: "ai-compliance-2025",
    title: "AI Compliance in Legal Practice: 2025 Guide",
    description: "Navigate the evolving regulatory landscape of AI in legal services with our comprehensive compliance guide.",
    image: "/api/placeholder/500/350",
    category: "Insights",
    date: "April 18, 2025",
    readTime: "8 min read",
    author: "Elena Rodriguez",
    size: "small",
    color: "blue",
    type: "article"
  },
  {
    id: "future-legal-tech",
    title: "The Future of Legal Tech: Trends to Watch",
    description: "Our experts analyze emerging technologies set to transform the legal industry in the coming years.",
    image: "/api/placeholder/500/350",
    category: "Industry Trends",
    date: "April 15, 2025",
    readTime: "6 min read",
    author: "Michael Chen",
    size: "medium",
    color: "purple",
    type: "article"
  },
  {
    id: "remote-deposition-guide",
    title: "Mastering Remote Depositions: A Comprehensive Guide",
    description: "Best practices and technology tips for conducting effective remote depositions in today's digital legal environment.",
    image: "/api/placeholder/500/350",
    category: "Guides",
    date: "April 10, 2025",
    readTime: "10 min read",
    author: "Sarah Johnson",
    size: "small",
    color: "green",
    type: "article"
  },
  {
    id: "client-communication",
    title: "Enhancing Client Communication with Digital Tools",
    description: "Leverage technology to improve client relationships, increase satisfaction, and streamline information sharing.",
    image: "/api/placeholder/500/350",
    category: "Best Practices",
    date: "April 5, 2025",
    readTime: "7 min read",
    author: "David Martinez",
    size: "large",
    color: "yellow",
    type: "article"
  }
];

const BentoCard = ({ card }: { card: BlogCard }) => {
  // Determine color classes based on the card color
  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 hover:from-blue-500/30 hover:to-blue-600/20 border-blue-500/30",
    purple: "from-purple-500/20 to-purple-600/10 hover:from-purple-500/30 hover:to-purple-600/20 border-purple-500/30",
    green: "from-emerald-500/20 to-emerald-600/10 hover:from-emerald-500/30 hover:to-emerald-600/20 border-emerald-500/30",
    orange: "from-orange-500/20 to-orange-600/10 hover:from-orange-500/30 hover:to-orange-600/20 border-orange-500/30",
    yellow: "from-yellow-500/20 to-yellow-600/10 hover:from-yellow-500/30 hover:to-yellow-600/20 border-yellow-500/30",
    red: "from-red-500/20 to-red-600/10 hover:from-red-500/30 hover:to-red-600/20 border-red-500/30",
    default: "from-slate-500/20 to-slate-600/10 hover:from-slate-500/30 hover:to-slate-600/20 border-slate-500/30"
  };

  const selectedColorClass = colorClasses[card.color || "default"];
  
  // Updated sizing classes for better mobile responsiveness
  const sizingClasses = {
    large: "col-span-12 md:col-span-8 lg:col-span-8 lg:row-span-2",
    medium: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1",
    small: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1"
  };
  
  const isFeature = card.type === "feature";
  const linkPath = isFeature ? `/products/${card.id}` : `/blog/${card.id}`;
  
  return (
    <Link 
      href={linkPath} 
      className={cn(
        "group relative rounded-2xl p-4 sm:p-5 lg:p-6 overflow-hidden transition-all duration-300",
        "bg-gradient-to-br backdrop-blur-sm flex flex-col h-full",
        selectedColorClass,
        sizingClasses[card.size],
        "hover:shadow-lg hover:scale-[1.01] border"
      )}
    >
      {/* Arrow icon in top right */}
      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      
      <div className="flex flex-col h-full">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-xs font-medium px-2 py-1 sm:px-3 rounded-full bg-background/50 w-fit truncate max-w-[70%]">
            {card.category}
          </span>
          
          {/* Date or read time for articles */}
          {card.type === "article" && card.date && (
            <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{card.date}</span>
            </div>
          )}
        </div>
        
        {/* Title */}
        <h3 className={cn(
          "font-bold mb-2 transition-colors line-clamp-2",
          card.size === "large" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
        )}>
          {card.title}
        </h3>
        
        {/* Description - add line clamp for consistent height */}
        <p className={cn(
          "text-muted-foreground mb-4 line-clamp-3",
          card.size === "large" ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        )}>
          {card.description}
        </p>
        
        {/* Footer - different for articles vs features */}
        <div className="mt-auto pt-3">
          {card.type === "article" && card.readTime && card.author ? (
            <div className="flex items-center justify-between border-t border-border/40 pt-3">
              <span className="text-xs font-medium truncate max-w-[70%]">{card.author}</span>
              <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap">
                <Clock className="h-3 w-3 mr-1" />
                <span>{card.readTime}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center font-medium text-sm">
              <span>Learn more</span>
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  
  // Apply search filter
  const filteredContent = BLOG_CONTENT.filter(card => 
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Separate featured products from articles
  const featuredContent = filteredContent.filter(card => card.type === "feature");
  const articleContent = filteredContent.filter(card => card.type === "article");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen pb-12 sm:pb-16 lg:pb-20">
      {/* Header - Improved padding for mobile */}
      <BlurFade>
        <div className={cn(
          "relative py-10 sm:py-16 md:py-24 transition-all",
          scrolled ? "py-6 sm:py-8 md:py-12" : ""
        )}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Resources</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
                Explore our featured products, guides, insights, and industry trends for legal professionals.
              </p>
              
              {/* Search Bar - Better mobile experience */}
              <div className="relative max-w-md mx-auto px-1 sm:px-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Search resources..." 
                  className="pl-10 pr-4 py-5 sm:py-6 w-full rounded-full text-sm sm:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Featured Products Section */}
        <BlurFade>
          <div className="mb-10 sm:mb-16">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Featured Products</h2>
              <Link 
                href="/products" 
                className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
              >
                View all products
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
            
            {/* Bento Grid Layout for Featured Products - Better gap settings for mobile */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
              {featuredContent.map((card) => (
                <BentoCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </BlurFade>
        
        {/* Latest Articles Section */}
        <BlurFade>
          <div className="mb-10 sm:mb-16">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Latest Articles</h2>
              <Link 
                href="/blog/articles" 
                className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
              >
                View all articles
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
            
            {/* Grid Layout for Articles - Improved responsive grid */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
              {articleContent.map((card) => (
                <BentoCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </BlurFade>
        
        {/* Newsletter Section - Better mobile padding */}
        <BlurFade>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Stay updated with our newsletter</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 max-w-md mx-auto">
                Get the latest articles, product updates, and industry insights delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow py-5 sm:py-6 text-sm sm:text-base"
                />
                <Button size="lg" className="whitespace-nowrap py-6 text-sm sm:text-base">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
        
        {/* Empty State - Improved for mobile */}
        {filteredContent.length === 0 && (
          <BlurFade className="text-center py-10 sm:py-16">
            <div className="max-w-md mx-auto px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">No resources found</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                Try adjusting your search to find what you&apos;re looking for.
              </p>
              <Button onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          </BlurFade>
        )}
      </div>
    </main>
  );
}