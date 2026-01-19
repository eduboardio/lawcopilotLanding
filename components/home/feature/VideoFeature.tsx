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
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const isPausedRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isRunningRef = useRef(false);
  const artifactScrollRef = useRef<HTMLDivElement>(null);
  const artifactCardRef = useRef<HTMLDivElement>(null);

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

  const animateCursorToArtifact = useCallback(async () => {
    if (!artifactCardRef.current) return;

    const rect = artifactCardRef.current.getBoundingClientRect();
    const chatContainer = artifactCardRef.current.closest('.responsive-chat-container');
    if (!chatContainer) return;

    const containerRect = chatContainer.getBoundingClientRect();

    const targetX = rect.left - containerRect.left + rect.width / 2;
    const targetY = rect.top - containerRect.top + rect.height / 2;

    const startX = containerRect.width - 100;
    const startY = containerRect.height - 100;

    setCursorPosition({ x: startX, y: startY });
    setShowCursor(true);

    await wait(300);

    setCursorPosition({ x: targetX, y: targetY });

    await wait(600);

    await wait(100);

    setShowCursor(false);
  }, [wait]);

  const runAnimation = useCallback(async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    while (isRunningRef.current) {
      setCurrentStep('idle');
      setTypedText("");
      setIsArtifactOpen(false);
      setIsRestarting(false);
      setShowCursor(false);
      await wait(800);

      const userMessage = messages.find(m => m.role === "user");
      if (!userMessage) continue;

      setCurrentStep('typing');
      await typeText(userMessage.content, 20);
      await wait(400);

      setCurrentStep('user');
      await wait(600);

      if (!skipThinking) {
        setCurrentStep('thinking');
        await wait(1200);
      }

      setCurrentStep('assistant');
      await wait(2000);

      if (userMessage.artifact) {
        await wait(800);

        await animateCursorToArtifact();

        await wait(200);
        setCurrentStep('artifact-opening');
        await wait(300);
        setIsArtifactOpen(true);
        setCurrentStep('artifact-open');

        await wait(800);
        if (artifactScrollRef.current) {
          artifactScrollRef.current.scrollTo({ top: 600, behavior: "smooth" });
        }
        await wait(3500);

        if (artifactScrollRef.current) {
          artifactScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
        await wait(1500);

        setIsArtifactOpen(false);
        await wait(500);
      } else {
        await wait(1800);
      }

      setCurrentStep('restarting');
      setIsRestarting(true);
      await wait(800);
    }
  }, [messages, wait, typeText, skipThinking, animateCursorToArtifact]);

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

  // const getArtifactWidth = () => {
  //   return isArtifactOpen ? "50%" : "0%"; 
  // };

  const content = (
    <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]">
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
          <span className="text-[10px] sm:text-xs font-medium tracking-wide text-foreground/80 dark:text-white/80">
            {badge}
          </span>
        </div>

        <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white">
          {title}
        </h3>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground dark:text-white/70">
          {description}
        </p>
      </motion.div>
    </div>
  );

  const video = (
    <div className="flex-1 w-full px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 blur-2xl sm:blur-3xl opacity-50"></div>

        <div
          className="relative bg-background border border-border overflow-hidden shadow-xl sm:shadow-2xl w-full mx-auto rounded-lg sm:rounded-xl responsive-chat-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={{
              opacity: isRestarting ? 0 : 1,
              scale: isRestarting ? 0.97 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[500px] sm:h-[600px] md:h-[700px]"
          >
            <div className="flex h-full relative">
              {/* Animated Cursor */}
              <AnimatePresence>
                {showCursor && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: cursorPosition.x,
                      y: cursorPosition.y,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      x: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                      y: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                      opacity: { duration: 0.3, ease: "easeInOut" },
                      scale: { duration: 0.3, ease: "easeInOut" }
                    }}
                    className="absolute pointer-events-none z-50 -translate-x-1 -translate-y-1"
                    style={{
                      left: 0,
                      top: 0,
                      filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))',
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="100%" stopColor="#F0F0F0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M6 4L20 14L12 16L8.5 23L6 4Z"
                        fill="url(#cursorGradient)"
                        stroke="#000000"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 2.5],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.8
                      }}
                      className="absolute top-2 left-2 w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-primary/60"
                      style={{
                        boxShadow: '0 0 20px rgba(var(--primary), 0.3)'
                      }}
                    />

                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                      className="absolute top-0 left-0 w-7 h-7 rounded-full bg-primary/30 blur-md"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chat Panel */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: getChatWidth() }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`border-r border-border bg-background overflow-hidden flex-col ${isArtifactOpen ? 'hidden md:flex' : 'flex'}`}
              >
                {/* Chat content */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                  <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
                    {/* Welcome message */}
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div className="flex-1 pt-1 sm:pt-2">
                        <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-serif">
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
                        className="flex items-start gap-2 sm:gap-3 md:gap-4"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-semibold text-xs sm:text-sm">
                          U
                        </div>
                        <div className="flex-1 pt-1 sm:pt-2">
                          <div className="text-xs sm:text-sm text-foreground leading-relaxed">
                            {currentStep === 'typing' ? (
                              <>
                                {typedText}
                                {typedText && (
                                  <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity }}
                                    className="inline-block w-0.5 h-3 sm:h-4 bg-primary ml-0.5 align-middle"
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
                        className="flex items-start gap-2 sm:gap-3 md:gap-4"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="flex-1 pt-1 sm:pt-2">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1 sm:gap-1.5">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"
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
                        className="flex items-start gap-2 sm:gap-3 md:gap-4"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="flex-1 pt-1 sm:pt-2 space-y-3 sm:space-y-4">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-serif"
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
                              <div className="w-full text-left group cursor-pointer" ref={artifactCardRef}>
                                <div className="border-2 border-border rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:border-primary/40 transition-all duration-300 shadow-lg">
                                  <div className="flex items-center gap-2 sm:gap-3 md:gap-3.5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 shadow-md border border-primary/50">
                                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-xs sm:text-sm font-bold text-foreground mb-0.5 sm:mb-1 truncate">
                                        {userMessage.artifact.title}
                                      </h4>
                                      <p className="text-[10px] sm:text-xs text-muted-foreground font-medium truncate">
                                        Click to view document
                                      </p>
                                    </div>
                                    <div className="hidden sm:block text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
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
                <div className="border-t border-border p-3 sm:p-4 md:p-6 bg-background">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 sm:gap-3 bg-card border-2 border-border rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 hover:border-primary/30 transition-all shadow-md">
                      <input
                        type="text"
                        placeholder="Message Law Copilot..."
                        className="flex-1 bg-transparent text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none"
                        disabled
                      />
                      <button
                        className="p-2 sm:p-2.5 md:p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md flex-shrink-0"
                        disabled
                      >
                        <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Artifact Panel - Full width on mobile */}
              <AnimatePresence>
                {isArtifactOpen && (
<motion.div
  initial={{ width: 0, opacity: 0 }}
  animate={{ width: isArtifactOpen ? "100%" : 0, opacity: 1 }} // Change from getArtifactWidth()
  exit={{ width: 0, opacity: 0 }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  className="bg-background overflow-hidden flex flex-col md:w-1/2" // ADD md:w-1/2
  ref={artifactScrollRef}
>
                    {/* Artifact header */}
                    <div className="border-b border-border p-3 sm:p-4 md:p-6 bg-background flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">
                          {userMessage?.artifact?.title}
                        </h4>
                      </div>
                      <button
                        className="text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    {/* Artifact content */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-muted/20">
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
    <div className="w-full py-12 sm:py-16 md:py-24">
      <div className={`container mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {content}
        {video}
      </div>
    </div>
  );
};