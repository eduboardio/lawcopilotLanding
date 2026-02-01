"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Scale, 
  Briefcase, 
  Users,
  CheckCircle2,
  ArrowRight,
  FileSearch,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  scenario: string;
  icon: React.ElementType;
  benefits: Array<{
    icon: React.ElementType;
    text: string;
  }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  features: string[];
}

const useCases: UseCase[] = [
  {
    id: "law-firms",
    title: "Law Firms",
    subtitle: "Scale your practice with AI-powered efficiency",
    scenario: "Managing multiple cases while maintaining quality and meeting deadlines?",
    icon: Building2,
    benefits: [
      { icon: Clock, text: "Reduce research time by 70%" },
      { icon: FileSearch, text: "Instant case law precedents" },
      { icon: CheckCircle2, text: "Consistent quality across team" },
      { icon: Zap, text: "Faster client deliverables" }
    ],
    metrics: [
      { value: "10x", label: "Faster Research" },
      { value: "50+", label: "Hours Saved/Month" },
      { value: "99%", label: "Accuracy Rate" }
    ],
    features: [
      "Multi-case research tracking",
      "Team collaboration tools",
      "Client-ready document generation",
      "Precedent analysis & citation"
    ]
  },
  {
    id: "independent-lawyers",
    title: "Independent Practitioners",
    subtitle: "Compete with confidence, deliver with speed",
    scenario: "Building your practice while handling everything from client intake to complex litigation?",
    icon: Scale,
    benefits: [
      { icon: Zap, text: "Draft documents in minutes" },
      { icon: Shield, text: "Reduce errors and oversights" },
      { icon: Clock, text: "More time for client work" },
      { icon: CheckCircle2, text: "Professional-grade output" }
    ],
    metrics: [
      { value: "5x", label: "Faster Drafting" },
      { value: "80%", label: "Time Saved" },
      { value: "24/7", label: "AI Assistant" }
    ],
    features: [
      "2000+ ready legal templates",
      "Jurisdiction-specific guidance",
      "Contract review & red-lining",
      "Legal research on demand"
    ]
  },
  {
    id: "corporates",
    title: "Corporate Legal Teams",
    subtitle: "Enterprise compliance and risk management",
    scenario: "Reviewing hundreds of contracts, monitoring compliance, and managing legal risk at scale?",
    icon: Briefcase,
    benefits: [
      { icon: FileSearch, text: "Bulk contract analysis" },
      { icon: Shield, text: "Compliance monitoring" },
      { icon: Clock, text: "Accelerated review cycles" },
      { icon: CheckCircle2, text: "Risk identification" }
    ],
    metrics: [
      { value: "90%", label: "Faster Reviews" },
      { value: "100+", label: "Contracts/Day" },
      { value: "Zero", label: "Missed Clauses" }
    ],
    features: [
      "Bulk document processing",
      "Compliance audit trails",
      "Custom clause libraries",
      "Risk scoring & alerts"
    ]
  },
  {
    id: "individuals",
    title: "Individuals & Small Businesses",
    subtitle: "Affordable legal intelligence for everyone",
    scenario: "Need legal documents but can't afford expensive lawyers for routine matters?",
    icon: Users,
    benefits: [
      { icon: Zap, text: "Instant document creation" },
      { icon: CheckCircle2, text: "Legally compliant drafts" },
      { icon: Clock, text: "No waiting for lawyers" },
      { icon: Shield, text: "Understand your rights" }
    ],
    metrics: [
      { value: "₹100", label: "vs ₹10,000 Lawyer Fee" },
      { value: "5 min", label: "Average Draft Time" },
      { value: "Simple", label: "No Legal Jargon" }
    ],
    features: [
      "Rental agreements & NOCs",
      "Partnership deeds & MOUs",
      "Legal notice templates",
      "Plain-language explanations"
    ]
  }
];

