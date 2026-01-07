"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, AlertTriangle, FileText, TrendingUp, Users, DollarSign } from "lucide-react";

export function CaseIntelligenceFeature() {
  const [currentStep, setCurrentStep] = useState<'idle' | 'user' | 'thinking' | 'assistant'>('idle');
  const isPausedRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isRunningRef = useRef(false);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  const wait = useCallback((ms: number): Promise<void> => {
    return new Promise((resolve) => {
      const checkPause = () => {
        if (!isPausedRef.current) {
          resolve();
        } else {
          const timeout = setTimeout(checkPause, 50);
          timeoutsRef.current.push(timeout);
        }
      };
      const timeout = setTimeout(checkPause, ms);
      timeoutsRef.current.push(timeout);
    });
  }, []);

  const runAnimation = useCallback(async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    while (true) {
      setCurrentStep('idle');
      await wait(1500);

      setCurrentStep('user');
      await wait(2000);

      setCurrentStep('thinking');
      await wait(1800);

      setCurrentStep('assistant');
      await wait(5000);

      setCurrentStep('idle');
      await wait(800);
    }
  }, [wait]);

  useEffect(() => {
    runAnimation();
    return () => {
      isRunningRef.current = false;
      clearAllTimeouts();
    };
  }, [runAnimation, clearAllTimeouts]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Video/Animation Section - Now Wider */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 rounded-3xl blur-3xl opacity-50"></div>

            {/* Wider rectangular container */}
            <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl mx-auto">
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                className="h-[700px] w-full flex flex-col"
              >
                {/* Case Header */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 bg-white dark:bg-neutral-950">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          Company X Acquisition
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          Due Diligence Review
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
                        Active
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
                        Medium Priority
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto px-8 py-8">
                  <div className="max-w-4xl mx-auto space-y-6">
                    {/* Welcome message */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          I&apos;ve analyzed all 30 documents for the Company X acquisition. How can I help you with this case?
                        </div>
                      </div>
                    </div>

                    {/* User message */}
                    {currentStep !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs">
                          U
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
                            Give me a comprehensive overview of critical risks and key findings across all contracts
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* AI thinking */}
                    {currentStep === 'thinking' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              Analyzing 30 documents...
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* AI response */}
                    {currentStep === 'assistant' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                        </div>
                        <div className="flex-1 pt-1 space-y-4">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                          >
                            I&apos;ve completed a comprehensive analysis of all 30 contracts. Here&apos;s the executive summary:
                          </motion.div>

                          {/* Summary Cards - Neutral Grid */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="grid grid-cols-2 gap-3"
                          >
                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <AlertTriangle className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                  Critical Risks
                                </span>
                              </div>
                              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">7</p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                Require immediate attention
                              </p>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <FileText className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                  Documents Reviewed
                                </span>
                              </div>
                              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">30</p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                Across 15 categories
                              </p>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <DollarSign className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                  Total Exposure
                                </span>
                              </div>
                              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">₹45Cr</p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                Across all agreements
                              </p>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Users className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                                  Key Parties
                                </span>
                              </div>
                              <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">12</p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                                Counterparties involved
                              </p>
                            </div>
                          </motion.div>

                          {/* Key Findings */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
                          >
                            <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mb-3 uppercase tracking-wide">
                              Critical Findings
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2 text-sm">
                                <span className="text-neutral-900 dark:text-neutral-100 font-bold mt-0.5">•</span>
                                <span className="text-neutral-700 dark:text-neutral-300">
                                  <strong>Change of Control clauses</strong> in 8 agreements may trigger termination rights
                                </span>
                              </div>
                              <div className="flex items-start gap-2 text-sm">
                                <span className="text-neutral-900 dark:text-neutral-100 font-bold mt-0.5">•</span>
                                <span className="text-neutral-700 dark:text-neutral-300">
                                  <strong>IP Assignment Agreement</strong> lacks clear ownership transfer provisions
                                </span>
                              </div>
                              <div className="flex items-start gap-2 text-sm">
                                <span className="text-neutral-900 dark:text-neutral-100 font-bold mt-0.5">•</span>
                                <span className="text-neutral-700 dark:text-neutral-300">
                                  <strong>Employee agreements</strong> contain non-compete clauses requiring review
                                </span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Next Steps */}
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-white dark:bg-neutral-900 border-l-4 border-neutral-900 dark:border-neutral-100 rounded-r-lg p-4 border border-neutral-200 dark:border-neutral-800"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                              <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wide">
                                Recommended Actions
                              </h4>
                            </div>
                            <div className="space-y-1.5 text-sm text-neutral-700 dark:text-neutral-300">
                              <p>1. Obtain consents for Change of Control from 8 counterparties</p>
                              <p>2. Amend IP Assignment Agreement before closing</p>
                              <p>3. Review and renegotiate key employee retention terms</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Ask about specific contracts, risks, or next steps..."
                        className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 border border-neutral-200 dark:border-neutral-800 outline-none"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
              <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
                Case Intelligence
              </span>
            </div>

            <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground dark:text-white md:text-4xl">
              Case-Centric Legal Intelligence
            </h3>

            <p className="text-base leading-relaxed text-muted-foreground dark:text-white/70 md:text-lg">
              Track all your cases in one place. Law Copilot understands your pleadings, orders, and evidence to give you contextual insights, next steps, and deadlines—so nothing slips through the cracks.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}