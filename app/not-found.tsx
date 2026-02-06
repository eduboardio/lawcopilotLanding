"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import { Footer } from "@/components/layouts/landing/footer";
import { FileQuestion, Home, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BackgroundGradients = () => (
  <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full transform translate-x-[-30%] translate-y-[-30%]" />
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full transform translate-x-[30%] translate-y-[30%]" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 dark:opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]" />
  </div>
);

const BackgroundElements = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-foreground/[0.02] to-transparent dark:from-white/[0.02] rounded-full blur-3xl" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>
);

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col bg-background"
    >
      <BackgroundGradients />
      <Navbar />
      <main className="main-content-wrapper relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden">
        <BackgroundElements />
        <div className="container relative z-10 mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">
          {/* 404 badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 backdrop-blur-sm mb-8"
          >
            <FileQuestion className="h-4 w-4 text-muted-foreground dark:text-white/70" />
            <span className="text-xs font-medium text-foreground/80 dark:text-white/80 tracking-wide">
              Page not found
            </span>
          </motion.div>

          {/* Big 404 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-foreground/90 dark:text-white/90 mb-4"
          >
            404
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4 max-w-xl"
          >
            This page has gone off the record
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground dark:text-white/70 max-w-md mb-10"
          >
            The link you followed may be broken or the page may have been moved. Let&apos;s get you back to solid ground.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button
              size="lg"
              className={cn(
                "font-heading font-medium shadow-lg hover:shadow-xl transition-shadow rounded-lg",
                "bg-foreground hover:bg-foreground/90 dark:bg-white dark:hover:bg-white/90 text-primary-foreground"
              )}
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4 inline-block" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-heading font-medium rounded-lg" asChild>
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