export const UseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeUseCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Background elements - matching Benefits section exactly */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">Who It&apos;s For</span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:mb-6 md:text-5xl lg:text-6xl text-foreground dark:text-white">
            Built for Every Legal Professional
          </h2>
          
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            From solo practitioners to enterprise teams—Law Copilot adapts to your workflow, amplifies your capabilities, and transforms how you work.
          </p>
        </motion.div>

        {/* Tabs navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-card/80 dark:bg-white/[0.05] p-1.5 rounded-2xl border border-border dark:border-white/10 shadow-lg backdrop-blur-sm">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              const isActive = activeTab === useCase.id;
              
              return (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(useCase.id)}
                  className="relative px-6 py-3 rounded-xl transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-foreground dark:bg-white rounded-xl"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                  <div className="relative flex items-center gap-2">
                    <Icon className={`w-4 h-4 transition-colors ${
                      isActive 
                        ? 'text-background dark:text-foreground' 
                        : 'text-muted-foreground dark:text-white/60'
                    }`} />
                    <span className={`text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'text-background dark:text-foreground' 
                        : 'text-muted-foreground dark:text-white/60'
                    }`}>
                      {useCase.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Scenario question */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-br from-foreground to-foreground/90 dark:from-white dark:to-white/90 text-background dark:text-foreground px-6 py-4 rounded-2xl shadow-xl">
                  <p className="text-lg md:text-xl font-medium">
                    {activeUseCase.scenario}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Benefits & Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Subtitle */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-3">
                    {activeUseCase.subtitle}
                  </h3>
                </div>

                {/* Benefits grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeUseCase.benefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card dark:bg-white/[0.03] border border-border dark:border-white/10 hover:border-border/80 dark:hover:border-white/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-muted dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                          <BenefitIcon className="w-5 h-5 text-foreground dark:text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm font-medium text-foreground dark:text-white">
                            {benefit.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Key features */}
                <div className="bg-card dark:bg-white/[0.03] border border-border dark:border-white/10 rounded-2xl p-6">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white mb-4 uppercase tracking-wide">
                    Key Capabilities
                  </h4>
                  <div className="space-y-3">
                    {activeUseCase.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 dark:bg-white/40 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground dark:text-white/70">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-foreground hover:bg-foreground/90 dark:bg-white dark:hover:bg-white/90 text-background dark:text-foreground font-medium px-8"
                  asChild
                >
                  <Link href="https://app.lawcopilot.io/signup">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>

              {/* Right: Metrics & Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Metrics cards */}
                <div className="grid grid-cols-3 gap-4">
                  {activeUseCase.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] to-transparent dark:from-white/[0.05] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-card dark:bg-white/[0.03] border border-border dark:border-white/10 rounded-2xl p-6 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-2">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground dark:text-white/60 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Visual preview card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] to-transparent dark:from-white/[0.05] rounded-3xl blur-2xl"></div>
                  <div className="relative bg-card dark:bg-white/[0.03] border border-border dark:border-white/10 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-foreground to-foreground/80 dark:from-white dark:to-white/80 flex items-center justify-center">
                        <activeUseCase.icon className="w-12 h-12 text-background dark:text-foreground" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-foreground dark:text-white">
                          {activeUseCase.title}
                        </h4>
                        <p className="text-sm text-muted-foreground dark:text-white/70 max-w-sm mx-auto leading-relaxed">
                          Tailored AI workflows designed specifically for {activeUseCase.title.toLowerCase()}, with features that understand your unique challenges and amplify your expertise.
                        </p>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="relative h-32">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                              y: [0, -20, 0],
                              x: [0, Math.sin(i * 2) * 30, 0],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.5
                            }}
                          >
                            <div className="w-16 h-16 rounded-xl bg-muted/50 dark:bg-white/[0.05] backdrop-blur-sm border border-border dark:border-white/10 flex items-center justify-center">
                              <CheckCircle2 className="w-6 h-6 text-muted-foreground dark:text-white/60" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom trust section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 pt-12 border-t border-border dark:border-white/10"
        >
          <p className="text-sm text-muted-foreground dark:text-white/60 mb-6">
            Join legal professionals across India already transforming their practice
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {["Supreme Court", "High Courts", "District Courts", "Tribunals"].map((court, i) => (
              <div key={i} className="text-xs font-medium text-muted-foreground dark:text-white/50 tracking-wider uppercase">
                {court}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};