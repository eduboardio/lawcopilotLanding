"use client";

import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Award,
  TrendingUp,
  Brain,
  Target,
  Sparkles
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const lawyerBenefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Work Faster",
    description: "Complete in hours what used to take days. Draft documents, research precedents, and analyze cases at lightning speed."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Enhance Quality",
    description: "Identify gaps, strengthen arguments, and ensure your work meets professional legal standards before it reaches court."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Focus on Strategy",
    description: "Spend less time on routine tasks and focus more on legal reasoning, case strategy, and client counsel."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Grow Your Practice",
    description: "Take on more matters without compromising quality even as a solo practitioner or small practice."
  }
];

const workflowSteps = [
  {
    number: "01",
    title: "Describe Your Task",
    description: "Tell Law Copilot what you need—draft a contract, research a point of law, or analyze a judgment."
  },
  {
    number: "02",
    title: "Review AI Output",
    description: "Get a complete first draft or comprehensive analysis in minutes, not hours."
  },
  {
    number: "03",
    title: "Refine & Deliver",
    description: "Refine as needed and deliver court-ready work with confidence."
  }
];

const professionalFeatures = [
  "Trained specifically on Indian legal frameworks",
  "Understands jurisdiction-specific requirements",
  "Maintains formal legal tone and language",
  "Proper citation formatting and verification",
  "Client confidentiality and data security",
  "Available 24/7 for urgent matters"
];

