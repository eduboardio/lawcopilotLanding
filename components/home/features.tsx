"use client";

import {
  Globe,
  SearchCheck,
  Flame,
  File,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState, memo } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading...</div>
});

interface CustomButtonProps {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  value?: string;
  className?: string;
}

interface FeaturesProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  cta?: CustomButtonProps;
  lottiePath: string;
  badgeText?: string;
  accentColor: string;
}

interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Array<{
    id?: string;
    w?: number;
    h?: number;
    u?: string;
    p?: string;
    e?: number;
    layers?: unknown[];
    [key: string]: unknown;
  }>;
  layers: Array<{
    ddd?: number;
    ind?: number;
    ty?: number;
    nm?: string;
    sr?: number;
    ks?: Record<string, unknown>;
    ao?: number;
    ip?: number;
    op?: number;
    st?: number;
    bm?: number;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

const featureList: FeaturesProps[] = [
  {
    badgeText: "FAST",
    title: "Research Cases in Seconds, Not Hours",
    description:
      "Instantly analyze thousands of legal documents, precedents, and cases with AI-powered search that understands legal context and jurisdiction",
    cta: {
      variant: "secondary",
      value: "Try Research Engine",
    },
    lottiePath: "/search.json",
    accentColor: "from-[#50C972]/20 to-transparent",
  },
  {
    badgeText: "SMART",
    title: "Predict Case Outcomes with AI Precision",
    description:
      "Get data-driven insights on case risks, success probability, and potential challenges using advanced predictive analytics",
    cta: {
      variant: "secondary",
      value: "Analyze Your Case",
    },
    lottiePath: "/analyze.json",
    accentColor: "from-[#FE9B54]/20 to-transparent",
  },
  {
    badgeText: "GLOBAL",
    title: "Break Language Barriers in Legal Work",
    description:
      "Automatically translate legal documents and cases between 50+ languages while preserving legal terminology and context.",
    cta: {
      value: "See Languages",
      variant: "secondary",
    },
    lottiePath: "/global.json",
    accentColor: "from-[#8F5BFF]/20 to-transparent",
  },
  {
    badgeText: "PRECISE",
    title: "Draft Perfect Legal Documents Instantly",
    description:
      "Create court-ready documents, contracts, and legal correspondence using AI templates that adapt to your jurisdiction and style.",
    cta: {
      variant: "secondary",
      value: "Start Drafting",
    },
    lottiePath: "/document.json",
    accentColor: "from-[#44A7FF]/20 to-transparent",
  },
];

// Memoized fallback icon component to prevent re-renders
const FallbackIcon = memo(({ index }: { index: number }) => {
  const iconClass = cn(
    "w-1/3 h-1/3",
    index === 0 ? "text-[#50C972]" : 
    index === 1 ? "text-[#FE9B54]" : 
    index === 2 ? "text-[#8F5BFF]" : 
    "text-[#44A7FF]"
  );
  
  return (
    <>
      {index === 0 ? <SearchCheck className={iconClass} /> :
       index === 1 ? <Flame className={iconClass} /> :
       index === 2 ? <Globe className={iconClass} /> :
       <File className={iconClass} />}
    </>
  );
});

FallbackIcon.displayName = 'FallbackIcon';

// Memoized Feature Item component
const FeatureItem = memo(({ 
  feature, 
  index, 
  animation, 
  isDarkMode
}: { 
  feature: FeaturesProps; 
  index: number; 
  animation: LottieAnimationData | null;
  isDarkMode: boolean;
}) => {
  const { title, description, badgeText, cta, accentColor } = feature;
  
  return (
    <div
      className={cn(
        "w-full flex flex-col lg:flex-row justify-start items-start gap-12 relative",
        {
          "lg:flex-row-reverse": index % 2 !== 0,
        }
      )}
    >
      {/* Lottie Animation or Fallback */}
      <div className="relative w-full lg:max-w-md group">
        <Badge className="absolute -top-4 -right-4 rotate-12 bg-black dark:bg-white text-white dark:text-black font-bold px-3 py-1.5 rounded-sm z-10 shadow-lg">
          {badgeText}
        </Badge>

        <div className={cn(
          "lottie-container border-2 border-border rounded-xl backdrop-blur-sm shadow-xl aspect-square overflow-hidden flex justify-center items-center",
          "bg-background/50 dark:bg-white/10"
        )}>
          {animation ? (
            <div className={cn(
              "w-full h-full p-4",
              isDarkMode ? "bg-white" : "bg-transparent" 
            )}>
              <Lottie 
                animationData={animation} 
                loop={true} 
                className="w-full h-full"
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                  progressiveLoad: true
                }}
              />
            </div>
          ) : (
            // Fallback to the icon if animation fails to load or during loading
            <div className="w-full h-full flex items-center justify-center text-5xl">
              <FallbackIcon index={index} />
            </div>
          )}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 -bottom-6 -right-6 h-24 w-24 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute -z-10 -top-6 -left-6 h-16 w-16 bg-secondary/20 rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start items-start gap-6 lg:pt-8">
        <h3 className="text-2xl lg:text-4xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button 
          variant={cta?.variant || "default"} 
          className="group transition-all duration-300 hover:pr-8"
        >
          <Link href="/signup" className="flex items-center gap-2">
            {cta?.value} 
            <ArrowRight className="size-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
          </Link>
        </Button>
      </div>
      
      {/* Background gradient based on feature accent color */}
      <div className={cn(
        "absolute -z-10 w-full h-full blur-3xl opacity-20",
        index % 2 === 0 ? "left-0" : "right-0",
        `bg-gradient-to-r ${accentColor}`
      )}></div>
    </div>
  );
});

