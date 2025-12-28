"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const FoundersSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Minimal background */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.02]">
            <Image
              src="/website.png"
              alt="Law Copilot"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Subtle overlay accent */}
          <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-foreground/[0.05] to-transparent blur-2xl dark:from-white/[0.05]"></div>
        </motion.div>
      </div>
    </section>
  );
};