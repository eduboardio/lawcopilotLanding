"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const FoundersSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-32">
      {/* Background matching Hero.tsx */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        {/* Premium gradient orbs - theme aware */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.03] to-transparent dark:from-white/[0.03] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl"></div>
        
        {/* Subtle grid - refined and theme aware */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Center fade for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-background via-background to-transparent opacity-80"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/10 dark:to-white/5 rounded-3xl blur-3xl opacity-60"></div>
          
          <div className="relative w-full overflow-hidden backdrop-blur-md bg-background/40 dark:bg-background/60  ">
            <Image
              src="/website.png"
              alt="Law Copilot"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};