FeatureItem.displayName = 'FeatureItem';

// CSS styles modified to remove fade-in animations
const FeatureStyles = () => (
  <style jsx global>{`
    .lottie-container {
      transition: all 0.5s ease-out;
    }
    
    .feature-item:hover .lottie-container {
      transform: scale(1.05);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .feature-badge {
      transition: all 0.3s ease-out;
    }
    
    .feature-item:hover .feature-badge {
      transform: rotate(0deg) !important;
    }
  `}</style>
);

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animations, setAnimations] = useState<(LottieAnimationData | null)[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  // Use useEffect for client-side only code
  useEffect(() => {
    // Set isMounted to true when component mounts
    setIsMounted(true);
    
    // Check for dark mode
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
      
      // Use more efficient event listener instead of MutationObserver
      const handleThemeChange = () => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
      };
      
      window.addEventListener('theme-change', handleThemeChange);
      
      // Fallback to MutationObserver if custom event isn't implemented
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.attributeName === 'class' && 
            mutation.target === document.documentElement
          ) {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
          }
        });
      });
      
      observer.observe(document.documentElement, { 
        attributes: true,
        attributeFilter: ['class']
      });
      
      // Cleanup
      return () => {
        window.removeEventListener('theme-change', handleThemeChange);
        observer.disconnect();
      };
    }
  }, []);
  
  // Optimized animation loading with cache
  useEffect(() => {
    if (!isMounted) return;
    
    const animationCache: Record<string, LottieAnimationData> = {};
    
    const loadAnimations = async () => {
      try {
        // Load animations in sequence to prevent network congestion
        const loadedAnimations: (LottieAnimationData | null)[] = [];
        
        for (const feature of featureList) {
          try {
            // Check cache first
            if (animationCache[feature.lottiePath]) {
              loadedAnimations.push(animationCache[feature.lottiePath]);
              continue;
            }
            
            const response = await fetch(feature.lottiePath, {
              // Use cache-first strategy
              cache: 'force-cache'
            });
            
            if (!response.ok) throw new Error();
            
            const data = await response.json() as LottieAnimationData;
            
            // Store in cache
            animationCache[feature.lottiePath] = data;
            loadedAnimations.push(data);
          } catch (error) {
            console.log(error)
            loadedAnimations.push(null);
          }
        }
        
        setAnimations(loadedAnimations);
      } catch (error) {
        console.log(error)
        console.error("Error loading animations");
      }
    };
    
    loadAnimations();
  }, [isMounted]);

  if (!isMounted) {
    // Return a minimal placeholder to reduce initial render cost
    return (
      <section id="features" className="w-full py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading features...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-background to-secondary/5 py-24 sm:py-32"
    >
      <FeatureStyles />

      <div className="container w-full mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
            POWERFUL FEATURES
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative ">
            AI-Powered Legal Solutions
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Revolutionize your legal practice with cutting-edge AI technology designed specifically for legal professionals.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-24 w-full mx-auto max-w-6xl">
          {featureList.map((feature, index) => (
            <FeatureItem 
              key={feature.title}
              feature={feature}
              index={index}
              animation={animations[index]}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
        
        <div className="mt-24 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-full blur-2xl opacity-50"></div>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base px-8 py-6 rounded-full relative"
          >
            <Link href="/signup" className="flex items-center gap-2">
              Explore All Features
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};