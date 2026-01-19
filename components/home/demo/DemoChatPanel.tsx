"use client"
import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, Send } from "lucide-react"

interface DemoChatPanelProps {
  typedText: string
  responseText: string
  showResponse: boolean
  showProcessing: boolean
  showArtifactCard?: boolean
}

export const DemoChatPanel = memo(
  ({ typedText, responseText, showResponse, showProcessing, showArtifactCard = false }: DemoChatPanelProps) => (
    <div className="h-full flex flex-col bg-background">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full pt-12 sm:pt-14 md:pt-16 lg:pt-20">
        {/* User message */}
        <AnimatePresence>
          {typedText && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-end"
            >
              <div className="bg-primary text-primary-foreground rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-4 max-w-[90%] sm:max-w-[85%] shadow-lg">
                <p className="text-xs sm:text-xs md:text-sm leading-relaxed font-medium">{typedText}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Processing */}
        <AnimatePresence>
          {showProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
                <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="bg-card border-2 border-border/60 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex space-x-1.5 sm:space-x-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">Searching legal databases...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response */}
        <AnimatePresence>
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
                <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 min-w-0">
                <div className="bg-card border-2 border-border/60 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 text-xs sm:text-sm shadow-lg">
                  <p className="text-foreground leading-relaxed font-serif">{responseText}</p>
                </div>

                {/* Artifact card in chat (if not in split view) */}
                {showArtifactCard && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 cursor-pointer hover:shadow-2xl transition-all backdrop-blur-sm shadow-xl"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border border-primary/50 shadow-lg flex-shrink-0">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 md:mb-2">
                          <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-base truncate">Legal Research Created</h4>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center border border-green-600 shadow-md flex-shrink-0">
                            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">
                          Found 5 cases, 3 acts, and 2 articles
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4 md:mb-5">
                      {[
                        { number: "5", label: "Cases" },
                        { number: "3", label: "Acts" },
                        { number: "2", label: "Articles" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-card/70 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-2.5 md:p-3 text-center border-2 border-border/60 shadow-md"
                        >
                          <p className="text-base sm:text-lg md:text-xl font-bold text-primary mb-0 sm:mb-0.5">{stat.number}</p>
                          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 sm:pt-2.5 md:pt-3 border-t border-border/40 gap-2">
                      <p className="text-[10px] sm:text-xs md:text-sm text-primary font-bold truncate">Click to view research →</p>
                      <span className="text-[10px] sm:text-xs font-bold text-primary bg-primary/20 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 rounded-lg border border-primary/40 flex-shrink-0">Ready</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 border-t border-border/60 shrink-0 bg-background/95 backdrop-blur-sm w-full">
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-card border-2 border-border/60 rounded-lg sm:rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 hover:border-primary/30 transition-all shadow-lg">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent outline-none text-xs sm:text-sm placeholder:text-muted-foreground font-medium"
            readOnly
          />
          <button className="p-2 sm:p-2.5 md:p-3 bg-primary text-primary-foreground rounded-md sm:rounded-lg hover:bg-primary/90 transition-all shadow-md flex-shrink-0">
            <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </div>
  ),
)

DemoChatPanel.displayName = "DemoChatPanel"