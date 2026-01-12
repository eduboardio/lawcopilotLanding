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
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto w-full pt-20">
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
              <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-4 max-w-[85%] shadow-lg">
                <p className="text-sm leading-relaxed font-medium">{typedText}</p>
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
              className="flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="bg-card border-2 border-border/60 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -12, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                          className="w-2.5 h-2.5 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">Searching legal databases...</span>
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
              className="flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-md">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-5">
                <div className="bg-card border-2 border-border/60 rounded-xl p-6 text-sm shadow-lg">
                  <p className="text-foreground leading-relaxed font-serif">{responseText}</p>
                </div>

                {/* Artifact card in chat (if not in split view) */}
                {showArtifactCard && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all backdrop-blur-sm shadow-xl"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border border-primary/50 shadow-lg">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-foreground text-base">Legal Research Created</h4>
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border border-green-600 shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          Found 5 cases, 3 acts, and 2 articles
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { number: "5", label: "Cases" },
                        { number: "3", label: "Acts" },
                        { number: "2", label: "Articles" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-card/70 backdrop-blur-sm rounded-lg p-3 text-center border-2 border-border/60 shadow-md"
                        >
                          <p className="text-xl font-bold text-primary mb-0.5">{stat.number}</p>
                          <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border/40">
                      <p className="text-sm text-primary font-bold">Click to view research →</p>
                      <span className="text-xs font-bold text-primary bg-primary/20 px-3 py-1.5 rounded-lg border border-primary/40">Ready</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-border/60 shrink-0 bg-background/95 backdrop-blur-sm max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 bg-card border-2 border-border/60 rounded-xl px-5 py-4 hover:border-primary/30 transition-all shadow-lg">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground font-medium"
            readOnly
          />
          <button className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ),
)

DemoChatPanel.displayName = "DemoChatPanel"