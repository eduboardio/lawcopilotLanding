"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Search,
  FileText,
  BookOpen,
  Scale,
  Languages,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  type: "product" | "guide";
  size: "small" | "medium" | "large" | "wide";
  path: string;
}

const RESOURCES: Resource[] = [
  // Products - link to actual pages
  {
    id: "legal-drafting",
    title: "AI Legal Drafting",
    description:
      "Draft contracts, pleadings, and legal documents with AI trained on Indian legal frameworks. Generate court-ready documents in minutes.",
    icon: <FileText className="h-8 w-8" />,
    category: "Core Product",
    type: "product",
    size: "large",
    path: "/document-drafting"
  },
  {
    id: "document-analysis",
    title: "Document Intelligence",
    description:
      "Extract insights and identify risks across large document sets with precision AI analysis.",
    icon: <Shield className="h-7 w-7" />,
    category: "Core Product",
    type: "product",
    size: "medium",
    path: "/document-analysis"
  },
  {
    id: "legal-research",
    title: "Legal Research",
    description:
      "Search Indian case law and statutes with AI-powered precision. Find relevant precedents instantly.",
    icon: <BookOpen className="h-7 w-7" />,
    category: "Core Product",
    type: "product",
    size: "medium",
    path: "/research-engine"
  },
  {
    id: "case-analytics",
    title: "Case Analytics",
    description:
      "Analyze judgments and build litigation strategies with AI insights from thousands of cases.",
    icon: <BarChart3 className="h-7 w-7" />,
    category: "Core Product",
    type: "product",
    size: "medium",
    path: "/case-analytics"
  },
  {
    id: "legal-translation",
    title: "Legal Translation",
    description:
      "Translate legal documents across Indian languages while preserving terminology and formal context.",
    icon: <Languages className="h-7 w-7" />,
    category: "Core Product",
    type: "product",
    size: "wide",
    path: "/translation"
  },

  // Guides - link to guide pages
  {
    id: "getting-started",
    title: "Getting Started with Law Copilot",
    description:
      "Complete guide to onboarding your firm and maximizing AI-powered legal intelligence for Indian practice.",
    icon: <Zap className="h-6 w-6" />,
    category: "Implementation Guide",
    type: "guide",
    size: "medium",
    path: "/resources/getting-started"
  },
  {
    id: "indian-legal-ai",
    title: "AI for Indian Legal Practice",
    description:
      "How AI transforms legal work in India—from High Courts to District Courts, litigation to transactional.",
    icon: <Scale className="h-6 w-6" />,
    category: "Practice Guide",
    type: "guide",
    size: "small",
    path: "/resources/indian-legal-ai"
  },
  {
    id: "contract-review",
    title: "Contract Review Best Practices",
    description:
      "Master efficient workflows using AI document analysis and risk identification features.",
    icon: <FileText className="h-6 w-6" />,
    category: "Best Practices",
    type: "guide",
    size: "small",
    path: "/resources/contract-review"
  }
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const sizeClasses = {
    small: "col-span-12 sm:col-span-6 lg:col-span-3 row-span-1",
    medium: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-1",
    large: "col-span-12 lg:col-span-8 row-span-2",
    wide: "col-span-12 lg:col-span-6 row-span-1"
  };

  return (
    <Link
      href={resource.path}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        "border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]",
        "p-6",
        sizeClasses[resource.size],
        resource.size === "large" && "lg:p-10"
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent dark:from-white/[0.03]" />

      <div className="relative flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted dark:bg-white/10">
          <div className="text-foreground dark:text-white">{resource.icon}</div>
        </div>

        {/* Category badge */}
        <span className="mb-3 w-fit rounded-full bg-muted/80 px-3 py-1 text-xs font-medium dark:bg-white/10">
          {resource.category}
        </span>

        {/* Content */}
        <h3
          className={cn(
            "mb-3 font-bold text-foreground dark:text-white",
            resource.size === "large" ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
          )}
        >
          {resource.title}
        </h3>

        <p
          className={cn(
            "mb-auto leading-relaxed text-muted-foreground dark:text-white/70",
            resource.size === "large" ? "text-base lg:text-lg" : "text-sm"
          )}
        >
          {resource.description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground dark:text-white">
          <span>{resource.type === "product" ? "Explore feature" : "Read guide"}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/[0.05]" />
    </Link>
  );
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filter resources
  const filteredResources = RESOURCES.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Header */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              Products & Resources
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">Everything You Need</span>
            <span className="block text-foreground/80 dark:text-white/90">
              for Legal Excellence
            </span>
          </h1>

          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
            Explore our AI-powered products, implementation guides, and insights for modern Indian
            legal practice.
          </p>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground dark:text-white/60" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="rounded-full py-6 pl-10 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selectedType === null
                    ? "bg-foreground text-background dark:bg-white dark:text-black"
                    : "bg-muted/50 hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20"
                )}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType("product")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selectedType === "product"
                    ? "bg-foreground text-background dark:bg-white dark:text-black"
                    : "bg-muted/50 hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20"
                )}
              >
                Products
              </button>
              <button
                onClick={() => setSelectedType("guide")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selectedType === "guide"
                    ? "bg-foreground text-background dark:bg-white dark:text-black"
                    : "bg-muted/50 hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20"
                )}
              >
                Guides
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <div className="relative z-10 container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-12 gap-6 auto-rows-fr">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground dark:text-white/70">
                No resources found matching your search.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}