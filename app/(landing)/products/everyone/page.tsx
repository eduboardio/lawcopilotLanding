"use client";

import { motion } from "framer-motion";
import {
  HelpCircle,
  FolderArchive,
  PanelRight,
  Search,
  Scale,
  BookOpen,
  FileText,
  Server,
  Shield,
  MessageSquare,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Lock,
  FileCheck,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const coreFeatures = [
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "Knowledge Assistant",
    description: "Your personal legal guide powered by AI",
    features: [
      "Research legal concepts in plain language",
      "Understand your rights and obligations",
      "Ask questions without legal jargon",
      "Get instant answers 24/7"
    ],
    highlight: true
  },
  {
    icon: <FolderArchive className="h-6 w-6" />,
    title: "Document Storage",
    description: "Securely store all your legal documents",
    features: [
      "Bank-level encryption for privacy",
      "Easy search and retrieval",
      "Unlimited storage capacity",
      "Access from anywhere"
    ]
  },
  {
    icon: <PanelRight className="h-6 w-6" />,
    title: "Document Management",
    description: "Organize documents with smart tools",
    features: [
      "Automatic categorization",
      "Custom tags and folders",
      "Version control",
      "Share securely with lawyers"
    ]
  }
];

const vaultFeatures = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Storage",
    description: "End-to-end encryption for total privacy"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Smart Search",
    description: "Find documents instantly with AI search"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Auto-Organize",
    description: "AI categorization of documents"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Version History",
    description: "Track changes and restore previous versions"
  }
];

const benefits = [
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Understand Your Rights",
    description: "Get clear explanations of legal concepts relevant to your situation without confusing jargon."
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Stay Organized",
    description: "Keep all your legal documents in one secure place with automatic organization and easy retrieval."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Save Time & Money",
    description: "Handle routine legal tasks yourself and come to your lawyer better prepared, reducing billable hours."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Complete Privacy",
    description: "Your documents and conversations are encrypted and never shared. You maintain full control of your data."
  }
];

const useCases = [
  "Navigate property disputes and contracts",
  "Understand employment rights and agreements",
  "Manage family law matters confidently",
  "Track consumer protection claims",
  "Organize business legal documents",
  "Prepare for court proceedings"
];

export default function LitigantsPage() {
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
              Legal Intelligence for Everyone
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
              Legal Solutions for
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Everyone
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            Navigate the legal system with confidence using our powerful yet accessible tools.
            Whether you&apos;re managing documents, researching your rights, or preparing for legal
            matters—we make it simple.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Why Choose Law Copilot
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Legal tools designed for people, not just professionals
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
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
        </motion.div>

        {/* Core Features - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Essential Tools at Your Fingertips
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Everything you need to manage your legal matters with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={feature.highlight ? "lg:col-span-2" : "lg:col-span-1"}
              >
                <Card
                  className={`group h-full overflow-hidden border-border/40 transition-all hover:shadow-lg dark:border-white/10 ${
                    feature.highlight
                      ? "bg-gradient-to-br from-foreground/[0.05] to-foreground/[0.02] dark:from-white/[0.08] dark:to-white/[0.03]"
                      : "bg-card/50 backdrop-blur-sm dark:bg-white/[0.03]"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/10 dark:bg-white/10">
                      <div className="text-foreground dark:text-white">{feature.icon}</div>
                    </div>
                    <CardTitle className="mb-2 text-2xl">{feature.title}</CardTitle>
                    <p className="text-sm text-muted-foreground dark:text-white/70">
                      {feature.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-sm leading-relaxed text-foreground dark:text-white">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legal Vault Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <Card className="overflow-hidden border-border/50 bg-muted/30 dark:border-white/10">
            <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-12">
              {/* Left: Description */}
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 dark:from-white/10 dark:to-white/5">
                  <Server className="h-8 w-8 text-foreground dark:text-white" />
                </div>
                <CardTitle className="mb-4 text-3xl">Legal Vault</CardTitle>
                <p className="mb-6 leading-relaxed text-muted-foreground dark:text-white/70">
                  Your comprehensive document storage and management solution with bank-level
                  security. Store, organize, and access all your legal documents from anywhere,
                  anytime.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40 dark:bg-white/40" />
                    <span className="text-sm text-muted-foreground dark:text-white/70">
                      Unlimited storage for all your legal documents
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40 dark:bg-white/40" />
                    <span className="text-sm text-muted-foreground dark:text-white/70">
                      AI-powered organization and categorization
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40 dark:bg-white/40" />
                    <span className="text-sm text-muted-foreground dark:text-white/70">
                      Share securely with lawyers and family members
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Feature Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {vaultFeatures.map((vaultFeature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="rounded-xl border border-border/30 bg-card/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <div className="mb-3 text-foreground dark:text-white">
                      {vaultFeature.icon}
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground dark:text-white">
                      {vaultFeature.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground dark:text-white/60">
                      {vaultFeature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Use Cases Section */}
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
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
                  <Users className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                    Real-World Applications
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
                  How People Use Law Copilot
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
                  From everyday legal questions to complex document management
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/50 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-sm leading-relaxed text-foreground dark:text-white">
                      {useCase}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Simple to Get Started
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              No legal knowledge required—we guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Ask Your Question",
                description:
                  "Type your legal question in plain language. No need to know legal terminology—just ask naturally."
              },
              {
                number: "02",
                title: "Get Clear Answers",
                description:
                  "Receive easy-to-understand explanations powered by AI trained on Indian legal frameworks."
              },
              {
                number: "03",
                title: "Take Action",
                description:
                  "Use your newfound knowledge to make informed decisions or prepare for meetings with your lawyer."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector line - desktop only */}
                {idx < 2 && (
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

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-foreground/[0.03] to-transparent p-12 backdrop-blur-md dark:border-white/10 dark:from-white/[0.05] md:p-16">
            <div className="relative text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
                Legal Intelligence Made Accessible
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground dark:text-white/70">
                Join thousands of people who are navigating legal matters with confidence using Law
                Copilot&apos;s accessible tools and guidance.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <MessageSquare className="mx-auto mb-3 h-8 w-8 text-foreground dark:text-white" />
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    24/7
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Always Available Support
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <Shield className="mx-auto mb-3 h-8 w-8 text-foreground dark:text-white" />
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Private & Secure
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <Search className="mx-auto mb-3 h-8 w-8 text-foreground dark:text-white" />
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    1,000+
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Legal Topics Covered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}