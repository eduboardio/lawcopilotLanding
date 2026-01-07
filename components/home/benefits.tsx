"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Cpu, 
  Scale, 
  Languages,
  Shield,
  Check
} from "lucide-react";

interface BenefitPillar {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  points: string[];
}

const pillars: BenefitPillar[] = [
  {
    icon: <MapPin className="h-6 w-6" />,
    badge: "India-First",
    title: "Built for Indian Legal Practice",
    description: "Designed specifically for India's legal landscape—not a global product adapted for Indian law.",
    points: [
      "Trained on Indian case law, statutes, and legal frameworks",
      "Understands court-ready language and formal legal tone",
      "Recognizes state-wise legal variations and jurisdictional nuances"
    ]
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    badge: "Proprietary",
    title: "Custom AI Engine",
    description: "Purpose-built legal AI—not a ChatGPT wrapper with legal templates.",
    points: [
      "Custom-trained model optimized for Indian legal documents",
      "Designed collaboratively by lawyers and AI engineers",
      "Continuously improved with feedback from legal professionals"
    ]
  },
  {
    icon: <Scale className="h-6 w-6" />,
    badge: "Precision",
    title: "Jurisdictional Intelligence",
    description: "Adapts reasoning based on court type, forum, and applicable legal standards.",
    points: [
      "Context-aware responses for High Courts, District Courts, Tribunals",
      "Citation intelligence with proper legal precedent hierarchy",
      "Tailored legal arguments based on jurisdictional requirements"
    ]
  },
  {
    icon: <Languages className="h-6 w-6" />,
    badge: "Multilingual",
    title: "Indian Language Support",
    description: "Legal intelligence that works across India's linguistic diversity with contextual accuracy.",
    points: [
      "Translate legal documents across major Indian languages",
      "Preserve legal terminology and formal context",
      "Bridge language barriers in client communication and court filings"
    ]
  }
];

const trustFactors = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Enterprise Security",
    description: "Bank-level encryption with Indian data residency"
  },
  {
    icon: <Check className="h-5 w-5" />,
    title: "Fact-Checked Outputs",
    description: "Citations verified, responses legally grounded"
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Professional Reliability",
    description: "Built for real legal work, not experiments"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Subtle background matching Hero/Features */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">Platform Differentiation</span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:mb-6 md:text-5xl lg:text-6xl">
            <span className="block text-foreground dark:text-white">
              Why Law Copilot
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70">
            Not another AI chatbot adapted for legal use. A purpose-built platform engineered specifically for Indian legal professionals who demand precision, reliability, and jurisdictional intelligence.
          </p>
        </motion.div>

        {/* Four Pillars Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.05]" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon & Badge */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                    <div className="text-foreground dark:text-white">
                      {pillar.icon}
                    </div>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-semibold text-foreground dark:text-white">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-muted-foreground dark:text-white/70">
                  {pillar.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40 dark:bg-white/40" />
                      <span className="text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-24"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] md:p-12">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent dark:from-white/[0.03]" />
            
            <div className="relative">
              {/* Header */}
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl dark:text-white">
                  Built for Real Legal Work
                </h3>
                <p className="mx-auto max-w-2xl text-muted-foreground dark:text-white/70">
                  Every decision in Law Copilot is made with one goal: delivering reliable, trustworthy AI for professional legal practice.
                </p>
              </div>

              {/* Trust Factors */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {trustFactors.map((factor, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                      <div className="text-foreground dark:text-white">
                        {factor.icon}
                      </div>
                    </div>
                    <h4 className="mb-2 font-semibold text-foreground dark:text-white">
                      {factor.title}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-white/60">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-foreground dark:text-white">
            Finally, an AI platform that understands Indian law the way you do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}