"use client";

import { motion } from "framer-motion";
import { DraftingFeature } from "./DraftingFeature";
import { AnalysisFeature } from "./AnalysisFeature";
import { ResearchFeature } from "./ResearchFeature";
import { CaseIntelligenceFeature } from "./CaseIntelligenceFeature.";
// import { ComplianceBadges } from "./ComplianceBadges";

export default function Features() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                AI-Powered Legal Intelligence
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold tracking-tight md:mb-6 md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">
                Everything You Need for
              </span>
              <span className="block text-foreground/80 dark:text-white/90">
                Modern Legal Practice
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
              Built specifically for Indian legal practice—from drafting to research, analysis to translation. See Law Copilot in action.
            </p>
          </motion.div>
          
          <div className="space-y-0">
            <DraftingFeature />
            <AnalysisFeature />
            <ResearchFeature />
            <CaseIntelligenceFeature />
          </div>
        </div>
      </section>
    </>
  );
}