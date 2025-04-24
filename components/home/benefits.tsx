"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Wallet, Zap, CheckCircle, ArrowRight, Users, Clock, Search, FileText, Code, MapPin, Lock } from "lucide-react";
import Link from "next/link";

// BentoItem component with improved spacing and layout
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
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/80 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl h-full",
        {
          "col-span-1": size === "sm",
          "col-span-2": size === "md",
          "col-span-3": size === "lg",
        },
        className
      )}
    >
      {/* Refined subtle gradient background */}
      <div
        className={cn(
          "absolute inset-0 opacity-3 transition-opacity duration-300 group-hover:opacity-8",
          `bg-gradient-to-br ${accentColor}`
        )}
      ></div>
      
      {/* Enhanced shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

      {/* Content based on type with improved spacing */}
      <div className="relative z-10 flex h-full flex-col">
        {type === "benefit" && (
          <>
            {icon && (
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <h3 className="text-lg font-semibold mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
            {points && (
              <ul className="space-y-2 pt-1 mt-auto">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {type === "stat" && (
          <>
            <div className="flex-1 flex flex-col items-start justify-center">
              {icon && (
                <div className="p-2 rounded-xl bg-primary/10 text-primary mb-3">
                  {icon}
                </div>
              )}
              <p className="text-3xl font-bold tracking-tight mb-2">{value}</p>
              <h3 className="text-sm font-medium mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </>
        )}

        {type === "quote" && (
          <>
            <div className="text-4xl text-primary/20 font-serif mb-2">&quot;</div>
            <p className="text-sm italic mb-4 leading-relaxed">{description}</p>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                {value?.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{value}</p>
              </div>
            </div>
          </>
        )}

        {type === "cta" && (
          <>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-3 tracking-tight">{title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
            </div>
            {href && (
              <Link 
                href={href}
                className="mt-auto inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export function Benefits() {
  // Refined grid layout with better spacing
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Centered section header with improved spacing */}
        <div className="mb-12 md:mb-16 text-center mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Law Copilot</h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Discover how our platform transforms legal practice with AI technology designed specifically for Indian legal professionals.
          </p>
        </div>
        
        {/* Asymmetric bento grid layout with better spacing and organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-fr">
          {/* First row - large item */}
          <div className="col-span-full lg:col-span-6">
            <BentoItem
              icon={<Zap size={24} />}
              title="Accelerate Research"
              description="Cut time spent on legal research by over 70% with AI-powered insights and analysis."
              points={[
                "Faster access to case law",
                "Context-aware search",
                "Build stronger arguments, faster"
              ]}
              accentColor="from-blue-600 to-indigo-800"
              size="lg"
              type="benefit"
              href="/research"
            />
          </div>
          
          {/* Second row - medium items */}
          <div className="col-span-full sm:col-span-1 lg:col-span-3">
            <BentoItem
              icon={<Wallet size={20} />}
              title="Reduce Costs"
              description="Automate repetitive tasks and reduce operational overhead."
              points={[
                "Save billable hours",
                "Improve team efficiency",
                "Lower support costs"
              ]}
              accentColor="from-emerald-600 to-green-800"
              size="md"
              type="benefit"
              href="/costs"
            />
          </div>
          <div className="col-span-full sm:col-span-1 lg:col-span-3">
            <BentoItem
              icon={<Search size={20} />}
              title="Uncover Legal Insights"
              description="Go beyond search—identify risks and patterns with ease."
              points={[
                "Spot hidden clauses",
                "Generate smart summaries",
                "Understand jurisdictional nuances"
              ]}
              accentColor="from-violet-600 to-purple-800"
              size="md"
              type="benefit"
              href="/insights"
            />
          </div>
          
          {/* Third row - stats */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <BentoItem
              title="Time Saved"
              description="Average research time reduction reported by users."
              value="70%"
              icon={<Clock size={20} />}
              accentColor="from-purple-600 to-indigo-800"
              size="sm"
              type="stat"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <BentoItem
              title="Active Users"
              description="Legal professionals using our platform in India."
              value="5k+"
              icon={<Users size={20} />}
              accentColor="from-green-600 to-emerald-800"
              size="sm"
              type="stat"
            />
          </div>
          <div className="col-span-full sm:col-span-2 lg:col-span-2">
            <BentoItem
              title="Documents Processed"
              description="Indian legal documents analyzed by our AI."
              value="25M+"
              icon={<FileText size={20} />}
              accentColor="from-indigo-600 to-blue-800"
              size="sm"
              type="stat"
            />
          </div>
          
          {/* Fourth row - smaller benefits */}
          <div className="col-span-full sm:col-span-1 lg:col-span-3">
            <BentoItem
              icon={<Code size={20} />}
              title="Proprietary Algorithm"
              description="Built on a custom-trained model, fine-tuned for Indian legal data."
              points={[
                "Optimized for contract and litigation documents",
                "Designed by lawyers and engineers",
                "Continuously improving with feedback"
              ]}
              accentColor="from-amber-600 to-red-700"
              size="md"
              type="benefit"
              href="/technology"
            />
          </div>
          <div className="col-span-full sm:col-span-1 lg:col-span-3">
            <BentoItem
              icon={<MapPin size={20} />}
              title="Jurisdiction Awareness"
              description="AI that understands legal variations across Indian states and forums."
              points={[
                "Contextual reasoning by forum",
                "Tailored language for courts and tribunals",
                "Cross-jurisdictional citation intelligence"
              ]}
              accentColor="from-blue-600 to-cyan-800"
              size="md"
              type="benefit"
              href="/jurisdictions"
            />
          </div>
          
          {/* Fifth row - reliable results */}
          <div className="col-span-full sm:col-span-1 lg:col-span-4">
            <BentoItem
              icon={<Lock size={20} />}
              title="Reliable, Safe Results"
              description="No hallucinations. Just dependable, legally-grounded answers."
              points={[
                "Fact-checked responses",
                "Built-in citation engine",
                "Transparent model outputs"
              ]}
              accentColor="from-purple-600 to-violet-800"
              size="md"
              type="benefit"
              href="/reliability"
            />
          </div>
          <div className="col-span-full sm:col-span-1 lg:col-span-2">
            <BentoItem
              title="Sarah Johnson"
              description="Law Copilot has transformed our practice, cutting research time significantly while helping us deliver better results to clients."
              value="Partner at Johnson & Associates"
              accentColor="from-violet-600 to-purple-800"
              size="sm"
              type="quote"
            />
          </div>
          
          {/* Bottom Banner */}
          <div className="col-span-full lg:col-span-6">
            <BentoItem
              title="Built for Indian Legal Professionals"
              description="From trial courts to Supreme Court formats, Law Copilot is trained on the real content you use—judgments, statutes, notices, pleadings, and contracts."
              accentColor="from-indigo-600 to-blue-800"
              size="md"
              type="cta"
              href="/signup"
            />
          </div>
        </div>
      
      </div>
    </section>
  );
}