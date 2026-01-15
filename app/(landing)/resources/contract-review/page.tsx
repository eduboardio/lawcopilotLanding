"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  CheckCircle,
  FileCheck,
  Target,
  Zap,
  Shield
} from "lucide-react";

const workflow = [
  {
    step: "01",
    title: "Upload & Initial Scan",
    description: "Upload contract to Law Copilot for automated initial analysis",
    actions: [
      "Extract key terms and clauses automatically",
      "Identify document type and jurisdiction",
      "Flag any obvious formatting or structural issues"
    ]
  },
  {
    step: "02",
    title: "Risk Assessment",
    description: "AI identifies potential risks and problematic clauses",
    actions: [
      "Highlight non-standard or risky provisions",
      "Flag missing essential clauses",
      "Compare against your firm's standard terms",
      "Identify unfavorable liability allocations"
    ]
  },
  {
    step: "03",
    title: "Detailed Review",
    description: "Lawyer reviews flagged items and AI suggestions",
    actions: [
      "Focus attention on high-risk areas identified by AI",
      "Review suggested modifications and alternatives",
      "Add lawyer judgment and strategic considerations",
      "Verify AI findings and add context"
    ]
  },
  {
    step: "04",
    title: "Report & Recommendations",
    description: "Generate comprehensive review report with findings",
    actions: [
      "Compile all findings into organized report",
      "Include risk ratings and recommendations",
      "Provide redline suggestions for negotiations",
      "Export report for client or internal use"
    ]
  }
];

const bestPractices = [
  {
    title: "Start with High-Volume, Lower-Risk Contracts",
    description:
      "Begin by using AI for NDAs, vendor agreements, and other routine contracts to build confidence before moving to complex M&A agreements."
  },
  {
    title: "Build Your Playbook",
    description:
      "Train the AI on your firm's standard positions, acceptable clauses, and risk tolerance. The more AI learns your preferences, the better it performs."
  },
  {
    title: "Use Checklists",
    description:
      "Create contract-specific checklists that complement AI analysis. Ensure both AI and human review cover all critical points."
  },
  {
    title: "Always Have Human Review",
    description:
      "AI identifies issues but lawyers provide judgment. Never skip human review—use AI to make review faster and more thorough, not to replace it."
  },
  {
    title: "Track and Improve",
    description:
      "Monitor which AI suggestions you accept or reject. Over time, AI learns your preferences and becomes more accurate."
  }
];

const benefits = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "70% faster review",
    description: "Complete reviews in hours, not days"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Fewer missed issues",
    description: "AI catches what human review might miss"
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Consistent quality",
    description: "Same thoroughness across all contracts"
  }
];

export default function ContractReviewPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                Best Practices
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">Contract Review</span>
              <span className="block text-foreground/80 dark:text-white/90">Best Practices</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              Master efficient contract review workflows using AI document analysis and risk
              identification features to deliver faster, more thorough results.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm dark:border-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">{benefit.icon}</div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground dark:text-white">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground dark:text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold text-foreground dark:text-white">
              AI-Enhanced Review Workflow
            </h2>

            <div className="space-y-6">
              {workflow.map((item, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                        <span className="font-bold text-foreground dark:text-white">
                          {item.step}
                        </span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground dark:text-white/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.actions.map((action, actionIdx) => (
                        <li key={actionIdx} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-sm text-muted-foreground dark:text-white/70">
                            {action}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-10 backdrop-blur-sm dark:border-white/10 md:p-12">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                  <FileCheck className="h-6 w-6 text-foreground dark:text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground dark:text-white">
                  Best Practices for Success
                </h2>
              </div>

              <div className="space-y-6">
                {bestPractices.map((practice, idx) => (
                  <div key={idx}>
                    <h3 className="mb-2 font-semibold text-foreground dark:text-white">
                      {practice.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                      {practice.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}