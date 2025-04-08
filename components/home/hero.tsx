"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import HeroVideoDialog from "../ui/hero-video-dialog";
// import Image from "next/image";
import { useState } from "react";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-small-white/5 dark:bg-grid-small-white/10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 py-24 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in-up">
          <span className="text-xs font-medium">New: Case Analytics Module</span>
          <ChevronRight className="h-3 w-3" />
        </div>

        {/* Hero Text */}
        <div className="text-center max-w-5xl mx-auto space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            AI-Powered{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">Legal Excellence</span>
              {/* <span className="absolute inset-x-0 bottom-2 h-3 bg-primary/20 -skew-x-12"></span> */}
            </span>
            {" "}at Your Fingertips
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Transform your legal practice with intelligent case research, document drafting, and risk analysis. Join thousands of legal professionals elevating their work.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="rounded-full text-lg px-8 py-6 ml-auto bg-foreground hover:bg-foreground/80 text-background">
            <Link href="/signup" className="flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 border-2 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="mr-2 h-5 w-5" /> Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-16 pt-8 border-t border-border/20 w-full max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">70%</p>
            <p className="text-sm text-muted-foreground mt-1">Time Saved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">10k+</p>
            <p className="text-sm text-muted-foreground mt-1">Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">50M+</p>
            <p className="text-sm text-muted-foreground mt-1">Documents Processed</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur-sm"></div>
          <div className="relative bg-background/40 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <HeroVideoDialog
              className="w-full aspect-[16/9]"
              animationStyle="from-center" 
              videoSrc="https://www.youtube.com/watch?v=fJ2AII__o10"
              thumbnailSrc="/images/placeholder.png"
              thumbnailAlt="Law Copilot Dashboard"
              isOpen={isVideoOpen}
              onOpenChange={setIsVideoOpen}
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/10 transform rotate-3 hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Case Success Rate +45%</span>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/10 transform -rotate-2 hidden md:block">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium">AI-Powered Document Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};