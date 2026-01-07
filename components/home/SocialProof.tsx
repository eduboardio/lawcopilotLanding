"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  FileText, 
  Scale, 
  TrendingUp 
} from "lucide-react";

export const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Legal Professionals",
      sublabel: "Pre-registered for early access"
    },
    {
      icon: FileText,
      value: "10,000+",
      label: "Legal Documents",
      sublabel: "Trained for Indian jurisdiction"
    },
    {
      icon: Scale,
      value: "2,000+",
      label: "Legal Templates",
      sublabel: "Ready for immediate use"
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "India-Focused",
      sublabel: "Built for Indian courts & compliance"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      {/* Minimal background */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            <span className="text-xs font-medium uppercase tracking-wider text-foreground dark:text-white/80">
              Momentum
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl dark:text-white">
            Powering the Next Era of Legal Practice in India
          </h2>
          
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg dark:text-white/70">
            Adopted by litigators, corporate counsel, and independent lawyers across India who want to work faster, smarter, and confidently with AI.
          </p>
        </motion.div>

        {/* Stats Grid - Fixed gaps */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/80 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20">
                    {/* Icon */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted dark:bg-white/10">
                      <Icon className="h-6 w-6 text-foreground dark:text-white" />
                    </div>

                    {/* Value */}
                    <div className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl dark:text-white">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="mb-2 text-sm font-semibold text-foreground dark:text-white">
                      {stat.label}
                    </div>

                    {/* Sublabel */}
                    <div className="text-xs leading-relaxed text-muted-foreground dark:text-white/60">
                      {stat.sublabel}
                    </div>
                  </div>

                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:from-white/[0.03]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/60">
              <div className="h-px w-8 bg-border dark:bg-white/20"></div>
              <span className="font-medium">Growing Every Week</span>
              <div className="h-px w-8 bg-border dark:bg-white/20"></div>
            </div>
            <p className="text-xs text-muted-foreground dark:text-white/50">
              Early access expanding now • Join forward-thinking legal professionals
            </p>
          </div>
        </motion.div>

        {/* Optional: "Who Uses This" badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 border-t border-border pt-12 dark:border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-wider text-muted-foreground dark:text-white/40">
            <span>Supreme Court Practitioners</span>
            <span className="text-border dark:text-white/20">•</span>
            <span>High Court Advocates</span>
            <span className="text-border dark:text-white/20">•</span>
            <span>Corporate Legal Teams</span>
            <span className="text-border dark:text-white/20">•</span>
            <span>Independent Lawyers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};