"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, Send, ChevronDown, ChevronUp } from "lucide-react";

interface CaseDetail {
  title: string;
  content: React.ReactNode;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  artifact?: {
    type: "document" | "research";
    title: string;
    preview: React.ReactNode;
    cases?: CaseDetail[];
  };
}

interface VideoFeatureProps {
  badge: string;
  title: string;
  description: string;
  messages: Message[];
  reverse?: boolean;
}

export const VideoFeature: React.FC<VideoFeatureProps> = ({
  badge,
  title,
  description,
  messages,
  reverse = false,
}) => {
  const [currentStep, setCurrentStep] = useState<'idle' | 'user' | 'thinking' | 'assistant'>('idle');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isArtifactOpen, setIsArtifactOpen] = useState(false);
  const [expandedCaseIndex, setExpandedCaseIndex] = useState<number | null>(null);
  const isPausedRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isRunningRef = useRef(false);

  console.log(currentMessageIndex)

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
      // Reset to beginning - only show welcome message
      setCurrentStep('idle');
      setCurrentMessageIndex(0);
      setIsArtifactOpen(false);
      setExpandedCaseIndex(null);
      await wait(1000);

      // Find user message (should be first)
      const userMessageIndex = messages.findIndex(m => m.role === "user");
      if (userMessageIndex === -1) continue;

      const userMessage = messages[userMessageIndex];
      setCurrentMessageIndex(userMessageIndex);

      // Show user message
      setCurrentStep('user');
      await wait(1600);

      // Show thinking
      setCurrentStep('thinking');
      await wait(1400);

      // Show assistant response
      setCurrentStep('assistant');
      
      await wait(2000);

      // Check if user message has artifact - if yes, open it
      if (userMessage.artifact) {
        await wait(1000);
        setIsArtifactOpen(true);
        await wait(5000);
        
        // Close artifact and immediately fade to beginning
        setIsArtifactOpen(false);
        await wait(400);
        
        // Smooth transition back to idle (this resets to welcome message only)
        setCurrentStep('idle');
        await wait(600);
      } else {
        await wait(1500);
      }
    }
  }, [messages, wait]);

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

  const toggleCase = (index: number) => {
    setExpandedCaseIndex(expandedCaseIndex === index ? null : index);
  };

  const userMessage = messages.find(m => m.role === "user");
  const assistantMessage = messages.find(m => m.role === "assistant");

  const content = (
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
            {badge}
          </span>
        </div>

        <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground dark:text-white md:text-4xl">
          {title}
        </h3>

        <p className="text-base leading-relaxed text-muted-foreground dark:text-white/70 md:text-lg">
          {description}
        </p>
      </motion.div>
    </div>
  );

  const video = (
    <div className="flex-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 rounded-3xl blur-3xl opacity-50"></div>

        <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            {!isArtifactOpen ? (
              <motion.div
                key="chat"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-[700px] flex flex-col"
              >
                <div className="flex-1 overflow-y-auto px-8 py-8">
                  <div className="max-w-3xl mx-auto space-y-6">
                    {/* Welcome message - always visible */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-200 dark:to-neutral-400 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white dark:text-neutral-900" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          Hello! I&apos;m Law Copilot, your AI legal assistant. How can I help you today?
                        </div>
                      </div>
                    </div>

                    {/* User message */}
                    {currentStep !== 'idle' && userMessage && (
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
                            {userMessage.content}
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
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* AI response */}
                    {currentStep === 'assistant' && assistantMessage && (
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
                            {assistantMessage.content}
                          </motion.div>

                          {userMessage?.artifact && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                              className="w-full"
                            >
                              <button
                                onClick={() => setIsArtifactOpen(true)}
                                className="w-full text-left group"
                              >
                                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">
                                        {userMessage.artifact.title}
                                      </h4>
                                    </div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                      Click to open →
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Chat input */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-end gap-3">
                      <div className="flex-1 min-h-[44px] bg-neutral-100 dark:bg-neutral-900 rounded-2xl px-4 py-3 border border-neutral-200 dark:border-neutral-800 flex items-center">
                        <input
                          type="text"
                          placeholder="Message Law Copilot..."
                          className="flex-1 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 outline-none"
                          disabled
                        />
                      </div>
                      <button
                        className="h-11 w-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 flex-shrink-0 flex items-center justify-center transition-colors"
                        disabled
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="artifact"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="h-[700px] flex flex-col bg-neutral-50 dark:bg-neutral-900"
              >
                {/* Artifact header */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {userMessage?.artifact?.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      setIsArtifactOpen(false);
                      setExpandedCaseIndex(null);
                    }}
                    className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Artifact content */}
                <div className="flex-1 overflow-y-auto p-8">
                  {userMessage?.artifact?.cases && userMessage.artifact.cases.length > 0 ? (
                    <div className="space-y-3">
                      {userMessage.artifact.preview}
                      
                      {/* Case dropdowns */}
                      <div className="mt-6 space-y-3">
                        {userMessage.artifact.cases.map((caseDetail, index) => (
                          <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
                            <button
                              onClick={() => toggleCase(index)}
                              className="w-full px-4 py-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                {caseDetail.title}
                              </span>
                              {expandedCaseIndex === index ? (
                                <ChevronUp className="w-4 h-4 text-neutral-500" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-neutral-500" />
                              )}
                            </button>
                            
                            <AnimatePresence>
                              {expandedCaseIndex === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="border-t border-neutral-200 dark:border-neutral-700"
                                >
                                  <div className="p-4 text-sm text-neutral-700 dark:text-neutral-300">
                                    {caseDetail.content}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    userMessage?.artifact?.preview
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="w-full py-16 md:py-24">
      <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {content}
        {video}
      </div>
    </div>
  );
};