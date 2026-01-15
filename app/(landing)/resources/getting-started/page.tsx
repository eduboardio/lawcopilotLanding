"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  CheckCircle,
  Users,
  Settings,
  Zap,
  BookOpen,
  Target,
  TrendingUp
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Account Setup & Configuration",
    icon: <Settings className="h-6 w-6" />,
    description: "Set up your Law Copilot account and configure it for your firm's needs.",
    details: [
      "Create your firm account and invite team members",
      "Configure user roles and permissions",
      "Set up practice area preferences",
      "Connect integrations (optional)",
      "Import existing templates and precedents"
    ]
  },
  {
    number: "02",
    title: "Team Training & Onboarding",
    icon: <Users className="h-6 w-6" />,
    description: "Get your team up to speed with Law Copilot's core features.",
    details: [
      "Schedule live training sessions with our team",
      "Watch product walkthrough videos",
      "Explore sample documents and use cases",
      "Practice with test cases and scenarios",
      "Set up team workflows and best practices"
    ]
  },
  {
    number: "03",
    title: "Start with Key Features",
    icon: <Zap className="h-6 w-6" />,
    description: "Begin using Law Copilot's most impactful features first.",
    details: [
      "Draft your first legal document with AI",
      "Run a contract review and analysis",
      "Conduct legal research on a real case",
      "Translate a document to regional language",
      "Analyze case data for strategic insights"
    ]
  },
  {
    number: "04",
    title: "Scale & Optimize",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Expand usage across your firm and optimize workflows.",
    details: [
      "Roll out to additional practice groups",
      "Build custom templates and workflows",
      "Track usage metrics and ROI",
      "Gather team feedback for improvements",
      "Schedule regular check-ins with support"
    ]
  }
];

const quickWins = [
  {
    title: "Document Drafting",
    description: "Start with simple contracts or notices to see immediate time savings",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "Contract Review",
    description: "Upload existing contracts for quick risk assessment and analysis",
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    title: "Legal Research",
    description: "Search for precedents on your current cases to find relevant citations",
    icon: <BookOpen className="h-5 w-5" />
  }
];

export default function GettingStartedPage() {
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
                Implementation Guide
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">Getting Started with</span>
              <span className="block text-foreground/80 dark:text-white/90">Law Copilot</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              A comprehensive guide to onboarding your firm and maximizing the value of AI-powered
              legal intelligence for Indian practice.
            </p>
          </motion.div>

          {/* Implementation Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-8"
          >
            <h2 className="text-2xl font-bold text-foreground md:text-3xl dark:text-white">
              Implementation Roadmap
            </h2>

            {steps.map((step, idx) => (
              <Card
                key={idx}
                className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                      <div className="text-foreground dark:text-white">{step.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 text-sm font-bold text-muted-foreground dark:text-white/60">
                        {step.number}
                      </div>
                      <CardTitle className="mb-2 text-xl">{step.title}</CardTitle>
                      <p className="text-sm text-muted-foreground dark:text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-sm text-muted-foreground dark:text-white/70">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Quick Wins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-10 backdrop-blur-sm dark:border-white/10 md:p-12">
              <h2 className="mb-8 text-2xl font-bold text-foreground dark:text-white">
                Quick Wins to Get Started
              </h2>

              <div className="space-y-4">
                {quickWins.map((win, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-border/30 bg-background/50 p-4 dark:border-white/10"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted dark:bg-white/10">
                      <div className="text-foreground dark:text-white">{win.icon}</div>
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground dark:text-white">
                        {win.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">
                        {win.description}
                      </p>
                    </div>
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