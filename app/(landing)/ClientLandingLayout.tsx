"use client";

import { Footer } from "@/components/layouts/landing/footer";
import { Navbar } from "@/components/layouts/landing/nav-bar";
import { lazy, Suspense, ReactNode } from "react";
import { motion } from "framer-motion";

const SmoothScroll = lazy(() =>
  import("@/components/smooth-scroll").then((mod) => ({ default: mod.SmoothScroll }))
);

const BackgroundGradients = () => (
  <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full transform translate-x-[-30%] translate-y-[-30%]" />
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full transform translate-x-[30%] translate-y-[30%]" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 dark:opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]" />
  </div>
);

export default function ClientLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <SmoothScroll />
      </Suspense>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full"
      >
        <Navbar />
        <main className="main-content-wrapper relative overflow-hidden w-full">
          <BackgroundGradients />
          <div className="min-h-screen">{children}</div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
