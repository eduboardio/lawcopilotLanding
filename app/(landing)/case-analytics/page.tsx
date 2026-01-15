// ==========================================================================
// ALL PRODUCT AND GUIDE PAGES
// Split each section into its respective file in your project
// ==========================================================================

// ==========================================================================
// FILE: case-analytics/page.tsx
// ==========================================================================

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  Target,
  AlertTriangle,
  Sparkles,
  Shield,
  CheckCircle,
  Scale
} from "lucide-react";

const features = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Success Probability Analysis",
    description:
      "Data-driven estimates of case success probability based on precedent analysis and jurisdiction-specific factors."
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Risk Identification",
    description:
      "Identify potential challenges, weaknesses in arguments, and counterarguments you might face."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Strategic Recommendations",
    description:
      "AI-generated insights to strengthen your case and optimize your legal strategy."
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Precedent Patterns",
    description:
      "Analyze judicial trends and citation patterns across similar cases in your jurisdiction."
  }
];

const capabilities = [
  {
    title: "Judgment Analysis",
    items: [
      "Extract key holdings and legal reasoning",
      "Identify ratio decidendi vs obiter dicta",
      "Compare judgments across jurisdictions",
      "Track judicial interpretation trends"
    ]
  },
  {
    title: "Litigation Strategy",
    items: [
      "Assess likelihood of favorable outcomes",
      "Identify strongest arguments based on precedents",
      "Predict potential opposing arguments",
      "Recommend case law citations"
    ]
  }
];

export default function CaseAnalyticsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                AI-Powered Analytics
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">Case Analytics</span>
              <span className="block text-foreground/80 dark:text-white/90">& Intelligence</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              Analyze judgments and build data-driven litigation strategies with AI insights from
              thousands of Indian legal cases and precedents.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <BarChart3 className="mr-2 h-4 w-4 text-emerald-500" />
                Predictive insights
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <Shield className="mr-2 h-4 w-4 text-emerald-500" />
                Risk assessment
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                Strategic recommendations
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl dark:text-white">
              Core Features
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                      <div className="text-foreground dark:text-white">{feature.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground dark:text-white/70">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl dark:text-white">
              Advanced Capabilities
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((capability, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {capability.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-sm text-muted-foreground dark:text-white/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}