export default function LawyersPage() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:mb-28"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <Sparkles className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              AI-Powered Legal Practice
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
            AI Built for Practicing
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Lawyers
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
          Research case law faster, draft precise legal documents, and analyse judgments with confidence using AI designed for Indian legal practice.
          </p>

          <Button
            className={cn("font-medium text-xs sm:text-sm mt-12 p-6")}
            asChild
          >
            <Link href="https://app.lawcopilot.io/signup">Get Started Free</Link>
          </Button>
        </motion.div>

        {/* Core Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Why Lawyers Choose Law Copilot
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
            Built for everyday legal work — with AI trained on Indian law, courts, and drafting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {lawyerBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.05]" />
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center"> 
          <Button
            className={cn("font-medium text-xs sm:text-sm mt-12 p-6")}
            asChild
          >
            <Link href="https://app.lawcopilot.io/signup">Transform Now</Link>
          </Button>
          </div>
        </motion.div>

        {/* Features Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Core Capabilities
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Everything you need for modern legal practice in one platform
            </p>
          </div>

          <Tabs defaultValue="drafting" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 md:mb-12">
              <TabsTrigger value="drafting" className="text-sm md:text-base">
                Document Drafting
              </TabsTrigger>
              <TabsTrigger value="research" className="text-sm md:text-base">
                Legal Research
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm md:text-base">
                Critical Analysis
              </TabsTrigger>
            </TabsList>

            {/* Drafting Tab */}
            <TabsContent value="drafting" className="mt-0">
              <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                <div className="md:col-span-2">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
                    <FileText className="h-8 w-8 text-foreground dark:text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl dark:text-white">
                    Drafting Documents
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground dark:text-white/70">
                    Create flawless legal documents in minutes instead of hours. Our AI understands
                    legal context, formatting requirements, and Indian legal standards.
                  </p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Draft contracts, briefs, motions, and more
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Built-in citation formatting and checking
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Customizable templates for consistency
                      </span>
                    </li>
                  </ul>
                  <div className="rounded-xl border border-border/30 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground dark:text-white/60" />
                      <span className="text-sm font-semibold text-foreground dark:text-white">
                        Time Saved
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/60">
                      Reduce drafting time by 70% on average
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="relative aspect-video w-full overflow-hidden border border-border/50 bg-muted/50 md:aspect-auto md:h-[400px] lg:h-[400px] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                    <Image
                      src="/draft.webp"
                      alt="Document drafting interface"
                      fill
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/dark_draft.webp"
                      alt="Document drafting interface"
                      fill
                      className="hidden object-contain dark:block"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Research Tab */}
            <TabsContent value="research" className="mt-0">
              <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                <div className="md:col-span-2">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
                    <BookOpen className="h-8 w-8 text-foreground dark:text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl dark:text-white">
                    Reliable Research
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground dark:text-white/70">
                    Access and analyze case law and legislation faster than ever with AI-powered
                    legal research tools trained on Indian legal databases.
                  </p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Search and summarize relevant case law
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Track latest legislation and regulatory changes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Generate comprehensive research memos
                      </span>
                    </li>
                  </ul>
                  <div className="rounded-xl border border-border/30 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground dark:text-white/60" />
                      <span className="text-sm font-semibold text-foreground dark:text-white">
                        Accuracy
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/60">
                      Citations verified against authoritative sources
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="relative aspect-video w-full overflow-hidden border border-border/50 bg-muted/50 md:aspect-auto md:h-[400px] lg:h-[400px] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                    <Image
                      src="/legal.webp"
                      alt="Legal research interface"
                      fill
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/dark_legal.webp"
                      alt="Legal research interface"
                      fill
                      className="hidden object-contain dark:block"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-0">
              <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                <div className="md:col-span-2">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
                    <BarChart3 className="h-8 w-8 text-foreground dark:text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl dark:text-white">
                  Critical Legal Analysis
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground dark:text-white/70">
                  Strengthen your arguments with structured analysis of judgments, facts, and precedent supported by AI-assisted reasoning for winning strategies
                  </p>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Identify patterns in case outcomes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Analyze strengths and weaknesses in arguments
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-sm leading-relaxed text-foreground dark:text-white">
                        Generate strategic advice based on precedent
                      </span>
                    </li>
                  </ul>
                  <div className="rounded-xl border border-border/30 bg-muted/30 p-4 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground dark:text-white/60" />
                      <span className="text-sm font-semibold text-foreground dark:text-white">
                        Intelligence
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/60">
                      AI-powered insights from thousands of cases
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="relative aspect-video w-full overflow-hidden border border-border/50 bg-muted/50 md:aspect-auto md:h-[400px] lg:h-[400px] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                    <Image
                      src="/analysis.webp"
                      alt="Legal analytics dashboard"
                      fill
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/dark_analysis.webp"
                      alt="Legal analytics dashboard"
                      fill
                      className="hidden object-contain dark:block"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Simple, Efficient Workflow
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
            From legal question to professional output in three clear steps
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector line - desktop only */}
                {idx < workflowSteps.length - 1 && (
                  <div className="absolute left-full top-12 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-border via-border to-transparent lg:block dark:from-white/10 dark:via-white/10" />
                )}

                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="mb-4 inline-block rounded-lg bg-foreground/10 px-4 py-2 text-2xl font-bold text-foreground dark:bg-white/10 dark:text-white">
                    {step.number}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-12 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent dark:from-white/[0.03]" />

            <div className="relative">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
                  Built for Professional Excellence
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
                  Every feature designed by practicing Lawyers
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {professionalFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/50 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-sm leading-relaxed text-foreground dark:text-white">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-foreground/[0.03] to-transparent p-12 backdrop-blur-md dark:border-white/10 dark:from-white/[0.05] md:p-16">
            <div className="relative text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
                Join Thousands of Lawyers Practicing Smarter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground dark:text-white/70">
                From solo practitioners to senior advocates, lawyers across India trust Law Copilot
                to enhance their practice and deliver exceptional results.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    5,000+
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Active Lawyers
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    50,000+
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Documents Created
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02] flex flex-col items-center text-center">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    4.8/5
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Average Rating
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-10 max-w-3xl font-semibold leading-relaxed md:text-lg lg:text-xl">
              Ready to Work Smarter as a Lawyer?
              </p>

              <Button
                className={cn("font-medium text-xs sm:text-sm mt-10 p-5")}
                asChild
              >
                <Link href="/contact">Start Free Now</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}