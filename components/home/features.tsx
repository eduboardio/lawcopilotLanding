"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Globe, SearchCheck, Flame, File, ArrowRight } from "lucide-react";
import Link from "next/link";

// Define the bento item structure
interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  badgeText?: string;
  href?: string;
}

// Bento item component with hover effects
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
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/80 p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-sm h-full",
        {
          "col-span-1": size === "sm",
          "col-span-2": size === "md",
          "col-span-3 lg:col-span-4": size === "lg",
        },
        className
      )}
    >
      {/* Subtle gradient background */}
      <div
        className={cn(
          "absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10",
          `bg-gradient-to-br ${accentColor}`
        )}
      ></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

      {/* Badge if provided */}
      {badgeText && (
        <div className="absolute top-4 right-4 text-xs font-medium bg-black/80 text-white px-2.5 py-1 rounded-full z-10">
          {badgeText}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
  // Feature data
  const features = [
    {
      badgeText: "FAST",
      title: "Research Cases in Seconds",
      description: "Instantly analyze thousands of legal documents, precedents, and cases with AI-powered search.",
      icon: <SearchCheck size={24} />,
      accentColor: "from-emerald-600 to-emerald-900",
      href: "/signup",
      size: "lg" as const,
    },
    {
      badgeText: "SMART",
      title: "Predict Case Outcomes",
      description: "Get data-driven insights on case risks and success probability using advanced analytics.",
      icon: <Flame size={24} />,
      accentColor: "from-amber-600 to-red-700",
      href: "/signup",
      size: "md" as const,
    },
    {
      badgeText: "GLOBAL",
      title: "Break Language Barriers",
      description: "Translate legal documents between 50+ languages while preserving legal terminology.",
      icon: <Globe size={24} />,  
      accentColor: "from-blue-600 to-violet-700",
      href: "/signup",
      size: "sm" as const,
    },
    {
      badgeText: "PRECISE",
      title: "Draft Perfect Documents",
      description: "Create court-ready documents using AI templates that adapt to your jurisdiction.",
      icon: <File size={24} />,
      accentColor: "from-blue-600 to-cyan-700",
      href: "/signup",
      size: "md" as const,
    },
    {
      badgeText: "NEW",
      title: "Legal Document Analysis",
      description: "Extract key information from contracts and legal documents in seconds.",
      icon: <SearchCheck size={24} />,
      accentColor: "from-violet-600 to-purple-800",
      href: "/signup",
      size: "sm" as const,
    },
    {
      badgeText: "BETA",
      title: "AI Legal Assistant",
      description: "Get real-time assistance with legal research, drafting, and case preparation.",
      icon: <Flame size={24} />,
      accentColor: "from-indigo-600 to-blue-800",
      href: "/signup",
      size: "md" as const,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* OpenAI-style section header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Legal AI Features</h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge AI-powered tools designed specifically for legal professionals.
          </p>
        </div>
        
        {/* Asymmetric bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
          {features.map((feature, index) => (
            <BentoItem
              key={index}
              {...feature}
            />
          ))}
        </div>
        
        {/* CTA button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <Link 
            href="/signup" 
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View all features
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}