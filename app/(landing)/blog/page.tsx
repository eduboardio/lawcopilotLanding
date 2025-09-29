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
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check if dark mode is enabled
  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    // Set up an observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Enhanced color classes with light and dark variants
  const colorClasses = {
    blue: {
      light: "from-blue-500/20 to-blue-600/10 hover:from-blue-500/30 hover:to-blue-600/20 border-blue-500/30",
      dark: "from-blue-400/30 to-blue-600/20 hover:from-blue-400/40 hover:to-blue-600/30 border-blue-400/40"
    },
    purple: {
      light: "from-purple-500/20 to-purple-600/10 hover:from-purple-500/30 hover:to-purple-600/20 border-purple-500/30",
      dark: "from-purple-400/30 to-purple-600/20 hover:from-purple-400/40 hover:to-purple-600/30 border-purple-400/40"
    },
    green: {
      light: "from-emerald-500/20 to-emerald-600/10 hover:from-emerald-500/30 hover:to-emerald-600/20 border-emerald-500/30",
      dark: "from-emerald-400/30 to-emerald-600/20 hover:from-emerald-400/40 hover:to-emerald-600/30 border-emerald-400/40"
    },
    orange: {
      light: "from-orange-500/20 to-orange-600/10 hover:from-orange-500/30 hover:to-orange-600/20 border-orange-500/30",
      dark: "from-orange-400/30 to-orange-600/20 hover:from-orange-400/40 hover:to-orange-600/30 border-orange-400/40"
    },
    yellow: {
      light: "from-yellow-500/20 to-yellow-600/10 hover:from-yellow-500/30 hover:to-yellow-600/20 border-yellow-500/30",
      dark: "from-yellow-400/30 to-yellow-600/20 hover:from-yellow-400/40 hover:to-yellow-600/30 border-yellow-400/40"
    },
    red: {
      light: "from-red-500/20 to-red-600/10 hover:from-red-500/30 hover:to-red-600/20 border-red-500/30",
      dark: "from-red-400/30 to-red-600/20 hover:from-red-400/40 hover:to-red-600/30 border-red-400/40"
    },
    default: {
      light: "from-slate-500/20 to-slate-600/10 hover:from-slate-500/30 hover:to-slate-600/20 border-slate-500/30",
      dark: "from-slate-400/30 to-slate-600/20 hover:from-slate-400/40 hover:to-slate-600/30 border-slate-400/40"
    }
  };

  const selectedColor = card.color || "default";
  const selectedColorClass = isDarkMode ? colorClasses[selectedColor].dark : colorClasses[selectedColor].light;
  
  // Updated sizing classes for better mobile responsiveness
  const sizingClasses = {
    large: "col-span-12 md:col-span-8 lg:col-span-8 lg:row-span-2",
    medium: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1",
    small: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1"
  };
  
  const isFeature = card.type === "feature";
  const linkPath = isFeature ? `/${card.id}` : `/blog/${card.id}`;
  
  return (
    <Link 
      href={linkPath} 
      className={cn(
        "group relative rounded-2xl p-4 sm:p-5 lg:p-6 overflow-hidden transition-all duration-300",
        "bg-gradient-to-br backdrop-blur-sm flex flex-col h-full",
        selectedColorClass,
        sizingClasses[card.size],
        "hover:shadow-lg hover:scale-[1.01] border",
        isDarkMode ? "border-white/10 hover:border-white/20" : "border-border/50 hover:border-border/70"
      )}
    >
      {/* Arrow icon with adjusted opacity for dark mode */}
      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className={cn(
          "h-4 w-4 sm:h-5 sm:w-5",
          isDarkMode ? "text-white/90" : "text-foreground/90"
        )} />
      </div>
      
      <div className="flex flex-col h-full">
        {/* Category tag with dark mode support */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className={cn(
            "text-xs font-medium px-2 py-1 sm:px-3 rounded-full w-fit truncate max-w-[70%]",
            isDarkMode ? "bg-background/70 backdrop-blur-sm text-white/90" : "bg-background/50 text-foreground"
          )}>
            {card.category}
          </span>
          
          {/* Date or read time for articles with dark mode support */}
          {card.type === "article" && card.date && (
            <div className={cn(
              "flex items-center text-xs whitespace-nowrap",
              isDarkMode ? "text-white/70" : "text-muted-foreground"
            )}>
              <Calendar className="h-3 w-3 mr-1" />
              <span>{card.date}</span>
            </div>
          )}
        </div>
        
        {/* Title with dark mode support */}
        <h3 className={cn(
          "font-bold mb-2 transition-colors line-clamp-2",
          card.size === "large" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          isDarkMode ? "text-white" : "text-foreground"
        )}>
          {card.title}
        </h3>
        
        {/* Description with dark mode support */}
        <p className={cn(
          "text-muted-foreground mb-4 line-clamp-3",
          card.size === "large" ? "text-sm sm:text-base" : "text-xs sm:text-sm",
          isDarkMode ? "text-white/85" : "text-muted-foreground"
        )}>
          {card.description}
        </p>
        
        {/* Footer with dark mode support */}
        <div className="mt-auto pt-3">
          {card.type === "article" && card.readTime && card.author ? (
            <div className={cn(
              "flex items-center justify-between pt-3",
              isDarkMode ? "border-t border-white/20" : "border-t border-border/40"
            )}>
              <span className={cn(
                "text-xs font-medium truncate max-w-[70%]",
                isDarkMode ? "text-white/90" : "text-foreground"
              )}>
                {card.author}
              </span>
              <div className={cn(
                "flex items-center text-xs whitespace-nowrap",
                isDarkMode ? "text-white/70" : "text-muted-foreground"
              )}>
                <Clock className="h-3 w-3 mr-1" />
                <span>{card.readTime}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center font-medium text-sm">
              <span className={isDarkMode ? "text-white/90" : "text-foreground"}>Learn more</span>
              <ChevronRight className={cn(
                "h-4 w-4 ml-1 transition-transform group-hover:translate-x-1",
                isDarkMode ? "text-white/90" : "text-foreground"
              )} />
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Apply search filter
  const filteredContent = BLOG_CONTENT.filter(card => 
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    card.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Separate featured products from articles
  const featuredContent = filteredContent.filter(card => card.type === "feature");
  // const articleContent = filteredContent.filter(card => card.type === "article");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Check for dark mode preference
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    // Set up an observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen pb-12 sm:pb-16 lg:pb-20">
      {/* Header with dark mode support */}
      <BlurFade>
        <div className={cn(
          "relative py-10 sm:py-16 md:py-24 transition-all",
          scrolled ? "py-6 sm:py-8 md:py-12" : ""
        )}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                Resources
              </h1>
              <p className={cn(
                "text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0",
                isDarkMode ? "text-white/80" : "text-muted-foreground"
              )}>
                Explore our featured products, guides, insights, and industry trends for legal professionals.
              </p>
              
              {/* Search Bar with dark mode support */}
              <div className="relative max-w-md mx-auto px-1 sm:px-0">
                <Search className={cn(
                  "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4",
                  isDarkMode ? "text-white/60" : "text-muted-foreground"
                )} />
                <Input 
                  type="text"
                  placeholder="Search resources..." 
                  className={cn(
                    "pl-10 pr-4 py-5 sm:py-6 w-full rounded-full text-sm sm:text-base",
                    isDarkMode ? "bg-background/80 border-white/20" : ""
                  )}
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
              <h2 className={cn(
                "text-xl sm:text-2xl font-bold",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                Featured Products
              </h2>
              {/* <Link 
                href="/products" 
                className={cn(
                  "flex items-center hover:opacity-80 transition-colors font-medium text-sm sm:text-base",
                  isDarkMode ? "text-primary-light" : "text-primary"
                )}
              >
                View all products
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link> */}
            </div>
            
            {/* Bento Grid Layout for Featured Products */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
              {featuredContent.map((card) => (
                <BentoCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </BlurFade>
        
        {/* Newsletter Section with dark mode support */}
        <BlurFade>
          <div className={cn(
            "rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10",
            isDarkMode 
              ? "bg-gradient-to-r from-primary/20 to-primary/10" 
              : "bg-gradient-to-r from-primary/10 to-primary/5"
          )}>
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className={cn(
                "h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4",
                isDarkMode ? "text-primary-light" : "text-primary"
              )} />
              <h2 className={cn(
                "text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                Stay updated with our newsletter
              </h2>
              <p className={cn(
                "text-sm sm:text-base mb-5 sm:mb-6 max-w-md mx-auto",
                isDarkMode ? "text-white/80" : "text-muted-foreground"
              )}>
                Get the latest articles, product updates, and industry insights delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={cn(
                    "flex-grow py-5 sm:py-6 text-sm sm:text-base",
                    isDarkMode ? "bg-background/80 border-white/20" : ""
                  )}
                />
                <Button size="lg" className="whitespace-nowrap py-6 text-sm sm:text-base">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
        
        {/* Empty State with dark mode support */}
        {filteredContent.length === 0 && (
          <BlurFade className="text-center py-10 sm:py-16">
            <div className="max-w-md mx-auto px-4">
              <h3 className={cn(
                "text-xl sm:text-2xl font-bold mb-2",
                isDarkMode ? "text-white" : "text-foreground"
              )}>
                No resources found
              </h3>
              <p className={cn(
                "text-sm sm:text-base mb-5 sm:mb-6",
                isDarkMode ? "text-white/80" : "text-muted-foreground"
              )}>
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