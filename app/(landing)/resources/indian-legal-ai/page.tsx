"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  CheckCircle,
  Scale,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const sections = [
  {
    title: "How AI Transforms Legal Work",
    icon: <Zap className="h-6 w-6" />,
    content: [
      {
        subtitle: "Document Drafting",
        description:
          "AI can draft contracts, pleadings, and legal notices in minutes, learning from your firm's templates and Indian legal standards. What took hours now takes minutes, with consistent quality."
      },
      {
        subtitle: "Legal Research",
        description:
          "Search millions of Indian judgments instantly. AI understands context and legal concepts, finding relevant precedents even when exact keywords don't match."
      },
      {
        subtitle: "Contract Analysis",
        description:
          "Review hundreds of contracts simultaneously for due diligence. AI identifies risks, extracts obligations, and flags non-standard clauses automatically."
      }
    ]
  },
  {
    title: "AI Across Practice Areas",
    icon: <Scale className="h-6 w-6" />,
    content: [
      {
        subtitle: "Litigation",
        description:
          "Research precedents, analyze judgments, draft pleadings, and build case strategies with AI insights from thousands of similar cases."
      },
      {
        subtitle: "Corporate & M&A",
        description:
          "Draft agreements, conduct due diligence, review contracts at scale, and ensure compliance with regulatory requirements."
      },
      {
        subtitle: "Real Estate",
        description:
          "Draft deeds and agreements, review property documents, verify titles, and manage transaction documentation efficiently."
      }
    ]
  },
  {
    title: "Benefits for Law Firms",
    icon: <TrendingUp className="h-6 w-6" />,
    content: [
      {
        subtitle: "Efficiency Gains",
        description:
          "Reduce time on routine tasks by 70%. Free up senior lawyers for strategy and client relationships while maintaining document quality."
      },
      {
        subtitle: "Scalability",
        description:
          "Handle more clients without proportional increases in headcount. Junior associates produce senior-level work with AI guidance."
      },
      {
        subtitle: "Competitive Advantage",
        description:
          "Faster turnarounds, higher quality, and better client service. Win more business by delivering exceptional results consistently."
      }
    ]
  }
];

const considerations = [
  {
    title: "AI Augments, Doesn't Replace",
    description:
      "AI is a powerful tool that enhances lawyer capabilities but doesn't replace professional judgment, client relationships, or strategic thinking."
  },
  {
    title: "Quality Control Essential",
    description:
      "Always review AI-generated content. While highly accurate, AI should be treated as a first draft requiring lawyer review and approval."
  },
  {
    title: "Data Security Matters",
    description:
      "Choose platforms with bank-level encryption, Indian data residency, and clear policies that your data won't train AI models."
  },
  {
    title: "Training is Key",
    description:
      "Proper training ensures your team uses AI effectively. Invest time in onboarding and ongoing education for maximum ROI."
  }
];

export default function IndianLegalAIPage() {
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
                Practice Guide
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">AI for Indian</span>
              <span className="block text-foreground/80 dark:text-white/90">Legal Practice</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              How AI transforms legal work in India—from High Courts to District Courts, litigation
              to transactional practice, and solo practitioners to large firms.
            </p>
          </motion.div>

          {/* Main Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-12"
          >
            {sections.map((section, idx) => (
              <div key={idx}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">{section.icon}</div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, itemIdx) => (
                    <Card
                      key={itemIdx}
                      className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg">{item.subtitle}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Important Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-10 backdrop-blur-sm dark:border-white/10 md:p-12">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                  <Shield className="h-6 w-6 text-foreground dark:text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground dark:text-white">
                  Important Considerations
                </h2>
              </div>

              <div className="space-y-4">
                {considerations.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/50 p-4 dark:border-white/10"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">
                        {item.description}
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