"use client"
import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Scale, CheckCircle, Send, Search } from "lucide-react"

interface DemoChatPanelProps {
  typedText: string
  showResponse: boolean
  showProcessing: boolean
  showArtifactCard?: boolean
}

export const DemoChatPanel = memo(
  ({ typedText, showResponse, showProcessing, showArtifactCard = false }: DemoChatPanelProps) => (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="h-16 px-6 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600"
          />
          <span className="text-sm font-bold">Legal Research Chat</span>
        </div>
        <button className="p-2 hover:bg-muted/70 rounded-lg transition-colors">
          <Search className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Welcome message (only if no content) */}
        {!typedText && !showResponse && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/40">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="bg-card border-2 border-border/60 rounded-lg p-5 text-sm shadow-md">
                <p className="text-foreground leading-relaxed mb-4 font-semibold">
                  Hello! I&apos;m your legal research assistant. How can I help you today?
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <p className="font-bold text-foreground/80">You can ask me about:</p>
                  <ul className="space-y-1.5 ml-4">
                    <li>• Find judgments on consumer protection laws</li>
                    <li>• Draft a legal notice for breach of contract</li>
                    <li>• Research case law on property disputes</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

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
              <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3.5 max-w-[85%] shadow-md font-semibold">
                <p className="text-sm leading-relaxed">{typedText}</p>
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
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/40">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="bg-card border-2 border-border/60 rounded-lg p-5 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -12, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.15,
                            ease: "easeInOut",
                          }}
                          className="w-2.5 h-2.5 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">Searching legal databases...</span>
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
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 border border-primary/40">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="bg-card border-2 border-border/60 rounded-lg p-5 text-sm shadow-md">
                  <p className="text-foreground leading-relaxed">
                    I&apos;ll research case law on whether a plaint that discloses any cause of action can be rejected under{" "}
                    <strong className="font-bold">Order VII Rule 11(a) CPC</strong>.
                  </p>
                </div>

                {/* Artifact card in chat (if not in split view) */}
                {showArtifactCard && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-2 border-primary/40 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border border-primary/50">
                        <Scale className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-foreground text-sm">Legal Research Created</h4>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <p className="text-xs text-muted-foreground font-semibold">
                          Found 5 cases, 3 acts, and 2 articles
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-primary font-bold">Click to view research →</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-border/60 shrink-0 bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-3 bg-card border-2 border-border/60 rounded-lg px-5 py-4 hover:border-primary/40 transition-colors shadow-md">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground font-medium"
            readOnly
          />
          <button className="p-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold shadow-md">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  ),
)

DemoChatPanel.displayName = "DemoChatPanel"
