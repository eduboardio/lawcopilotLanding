"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  Upload, Brain, AlertCircle, FileCheck, 
  Users, Building, Scale, Bot, Lightbulb, User,
} from "lucide-react";

// Process Step component for the main workflow
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  example?: string;
  accentColor: string;
  className?: string;
}

const ProcessStep = ({
  number,
  title,
  description,
  icon,
  details,
  example,
  accentColor,
  className
}: ProcessStepProps) => {
  return (
    <div className={cn(
      "group relative rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/70",
      "bg-gradient-to-br from-background to-background/95",
      className
    )}>
      {/* Subtle background gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.07]",
          `bg-gradient-to-br ${accentColor}`
        )}
      />
      
      {/* Step number badge */}
      <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
        {number}
      </div>
      
      {/* Content container */}
      <div className="p-6 relative z-10 h-full flex flex-col">
        {/* Header with icon */}
        <div className="flex items-center mb-4">
          <div className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg mr-3",
            `bg-opacity-15 text-primary`
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {/* Details list */}
        <ul className="space-y-2 mb-4 flex-grow">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
              <span className="text-sm">{detail}</span>
            </li>
          ))}
        </ul>
        
        {/* Example */}
        {example && (
          <div className="mt-auto pt-3 border-t border-border/40">
            <div className="flex items-center mb-1.5">
              <Lightbulb size={16} className="text-amber-500 mr-2" />
              <span className="text-xs font-medium">EXAMPLE</span>
            </div>
            <p className="text-sm italic text-muted-foreground">{example}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// User type card for showcasing different user categories
interface UserTypeCardProps {
  userType: string;
  icon: React.ReactNode;
  requests: string[];
  processing: string[];
  results: string[];
  accentColor: string;
  className?: string;
}

const UserTypeCard = ({
  userType,
  icon,
  requests,
  processing,
  results,
  accentColor,
  className
}: UserTypeCardProps) => {
  return (
    <div className={cn(
      "group relative rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/70",
      "bg-gradient-to-br from-background to-background/95",
      className
    )}>
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.07]",
          `bg-gradient-to-br ${accentColor}`
        )}
      />
      
      {/* Content container */}
      <div className="p-6 relative z-10 h-full flex flex-col">
        {/* Header with icon */}
        <div className="flex items-center mb-5">
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg mr-3",
            `bg-opacity-15 text-primary`
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight">{userType}</h3>
        </div>
        
        {/* Three-section content */}
        <div className="grid grid-cols-1 gap-4">
          {/* Requests section */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Upload size={16} className="mr-2 text-blue-500" />
              <h4 className="text-sm font-semibold">REQUESTS</h4>
            </div>
            <ul className="space-y-1.5 pl-1">
              {requests.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Processing section */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Brain size={16} className="mr-2 text-violet-500" />
              <h4 className="text-sm font-semibold">PROCESSING</h4>
            </div>
            <ul className="space-y-1.5 pl-1">
              {processing.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Results section */}
          <div className="space-y-2">
            <div className="flex items-center">
              <FileCheck size={16} className="mr-2 text-emerald-500" />
              <h4 className="text-sm font-semibold">RESULTS</h4>
            </div>
            <ul className="space-y-1.5 pl-1">
              {results.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Summary card component
interface SummaryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  className?: string;
}

const SummaryCard = ({
  title,
  description,
  icon,
  accentColor,
  className
}: SummaryCardProps) => {
  return (
    <div className={cn(
      "group relative rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/70",
      "bg-gradient-to-br from-background to-background/95",
      className
    )}>
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.07]",
          `bg-gradient-to-br ${accentColor}`
        )}
      />
      
      {/* Content container */}
      <div className="p-6 relative z-10 h-full flex flex-col items-center text-center">
        <div className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full mb-4",
          `bg-opacity-15 text-primary`
        )}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export function ExplainerProcess() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-background/80">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              How Law-Co-pilot Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered legal assistant streamlines your workflow in four simple steps, from input to actionable legal insights.
          </p>
        </div>
        
        {/* Process flow bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-12">
          {/* Step 1: Input - Spans 6 columns */}
          <ProcessStep
            number={1}
            title="Input"
            description="Get started by providing legal context:"
            icon={<Upload size={22} />}
            details={[
              "Upload full contracts or case files",
              "Enter a legal question or task",
              "Paste specific clauses for review"
            ]}
            example='"Generate a lease agreement tailored for a commercial setup."'
            accentColor="from-blue-600 to-cyan-700"
            className="md:col-span-6"
          />
          
          {/* Step 2: AI Engine - Spans 6 columns */}
          <ProcessStep
            number={2}
            title="AI Engine"
            description="Trained on legal resources and documentation:"
            icon={<Brain size={22} />}
            details={[
              "Case law & precedents",
              "Statutes & government notifications",
              "Contracts (e.g., NDAs, MoUs, lease deeds)",
              "Tribunal & court-format documents"
            ]}
            accentColor="from-violet-600 to-indigo-700"
            className="md:col-span-6"
          />
          
          {/* Step 3: Legal Intelligence - Spans 6 columns */}
          <ProcessStep
            number={3}
            title="Legal Intelligence"
            description="Advanced analysis and intelligent recommendations:"
            icon={<AlertCircle size={22} />}
            details={[
              "Clause Analyzer",
              "Risk Detection",
              "Suggestion Engine"
            ]}
            example='"Missing indemnity clause." "Ambiguity in arbitration section."'
            accentColor="from-amber-500 to-orange-700"
            className="md:col-span-6"
          />
          
          {/* Step 4: Output - Spans 6 columns */}
          <ProcessStep
            number={4}
            title="Output"
            description="Professionally crafted legal deliverables:"
            icon={<FileCheck size={22} />}
            details={[
              "Refined legal draft",
              "Actionable insights",
              "Suggested improvements"
            ]}
            accentColor="from-emerald-600 to-teal-700"
            className="md:col-span-6"
          />
        </div>

        {/* User-specific use cases section header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-4">
            <Users size={18} className="text-primary mr-2" />
            <span className="text-sm font-medium pr-2">USER-TAILORED INTELLIGENCE</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">One AI Engine. Every Legal Use Case.</h3>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Law Copilot adapts to the unique needs of every user. Whether you&apos;re a business drafting NDAs, 
            an individual seeking answers, or a lawyer analyzing a contract—the same AI engine delivers 
            intelligent, tailored legal solutions.
          </p>
        </div>
        
        {/* User type cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Individual Users */}
          <UserTypeCard
            userType="Individuals"
            icon={<User size={24} />}
            requests={[
              "Draft a rental agreement",
              "Understand property dispute law",
              "Check a job contract for red flags"
            ]}
            processing={[
              "Auto-draft legal documents using trained templates",
              "Query statutory provisions relevant to facts",
              "Detect risks or unfair clauses using NLP"
            ]}
            results={[
              "Personalized contract draft",
              "Legal advice summary",
              "Clause-level issue alerts"
            ]}
            accentColor="from-blue-500 to-blue-700"
            className="md:col-span-1"
          />
          
          {/* Business Users */}
          <UserTypeCard
            userType="Businesses"
            icon={<Building size={24} />}
            requests={[
              "Generate NDAs for vendors",
              "Review partnership MoU",
              "Comply with DPDPDA guidelines"
            ]}
            processing={[
              "Apply modular contract logic to generate enforceable drafts",
              "Analyze agreement terms and check compliance",
              "Cross-reference data protection rules with content"
            ]}
            results={[
              "Multi-party NDA draft",
              "Risk-rated MoU report",
              "DPDPDA compliance checklist"
            ]}
            accentColor="from-purple-500 to-purple-700"
            className="md:col-span-1"
          />
          
          {/* Legal Professionals */}
          <UserTypeCard
            userType="Legal Professionals"
            icon={<Scale size={24} />}
            requests={[
              "Summarize 20-page lease deed",
              "Extract key dates and clauses",
              "Compare two versions of a contract"
            ]}
            processing={[
              "Compress content into structured briefs",
              "Use clause classification and tagging",
              "Run document comparison and flag differences"
            ]}
            results={[
              "Condensed lease summary",
              "Clause extraction table",
              "Side-by-side comparison output"
            ]}
            accentColor="from-emerald-500 to-emerald-700"
            className="md:col-span-1"
          />
        </div>
        
        {/* Summary banner - spans full width */}
        <SummaryCard
          title="One AI Engine. Every Legal Use Case."
          description="Whether you're drafting contracts, seeking legal clarity, or analyzing complex documents, Law Copilot delivers intelligent, tailored solutions for all your legal needs."
          icon={<Bot size={32} />}
          accentColor="from-primary to-primary/70"
          className="md:col-span-12"
        />
        
        {/* Final CTA section */}
        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Try Law-Co-pilot Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}