"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Globe, SearchCheck, Flame, File, ArrowRight, Sparkles, Scale } from "lucide-react";
import Link from "next/link";

// Define the bento item structure
interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  badgeText?: string;
  href?: string;
}

// Bento item component with enhanced hover effects
const BentoItem = ({
  title,
  description,
  icon,
  accentColor,
  className,
  size = "md",
  badgeText,
  href
}: BentoItemProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-b from-background to-background/95 p-6 transition-all duration-300 hover:shadow-xl hover:border-border/60",
        {
          "col-span-1": size === "xs",
          "col-span-2": size === "sm",
          "col-span-3": size === "md",
          "col-span-6": size === "lg",
        },
        className
      )}
    >
      {/* Subtle gradient background with improved visibility */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.08]",
          `bg-gradient-to-br ${accentColor}`
        )}
      />
      
      {/* Badge if provided */}
      {badgeText && (
        <div className="absolute top-4 right-4 text-xs font-bold bg-background/90 backdrop-blur-sm text-foreground/80 px-2.5 py-1 rounded-full z-10 border border-border/30 shadow-sm">
          {badgeText}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className={cn(
            "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
            `bg-opacity-15 bg-${accentColor.split(" ")[1].replace("from-", "").replace("-600", "-100")} text-${accentColor.split(" ")[1].replace("from-", "")}`
          )}>
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-5 flex-grow leading-relaxed">
          {description}
        </p>
        
        {href && (
          <Link 
            href={href}
            className="mt-auto group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Explore
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

export function Features() {
  // Feature data with improved content and dynamic sizing
  const features = [
    {
      badgeText: "POPULAR",
      title: "Research Cases in Seconds",
      description: "Instantly analyze thousands of legal documents, precedents, and cases with AI-powered search technology.",
      icon: <SearchCheck size={24} />,
      accentColor: "from-emerald-600 to-emerald-900",
      href: "/signup",
      size: "lg" as const,
    },
    {
      badgeText: "SMART",
      title: "Predict Case Outcomes",
      description: "Get data-driven insights on case risks and success probability using advanced predictive analytics.",
      icon: <Sparkles size={24} />,
      accentColor: "from-amber-500 to-red-600",
      href: "/signup",
      size: "md" as const,
    },
    {
      badgeText: "GLOBAL",
      title: "Break Language Barriers",
      description: "Translate legal documents between 50+ languages while preserving legal terminology.",
      icon: <Globe size={24} />,  
      accentColor: "from-blue-500 to-violet-600",
      href: "/signup",
      size: "sm" as const,
    },
    {
      badgeText: "PRECISE",
      title: "Draft Perfect Documents",
      description: "Create court-ready documents using AI templates that adapt to your jurisdiction and requirements.",
      icon: <File size={24} />,
      accentColor: "from-blue-500 to-cyan-600",
      href: "/signup",
      size: "sm" as const,
    },
    {
      badgeText: "NEW",
      title: "Legal Document Analysis",
      description: "Extract key information from contracts and legal documents in seconds with AI-powered analysis.",
      icon: <SearchCheck size={24} />,
      accentColor: "from-violet-500 to-purple-700",
      href: "/signup",
      size: "sm" as const,
    },
    {
      badgeText: "BETA",
      title: "AI Legal Assistant",
      description: "Get real-time assistance with legal research, drafting, and case preparation from our intelligent assistant.",
      icon: <Flame size={24} />,
      accentColor: "from-indigo-500 to-blue-700",
      href: "/signup",
      size: "md" as const,
    },
    {
      badgeText: "COMPLIANCE",
      title: "Regulatory Compliance",
      description: "Stay up-to-date with changing regulations and ensure your documents meet all legal requirements.",
      icon: <Scale size={24} />,
      accentColor: "from-teal-500 to-green-700",
      href: "/signup",
      size: "md" as const,
    },
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background/80">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* OpenAI-style section header with improved spacing and style */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Powerful Legal AI Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Cutting-edge AI-powered tools designed specifically for legal professionals to save time, increase accuracy, and enhance your practice.
          </p>
        </div>
        
        {/* Improved asymmetric bento grid layout with balanced sizing */}
        <div className="grid grid-cols-6 gap-5 md:gap-6 auto-rows-min">
          {features.map((feature, index) => (
            <BentoItem
              key={index}
              {...feature}
            />
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        {/* <div className="mt-16 md:mt-20 flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your legal practice?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl">
            Join thousands of legal professionals using our AI tools to work smarter, faster, and more efficiently.
          </p>
          <Link 
            href="/signup" 
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-md font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
          >
            Get started today
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}