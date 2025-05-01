"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
// import HeroVideoDialog from "../ui/hero-video-dialog";
import { memo } from "react";

const BackgroundElements = memo(() => (
  <div className="absolute inset-0 w-full h-full pointer-events-none">
    <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-small-white/5 dark:bg-grid-small-white/10"></div>
  </div>
));

BackgroundElements.displayName = 'BackgroundElements';

const Stats = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-16 pt-8 border-t border-border/20 w-full max-w-4xl mx-auto">
    <div className="text-center">
      <p className="text-4xl font-bold text-primary">10k+</p>
      <p className="text-xl font-semibold text-primary"> Legal Documents Trained</p>
      <p className="text-sm text-muted-foreground mt-1">Built on real-world cases, contracts, and statutes.</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold text-primary">100+</p>
      <p className="text-xl font-semibold text-primary"> Lawyers Pre-Registered</p>
      <p className="text-sm text-muted-foreground mt-1">Join India&apos;s fastest-growing legal AI movement.</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold text-primary">2000+</p>
      <p className="text-xl font-semibold text-primary"> Prebuilt Legal Templates</p>
      <p className="text-sm text-muted-foreground mt-1">Draft faster with ready-to-use contracts, notices, and pleadings.</p>
    </div>
    <div className="text-center">
      <p className="text-4xl font-bold text-primary">100%</p>
      <p className="text-xl font-semibold text-primary"> India-Specific Legal Content</p>
      <p className="text-sm text-muted-foreground mt-1">From trial courts to the Supreme Court, tailored for India.</p>
    </div>
  </div>
));

Stats.displayName = 'Stats';

const ScrollIndicator = memo(() => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
    <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
    <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
      <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2"></div>
    </div>
  </div>
));

ScrollIndicator.displayName = 'ScrollIndicator';

export const Hero = () => {

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background"
    >
      <BackgroundElements />
      <div className="container mx-auto relative z-10 px-4 py-24 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
          <span className="text-xs font-medium">New: Case Analytics Module</span>
          <ChevronRight className="h-3 w-3" />
        </div>
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The Future of Law Is Here. Work Smarter with AI.
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Meet Law Copilot—your AI-powered legal assistant built to help lawyers, businesses, and individuals draft faster, research deeper, and navigate legal challenges with confidence.
            Real Legal intelligence at your fingertips.

          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button size="lg" className="rounded-full text-lg px-8 py-6 ml-auto bg-foreground hover:bg-foreground/80 text-background">
            <Link href="/signup" className="flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
            </Link>
          </Button>
        </div>
        <Stats />
      </div>
    </section>
  );
};