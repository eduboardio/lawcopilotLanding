"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  FileText, 
  ShieldAlert, 
  FileSearch, 
  Globe, 
  Library,
  ArrowRight,
  Sparkles,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureShowcase {
  badge: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  preview: React.ReactNode;
}

// Premium UI Previews matching Hero aesthetic
const ResearchPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-white/50">
      <Search className="h-3.5 w-3.5" />
      <span className="font-medium">Natural language query</span>
    </div>
    <div className="rounded-lg bg-muted/50 dark:bg-white/[0.03] p-3 font-mono text-xs text-foreground/90 dark:text-white/90">
      "Section 73 remedies for breach"
    </div>
    <div className="space-y-2 text-xs">
      <div className="flex items-start gap-2">
        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 dark:bg-white/40" />
        <div className="flex-1 leading-relaxed text-muted-foreground dark:text-white/60">
          <span className="font-medium text-foreground dark:text-white">Indian Contract Act, 1872 § 73</span> — Compensation for loss or damage caused by breach
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 dark:bg-white/40" />
        <div className="flex-1 leading-relaxed text-muted-foreground dark:text-white/60">
          <span className="font-medium text-foreground dark:text-white">Hadley v Baxendale (1854)</span> principles applied in Indian jurisprudence
        </div>
      </div>
    </div>
  </div>
);

const DraftingPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-foreground dark:text-white">Service Agreement Draft</span>
      <span className="rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">GENERATED</span>
    </div>
    <div className="space-y-2 rounded-lg bg-muted/30 dark:bg-white/[0.02] p-3 text-xs leading-relaxed text-muted-foreground dark:text-white/70">
      <p>THIS AGREEMENT is made on this ___ day of _______, 2025</p>
      <p>BETWEEN: [Party A], a company incorporated under the Companies Act, 2013...</p>
      <p>AND: [Party B], having its registered office at...</p>
    </div>
    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground dark:text-white/50">
      <Sparkles className="h-3 w-3" />
      <span>Generated in 3.8 seconds • Indian compliance verified</span>
    </div>
  </div>
);

const RiskPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400 animate-pulse" />
      <span className="text-sm font-semibold text-foreground dark:text-white">Risk Analysis Complete</span>
    </div>
    <div className="space-y-2">
      <div className="rounded-lg border-l-2 border-red-500/70 dark:border-red-400/70 bg-red-500/5 dark:bg-red-500/10 p-3">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500 dark:bg-red-400" />
          <p className="text-xs font-semibold text-red-700 dark:text-red-300">High Risk Detected</p>
        </div>
        <p className="text-[11px] text-muted-foreground dark:text-white/60">Clause 12.3: Unlimited liability exposure without cap</p>
      </div>
      <div className="rounded-lg border-l-2 border-amber-500/70 dark:border-amber-400/70 bg-amber-500/5 dark:bg-amber-500/10 p-3">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">Review Required</p>
        </div>
        <p className="text-[11px] text-muted-foreground dark:text-white/60">Section 8: Missing termination rights for cause</p>
      </div>
    </div>
  </div>
);

const DocumentPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="rounded bg-muted dark:bg-white/10 p-1.5">
          <FileSearch className="h-3.5 w-3.5 text-foreground dark:text-white" />
        </div>
        <span className="text-sm font-semibold text-foreground dark:text-white">lease_agreement.pdf</span>
      </div>
      <span className="text-[10px] text-muted-foreground dark:text-white/50">42 pages analyzed</span>
    </div>
    <div className="space-y-2 rounded-lg bg-muted/30 dark:bg-white/[0.02] p-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">Key Terms Extracted</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Check className="h-3 w-3 text-foreground/50 dark:text-white/50" />
          <span className="text-foreground dark:text-white">Rent: ₹45,000/mo</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-3 w-3 text-foreground/50 dark:text-white/50" />
          <span className="text-foreground dark:text-white">Duration: 11 months</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-3 w-3 text-foreground/50 dark:text-white/50" />
          <span className="text-foreground dark:text-white">Security: ₹1,35,000</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-3 w-3 text-foreground/50 dark:text-white/50" />
          <span className="text-foreground dark:text-white">Lock-in: 6 months</span>
        </div>
      </div>
    </div>
  </div>
);

const TranslatorPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center justify-center gap-3">
      <span className="rounded-lg bg-muted dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground dark:text-white">English</span>
      <ArrowRight className="h-4 w-4 text-muted-foreground dark:text-white/40" />
      <span className="rounded-lg bg-muted dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-foreground dark:text-white">हिंदी</span>
    </div>
    <div className="space-y-3 text-xs">
      <div className="rounded-lg bg-muted/30 dark:bg-white/[0.02] p-3">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">Source</p>
        <p className="text-foreground dark:text-white">"Breach of contract under Section 73"</p>
      </div>
      <div className="rounded-lg bg-muted/30 dark:bg-white/[0.02] p-3">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">Translation</p>
        <p className="text-foreground dark:text-white">"धारा 73 के तहत अनुबंध का उल्लंघन"</p>
      </div>
    </div>
    <p className="text-[10px] italic text-muted-foreground dark:text-white/50">Legal terminology preserved with contextual accuracy</p>
  </div>
);

const TemplatesPreview = () => (
  <div className="space-y-3 rounded-xl border border-border/50 dark:border-white/10 bg-background/50 dark:bg-white/[0.02] backdrop-blur-sm p-4">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-foreground dark:text-white">Template Library</span>
      <span className="text-[10px] text-muted-foreground dark:text-white/50">2,000+ templates</span>
    </div>
    <div className="space-y-1.5">
      {[
        { name: "Sale Deed", category: "Property" },
        { name: "Rent Agreement", category: "Tenancy" },
        { name: "Power of Attorney", category: "Authorization" },
        { name: "Legal Notice", category: "Litigation" }
      ].map((template, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg bg-muted/30 dark:bg-white/[0.02] px-3 py-2 transition-colors hover:bg-muted/50 dark:hover:bg-white/[0.04]">
          <span className="text-xs font-medium text-foreground dark:text-white">{template.name}</span>
          <span className="rounded-full bg-foreground/5 dark:bg-white/10 px-2 py-0.5 text-[10px] text-muted-foreground dark:text-white/60">{template.category}</span>
        </div>
      ))}
    </div>
  </div>
);

const features: FeatureShowcase[] = [
  {
    badge: "Intelligence",
    icon: <Search className="h-5 w-5" />,
    title: "AI Legal Research",
    description: "Natural language search across Indian case law, statutes, and regulations. Get precise answers with proper citations in seconds.",
    preview: <ResearchPreview />
  },
  {
    badge: "Automation",
    icon: <FileText className="h-5 w-5" />,
    title: "Automated Legal Drafting",
    description: "Generate compliant contracts, notices, and pleadings. Structured drafts ready for review, customized to Indian legal standards.",
    preview: <DraftingPreview />
  },
  {
    badge: "Protection",
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Clause & Risk Analyzer",
    description: "Detect problematic clauses, missing protections, and compliance gaps. Automated risk assessment for every document.",
    preview: <RiskPreview />
  },
  {
    badge: "Analysis",
    icon: <FileSearch className="h-5 w-5" />,
    title: "Document Review Copilot",
    description: "Upload any legal document for instant analysis. Get structured summaries, key insights, and intelligent Q&A capabilities.",
    preview: <DocumentPreview />
  },
  {
    badge: "Translation",
    icon: <Globe className="h-5 w-5" />,
    title: "Legal Translator",
    description: "Translate legal content across Indian languages while preserving legal terminology and context for accurate communication.",
    preview: <TranslatorPreview />
  },
  {
    badge: "Resources",
    icon: <Library className="h-5 w-5" />,
    title: "Templates Library",
    description: "Access 2000+ ready-to-use Indian legal templates. Contracts, affidavits, notices, and forms for every jurisdiction.",
    preview: <TemplatesPreview />
  }
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Subtle background matching Hero */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">Enterprise Capabilities</span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:mb-6 md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
              Powerful AI Tools for
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Every Legal Workflow
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            Built specifically for Indian legal practice—research, draft, analyze, and review with AI that understands your jurisdiction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.01] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5 dark:to-white/[0.02]" />
              
              {/* Card */}
              <div className="relative h-full rounded-2xl border border-border/50 bg-background/80 p-6 backdrop-blur-md transition-all duration-300 group-hover:border-border group-hover:bg-background group-hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:group-hover:bg-white/[0.05] dark:group-hover:shadow-2xl md:p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">
                    {feature.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-3 text-xl font-semibold text-foreground dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                  {feature.description}
                </p>

                {/* Preview */}
                <motion.div
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.8,
                    y: hoveredIndex === index ? 0 : 4
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.preview}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center md:mt-20"
        >
          <p className="mb-6 text-sm text-muted-foreground dark:text-white/60">
            Ready to transform your legal practice?
          </p>
          <Button 
            size="lg" 
            className="group rounded-full bg-foreground px-8 py-6 text-base font-medium text-background shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            <Link href="/contact" className="flex items-center">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}