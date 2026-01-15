"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Zap,
  Target,
  FileText,
  Sparkles,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Smart Legal Search",
    description:
      "AI understands legal terminology and context, finding relevant cases even when keywords don't match exactly."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Jurisdiction Awareness",
    description:
      "Search filters automatically prioritize cases from relevant jurisdictions based on your case details."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Case Summaries",
    description:
      "AI-generated summaries of complex cases, highlighting the most important points and precedents."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Citation Verification",
    description:
      "Automatic verification of citations against authoritative Indian legal databases."
  }
];

const sources = [
  {
    category: "Indian Courts",
    items: [
      "Supreme Court of India",
      "All High Courts",
      "District Courts",
      "Tribunals (NCLT, NCLAT, CAT, etc.)",
      "Consumer Forums",
      "Quasi-Judicial Bodies"
    ]
  },
  {
    category: "Legal Resources",
    items: [
      "Indian Statutes & Acts",
      "Rules & Regulations",
      "Legal Treatises",
      "Law Commission Reports",
      "Government Gazettes",
      "Legal Commentary"
    ]
  }
];

export default function ResearchEnginePage() {
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
                AI-Powered Research
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block text-foreground dark:text-white">Legal Research</span>
              <span className="block text-foreground/80 dark:text-white/90">Made Simple</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
              Research Indian case law and statutes with AI-powered precision. Find relevant precedents,
              verify citations, and build stronger legal arguments in minutes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <Clock className="mr-2 h-4 w-4 text-emerald-500" />
                70% time savings
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <Shield className="mr-2 h-4 w-4 text-emerald-500" />
                Verified citations
              </Badge>
              <Badge variant="outline" className="border-emerald-500/30 px-4 py-2">
                <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                Comprehensive coverage
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
              Comprehensive Legal Sources
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {sources.map((source, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/30 backdrop-blur-sm dark:border-white/10"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{source.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {source.items.map((item, itemIdx) => (
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