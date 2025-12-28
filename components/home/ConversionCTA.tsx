"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ConversionCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-40">
      {/* Dramatic background with spotlight effect */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        {/* Center spotlight */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-foreground/[0.08] via-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.08] dark:via-white/[0.03]"></div>
        
        {/* Subtle grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <Sparkles className="h-3.5 w-3.5 text-foreground dark:text-white" />
            <span className="text-xs font-medium uppercase tracking-wider text-foreground dark:text-white/80">
              Early Access Available
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl dark:text-white"
          >
            The Future of Legal Work
            <br />
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent dark:from-white dark:to-white/70">
              Starts Here
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl dark:text-white/70"
          >
            See how Law Copilot helps lawyers, legal teams, and businesses draft faster, research smarter, and work with confidence — built specifically for India&apos;s legal ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary CTA */}
            <Button
              size="lg"
              className="group h-14 rounded-full bg-foreground px-8 text-base font-semibold text-background shadow-lg transition-all hover:scale-105 hover:bg-foreground/90 hover:shadow-xl dark:bg-white dark:text-foreground dark:hover:bg-white/90"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Secondary CTA */}
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-2 border-border bg-transparent px-8 text-base font-semibold text-foreground transition-all hover:bg-card dark:border-white/20 dark:text-white dark:hover:bg-white/[0.05]"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Us
            </Button>
          </motion.div>

          {/* Reassurance text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-sm text-muted-foreground dark:text-white/60">
              No obligation • Schedule a personalized walkthrough with our team
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground dark:text-white/50">
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                Limited Onboarding Slots
              </span>
              <span className="text-border dark:text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                Enterprise Support Available
              </span>
              <span className="text-border dark:text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
                Onboarding Assistance Included
              </span>
            </div>
          </motion.div>

          {/* Bottom micro-statement */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 border-t border-border pt-8 dark:border-white/10"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground dark:text-white/50">
              Join forward-thinking legal professionals transforming their practice with AI
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};