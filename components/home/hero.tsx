"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    {/* Premium gradient orbs - theme aware */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.03] to-transparent dark:from-white/[0.03] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl"></div>
    
    {/* Subtle grid - refined and theme aware */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    
    {/* Center fade for depth */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-background via-background to-transparent opacity-80"></div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

const FloatingCard = memo(() => (
  <div className="absolute top-1/4 right-8 hidden xl:block">
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] dark:from-white/10 dark:to-white/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card */}
      <div className="relative backdrop-blur-md bg-background/80 dark:bg-white/[0.03] border border-border/50 dark:border-white/10 rounded-2xl p-6 w-80 shadow-xl dark:shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-foreground/5 dark:bg-white/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-foreground dark:text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground dark:text-white">AI Analysis</div>
            <div className="text-xs text-muted-foreground dark:text-white/60">Processing legal document</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-muted dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-foreground/40 dark:bg-gradient-to-r dark:from-white/40 dark:to-white/20 rounded-full w-[75%]"></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground dark:text-white/60">
            <span>Contract Review</span>
            <span>75%</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border/50 dark:border-white/10">
          <div className="text-xs text-muted-foreground dark:text-white/60 mb-2">Key Findings</div>
          <div className="space-y-1">
            {["3 clauses require attention", "2 legal precedents found", "Risk score: Low"].map((item, i) => (
              <div key={i} className="text-xs text-foreground/80 dark:text-white/80 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-foreground/40 dark:bg-white/40"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
));

FloatingCard.displayName = 'FloatingCard';

const Stats = memo(() => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-24 w-full max-w-6xl mx-auto">
    {[
      {
        value: "10,000+",
        label: "Legal Documents",
        sublabel: "Trained on real Indian case law, contracts & statutes"
      },
      {
        value: "100+",
        label: "Legal Professionals",
        sublabel: "Already transforming their practice with AI"
      },
      {
        value: "2,000+",
        label: "Ready Templates",
        sublabel: "Contracts, notices, pleadings & legal drafts"
      },
      {
        value: "100%",
        label: "India-Focused",
        sublabel: "Built for Indian courts, laws & legal system"
      }
    ].map((stat, i) => (
      <div key={i} className="text-center group">
        <div className="relative inline-block mb-3">
          <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-white/5 rounded-lg blur-xl group-hover:bg-foreground/[0.04] dark:group-hover:bg-white/10 transition-all duration-500"></div>
          <p className="relative text-5xl lg:text-6xl font-bold text-foreground dark:text-white">
            {stat.value}
          </p>
        </div>
        <p className="text-base font-semibold text-foreground dark:text-white/90 mb-1">
          {stat.label}
        </p>
        <p className="text-sm text-muted-foreground dark:text-white/50 leading-relaxed max-w-[200px] mx-auto">
          {stat.sublabel}
        </p>
      </div>
    ))}
  </div>
));

Stats.displayName = 'Stats';

const ScrollIndicator = memo(() => (
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-30 hover:opacity-60 dark:opacity-40 dark:hover:opacity-70 transition-opacity">
    <span className="text-xs text-muted-foreground dark:text-white/60 mb-2 font-medium tracking-wider uppercase">Explore</span>
    <div className="w-5 h-8 border border-border dark:border-white/30 rounded-full flex justify-center p-1">
      <div className="w-1 h-2 bg-muted-foreground dark:bg-white/60 rounded-full"></div>
    </div>
  </div>
));

ScrollIndicator.displayName = 'ScrollIndicator';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden bg-background"
    >
      <BackgroundElements />
      {/* <FloatingCard /> */}
      
      <div className="container mx-auto relative z-10 px-6 py-32 flex flex-col items-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 backdrop-blur-sm mb-8 group hover:bg-muted dark:hover:bg-white/[0.08] transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-medium text-foreground/80 dark:text-white/80 tracking-wide">Trusted by India&apos;s leading law firms</span>
        </div>

        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-foreground dark:text-white">
              Legal Intelligence,
            </span>
            <span className="block text-foreground/80 dark:text-white/90">
              Amplified by AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground dark:text-white/70 font-light leading-relaxed">
            Law Copilot transforms how legal professionals work—research faster, draft smarter, and deliver exceptional outcomes with AI trained on Indian legal frameworks.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
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
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground dark:text-white/50">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted/50 dark:from-white/20 dark:to-white/10 border-2 border-background"></div>
            ))}
          </div>
          <span>Join 100+ legal professionals already using Law Copilot</span>
        </div>

        {/* Stats section */}
        <Stats />
      </div>

      <ScrollIndicator />
    </section>
  );
};