"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { ProductDemo } from "./ProductDemo";

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
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden bg-background py-20"
    >
      <BackgroundElements />
      
      <div className="container mx-auto relative z-10 px-6 flex flex-col items-center">
        {/* Trust badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 backdrop-blur-sm mb-8 group hover:bg-muted dark:hover:bg-white/[0.08] transition-all duration-300"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-medium text-foreground/80 dark:text-white/80 tracking-wide">Trusted by India&apos;s leading law firms</span>
        </motion.div>

        <div className="text-center max-w-5xl mx-auto space-y-6 mb-12">
          {/* Main headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="block text-foreground dark:text-white">
              Legal Intelligence,
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Amplified by AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-muted-foreground dark:text-white/70 font-light leading-relaxed"
          >
            Law Copilot transforms how legal professionals work—research faster, draft smarter, and deliver exceptional outcomes with AI trained on Indian legal frameworks.
          </motion.p>
        </div>

       {/* Product Demo Animation - Auto-playing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full mx-auto mb-16"
        >
          <ProductDemo />
        </motion.div>
      </div>
    </section>
  );
};