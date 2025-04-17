"use client";

import { Footer } from "@/components/layouts/landing/footer";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import { lazy, Suspense, ReactNode, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SmoothScroll = lazy(() =>
  import("@/components/smooth-scroll").then(mod => ({ default: mod.SmoothScroll }))
);

const BackgroundGradients = () => (
  <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full transform translate-x-[-30%] translate-y-[-30%]"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full transform translate-x-[30%] translate-y-[30%]"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 dark:opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]"></div>
  </div>
);

interface LoadingScreenProps {
  onAnimationComplete: () => void;
}

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => (
  <motion.div
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    onAnimationComplete={onAnimationComplete}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop"
        }}
        className="relative z-10"
      >
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Law Copilot
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const LandingLayout = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  if (!mounted) {
    return (
      <>
        <Navbar />
        <main className="main-content-wrapper relative overflow-hidden">
          <BackgroundGradients />
          {children}
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Suspense fallback={null}>
        {!isTransitioning && <SmoothScroll />}
      </Suspense>

      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onAnimationComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="main-content-wrapper relative overflow-hidden">
          <BackgroundGradients />
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default LandingLayout;