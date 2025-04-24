"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Globe, Search, File, ArrowRight, Sparkles, Tablet, GitCompare, Link as LinkIcon, Mic, FileText } from "lucide-react";
import NextLink from "next/link";

// Define the bento item structure
interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor: string;
  className?: string;
  span?: "col" | "row" | "both" | "none";
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
  span = "col",
  badgeText,
  href
}: BentoItemProps) => {
  const Content = () => (
    <>
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
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
            `bg-opacity-15 bg-${accentColor.split(" ")[1].replace("from-", "").replace("-600", "-100")} text-${accentColor.split(" ")[1].replace("from-", "")}`
          )}>
            {icon}
          </div>
        )}
        
        <h3 className={cn(
          "font-semibold tracking-tight",
          span === "both" ? "text-2xl mb-3" : "text-lg mb-2"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "text-muted-foreground flex-grow leading-relaxed",
          span === "both" ? "text-base" : "text-sm"
        )}>
          {description}
        </p>
        
        {href && (
          <div className="mt-4">
            <span className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Explore
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = cn(
    "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-b from-background to-background/95 p-6 transition-all duration-300 hover:shadow-xl hover:border-border/60",
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
          {/* Large feature highlight (spans both columns and rows) */}
          <BentoItem
            badgeText="FLAGSHIP"
            title="AI-Powered Legal Research"
            description="Find case law, statutes, and citations instantly using natural language queries. Our advanced AI understands legal context and delivers precise results from thousands of sources in seconds."
            icon={<Search size={24} />}
            accentColor="from-emerald-600 to-emerald-900"
            href="/signup"
            span="both"
            className="md:col-span-2 md:row-span-2"
          />

          {/* Column-spanning cards (wider) */}
          <BentoItem
            badgeText="POPULAR"
            title="Automated Legal Drafting"
            description="Generate legally sound contracts, petitions, and notices in seconds."
            icon={<FileText size={24} />}
            accentColor="from-amber-500 to-red-600"
            href="/signup"
            span="col"
            className="md:col-span-2"
          />

          {/* Regular card */}
          <BentoItem
            badgeText="PRECISE"
            title="Clause & Risk Analyzer"
            description="Detect red flags, missing clauses, and compliance issues automatically."
            icon={<File size={24} />}
            accentColor="from-blue-500 to-cyan-600"
            href="/signup"
            className="md:col-span-1"
          />

          {/* Regular card */}
          <BentoItem
            badgeText="GLOBAL"
            title="Legal Translator"
            description="Translate legal documents across Indian languages with contextual accuracy."
            icon={<Globe size={24} />}  
            accentColor="from-blue-500 to-violet-600"
            href="/signup"
            className="md:col-span-1"
          />

          {/* Column-spanning cards (wider) */}
          <BentoItem
            badgeText="NEW"
            title="Smart Citator"
            description="Auto-link statutes, judgments, and rules for court-ready formatting with proper legal citations."
            icon={<LinkIcon size={24} />}
            accentColor="from-indigo-500 to-blue-700"
            href="/signup"
            span="col"
            className="md:col-span-2"
          />

          {/* Regular cards */}
          <BentoItem
            badgeText="COMPARE"
            title="Version Comparison"
            description="Identify changes across contract versions and spot critical alterations."
            icon={<GitCompare size={24} />}
            accentColor="from-violet-500 to-purple-700"
            href="/signup"
            className="md:col-span-1"
          />

          <BentoItem
            badgeText="BETA"
            title="Voice-to-Legal Draft"
            description="Dictate clauses or arguments with instant formatting and structure."
            icon={<Mic size={24} />}
            accentColor="from-purple-500 to-pink-700"
            href="/signup"
            className="md:col-span-1"
          />

          {/* Row-spanning card (taller) */}
          <BentoItem
            badgeText="LIBRARY"
            title="Template Library"
            description="Access a curated collection of contracts, affidavits, and legal formats customized for Indian jurisdictions."
            icon={<Tablet size={24} />}
            accentColor="from-teal-500 to-green-700"
            href="/signup"
            span="row"
            className="md:col-span-1 md:row-span-2"
          />

          {/* Column-spanning card (wider) */}
          <BentoItem
            badgeText="PREMIUM"
            title="Legal Case Prediction"
            description="Get data-driven insights on case risks and success probability using predictive analytics."
            icon={<Sparkles size={24} />}
            accentColor="from-cyan-500 to-blue-700"
            href="/signup"
            span="col"
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}