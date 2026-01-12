"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  artifact?: {
    type: "document" | "research";
    title: string;
    preview: React.ReactNode;
  };
}

interface VideoFeatureProps {
  badge: string;
  title: string;
  description: string;
  messages: Message[];
  reverse?: boolean;
  skipThinking?: boolean;
}

export const VideoFeature: React.FC<VideoFeatureProps> = ({
  badge,
  title,
  description,
  messages,
  reverse = false,
  skipThinking = false,
}) => {
  const [currentStep, setCurrentStep] = useState<'idle' | 'typing' | 'user' | 'thinking' | 'assistant' | 'artifact-opening' | 'artifact-open' | 'restarting'>('idle');
  const [typedText, setTypedText] = useState("");
  const [isArtifactOpen, setIsArtifactOpen] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  const isPausedRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isRunningRef = useRef(false);
  const artifactScrollRef = useRef<HTMLDivElement>(null);

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

  const typeText = useCallback(async (text: string, speed = 25) => {
    for (let i = 0; i <= text.length; i++) {
      if (!isRunningRef.current) break;
      setTypedText(text.substring(0, i));
      await wait(speed);
    }
  }, [wait]);

  const runAnimation = useCallback(async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    while (isRunningRef.current) {
      // Reset to beginning
      setCurrentStep('idle');
      setTypedText("");
      setIsArtifactOpen(false);
      setIsRestarting(false);
      await wait(800);

      const userMessage = messages.find(m => m.role === "user");
      if (!userMessage) continue;

      // Type user message
      setCurrentStep('typing');
      await typeText(userMessage.content, 20);
      await wait(400);

      // Show complete user message
      setCurrentStep('user');
      await wait(600);

      // Show thinking (skip if skipThinking is true)
      if (!skipThinking) {
        setCurrentStep('thinking');
        await wait(1200);
      }

      // Show assistant response
      setCurrentStep('assistant');
      await wait(2000);

      // If user message has artifact, open it
      if (userMessage.artifact) {
        await wait(1000);
        setCurrentStep('artifact-opening');
        await wait(300);
        setIsArtifactOpen(true);
        setCurrentStep('artifact-open');
        
        // Auto-scroll artifact panel
        await wait(800);
        if (artifactScrollRef.current) {
          artifactScrollRef.current.scrollTo({ top: 600, behavior: "smooth" });
        }
        await wait(3500);
        
        // Scroll back to top
        if (artifactScrollRef.current) {
          artifactScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
        await wait(1500);
        
        // Close artifact smoothly
        setIsArtifactOpen(false);
        await wait(500);
      } else {
        await wait(1800);
      }

      // Smooth restart transition
      setCurrentStep('restarting');
      setIsRestarting(true);
      await wait(800);
    }
  }, [messages, wait, typeText, skipThinking]);

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

  const userMessage = messages.find(m => m.role === "user");
  const assistantMessage = messages.find(m => m.role === "assistant");

  const getChatWidth = () => {
    return isArtifactOpen ? "50%" : "100%";
  };

  const content = (
    <div className="flex-1 max-w-2xl flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
          <span className="text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
            {badge}
          </span>
        </div>

        <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground dark:text-white md:text-3xl lg:text-4xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground dark:text-white/70 md:text-base">
          {description}
        </p>
      </motion.div>
    </div>
  );

  const video = (
    <div className="flex-[1.5] w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 blur-3xl opacity-50"></div>

        <div 
          className="relative bg-background border border-border overflow-hidden shadow-2xl w-full mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={{
              opacity: isRestarting ? 0 : 1,
              scale: isRestarting ? 0.97 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[700px]"
          >
            <div className="flex h-full">
            {/* Chat Panel */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: getChatWidth() }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border-r border-border bg-background overflow-hidden flex flex-col"
            >
              {/* Chat content */}
              <div className="flex-1 overflow-y-auto px-8 py-8">
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Welcome message */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="text-sm text-foreground/90 leading-relaxed font-serif">
                        Hello! I&apos;m Law Copilot, your AI legal assistant. How can I help you today?
                      </div>
                    </div>
                  </div>

                  {/* User message - with typing animation */}
                  {(currentStep === 'typing' || currentStep !== 'idle') && userMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-sm">
                        U
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="text-sm text-foreground leading-relaxed">
                          {currentStep === 'typing' ? (
                            <>
                              {typedText}
                              {typedText && (
                                <motion.span
                                  animate={{ opacity: [1, 0] }}
                                  transition={{ duration: 0.6, repeat: Infinity }}
                                  className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                                />
                              )}
                            </>
                          ) : (
                            userMessage.content
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* AI thinking */}
                  {currentStep === 'thinking' && !skipThinking && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-primary"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.15,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* AI response */}
                  {(currentStep === 'assistant' || currentStep === 'artifact-opening' || currentStep === 'artifact-open') && assistantMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-2 space-y-4">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="text-sm text-foreground/90 leading-relaxed font-serif"
                        >
                          {assistantMessage.content}
                        </motion.div>

                        {userMessage?.artifact && !isArtifactOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="w-full"
                          >
                            <div className="w-full text-left group cursor-pointer">
                              <div className="border-2 border-border rounded-xl p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:border-primary/40 transition-all duration-300 shadow-lg">
                                <div className="flex items-center gap-3.5">
                                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 shadow-md border border-primary/50">
                                    <FileText className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-foreground mb-1">
                                      {userMessage.artifact.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground font-medium">
                                      Click to view document
                                    </p>
                                  </div>
                                  <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Open →
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Chat input */}
              <div className="border-t border-border p-6 bg-background">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 bg-card border-2 border-border rounded-xl px-5 py-4 hover:border-primary/30 transition-all shadow-md">
                    <input
                      type="text"
                      placeholder="Message Law Copilot..."
                      className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                      disabled
                    />
                    <button
                      className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md"
                      disabled
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Artifact Panel */}
            <AnimatePresence>
              {isArtifactOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "65%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-background overflow-hidden flex flex-col"
                  ref={artifactScrollRef}
                >
                  {/* Artifact header */}
                  <div className="border-b border-border p-6 bg-background flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">
                        {userMessage?.artifact?.title}
                      </h4>
                    </div>
                    <button
                      className="text-muted-foreground hover:text-foreground text-sm font-medium px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Artifact content */}
                  <div className="flex-1 overflow-y-auto p-8 bg-muted/20">
                    {userMessage?.artifact?.preview}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="w-full py-16 md:py-24">
      <div className={`container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {content}
        {video}
      </div>
    </div>
  );
};