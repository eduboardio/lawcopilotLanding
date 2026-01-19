"use client";

import { motion } from "framer-motion";
import { DraftingFeature } from "./feature/DraftingFeature";
import { AnalysisFeature } from "./feature/AnalysisFeature";
import { ResearchFeature } from "./feature/ResearchFeature";
import { CaseIntelligenceFeature } from "./feature/CaseIntelligenceFeature.";

export default function Features() {
  return (
    <>
      <section id="features" className="relative w-full overflow-hidden bg-background">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <div className="container relative z-10 mx-auto py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Section Header */}
          <motion.div
            className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
              <span className="text-[10px] sm:text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                AI-Powered Legal Intelligence
              </span>
            </div>

            <h2 className="mb-3 sm:mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-foreground dark:text-white">
                Everything You Need for
              </span>
              <span className="block text-foreground/80 dark:text-white/90">
                Modern Legal Practice
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground dark:text-white/70">
              Built specifically for Indian legal practice—from drafting to research, analysis to translation. See Law Copilot in action.
            </p>
</motion.div>
          
          <div className="space-y-0">
            <div id="legal-drafting">
              <DraftingFeature />
            </div>
            <div id="document-analysis">
              <AnalysisFeature />
            </div>
            <div id="legal-research">
              <ResearchFeature />
            </div>
            <div id="case-intelligence">
              <CaseIntelligenceFeature />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}