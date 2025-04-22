"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Wallet, Zap, CheckCircle, ArrowRight, Users, Globe, Star, Clock } from "lucide-react";
import Link from "next/link";

// BentoItem component - updated with required fields
interface BentoItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  points?: string[];
  type?: "benefit" | "stat" | "quote" | "cta";
  value?: string;
  href?: string;
}

const BentoItem = ({
  title,
  description,
  icon,
  accentColor,
  className,
  size = "md",
  points,
  type = "benefit",
  value,
  href
}: BentoItemProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl h-full",
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

      {/* Content based on type */}
      <div className="relative z-10 flex h-full flex-col">
        {type === "benefit" && (
          <>
            {icon && (
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>
            {points && (
              <ul className="space-y-3 pt-2 mt-auto">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {type === "stat" && (
          <>
            {icon && (
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                {icon}
              </div>
            )}
            <p className="text-3xl font-bold mb-2">{value}</p>
            <h3 className="text-base font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </>
        )}

        {type === "quote" && (
          <>
            <div className="text-5xl text-primary/20 font-serif mb-2">&quot;</div>
            <p className="text-base italic mb-6 leading-relaxed">{description}</p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {value?.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{value}</p>
              </div>
            </div>
          </>
        )}

        {type === "cta" && (
          <>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>
            </div>
            {href && (
              <Link 
                href={href}
                className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export function Benefits() {
  // Benefit data
  const benefitsData = [
    {
      icon: <Zap size={24} />,
      title: "Faster Case Research",
      description: "Cut research time from days to hours with AI-powered insights and analysis.",
      points: [
        "70% average time savings on research tasks",
        "Instant access to relevant precedents"
      ],
      accentColor: "from-blue-600 to-indigo-800",
      size: "lg" as const,
      type: "benefit" as const,
      href: "/research"
    },
    {
      icon: <Wallet size={24} />,
      title: "Cost Reduction",
      description: "Reduce operational costs through automation of routine legal tasks.",
      points: [
        "30% average reduction in costs",
        "Optimize paralegal time"
      ],
      accentColor: "from-emerald-600 to-green-800",
      size: "md" as const,
      type: "benefit" as const,
      href: "/costs"
    },
    {
      title: "Client Satisfaction",
      description: "Our users report high satisfaction rates with our platform.",
      value: "98%",
      icon: <Users size={24} />,
      accentColor: "from-blue-600 to-cyan-800",
      size: "sm" as const,
      type: "stat" as const
    },
    {
      title: "Sarah Johnson",
      description: "Law Copilot has transformed our practice, cutting research time by 70% and allowing us to take on more clients while delivering better results.",
      value: "Partner at Johnson & Associates",
      accentColor: "from-violet-600 to-purple-800",
      size: "md" as const,
      type: "quote" as const
    },
    {
      title: "Time Saved",
      description: "Average time savings reported by our users.",
      value: "70%",
      icon: <Clock size={24} />,
      accentColor: "from-purple-600 to-indigo-800",
      size: "sm" as const,
      type: "stat" as const
    },
    {
      icon: <Shield size={24} />,
      title: "Accelerate Legal Research",
      description: "Uncover critical insights and connections in legal data with enhanced research tools.",
      accentColor: "from-purple-600 to-violet-800",
      size: "md" as const,
      type: "cta" as const,
      href: "/research"
    },
    {
      title: "Active Users",
      description: "Lawyers using our platform worldwide.",
      value: "10k+",
      icon: <Globe size={24} />,
      accentColor: "from-green-600 to-emerald-800",
      size: "sm" as const,
      type: "stat" as const
    },
    {
      title: "Documents Processed",
      description: "Legal documents analyzed by our AI.",
      value: "50M+",
      icon: <Star size={24} />,
      accentColor: "from-indigo-600 to-blue-800",
      size: "sm" as const,
      type: "stat" as const
    },
    {
      title: "Transform Your Practice",
      description: "Join thousands of legal professionals elevating their work with AI.",
      accentColor: "from-amber-600 to-red-700",
      size: "md" as const,
      type: "cta" as const,
      href: "/signup"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* OpenAI-style section header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Law Copilot</h2>
          <p className="text-lg text-muted-foreground">
            Discover how our platform transforms legal practice with AI technology.
          </p>
        </div>
        
        {/* Asymmetric bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-min">
          {benefitsData.map((item, index) => (
            <BentoItem
              key={index}
              {...item}
            />
          ))}
        </div>
        
        {/* CTA button */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <Link 
            href="/signup" 
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Schedule a demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}