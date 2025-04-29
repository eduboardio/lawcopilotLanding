"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Globe, Search, File, ArrowRight, Tablet, FileText, ChevronDown } from "lucide-react";
import NextLink from "next/link";

type BentoItemSpan = 'col' | 'row' | 'both' | 'none';

// Define the bento item structure
interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  lightGradient: string;
  darkGradient: string;
  className?: string;
  span?: "col" | "row" | "both" | "none";
  badgeText?: string;
  href?: string;
  lightIconBg: string;
  darkIconBg: string;
  iconColor: string;
}

// Bento item component with enhanced hover effects and dark mode support
const BentoItem = ({
  title,
  description,
  icon,
  lightGradient,
  darkGradient,
  className,
  span = "col",
  badgeText,
  href,
  lightIconBg,
  darkIconBg,
  iconColor
}: BentoItemProps) => {
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

  const Content = () => (
    <>
      {/* Gradient background that changes based on dark/light mode - ENHANCED for both modes */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          isDarkMode ? "opacity-[0.35] group-hover:opacity-[0.45]" : "opacity-[0.20] group-hover:opacity-[0.30]",
          `bg-gradient-to-br ${isDarkMode ? darkGradient : lightGradient}`
        )}
      />
      
      {/* Badge if provided - Updated for better visibility in both modes */}
      {badgeText && (
        <div className={cn(
          "absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full z-10 border shadow-sm",
          isDarkMode ? "bg-background/90 backdrop-blur-sm text-foreground/90 border-border/40" : 
                      "bg-white/90 backdrop-blur-sm text-foreground border-border/50"
        )}>
          {badgeText}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm",
            isDarkMode ? darkIconBg : lightIconBg,
            iconColor
          )}>
            {icon}
          </div>
        )}
        
        <h3 className={cn(
          "font-semibold tracking-tight",
          span === "both" ? "text-2xl mb-3" : "text-lg mb-2",
          isDarkMode ? "text-white" : "text-foreground"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "flex-grow leading-relaxed",
          span === "both" ? "text-base" : "text-sm",
          isDarkMode ? "text-white/85" : "text-foreground/90"
        )}>
          {description}
        </p>
        
        {href && (
          <div className="mt-4">
            <span className={cn(
              "group inline-flex items-center text-sm font-medium transition-colors",
              isDarkMode ? "text-white hover:text-white/90" : "text-primary hover:text-primary/80"
            )}>
              Explore
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = cn(
    "group relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl",
    isDarkMode ? "border-white/10 hover:border-white/20 bg-background/50" : "border-border/50 hover:border-border/70 bg-background/80",
    {
      "col-span-1 row-span-1": !span || span === "none",
      "col-span-2 row-span-1": span === "col",
      "col-span-1 row-span-2": span === "row",
      "col-span-2 row-span-2": span === "both",
    },
    className
  );

  return href ? (
    <NextLink href={href} className={cardClasses}>
      <Content />
    </NextLink>
  ) : (
    <div className={cardClasses}>
      <Content />
    </div>
  );
};

export function Features() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Initial features to show - ENHANCED colors for both light and dark mode
  const initialFeatures = [
    {
      badgeText: "FLAGSHIP",
      title: "AI-Powered Legal Research",
      description: "Find case law, statutes, and citations instantly using natural language queries. Our advanced AI understands legal context and delivers precise results from thousands of sources in seconds.",
      icon: <Search size={24} />,
      lightGradient: "from-emerald-500 to-emerald-700", // Enhanced light mode colors
      darkGradient: "from-emerald-400 to-teal-600",
      lightIconBg: "bg-emerald-50", // Lighter background for better contrast
      darkIconBg: "bg-emerald-800/60",
      iconColor: "text-emerald-600 dark:text-emerald-200",
      href: "/signup",
      span: "both",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      badgeText: "POPULAR",
      title: "Automated Legal Drafting",
      description: "Generate legally sound contracts, petitions, and notices in seconds.",
      icon: <FileText size={24} />,
      lightGradient: "from-amber-400 to-red-500", // Enhanced light mode colors
      darkGradient: "from-amber-400 to-red-500",
      lightIconBg: "bg-amber-50", // Lighter background for better contrast
      darkIconBg: "bg-amber-800/60",
      iconColor: "text-amber-600 dark:text-amber-200",
      href: "/signup",
      span: "col",
      className: "md:col-span-2"
    },
    {
      badgeText: "PRECISE",
      title: "Clause & Risk Analyzer",
      description: "Detect red flags, missing clauses, and compliance issues automatically.",
      icon: <File size={24} />,
      lightGradient: "from-blue-400 to-cyan-500", // Enhanced light mode colors
      darkGradient: "from-blue-400 to-cyan-500",
      lightIconBg: "bg-blue-50", // Lighter background for better contrast
      darkIconBg: "bg-blue-800/60",
      iconColor: "text-blue-600 dark:text-blue-200",
      href: "/signup",
      className: "md:col-span-1"
    },
    {
      badgeText: "GLOBAL",
      title: "Legal Translator",
      description: "Translate legal documents across Indian languages with contextual accuracy.",
      icon: <Globe size={24} />,
      lightGradient: "from-blue-400 to-violet-500", // Enhanced light mode colors
      darkGradient: "from-blue-400 to-violet-500",
      lightIconBg: "bg-violet-50", // Lighter background for better contrast
      darkIconBg: "bg-violet-800/60",
      iconColor: "text-violet-600 dark:text-violet-200",
      href: "/signup",
      className: "md:col-span-1"
    }
  ];

  // Extra features that will be shown when "View All Features" is clicked - ENHANCED colors for both modes
  const extraFeatures = [
    // {
    //   badgeText: "NEW",
    //   title: "Smart Citator",
    //   description: "Auto-link statutes, judgments, and rules for court-ready formatting with proper legal citations.",
    //   icon: <LinkIcon size={24} />,
    //   lightGradient: "from-indigo-400 to-blue-600", // Enhanced light mode colors
    //   darkGradient: "from-indigo-400 to-blue-600",
    //   lightIconBg: "bg-indigo-50", // Lighter background for better contrast
    //   darkIconBg: "bg-indigo-800/60",
    //   iconColor: "text-indigo-600 dark:text-indigo-200",
    //   href: "/signup",
    //   span: "col",
    //   className: "md:col-span-2"
    // },
    // {
    //   badgeText: "COMPARE",
    //   title: "Version Comparison",
    //   description: "Identify changes across contract versions and spot critical alterations.",
    //   icon: <GitCompare size={24} />,
    //   lightGradient: "from-violet-400 to-purple-600", // Enhanced light mode colors
    //   darkGradient: "from-violet-400 to-purple-600",
    //   lightIconBg: "bg-violet-50", // Lighter background for better contrast
    //   darkIconBg: "bg-violet-800/60",
    //   iconColor: "text-violet-600 dark:text-violet-200",
    //   href: "/signup",
    //   className: "md:col-span-1"
    // },
    // {
    //   badgeText: "BETA",
    //   title: "Voice-to-Legal Draft",
    //   description: "Dictate clauses or arguments with instant formatting and structure.",
    //   icon: <Mic size={24} />,
    //   lightGradient: "from-purple-400 to-pink-600", // Enhanced light mode colors
    //   darkGradient: "from-purple-400 to-pink-600",
    //   lightIconBg: "bg-purple-50", // Lighter background for better contrast
    //   darkIconBg: "bg-purple-800/60",
    //   iconColor: "text-purple-600 dark:text-purple-200",
    //   href: "/signup",
    //   className: "md:col-span-1"
    // },
    {
      badgeText: "LIBRARY",
      title: "Template Library",
      description: "Access a curated collection of contracts, affidavits, and legal formats customized for Indian jurisdictions.",
      icon: <Tablet size={24} />,
      lightGradient: "from-teal-400 to-green-600", // Enhanced light mode colors
      darkGradient: "from-teal-400 to-green-600",
      lightIconBg: "bg-teal-50", // Lighter background for better contrast
      darkIconBg: "bg-teal-800/60",
      iconColor: "text-teal-600 dark:text-teal-200",
      href: "/signup",
      span: "row",
      className: "md:col-span-1 md:row-span-2"
    },
    // {
    //   badgeText: "PREMIUM",
    //   title: "Legal Case Prediction",
    //   description: "Get data-driven insights on case risks and success probability using predictive analytics.",
    //   icon: <Sparkles size={24} />,
    //   lightGradient: "from-cyan-400 to-blue-600", // Enhanced light mode colors
    //   darkGradient: "from-cyan-400 to-blue-600",
    //   lightIconBg: "bg-cyan-50", // Lighter background for better contrast
    //   darkIconBg: "bg-cyan-800/60",
    //   iconColor: "text-cyan-600 dark:text-cyan-200",
    //   href: "/signup",
    //   span: "col",
    //   className: "md:col-span-3"
    // }
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background/80">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* OpenAI-style section header with improved spacing and style */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Powerful Legal AI Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI solutions designed specifically for legal professionals to save time, increase accuracy, and enhance your practice.
          </p>
        </div>
        
        {/* Advanced bento grid layout with varied card sizes for a more dynamic design */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Initial features */}
          {initialFeatures.map((feature, index) => (
            <BentoItem
              key={`initial-${index}`}
              badgeText={feature.badgeText}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              lightGradient={feature.lightGradient}
              darkGradient={feature.darkGradient}
              lightIconBg={feature.lightIconBg}
              darkIconBg={feature.darkIconBg}
              iconColor={feature.iconColor}
              href={feature.href}
              span={feature.span as BentoItemSpan}
              className={feature.className}
            />
          ))}
          
          {/* View All Features button - Enhanced for both light and dark mode */}
          {!showAllFeatures && (
            <div className="md:col-span-4 mt-4 text-center">
              <button 
                onClick={() => setShowAllFeatures(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/15 hover:bg-primary/25 text-primary font-medium transition-all duration-200 dark:bg-primary/20 dark:hover:bg-primary/30 dark:text-white"
              >
                View All Features <ChevronDown size={18} />
              </button>
            </div>
          )}
          
          {/* Extra features that will be shown when the button is clicked */}
          {showAllFeatures && extraFeatures.map((feature, index) => (
            <BentoItem
              key={`extra-${index}`}
              badgeText={feature.badgeText}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              lightGradient={feature.lightGradient}
              darkGradient={feature.darkGradient}
              lightIconBg={feature.lightIconBg}
              darkIconBg={feature.darkIconBg}
              iconColor={feature.iconColor}
              href={feature.href}
              span={feature.span as BentoItemSpan}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}