"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Users,
  TrendingUp,
  Scale,
  FileText,
  Brain,
  Zap,
  Award,
  Building2,
  BarChart3,
  Workflow
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Efficiency",
    description: "Faster Turnarounds Without Compromising Quality",
    benefits: [
      "Save valuable billable hours on routine work",
      "Automate workflows for higher productivity",
      "Reduce administrative overhead by up to 40%"
    ],
    stat: "70% faster drafting"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Error-free",
    description: "Built-in Legal Guardrails to Reduce Risk",
    benefits: [
      "Reduce time spent cross-checking documents",
      "Consistent quality across all firm outputs",
      "AI-powered validation and compliance checks"
    ],
    stat: "95% error reduction"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Encrypted",
    description: "Enterprise-Grade Security for Client-Confidential Data",
    benefits: [
      "Your firm maintains full data control",
      "Compliant with leading security standards",
      "Bank-level security ensuring client confidentiality"
    ],
    stat: "256-bit encryption"
  }
];

const firmBenefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Scale Your Practice",
    description:
      "Handle higher caseloads without increasing headcount. Law Copilot enables your team to take on higher caseloads while maintaining quality standards."
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Increase Profitability",
    description:
      "Reduce time on low-value tasks and focus on billable work. Firms report 30-40% improvement in operational efficiency within the first quarter. Freeing up more billable time. ."
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Win More Cases",
    description:
      "Stronger legal research, better-drafted submissions, and deeper case analysis gives our partner firms a competitive edge where it matters most."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Standardize Quality",
    description:
      "Ensure every document meets your firm's standards. Build institutional knowledge and maintain consistency across all lawyers and practice areas."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Empower Associates",
    description:
      "Junior lawyers produce partner-level work with AI guidance. Accelerate professional development and reduce training overhead."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Faster Turnarounds",
    description:
      "Meet tight deadlines consistently. Deliver draft contracts in hours, complete research in minutes, and respond to client requests faster than competitors."
  }
];

const firmTypes = [
  {
    type: "Boutique Firms",
    icon: <Building2 className="h-5 w-5" />,
    description: "Compete with larger firms on research depth, drafting quality, and turnaround time",
    features: [
      "Access enterprise-grade AI without enterprise costs",
      "Handle complex matters with limited resources",
      "Build reputation through exceptional client service"
    ]
  },
  {
    type: "Mid-Size Firms",
    icon: <BarChart3 className="h-5 w-5" />,
    description: "Scale operations without proportional increases in cost or risk",
    features: [
      "Standardize workflows across practice groups",
      "Support growth without sacrificing quality",
      "Attract and retain top legal talent with modern tools"
    ]
  },
  {
    type: "Large Firms",
    icon: <Workflow className="h-5 w-5" />,
    description: "Drive efficiency and innovation across offices",
    features: [
      "Enterprise deployment with centralized management",
      "Integrate with existing knowledge management systems",
      "Measure and optimize firm-wide productivity"
    ]
  }
];

const practiceAreas = [
  "Corporate & M&A",
  "Litigation & Arbitration",
  "Real Estate & Property",
  "Intellectual Property",
  "Employment & Labor",
  "Banking & Finance",
  "Tax & Regulatory",
  "Family Law",
  "Criminal Defense"
];

const implementations = [
  {
    phase: "Week 1",
    title: "Setup & Training",
    items: [
      "Platform configuration and user onboarding",
      "Integration with existing systems",
      "Customization of templates and workflows"
    ]
  },
  {
    phase: "Week 2-4",
    title: "Pilot Program",
    items: [
      "Select practice group begins using platform",
      "Monitor usage and gather feedback",
      "Refine workflows based on firm needs"
    ]
  },
  {
    phase: "Month 2+",
    title: "Firm-Wide Rollout",
    items: [
      "Gradual expansion to all practice areas",
      "Ongoing training and support",
      "Performance tracking and optimization"
    ]
  }
];

export default function LawFirmsPage() {
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
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
              Built for Law Firms
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
              Empower Your Law Firm
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              With AI-Powered Intelligence
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            Transform your firm’s research, drafting, and case workflows with AI designed for Indian law firms so your team works faster, scales safely, and delivers consistently high-quality outcomes.
          </p>

          <Button
            className={cn("font-medium text-xs sm:text-sm mt-10 p-5")}
            asChild
          >
            <Link href="https://lawcopilot.io/contact">Book a Firm Demo</Link>
          </Button>
        </motion.div>

        {/* Firm Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Measurable Impact on Your Firm’s Growth
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Tangible improvements across efficiency, profitability, and outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {firmBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.05]" />
                <div className="relative flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground dark:text-white">
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

        {/* Core Values - Three Pillars */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Why Leading Firms Choose Law Copilot
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Built to meet the accuracy, security, and scale demands of Indian law firms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.05]" />

                  <CardHeader className="relative pb-4">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/10 dark:bg-white/10">
                      <div className="text-foreground dark:text-white">{value.icon}</div>
                    </div>
                    <CardTitle className="mb-2 text-2xl">{value.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground dark:text-white/70">
                      {value.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative space-y-4">
                    <ul className="space-y-3">
                      {value.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                          <span className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-lg border border-border/30 bg-muted/30 px-4 py-3 dark:border-white/10 dark:bg-white/[0.02]">
                      <p className="text-center text-sm font-semibold text-foreground dark:text-white">
                        {value.stat}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Firm Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Designed to Scale Across Every Firm Size
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Whether you&apos;re a boutique practice or a national firm, Law Copilot scales with your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {firmTypes.map((firm, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10 dark:bg-white/10">
                    <div className="text-foreground dark:text-white">{firm.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">
                    {firm.type}
                  </h3>
                </div>

                <p className="mb-6 text-sm text-muted-foreground dark:text-white/70">
                  {firm.description}
                </p>

                <ul className="space-y-3">
                  {firm.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40 dark:bg-white/40" />
                      <span className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practice Areas */}
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
                  <Award className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                    Cross-Practice Expertise
                  </span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
                  Trusted Across Core Indian Practice Areas
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
                  Law Copilot is trained on Indian legal frameworks and drafting conventions across all major practice areas.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {practiceAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="rounded-full border border-border/30 bg-background/50 px-6 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]"
                  >
                    <span className="text-sm font-medium text-foreground dark:text-white">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl dark:text-white">
              Low-Risk, Firm-Friendly Implementation
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
              Get your firm up and running in weeks with minimal disruption to existing workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {implementations.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector line - desktop only */}
                {idx < implementations.length - 1 && (
                  <div className="absolute left-full top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-border via-border to-transparent lg:block dark:from-white/10 dark:via-white/10" />
                )}

                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="mb-4 inline-block rounded-lg bg-foreground/10 px-3 py-1 text-sm font-semibold text-foreground dark:bg-white/10 dark:text-white">
                    {phase.phase}
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-foreground dark:text-white">
                    {phase.title}
                  </h3>

                  <ul className="space-y-3">
                    {phase.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                Join Leading Law Firms Across India
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground dark:text-white/70">
                Trusted by boutique practices and national firms to improve research accuracy, drafting quality, and delivery speed.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    100+
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Law Firms Using Daily
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    10,000+
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Documents Generated
                  </p>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/50 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="mb-2 text-3xl font-bold text-foreground dark:text-white">
                    40%
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Average Time Savings
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
                See how law firms like yours use Law Copilot to improve quality, reduce turnaround time, and scale safely.
              </p>

              <Button
                className={cn("font-medium text-xs sm:text-sm mt-10 p-5")}
                asChild
              >
                <Link href="https://lawcopilot.io/contact">Book a Firm Demo</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}