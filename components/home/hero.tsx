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

// const Stats = memo(() => (
//   <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16 w-full max-w-6xl mx-auto">
//     {[
//       {
//         value: "10,000+",
//         label: "Legal Documents",
//         sublabel: "Indian case law & statutes"
//       },
//       {
//         value: "100+",
//         label: "Legal Professionals",
//         sublabel: "Transforming their practice"
//       },
//       {
//         value: "2,000+",
//         label: "Ready Templates",
//         sublabel: "Contracts & legal drafts"
//       },
//       {
//         value: "100%",
//         label: "India-Focused",
//         sublabel: "Built for Indian law"
//       }
//     ].map((stat, i) => (
//       <div key={i} className="text-center group">
//         <div className="relative inline-block mb-2">
//           <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-white/5 rounded-lg blur-xl group-hover:bg-foreground/[0.04] dark:group-hover:bg-white/10 transition-all duration-500"></div>
//           <p className="relative text-4xl lg:text-5xl font-bold text-foreground dark:text-white">
//             {stat.value}
//           </p>
//         </div>
//         <p className="text-sm font-semibold text-foreground dark:text-white/90 mb-1">
//           {stat.label}
//         </p>
//         <p className="text-xs text-muted-foreground dark:text-white/50 leading-relaxed max-w-[180px] mx-auto">
//           {stat.sublabel}
//         </p>
//       </div>
//     ))}
//   </div>
// ));

// Stats.displayName = 'Stats';

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

        {/* CTA buttons */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button 
            size="lg" 
            className="group rounded-full text-base px-8 py-6 bg-foreground hover:bg-foreground/90 dark:bg-white dark:hover:bg-white/90 text-background dark:text-black font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/contact" className="flex items-center">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full text-base px-8 py-6 bg-transparent border-border dark:border-white/20 text-foreground dark:text-white hover:bg-muted dark:hover:bg-white/10 hover:border-border/80 dark:hover:border-white/30 font-medium transition-all duration-300"
          >
            See How It Works
          </Button>
        </motion.div> */}

       {/* Product Demo Animation - Auto-playing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full mx-auto mb-16"
        >
          <ProductDemo />
        </motion.div>

        {/* Stats section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full"
        >
          <Stats />
        </motion.div> */}
      </div>
    </section>
  );
};