"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { ProductDemo } from "./ProductDemo";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-background via-background to-transparent opacity-80"></div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden bg-background py-20 md:py-24 lg:py-28"
    >
      <BackgroundElements />
      
      <div className="container mx-auto relative z-10 px-6 flex flex-col items-center">
        {/* Trust badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 backdrop-blur-sm mb-10 md:mb-12 group hover:bg-muted dark:hover:bg-white/[0.08] transition-all duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-medium text-foreground/80 dark:text-white/80 tracking-wide">Trusted by India&apos;s leading law firms</span>
        </motion.div>

        <div className="text-center max-w-5xl mx-auto space-y-8 md:space-y-10 mb-16 md:mb-20">
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] space-y-2 md:space-y-3"
          >
            <span className="block text-foreground dark:text-white">
            Legal Practice Reimagined
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
            with AI for India
            </span>
          </motion.h1>

          {/* Subheadlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 md:space-y-5 max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground dark:text-white/70 font-light leading-relaxed">
              AI built for Indian legal professionals — enabling faster research, precision drafting, and reliable analysis with intelligence grounded in Indian law.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground dark:text-white/70 font-light leading-relaxed">
              Research case law with context. Draft compliant documents in minutes. Analyse complex materials with structured insights. Designed for Indian courts, statutes, and legal language.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:pt-2"
          >
            <Button
              className={cn("font-heading font-medium text-sm md:text-base px-4 md:px-6 py-5 md:py-3 h-auto shadow-lg hover:shadow-xl transition-shadow")}
              asChild
            >
              <Link href="https://app.lawcopilot.io/signup">Get Started Free</Link>
            </Button>
          </motion.div>
        </div>

       {/* Product Demo Animation - Auto-playing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full mx-auto"
        >
          <ProductDemo />
        </motion.div>
      </div>
    </section>
  );
};